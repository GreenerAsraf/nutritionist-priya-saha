import { Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Client Stories
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
            Real results, real people
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <Quote size={28} className="text-accent/60" />
              <p className="mt-4 flex-1 leading-relaxed text-muted">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-6 border-t border-border pt-5">
                <p className="font-semibold text-primary-dark">{item.name}</p>
                <p className="text-sm text-muted">{item.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
