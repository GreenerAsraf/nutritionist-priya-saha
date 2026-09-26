"use client";

import {
  GraduationCap,
  Award,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import StaggerReveal, { StaggerItem } from "@/components/ui/StaggerReveal";
import AboutImage from "@/components/AboutImage";
import { useT } from "@/lib/language-context";

export default function About() {
  const t = useT();

  const qualifications = [
    { key: "about.edu1", icon: GraduationCap },
    { key: "about.edu2", icon: GraduationCap },
    { key: "about.edu3", icon: Award },
    { key: "about.edu4", icon: Award },
    { key: "about.edu5", icon: Stethoscope },
    { key: "about.edu6", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="bg-surface-alt py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image — animated from left */}
          <Reveal variant="fadeLeft" amount={0.15}>
            <AboutImage />
          </Reveal>

          {/* Education & Qualifications — animated from right */}
          <div className="space-y-6">
            <Reveal variant="fadeRight" delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                {t("about.label")}
              </span>
            </Reveal>

            <Reveal variant="fadeRight" delay={0.1}>
              <h2 className="font-serif text-3xl font-semibold text-primary-dark dark:text-primary-light md:text-4xl lg:text-5xl leading-tight">
                {t("about.heading")}
              </h2>
            </Reveal>

            <StaggerReveal className="space-y-3 pt-2">
              {qualifications.map((item, i) => {
                const Icon = item.icon;
                return (
                  <StaggerItem
                    key={i}
                    className="group flex items-center gap-4 rounded-2xl border border-border/80 bg-surface/90 p-3.5 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-primary/40 hover:bg-surface hover:shadow-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white">
                      <Icon size={22} aria-hidden="true" />
                    </div>
                    <span className="text-base md:text-lg font-medium text-foreground leading-snug">
                      {t(item.key)}
                    </span>
                  </StaggerItem>
                );
              })}
            </StaggerReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
