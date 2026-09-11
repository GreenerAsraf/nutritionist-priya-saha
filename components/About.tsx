import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Personalized nutrition plans rooted in clinical science",
  "Culturally sensitive guidance using local ingredients",
  "Ongoing support through regular follow-up sessions",
  "Focus on sustainable habits, not quick fixes",
];

export default function About() {
  return (
    <section id="about" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <div className="aspect-square max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-primary/30 to-accent/20">
              <div className="flex h-full flex-col items-center justify-center p-10 text-center">
                <div className="mb-4 rounded-full bg-surface/80 px-6 py-2 text-sm font-semibold text-primary">
                  About Priya
                </div>
                <p className="font-serif text-3xl font-semibold leading-snug text-primary-dark">
                  &ldquo;Food should heal, not restrict.&rdquo;
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary px-6 py-4 text-white shadow-xl">
              <p className="font-serif text-3xl font-bold">500+</p>
              <p className="text-sm text-white/80">Lives transformed</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              About Me
            </p>
            <h2 className="font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
              Your partner in health, not just a diet plan
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              With a Master&apos;s in Clinical Nutrition and over five years of
              experience, I help people move beyond fad diets toward meaningful,
              lasting change. My practice combines rigorous science with genuine
              empathy — because I believe nutrition should empower you, not
              overwhelm you.
            </p>
            <p className="leading-relaxed text-muted">
              Whether you&apos;re managing a health condition, preparing for
              motherhood, or simply want to feel more energized, I create plans
              that honor your culture, your schedule, and your taste buds.
            </p>

            <ul className="space-y-3 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-primary-light"
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
