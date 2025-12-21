import Image from "next/image";
import { useTranslations } from "next-intl";

type Props = {
  title?: string;
  description?: string;
};

const imageSources = [
  "/b2b/universities/gallery/group-1.jpg",
  "/b2b/universities/gallery/group-2.jpg",
  "/b2b/universities/gallery/group-3.jpg",
  "/b2b/universities/gallery/group-4.jpg",
  "/b2b/universities/gallery/group-5.jpg",
  "/b2b/universities/gallery/group-6.jpg",
];

export function GallerySection({
  title,
  description,
}: Props) {
  const t = useTranslations("universities.gallery");
  const altTexts = t.raw("alts") as string[];
  const resolvedTitle = title ?? t("title");
  const resolvedDescription = description ?? t("description");

  const images = imageSources.map((src, index) => ({
    src,
    alt: altTexts[index] ?? t("title"),
  }));

  return (
    <section className="py-16 sm:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            {resolvedTitle}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {resolvedDescription}
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
