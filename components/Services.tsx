"use client";

import { services } from "@/lib/constants";
import { useT, useLanguage } from "@/lib/language-context";
import ServiceIcon from "./ServiceIcon";
import Reveal from "@/components/ui/Reveal";
import ServiceCardsGrid from "@/components/ServiceCardsGrid";

export default function Services() {
  const t = useT();
  const { lang } = useLanguage();

  // Provide bilingual service content
  const servicesEn = [
    {
      icon: "heart" as const,
      title: "Diabetic Diet",
      description: "Personalised, science-backed diet planning to help manage and control diabetes effectively.",
    },
    {
      icon: "leaf" as const,
      title: "Weight Management",
      description: "Sustainable diet plans for healthy weight loss, gain, or maintenance without crash dieting.",
    },
    {
      icon: "baby" as const,
      title: "Maternal & Child Nutrition",
      description: "Expert nutritional counselling for pregnant mothers and child growth & cognitive development.",
    },
    {
      icon: "activity" as const,
      title: "Kidney & Heart Disease Diet",
      description: "Low-protein kidney diets and low-fat cardiac diets tailored to your medical condition.",
    },
    {
      icon: "users" as const,
      title: "PCOS & Infertility Diet",
      description: "Dietary therapy to balance hormones and address PCOS and fertility-related concerns.",
    },
    {
      icon: "utensils" as const,
      title: "Gym & Sports Diet",
      description: "Optimised performance nutrition plans to improve physical capacity and athletic results.",
    },
  ];

  const displayServices = lang === "en" ? servicesEn : services;

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <Reveal variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              {t("services.label")}
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.08}>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
              {t("services.heading")}
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.14}>
            <p className="mt-4 text-lg text-muted">
              {t("services.desc")}
            </p>
          </Reveal>
        </div>

        <ServiceCardsGrid services={displayServices} />
      </div>
    </section>
  );
}
