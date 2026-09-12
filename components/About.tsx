"use client";

import { CheckCircle2 } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StaggerReveal, { StaggerItem } from "@/components/ui/StaggerReveal";
import AboutImage from "@/components/AboutImage";
import { useT } from "@/lib/language-context";

export default function About() {
  const t = useT();

  const highlights = [
    t("about.h1"),
    t("about.h2"),
    t("about.h3"),
    t("about.h4"),
  ];

  return (
    <section id="about" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image — animated from left */}
          <Reveal variant="fadeLeft" amount={0.15}>
            <AboutImage />
          </Reveal>

          {/* Text — animated from right */}
          <div className="space-y-6">
            <Reveal variant="fadeRight" delay={0.05}>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
                {t("about.label")}
              </p>
            </Reveal>
            <Reveal variant="fadeRight" delay={0.1}>
              <h2 className="font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
                {t("about.heading")}
              </h2>
            </Reveal>
            <Reveal variant="fadeRight" delay={0.15}>
              <p className="text-lg leading-relaxed text-muted">
                {t("about.p1")}
              </p>
            </Reveal>
            <Reveal variant="fadeRight" delay={0.2}>
              <p className="leading-relaxed text-muted">
                {t("about.p2")}
              </p>
            </Reveal>

            <StaggerReveal className="space-y-3 pt-2">
              {highlights.map((item, i) => (
                <StaggerItem key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-primary-light"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{item}</span>
                </StaggerItem>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
