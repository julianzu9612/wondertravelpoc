"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getCategories, getTrips } from "@/data/trips";
import { TripCard } from "@/components/trips/trip-card";
import type { Locale } from "@/i18n/routing";

export function SearchBar() {
  const t = useTranslations("home.search");
  const locale = useLocale() as Locale;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);

  const categories = getCategories(locale);
  const trips = getTrips(locale);

  const filtered = trips.filter((trip) => {
    const matchesQuery =
      query.trim().length === 0 ||
      trip.title.toLowerCase().includes(query.toLowerCase()) ||
      trip.shortDescription.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = !category || trip.categories.includes(category);
    return matchesQuery && matchesCategory;
  });

  return (
    <section className="space-y-6 rounded-3xl border border-border/70 bg-white p-5 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.12em] text-foreground/60">
            {t("eyebrow")}
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            {t("title")}
          </h2>
        </div>
        <div className="flex w-full max-w-md items-center gap-2 rounded-full border border-border/80 bg-muted px-4 py-2 shadow-inner">
          <input
            type="search"
            placeholder={t("placeholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/50"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setCategory(null)}
          className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
            !category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-secondary text-foreground"
          }`}
        >
          {t("all")}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat === category ? null : cat)}
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              category === cat
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-secondary text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((trip) => (
          <TripCard key={trip.id} trip={trip} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-border/80 bg-muted/60 p-6 text-center text-sm text-foreground/70">
            {t("empty")}
          </div>
        )}
      </div>
    </section>
  );
}
