import { services } from "@/lib/constants";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
            Services
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
            Nutrition care tailored to you
          </h2>
          <p className="mt-4 text-lg text-muted">
            From weight management to specialized clinical support, every
            service is designed around your unique needs and goals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-border bg-surface p-7 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <ServiceIcon name={service.icon} />
              <h3 className="mt-5 text-xl font-semibold text-primary-dark">
                {service.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
