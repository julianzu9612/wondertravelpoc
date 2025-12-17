"use client";

import { geoInterpolate, geoMercator, geoPath } from "d3-geo";
import { useMemo } from "react";
import colombia from "@/data/geo/colombia-110m.json";

type Marker = {
  id: string;
  label: string;
  description?: string;
  lat: number;
  lon: number;
};

type Props = {
  markers: Marker[];
  selectedId: string | null;
  hoveredId?: string | null;
  textureHref?: string;
  showRoutes?: boolean;
  onSelect: (id: string) => void;
  onHover?: (id: string | null) => void;
};

const VIEWBOX_WIDTH = 800;
const VIEWBOX_HEIGHT = 980;

export function ColombiaMap({
  markers,
  selectedId,
  hoveredId,
  textureHref,
  showRoutes = false,
  onSelect,
  onHover,
}: Props) {
  const { outlinePath, points, routes } = useMemo(() => {
    const projection = geoMercator().fitSize(
      [VIEWBOX_WIDTH, VIEWBOX_HEIGHT],
      colombia as unknown as GeoJSON.Feature
    );
    const path = geoPath(projection);
    const outlinePath = path(colombia as unknown as GeoJSON.Feature) ?? "";

    const points = markers
      .map((marker) => {
        const projected = projection([marker.lon, marker.lat]);
        if (!projected) return null;
        const [x, y] = projected;
        return { ...marker, x, y };
      })
      .filter((point): point is NonNullable<typeof point> => Boolean(point));

    const markerById = new Map(markers.map((marker) => [marker.id, marker]));
    const routePairs: Array<[string, string]> = [
      ["bogota", "medellin"],
      ["bogota", "cartagena"],
      ["bogota", "cali"],
      ["bogota", "san-andres"],
      ["medellin", "cartagena"],
      ["medellin", "santa-marta"],
      ["eje-cafetero", "cali"],
      ["cartagena", "santa-marta"],
    ];

    const routes = routePairs
      .map(([from, to]) => {
        const start = markerById.get(from);
        const end = markerById.get(to);
        if (!start || !end) return null;

        const interpolate = geoInterpolate(
          [start.lon, start.lat],
          [end.lon, end.lat]
        );
        const steps = 22;
        const coordinates = Array.from({ length: steps + 1 }, (_, index) =>
          interpolate(index / steps)
        );
        const d =
          path({
            type: "LineString",
            coordinates,
          } as unknown as GeoJSON.LineString) ?? "";

        return { id: `${from}-${to}`, d };
      })
      .filter((route): route is NonNullable<typeof route> => Boolean(route));

    return { outlinePath, points, routes };
  }, [markers]);

  const activeId = hoveredId ?? selectedId;

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      className="h-full w-full"
      role="img"
      aria-label="Mapa de Colombia con destinos seleccionables"
    >
      <style>{`
        @keyframes routeDash {
          to {
            stroke-dashoffset: -160;
          }
        }
        .route {
          stroke-dasharray: 7 10;
          animation: routeDash 18s linear infinite;
        }
        .routeSlow {
          stroke-dasharray: 2 12;
          animation: routeDash 28s linear infinite;
          opacity: 0.35;
        }
      `}</style>

      <defs>
        <linearGradient id="colombiaFill" x1="0" y1="0" x2="0" y2="1">
          <stop
            offset="0%"
            stopColor="hsl(var(--background))"
            stopOpacity="0.98"
          />
          <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.25" />
        </linearGradient>
        <linearGradient id="ocean" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#fff7ed" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="colombiaGlow" cx="30%" cy="20%" r="70%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.16" />
          <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="biomeCaribbean" cx="62%" cy="10%" r="48%">
          <stop offset="0%" stopColor="#fde047" stopOpacity="0.52" />
          <stop offset="55%" stopColor="#fde047" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="biomePacific" cx="16%" cy="58%" r="55%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.38" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="biomeAndes" cx="48%" cy="45%" r="60%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.32" />
          <stop offset="65%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="biomeAmazon" cx="78%" cy="88%" r="70%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.28" />
          <stop offset="70%" stopColor="#22c55e" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
        <pattern
          id="colombiaTexture"
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="3" cy="4" r="1.2" fill="hsl(var(--foreground))" opacity="0.06" />
          <circle cx="13" cy="12" r="1" fill="hsl(var(--foreground))" opacity="0.04" />
        </pattern>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" />
        </filter>
        <filter id="markerShadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodOpacity="0.18" />
        </filter>
        <path id="colombia-outline" d={outlinePath} />
        <clipPath id="colombia-clip">
          <use href="#colombia-outline" />
        </clipPath>
        <linearGradient id="routeStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.65" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      <rect width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} fill="url(#ocean)" />

      <g filter="url(#softShadow)">
        <use href="#colombia-outline" fill="url(#colombiaFill)" />
        <g clipPath="url(#colombia-clip)">
          {textureHref ? (
            <>
              <image
                href={textureHref}
                x={0}
                y={0}
                width={VIEWBOX_WIDTH}
                height={VIEWBOX_HEIGHT}
                preserveAspectRatio="xMidYMid slice"
                opacity={0.98}
              />
              <use
                href="#colombia-outline"
                fill="white"
                opacity={0.1}
              />
            </>
          ) : null}

          <rect
            width={VIEWBOX_WIDTH}
            height={VIEWBOX_HEIGHT}
            fill="url(#biomeCaribbean)"
            opacity={textureHref ? 0.18 : 1}
          />
          <rect
            width={VIEWBOX_WIDTH}
            height={VIEWBOX_HEIGHT}
            fill="url(#biomePacific)"
            opacity={textureHref ? 0.14 : 1}
          />
          <rect
            width={VIEWBOX_WIDTH}
            height={VIEWBOX_HEIGHT}
            fill="url(#biomeAndes)"
            opacity={textureHref ? 0.16 : 1}
          />
          <rect
            width={VIEWBOX_WIDTH}
            height={VIEWBOX_HEIGHT}
            fill="url(#biomeAmazon)"
            opacity={textureHref ? 0.12 : 1}
          />
          <use href="#colombia-outline" fill="url(#colombiaGlow)" />
          <use
            href="#colombia-outline"
            fill="url(#colombiaTexture)"
            opacity={textureHref ? 0.55 : 1}
          />

          {showRoutes
            ? routes.map((route) => (
                <g key={route.id}>
                  <path
                    d={route.d}
                    className="routeSlow"
                    stroke="hsl(var(--foreground))"
                    strokeOpacity={0.25}
                    strokeWidth={3}
                    fill="none"
                  />
                  <path
                    d={route.d}
                    className="route"
                    stroke="url(#routeStroke)"
                    strokeWidth={2}
                    fill="none"
                  />
                </g>
              ))
            : null}
        </g>

        <use
          href="#colombia-outline"
          fill="transparent"
          stroke="hsl(var(--border))"
          strokeWidth={2}
        />
        <use
          href="#colombia-outline"
          fill="transparent"
          stroke="hsl(var(--primary))"
          strokeOpacity={0.18}
          strokeWidth={2}
        />
      </g>

      {points.map((point) => {
        const isSelected = point.id === selectedId;
        const isActive = point.id === activeId;
        const radius = isSelected ? 10 : isActive ? 9 : 8;

        return (
          <g
            key={point.id}
            transform={`translate(${point.x}, ${point.y})`}
            role="button"
            tabIndex={0}
            aria-label={`Seleccionar ${point.label}`}
            onClick={() => onSelect(point.id)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onSelect(point.id);
              }
            }}
            onMouseEnter={() => onHover?.(point.id)}
            onMouseLeave={() => onHover?.(null)}
            onFocus={() => onHover?.(point.id)}
            onBlur={() => onHover?.(null)}
            className="cursor-pointer outline-none"
          >
            <title>{point.label}</title>
            {isSelected ? (
              <circle
                r={24}
                fill="hsl(var(--primary))"
                opacity={0.12}
                className="animate-pulse"
              />
            ) : null}

            {isActive && !isSelected ? (
              <circle r={20} fill="hsl(var(--primary))" opacity={0.09} />
            ) : null}

            <g filter="url(#markerShadow)">
              <circle
                r={radius + 4}
                fill={isSelected ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                opacity={isSelected ? 1 : 0.9}
              />
              <circle r={radius} fill="white" opacity={0.94} />
              <circle
                r={radius - 3}
                fill={isSelected ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
                opacity={isSelected ? 1 : 0.7}
              />
            </g>

            {isActive ? (
              <g transform="translate(16, -18)">
                <rect
                  x={0}
                  y={0}
                  width={150}
                  height={28}
                  rx={14}
                  fill="hsl(var(--background))"
                  opacity={0.92}
                  stroke="hsl(var(--border))"
                />
                <text
                  x={12}
                  y={19}
                  fontSize={12}
                  fontWeight={600}
                  fill="hsl(var(--foreground))"
                >
                  {point.label}
                </text>
              </g>
            ) : null}
          </g>
        );
      })}
    </svg>
  );
}
