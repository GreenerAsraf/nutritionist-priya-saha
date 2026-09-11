import { ArrowRight, Sparkles } from "lucide-react";
import { credentials } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary-light/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted">
            <Sparkles size={14} className="text-accent" />
            Evidence-based, compassionate care
          </div>

          <h1 className="font-serif text-5xl font-semibold leading-tight tracking-tight text-primary-dark md:text-6xl lg:text-7xl">
            Nourish your body,{" "}
            <span className="text-primary-light">transform your life</span>
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted">
            Hi, I&apos;m Priya Saha — a clinical nutritionist dedicated to
            helping you build sustainable eating habits through personalized,
            science-backed guidance that fits your real life.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Start Your Journey
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border-2 border-primary/20 px-8 py-4 text-base font-semibold text-primary transition-colors hover:border-primary hover:bg-surface-alt"
            >
              View Services
            </a>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {credentials.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-muted"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-surface-alt to-accent/20 shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary/10 ring-4 ring-primary/5">
                <span className="font-serif text-5xl font-semibold text-primary">
                  PS
                </span>
              </div>
              <p className="font-serif text-2xl font-semibold text-primary-dark">
                Priya Saha
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-widest text-muted">
                Clinical Nutritionist
              </p>
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-surface/95 p-4 shadow-lg backdrop-blur-sm">
              <p className="text-sm font-medium text-primary-dark">
                500+ clients guided
              </p>
              <p className="text-xs text-muted">
                Toward healthier, happier lives
              </p>
            </div>
          </div>

          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl bg-accent px-5 py-3 shadow-lg md:block">
            <p className="text-sm font-bold text-white">5+ Years</p>
            <p className="text-xs text-white/80">Clinical Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
