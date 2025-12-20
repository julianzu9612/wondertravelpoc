import Image from "next/image";

type Props = {
  title?: string;
  description?: string;
};

const images = [
  { src: "/b2b/universities/gallery/group-1.jpg", alt: "Grupo académico 1" },
  { src: "/b2b/universities/gallery/group-2.jpg", alt: "Grupo académico 2" },
  { src: "/b2b/universities/gallery/group-3.jpg", alt: "Grupo académico 3" },
  { src: "/b2b/universities/gallery/group-4.jpg", alt: "Grupo académico 4" },
  { src: "/b2b/universities/gallery/group-5.jpg", alt: "Grupo académico 5" },
  { src: "/b2b/universities/gallery/group-6.jpg", alt: "Grupo académico 6" },
];

export function GallerySection({
  title = "Momentos que Transforman",
  description = "Cada viaje es una oportunidad para crear conexiones que trascienden fronteras.",
}: Props) {
  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
