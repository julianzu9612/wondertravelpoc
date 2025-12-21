import Image from "next/image";
import { useTranslations } from "next-intl";
import { getContactInfo, getWhatsAppHref, ContactType } from "@/lib/whatsapp";

type Props = {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  backgroundVideo?: string; // Path without extension, e.g. "/b2b/videos/hero-universidades"
  contactType: ContactType;
  ctaText?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  badges?: string[];
};

export function HeroB2B({
  title,
  subtitle,
  description,
  backgroundImage,
  backgroundVideo,
  contactType,
  ctaText,
  secondaryCtaText,
  secondaryCtaHref = "#servicios",
  badges = [],
}: Props) {
  const tWhatsApp = useTranslations("whatsapp");
  const contact = getContactInfo(contactType);
  const whatsapp = getWhatsAppHref({
    contactType,
    message: tWhatsApp("interestGeneral", { label: contact.label }),
  });

  return (
    <section className="relative isolate w-screen max-w-none -mx-[calc(50vw-50%)] overflow-hidden bg-black text-white">
      {backgroundVideo ? (
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={backgroundImage}
            className="h-[110%] w-[110%] object-cover"
            style={{ objectPosition: "left top" }}
          >
            <source src={`${backgroundVideo}.webm`} type="video/webm" />
            <source src={`${backgroundVideo}.mp4`} type="video/mp4" />
          </video>
        </div>
      ) : (
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/60 to-black/35" />

      <div className="relative mx-auto flex min-h-[85vh] w-full max-w-5xl flex-col justify-center px-4 pb-12 pt-14 sm:px-8 lg:px-12">
        <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-white/70">
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1">
            {subtitle}
          </span>
        </div>

        <div className="max-w-4xl space-y-6">
          <h1 className="font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-white/85 sm:text-xl max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
            >
              {ctaText}
            </a>
            {secondaryCtaText ? (
              <a
                href={secondaryCtaHref}
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
              >
                {secondaryCtaText}
              </a>
            ) : null}
          </div>

          {badges.length > 0 && (
            <div className="flex flex-wrap gap-1.5 text-xs font-semibold text-white/80">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-white/25 bg-white/10 px-3 py-1"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
