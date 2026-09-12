"use client";

import { Quote } from "lucide-react";
import { testimonials } from "@/lib/constants";
import { useT, useLanguage } from "@/lib/language-context";
import Reveal from "@/components/ui/Reveal";
import StaggerReveal, { StaggerItem } from "@/components/ui/StaggerReveal";

export default function Testimonials() {
  const t = useT();
  const { lang } = useLanguage();

  const testimonialsEn = [
    {
      quote: "With Priya Ma'am's guidance, my diabetes is now well under control. Her diet plan is very easy to follow.",
      name: "Md. Abdul Karim",
      role: "Patient, 2025",
    },
    {
      quote: "Priya Ma'am's nutritional advice during my pregnancy was invaluable for both my health and my baby's wellbeing.",
      name: "Sumaiya Begum",
      role: "Patient, 2025",
    },
    {
      quote: "I lost 10 kg in just 3 months — without any crash dieting. A truly remarkable experience.",
      name: "Rahela Khatun",
      role: "Patient, 2024",
    },
  ];

  const displayTestimonials = lang === "en" ? testimonialsEn : testimonials;

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              {t("testimonials.label")}
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.08}>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
              {t("testimonials.heading")}
            </h2>
          </Reveal>
        </div>

        <StaggerReveal className="grid gap-6 md:grid-cols-3">
          {displayTestimonials.map((item) => (
            <StaggerItem key={item.name}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-shadow hover:shadow-md">
                <Quote
                  size={28}
                  className="text-accent/60"
                  aria-hidden="true"
                />
                <p className="mt-4 flex-1 leading-relaxed text-muted">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-5">
                  <p className="font-semibold text-primary-dark">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
