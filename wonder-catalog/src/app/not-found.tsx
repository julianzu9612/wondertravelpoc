import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-4 py-16 text-center">
      <h1 className="text-4xl font-semibold text-foreground">Página no encontrada</h1>
      <p className="text-base text-foreground/70">
        La ruta que buscas no existe o se movió. Vuelve al inicio o explora los viajes.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ea580c] hover:shadow-lg"
        >
          Ir al inicio
        </Link>
        <Link
          href="/trips"
          className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-foreground"
        >
          Ver viajes
        </Link>
      </div>
    </div>
  );
}
