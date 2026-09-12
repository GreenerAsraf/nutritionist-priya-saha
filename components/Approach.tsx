"use client";

import { MapPin, Phone, Calendar } from "lucide-react";
import { approachSteps } from "@/lib/constants";
import { useT, useLanguage } from "@/lib/language-context";
import Reveal from "@/components/ui/Reveal";
import StaggerReveal, { StaggerItem } from "@/components/ui/StaggerReveal";

export default function Approach() {
  const t = useT();
  const { lang } = useLanguage();

  const approachStepsEn = [
    {
      step: "01",
      title: "Max Hospital Ltd.",
      subtitle: "Mehedibagh, Chittagong",
      description: "35/36 Mehedibagh Road, Chittagong-4000. Room No. 208. Sunday to Friday — 2pm to 6pm.",
      contact: "01713-998166 | 01571-159059 | 031-630682",
    },
    {
      step: "02",
      title: "Rangamati Healthcare Hospital",
      subtitle: "Rangamati, Chittagong",
      description: "Mahajon Batol, Chandraghona, Rangamati, Chittagong. Saturday, Monday & Thursday — 9am to 12pm.",
      contact: "01835-705031 | 01835-870304",
    },
    {
      step: "03",
      title: "Online Consultation",
      subtitle: "From Anywhere",
      description: "Consult online from home. Book an appointment via the Facebook page or fill in the form below.",
      contact: "Facebook Page: Nutritionist Priya Saha",
    },
  ];

  const displaySteps = lang === "en" ? approachStepsEn : approachSteps;

  return (
    <section id="approach" className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <Reveal variant="fadeUp">
            <span className="inline-block rounded-full bg-emerald-800/60 px-4 py-1.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-amber-300 border border-emerald-700">
              {t("approach.label")}
            </span>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
              {t("approach.heading")}
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.14}>
            <p className="mt-4 text-base sm:text-lg text-emerald-100/80">
              {t("approach.desc")}
            </p>
          </Reveal>
        </div>

        <StaggerReveal className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {displaySteps.map((item, index) => {
            const isOnline = index === 2;
            const primaryPhone = index === 0 ? "01713998166" : index === 1 ? "01835705031" : null;

            return (
              <StaggerItem key={item.step}>
                <article className="group relative flex flex-col justify-between rounded-3xl border border-emerald-500/20 bg-emerald-900/40 p-6 sm:p-8 backdrop-blur-md h-full transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-900/70 hover:shadow-2xl hover:shadow-emerald-950/50">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-4xl sm:text-5xl font-black bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500/40 bg-clip-text text-transparent" aria-hidden="true">
                        {item.step}
                      </span>
                      <span className="rounded-full bg-emerald-800/80 px-3 py-1 text-xs font-semibold text-emerald-200">
                        {item.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>

                    <div className="mt-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin size={18} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
                        <p className="text-sm leading-relaxed text-emerald-100/80">{item.description}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <Phone size={18} className="mt-0.5 shrink-0 text-amber-400" aria-hidden="true" />
                        <p className="text-sm text-emerald-100/90 font-medium">{item.contact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-5 border-t border-emerald-800/60">
                    {primaryPhone ? (
                      <a
                        href={`tel:${primaryPhone}`}
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600/90 py-3 text-sm font-bold text-white transition-all hover:bg-emerald-500 active:scale-95 shadow-md"
                      >
                        <Phone size={15} />
                        <span>{t("approach.call")}</span>
                      </a>
                    ) : (
                      <a
                        href="#contact"
                        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-bold text-white transition-all hover:from-amber-400 hover:to-amber-500 active:scale-95 shadow-md"
                      >
                        <Calendar size={15} />
                        <span>{t("approach.online")}</span>
                      </a>
                    )}
                  </div>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
