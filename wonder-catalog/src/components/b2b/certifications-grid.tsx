import Image from "next/image";
import { ShieldCheck } from "lucide-react";

type Certification = {
  name: string;
  description: string;
  image?: string;
};

type Props = {
  certifications: Certification[];
  title?: string;
  description?: string;
};

export function CertificationsGrid({
  certifications,
  title = "Certificaciones y Reconocimientos",
  description = "Cumplimos con los más altos estándares de calidad y seguridad.",
}: Props) {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              {cert.image ? (
                <Image
                  src={cert.image}
                  alt={cert.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
              )}
              <div>
                <h3 className="font-semibold">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
