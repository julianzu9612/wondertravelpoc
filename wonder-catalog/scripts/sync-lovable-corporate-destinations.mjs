import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";
import { spawnSync } from "node:child_process";

const LOVABLE_BASE = "https://wonder-travel-clone.lovable.app";
const PROJECT_ROOT = path.resolve(import.meta.dirname, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const DATA_DIR = path.join(PROJECT_ROOT, "src", "data", "empresas");
const OUTPUT_JSON = path.join(DATA_DIR, "lovable-corporate-destinations.json");
const OUTPUT_ASSETS_DIR = path.join(PUBLIC_DIR, "b2b", "corporate", "destinations");

function parseArgs(argv) {
  const args = new Set(argv.slice(2));
  return {
    force: args.has("--force"),
  };
}

function extractBundlePath(html) {
  const match =
    html.match(/<script[^>]+src="(\/assets\/index-[^"]+\.js)"/i) ??
    html.match(/src="(\/assets\/index-[^"]+\.js)"/i);
  if (!match) {
    throw new Error("No se pudo encontrar el bundle /assets/index-*.js en el HTML.");
  }
  return match[1];
}

function extractJsArrayExpression(source, variableName) {
  const needle = `${variableName}=[`;
  const start = source.indexOf(needle);
  if (start === -1) throw new Error(`No se encontró ${needle} en el bundle.`);

  const openIndex = start + variableName.length + 1;
  if (source[openIndex] !== "[") {
    throw new Error(`No se pudo ubicar el inicio del array para ${variableName}.`);
  }

  let index = openIndex;
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (; index < source.length; index++) {
    const char = source[index];

    if (inString) {
      if (escaped) {
        escaped = false;
        continue;
      }
      if (char === "\\\\") {
        escaped = true;
        continue;
      }
      if (char === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }

    if (char === "'" || char === '"' || char === "`") {
      inString = true;
      quote = char;
      continue;
    }

    if (char === "[") depth++;
    if (char === "]") {
      depth--;
      if (depth === 0) {
        return source.slice(openIndex, index + 1);
      }
    }
  }

  throw new Error(`No se encontró el cierre del array para ${variableName}.`);
}

function extractAssetVarMap(source) {
  const regex = /\b([A-Za-z_$][\w$]*)="(\/assets\/[^"]+\.(?:png|jpg|jpeg|webp|svg))"/g;
  const map = new Map();
  let match;
  while ((match = regex.exec(source))) {
    map.set(match[1], match[2]);
  }
  return map;
}

function evaluateDestinations({ arrayExpression, assetVarMap }) {
  const assetDecls = Array.from(assetVarMap.entries())
    .map(([key, value]) => `var ${key}=${JSON.stringify(value)};`)
    .join("");
  const code = `${assetDecls}(${arrayExpression})`;
  const destinations = vm.runInNewContext(code, {}, { timeout: 300 });

  if (!Array.isArray(destinations)) {
    throw new Error("El array DU no pudo evaluarse como una lista.");
  }

  return destinations;
}

async function download(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error descargando ${url}: ${response.status} ${response.statusText}`);
  }
  const buffer = Buffer.from(await response.arrayBuffer());
  const contentType = response.headers.get("content-type") ?? "";
  return { buffer, contentType };
}

function canConvertToWebp() {
  const result = spawnSync("cwebp", ["-version"], { stdio: "ignore" });
  return result.status === 0;
}

async function maybeWriteFile(filePath, buffer, { force }) {
  if (!force) {
    try {
      await fs.access(filePath);
      return false;
    } catch {
      // fallthrough
    }
  }
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, buffer);
  return true;
}

async function convertToWebp({ inputPath, outputPath }) {
  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  const result = spawnSync("cwebp", ["-q", "82", inputPath, "-o", outputPath], {
    stdio: "inherit",
  });
  if (result.status !== 0) {
    throw new Error(`cwebp falló convirtiendo ${inputPath} -> ${outputPath}`);
  }
}

function pickExtension({ urlPath, contentType }) {
  const ext = path.extname(urlPath);
  if (ext) return ext;
  if (contentType.includes("jpeg")) return ".jpg";
  if (contentType.includes("png")) return ".png";
  if (contentType.includes("webp")) return ".webp";
  if (contentType.includes("svg")) return ".svg";
  return ".jpg";
}

async function main() {
  const { force } = parseArgs(process.argv);
  const html = await (await fetch(LOVABLE_BASE)).text();
  const bundlePath = extractBundlePath(html);
  const bundleUrl = new URL(bundlePath, LOVABLE_BASE).toString();
  const js = await (await fetch(bundleUrl)).text();

  const assetVarMap = extractAssetVarMap(js);
  const duArray = extractJsArrayExpression(js, "DU");
  const destinations = evaluateDestinations({ arrayExpression: duArray, assetVarMap });

  await fs.mkdir(OUTPUT_ASSETS_DIR, { recursive: true });
  const webpAvailable = canConvertToWebp();

  const normalized = [];

  for (const destination of destinations) {
    if (!destination?.id || !destination?.image) continue;

    const sourceImagePath = String(destination.image);
    const sourceImageUrl = new URL(sourceImagePath, LOVABLE_BASE).toString();
    const { buffer, contentType } = await download(sourceImageUrl);
    const ext = pickExtension({ urlPath: sourceImagePath, contentType });

    const baseFileName = `${destination.id}${ext}`;
    const outImagePath = path.join(OUTPUT_ASSETS_DIR, baseFileName);
    await maybeWriteFile(outImagePath, buffer, { force });

    let finalPublicPath = `/b2b/corporate/destinations/${baseFileName}`;

    if (webpAvailable) {
      const webpName = `${destination.id}.webp`;
      const outWebpPath = path.join(OUTPUT_ASSETS_DIR, webpName);
      const shouldConvert = force
        ? true
        : await fs
            .access(outWebpPath)
            .then(() => false)
            .catch(() => true);

      if (shouldConvert) {
        await convertToWebp({ inputPath: outImagePath, outputPath: outWebpPath });
      }
      finalPublicPath = `/b2b/corporate/destinations/${webpName}`;
    }

    normalized.push({
      id: String(destination.id),
      name: String(destination.name ?? destination.id),
      tagline: String(destination.tagline ?? ""),
      description: String(destination.description ?? ""),
      image: finalPublicPath,
      source: {
        bundleUrl,
        imageUrl: sourceImageUrl,
      },
      activities: Array.isArray(destination.activities)
        ? destination.activities.map((activity) => ({
            title: String(activity.title ?? ""),
            description: String(activity.description ?? ""),
            icon: String(activity.icon ?? ""),
          }))
        : [],
    });
  }

  await fs.mkdir(DATA_DIR, { recursive: true });
  const payload = {
    source: {
      baseUrl: LOVABLE_BASE,
      bundleUrl,
    },
    syncedAt: new Date().toISOString(),
    destinations: normalized,
  };
  await fs.writeFile(OUTPUT_JSON, JSON.stringify(payload, null, 2) + "\n");

  console.log(`OK: ${normalized.length} destinos sincronizados`);
  console.log(`Data: ${path.relative(PROJECT_ROOT, OUTPUT_JSON)}`);
  console.log(`Assets: ${path.relative(PROJECT_ROOT, OUTPUT_ASSETS_DIR)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

