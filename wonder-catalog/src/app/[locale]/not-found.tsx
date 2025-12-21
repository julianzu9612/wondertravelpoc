import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
      <h1 className="text-4xl font-semibold text-foreground">{t("title")}</h1>
      <p className="text-base text-foreground/70">
        {t("description")}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
        >
          {t("ctaHome")}
        </Link>
        <Link
          href="/trips"
          className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground"
        >
          {t("ctaTrips")}
        </Link>
      </div>
    </div>
  );
}
