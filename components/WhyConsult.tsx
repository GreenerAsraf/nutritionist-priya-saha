"use client";

import Link from "next/link";
import {
  Phone,
  Calendar,
  Sparkles,
  HelpCircle,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { whyConsultList } from "@/lib/why-consult-data";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import ServiceModalIcon from "@/components/ServiceModalIcon";
import Reveal from "@/components/ui/Reveal";

const toBengaliDigits = (num: number): string => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .padStart(2, "0")
    .split("")
    .map((d) => bnDigits[parseInt(d, 10)] ?? d)
    .join("");
};

export default function WhyConsult() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Display only top 6 featured services on the main landing page
  const featuredServices = whyConsultList.slice(0, 6);

  return (
    <section
      id="why-consult"
      className={`relative py-20 md:py-28 overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-emerald-950/40 via-surface to-background"
          : "bg-gradient-to-b from-emerald-50/50 via-surface to-surface-alt/40"
      }`}
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-10 left-10 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <Reveal variant="fadeUp">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <HelpCircle size={14} />
              {lang === "bn" ? "বিশেষজ্ঞ পুষ্টি সেবা ও পরামর্শ" : "Expert Nutrition Guidance"}
            </span>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.08}>
            <h2 className="mt-4 font-serif text-3xl font-bold text-primary-dark dark:text-primary-light sm:text-4xl md:text-5xl leading-tight">
              {lang === "bn" ? "কেন আমার পরামর্শ বা ডায়েট নিবেন?" : "Why Choose My Diet & Nutrition Consultation?"}
            </h2>
          </Reveal>

          <Reveal variant="fadeUp" delay={0.14}>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              {lang === "bn"
                ? "রোগের সঠিক কারণ ও শারীরিক মেটাবলিজম বিশ্লেষণ করে তৈরি করা হয় আপনার জন্য সম্পূর্ণ বিজ্ঞানসম্মত ও কার্যকর ডায়েট পরিকল্পনা।"
                : "Science-backed medical nutrition therapy meticulously crafted around your metabolic profile, diagnostic reports, and wellness goals."}
            </p>
          </Reveal>
        </div>

        {/* Single Unified Consultation & Call-to-Action Banner */}
        <Reveal variant="fadeUp" delay={0.18} className="mx-auto mb-12 max-w-4xl">
          <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/10 via-surface to-teal-900/10 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-3.5 text-left">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/25 mt-0.5">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground">
                    {lang === "bn" ? "পরামর্শ ও সিরিয়াল বুকিং" : "Consultation & Appointment"}
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {lang === "bn"
                      ? "আমার পরামর্শ নিতে 'সরাসরি কল' বাটনে ক্লিক করে বুকিং করুন বা 'অ্যাপয়েন্টমেন্ট' বাটনে ক্লিক করে নির্ধারিত ছক পূরণ করে বুকিং করুন।"
                      : "To consult with me, click 'Call Now' to book directly or click 'Book Appointment' to submit the online form."}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex w-full md:w-auto shrink-0 flex-col sm:flex-row gap-3">
                <a
                  href="tel:01571159059"
                  className={`flex items-center justify-center gap-2 rounded-2xl py-3 px-5 text-sm font-bold transition-all shadow-xs ${
                    isDark
                      ? "bg-emerald-900/70 text-emerald-200 hover:bg-emerald-800/80 border border-emerald-700/60"
                      : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
                  }`}
                >
                  <Phone size={16} className="shrink-0" />
                  <span>{lang === "bn" ? "সরাসরি কল" : "Call Now"}</span>
                </a>

                <a
                  href="#contact"
                  className="btn-vibrant flex items-center justify-center gap-2 rounded-2xl py-3 px-6 text-sm font-bold shadow-md shadow-emerald-500/20"
                >
                  <Calendar size={16} className="shrink-0" />
                  <span>{lang === "bn" ? "অ্যাপয়েন্টমেন্ট" : "Appointment"}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* 6 Featured Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((item) => {
            const content = lang === "en" ? item.en : item.bn;
            const formattedSerial =
              lang === "bn"
                ? `${toBengaliDigits(item.serial)}.`
                : `${String(item.serial).padStart(2, "0")}.`;

            return (
              <article
                key={item.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-border/80 bg-surface/95 p-6 sm:p-7 shadow-xs backdrop-blur-xs transition-all duration-300 hover:border-primary/50 hover:bg-surface hover:shadow-xl hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-start gap-3.5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 via-teal-50 to-amber-100/60 text-emerald-700 ring-1 ring-emerald-200/80 shadow-xs transition-transform duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-white group-hover:shadow-md group-hover:shadow-emerald-500/30">
                      <ServiceModalIcon name={item.icon} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold text-primary tracking-wider uppercase">
                        {lang === "bn" ? `সেবা নং ${formattedSerial}` : `Service #${formattedSerial}`}
                      </span>
                      <h3 className="mt-0.5 text-base sm:text-lg font-bold text-foreground leading-snug">
                        {formattedSerial} {content.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 rounded-xl bg-primary/10 px-3 py-1 text-xs font-bold text-primary w-fit">
                    <Sparkles size={12} className="shrink-0" />
                    <span>{lang === "bn" ? "কেন আমার পরামর্শ বা ডায়েট নিবেন?" : "Why Choose My Advice?"}</span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted text-justify">
                    {content.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All 24 Services Button */}
        <div className="mt-12 text-center">
          <Link
            href="/why-consult"
            className="btn-vibrant inline-flex items-center justify-center gap-3 rounded-2xl px-8 py-4 text-base font-bold shadow-xl shadow-emerald-500/20 hover:scale-102 transition-transform"
          >
            <span>
              {lang === "bn"
                ? "সবগুলো সেবা ও পুষ্টি পরামর্শ দেখুন (২৪টি)"
                : "View All 24 Services & Guidelines"}
            </span>
            <ArrowRight size={18} />
          </Link>
          <p className="mt-2 text-xs text-muted">
            {lang === "bn"
              ? "২৪টি সুনির্দিষ্ট স্বাস্থ্য সমস্যা ও বিশেষায়িত ডায়েট নির্দেশিকা জানতে ক্লিক করুন"
              : "Click to explore all 24 specialised clinical diet guidelines"}
          </p>
        </div>
      </div>
    </section>
  );
}
