import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              Get in Touch
            </p>
            <h2 className="font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
              Ready to start your nutrition journey?
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Book a free 15-minute discovery call to discuss your goals and
              see if we&apos;re a good fit. No pressure — just a friendly
              conversation about your health.
            </p>

            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-primary-dark hover:text-primary"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted">Phone</p>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="font-medium text-primary-dark hover:text-primary"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-muted">Location</p>
                  <p className="font-medium text-primary-dark">
                    {siteConfig.location}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <form className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-primary-dark">
              Send a message
            </h3>
            <p className="mt-1 text-sm text-muted">
              I&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-primary-dark"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-primary-dark"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-primary-dark"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your goals..."
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
