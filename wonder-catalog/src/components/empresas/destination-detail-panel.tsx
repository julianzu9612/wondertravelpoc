"use client";

import Image from "next/image";
import type { ComponentType } from "react";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Anchor,
  Bike,
  Binoculars,
  Bird,
  Bug,
  Building2,
  CalendarDays,
  Coffee,
  Flower2,
  Footprints,
  Heart,
  Home,
  Hotel,
  Landmark,
  Mic,
  Mountain,
  Palette,
  Plane,
  Ship,
  TreePine,
  Umbrella,
  Users,
  UtensilsCrossed,
  Waves,
} from "lucide-react";
import type { CorporateDestination } from "@/data/empresas/destinations";

type Props = {
  destination: CorporateDestination;
};

const DEFAULT_VISIBLE_ACTIVITIES = 4;

const ICONS: Record<string, ComponentType<{ className?: string }>> = {
  Anchor,
  Bike,
  Binoculars,
  Bird,
  Bug,
  Building2,
  CalendarDays,
  Coffee,
  Flower2,
  Footprints,
  Heart,
  Home,
  Hotel,
  Landmark,
  Mic,
  Mountain,
  Palette,
  Plane,
  Ship,
  TreePine,
  Umbrella,
  Users,
  UtensilsCrossed,
  Waves,
};

function ActivityIcon({ name }: { name: string }) {
  const Icon = ICONS[name] ?? Landmark;
  return (
    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
      <Icon className="h-5 w-5" />
    </span>
  );
}

export function DestinationDetailPanel({ destination }: Props) {
  const t = useTranslations("destinations");
  const [showAllActivities, setShowAllActivities] = useState(false);

  const visibleActivities = useMemo(() => {
    if (showAllActivities) return destination.activities;
    return destination.activities.slice(0, DEFAULT_VISIBLE_ACTIVITIES);
  }, [destination.activities, showAllActivities]);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-3xl border border-border/70 bg-white shadow-sm">
      <div className="relative flex-none">
        <div className="relative h-44 sm:h-48">
          <Image
            src={destination.image}
            alt={destination.name}
            fill
            className="object-cover"
            priority={false}
            sizes="(min-width: 1024px) 720px, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/0" />
        </div>

        <div className="relative -mt-10 px-5 pb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white/90 px-3 py-1 text-xs font-semibold tracking-wide text-foreground/80 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            {destination.tagline}
          </div>

          <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">
            {destination.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {destination.description}
          </p>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
            >
              {t("ctaQuote")}
            </a>
          </div>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-auto px-5 pb-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t("experiences")}
          </p>
          <button
            type="button"
            onClick={() => setShowAllActivities((current) => !current)}
            className="rounded-full border border-border/70 bg-white px-3 py-1 text-xs font-semibold text-foreground/70 transition hover:bg-muted/40"
          >
            {showAllActivities
              ? t("showLess")
              : t("showAll", { count: destination.activities.length })}
          </button>
        </div>

        <div className="mt-4 grid gap-3">
          {visibleActivities.map((activity) => (
            <div
              key={`${destination.id}-${activity.title}`}
              className="rounded-2xl border border-border/70 bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex gap-3">
                <ActivityIcon name={activity.icon} />
                <div className="min-w-0">
                  <p className="font-semibold leading-snug">{activity.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
