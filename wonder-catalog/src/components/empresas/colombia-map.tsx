"use client";

import { geoMercator, geoPath } from "d3-geo";
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
  onSelect: (id: string) => void;
  onHover?: (id: string | null) => void;
};

const VIEWBOX_WIDTH = 800;
const VIEWBOX_HEIGHT = 980;

export function ColombiaMap({ markers, selectedId, onSelect, onHover }: Props) {
  const { outlinePath, points } = useMemo(() => {
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

    return { outlinePath, points };
  }, [markers]);

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      className="h-full w-full"
      role="img"
      aria-label="Mapa de Colombia con destinos seleccionables"
    >
      <defs>
        <linearGradient id="colombiaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.15" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.12" />
        </filter>
      </defs>

      <g filter="url(#softShadow)">
        <path
          d={outlinePath}
          fill="url(#colombiaFill)"
          stroke="hsl(var(--border))"
          strokeWidth={2}
        />
      </g>

      {points.map((point) => {
        const isSelected = point.id === selectedId;
        const radius = isSelected ? 10 : 8;

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
              <circle r={18} fill="hsl(var(--primary))" opacity={0.12} />
            ) : null}
            <circle
              r={radius}
              fill={isSelected ? "hsl(var(--primary))" : "hsl(var(--foreground))"}
              opacity={isSelected ? 1 : 0.7}
            />
            <circle
              r={radius + 3}
              fill="transparent"
              stroke="white"
              strokeOpacity={0.9}
              strokeWidth={2}
            />
          </g>
        );
      })}
    </svg>
  );
}
