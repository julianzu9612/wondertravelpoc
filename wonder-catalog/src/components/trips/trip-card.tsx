"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import type { LocalizedTrip } from "@/data/types";
import { Link } from "@/i18n/navigation";

type Props = {
  trip: LocalizedTrip;
};

export function TripCard({ trip }: Props) {
  const t = useTranslations("trips.card");
  const locale = useLocale();
  const cover = trip.images?.[0] ?? "/brand/wonder.png";
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return (
    <Link
      href={{ pathname: "/trips/[slug]", params: { slug: trip.slug } }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm transition transform-gpu hover:-translate-y-1 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-orange-100/60 via-white to-orange-50/40">
        <Image
          src={cover}
          alt={trip.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {trip.categories.slice(0, 2).map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-foreground shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-foreground line-clamp-2">
            {trip.title}
          </h3>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {trip.difficulty}
          </span>
        </div>
        <p className="text-sm text-foreground/70 line-clamp-3">
          {trip.shortDescription}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm font-semibold text-foreground">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-[0.08em] text-foreground/60">
              {t("from")}
            </p>
            <p className="text-base">{formatter.format(trip.price)}</p>
          </div>
          <div className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
            {trip.duration}
          </div>
        </div>
      </div>
    </Link>
  );
}
