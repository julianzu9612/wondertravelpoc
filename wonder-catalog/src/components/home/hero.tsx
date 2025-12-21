import { getTranslations } from "next-intl/server";
import { getContactInfo, getWhatsAppHref } from "@/lib/whatsapp";
import type { Locale } from "@/i18n/routing";

type Props = {
  locale: Locale;
};

export async function Hero({ locale }: Props) {
  const t = await getTranslations({ locale, namespace: "home.hero" });
  const tWhatsApp = await getTranslations({ locale, namespace: "whatsapp" });
  const contact = getContactInfo("signature");
  const chips = t.raw("chips") as string[];
  const whatsapp = getWhatsAppHref({
    contactType: "signature",
    message: tWhatsApp("interestGeneral", { label: contact.label }),
  });

  return (
    <section className="relative isolate w-screen max-w-none -mx-[calc(50vw-50%)] overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/hero/captureVideo.webp"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero/video-hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/35" />

      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-5xl flex-col justify-center px-4 pb-12 pt-14 sm:px-8 lg:px-12">
        <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/70">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
            {t("eyebrow")}
          </span>
          <span className="h-px w-10 bg-white/25" />
          <span className="font-semibold">{t("tagline")}</span>
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="text-lg text-white/85 sm:text-xl">
            {t("description")}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#featured"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              {t("ctaSecondary")}
            </a>
          </div>

          <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-white/80">
            {chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/25 bg-white/10 px-3 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
