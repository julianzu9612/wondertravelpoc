import { Quote } from "lucide-react";

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  organization: string;
};

type Props = {
  testimonials: Testimonial[];
  title?: string;
  description?: string;
};

export function TestimonialsB2B({
  testimonials,
  title,
  description,
}: Props) {
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border/70 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/20" />
              <p className="text-muted-foreground leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-6 border-t border-border/50 pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role}
                </div>
                <div className="text-sm font-medium text-primary">
                  {testimonial.organization}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
