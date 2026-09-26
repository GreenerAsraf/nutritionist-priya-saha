"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData, type ServiceData } from "@/lib/services-data";
import { useT, useLanguage } from "@/lib/language-context";
import Reveal from "@/components/ui/Reveal";
import ServiceModal from "@/components/ServiceModal";
import ServiceModalIcon from "@/components/ServiceModalIcon";
import { staggerContainer, staggerItem, reducedStaggerContainer, reducedStaggerItem } from "@/lib/motion";

export default function Services() {
  const t = useT();
  const { lang } = useLanguage();
  const reduced = useReducedMotion();
  const [active, setActive] = useState<ServiceData | null>(null);

  return (
    <>
      <section id="services" className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* Heading */}
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

          {/* Cards grid — all 24 services */}
          <motion.div
            variants={reduced ? reducedStaggerContainer : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {servicesData.map((svc) => {
              const content = lang === "en" ? svc.en : svc.bn;
              return (
                <motion.button
                  key={svc.id}
                  variants={reduced ? reducedStaggerItem : staggerItem}
                  type="button"
                  onClick={() => setActive(svc)}
                  className="group service-card rounded-2xl border border-border bg-surface p-6 text-left cursor-pointer w-full transition-all"
                  whileHover={
                    reduced
                      ? {}
                      : {
                          y: -5,
                          boxShadow: "0 12px 40px -8px rgba(45, 106, 79, 0.14)",
                          borderColor: "rgba(64, 145, 108, 0.4)",
                        }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  aria-label={`${content.title} — ${lang === "bn" ? "বিস্তারিত দেখুন" : "View details"}`}
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={reduced ? {} : { scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-100/60 text-emerald-700 ring-1 ring-emerald-200/80 shadow-xs transition-all duration-300 group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/30"
                  >
                    <ServiceModalIcon name={svc.icon} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="mt-4 text-base font-semibold text-primary-dark leading-snug">
                    {content.title}
                  </h3>

                  {/* Short description */}
                  <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                    {content.short}
                  </p>

                  {/* Learn more link */}
                  <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-primary-light">
                    <span>{t("services.learn")}</span>
                    <motion.span
                      aria-hidden="true"
                      className="inline-block"
                      whileHover={reduced ? {} : { x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight size={13} />
                    </motion.span>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal service={active} onClose={() => setActive(null)} />
    </>
  );
}
