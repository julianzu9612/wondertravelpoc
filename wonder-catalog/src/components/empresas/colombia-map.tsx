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
  hoveredId?: string | null;
  onSelect: (id: string) => void;
  onHover?: (id: string | null) => void;
};

const VIEWBOX_WIDTH = 800;
const VIEWBOX_HEIGHT = 980;

export function ColombiaMap({
  markers,
  selectedId,
  hoveredId,
  onSelect,
  onHover,
}: Props) {
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

  const activeId = hoveredId ?? selectedId;

  return (
    <svg
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      className="h-full w-full"
      role="img"
      aria-label="Mapa de Colombia con destinos seleccionables"
    >
      <defs>
        <linearGradient id="colombiaFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.42" />
          <stop offset="55%" stopColor="hsl(var(--background))" stopOpacity="0.55" />
          <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.18" />
        </linearGradient>
        <radialGradient id="colombiaGlow" cx="30%" cy="20%" r="70%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.16" />
          <stop offset="60%" stopColor="hsl(var(--primary))" stopOpacity="0.04" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
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
      </defs>

      <g filter="url(#softShadow)">
        <path
          d={outlinePath}
          fill="url(#colombiaFill)"
          stroke="hsl(var(--border))"
          strokeWidth={2}
        />
        <path d={outlinePath} fill="url(#colombiaGlow)" />
        <path d={outlinePath} fill="url(#colombiaTexture)" />
        <path
          d={outlinePath}
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
