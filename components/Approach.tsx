import { approachSteps } from "@/lib/constants";

export default function Approach() {
  return (
    <section id="approach" className="bg-primary-dark py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-light">
            My Approach
          </p>
          <h2 className="mt-3 font-serif text-4xl font-semibold md:text-5xl">
            How we work together
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A collaborative process that puts you at the center — no
            one-size-fits-all prescriptions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {approachSteps.map((item) => (
            <article
              key={item.step}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <span className="font-serif text-5xl font-bold text-accent/40">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
