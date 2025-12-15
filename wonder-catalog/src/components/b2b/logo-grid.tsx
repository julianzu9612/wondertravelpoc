import Image from "next/image";

type Logo = {
  src: string;
  alt: string;
};

type Props = {
  logos: Logo[];
  title?: string;
  description?: string;
};

export function LogoGrid({ logos, title, description }: Props) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {(title || description) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        )}

        <div className="rounded-3xl border border-border/70 bg-white p-8 shadow-sm">
          <div className="grid grid-cols-3 items-center gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
