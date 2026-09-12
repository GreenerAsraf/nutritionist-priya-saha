"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";
import { credentials } from "@/lib/constants";
import { useT, useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeItem(delay: number, y = 24) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: easeOut },
  };
}

export default function Hero() {
  const reduced = useReducedMotion();
  const t = useT();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const makeProps = (delay: number, y = 24) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2, delay: delay * 0.3 } }
      : fadeItem(delay, y);

  return (
    <section className={`relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-22 lg:pt-16 lg:pb-28 ${isDark ? "bg-gradient-to-b from-emerald-950/60 to-transparent" : ""}`}>
      {/* Ambient Glow Blobs */}
      {!reduced && (
        <>
          <div
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent blur-3xl"
          />
          <div
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-400/15 via-emerald-300/10 to-transparent blur-3xl"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* ── Left content ── */}
        <div className="space-y-6 sm:space-y-7">
          {/* Certified Badge */}
          <motion.div
            {...makeProps(0.1)}
            className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs sm:text-sm font-semibold shadow-xs backdrop-blur-sm ${
              isDark
                ? "border-emerald-600/60 bg-emerald-900/70 text-emerald-200"
                : "border-emerald-300/80 bg-emerald-50/90 text-emerald-900"
            }`}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <Sparkles size={14} className="text-amber-500" aria-hidden="true" />
            <span>{t("site.certified.badge")}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...makeProps(0.18, 30)}
            className={`font-serif text-4xl font-bold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl ${
              isDark ? "text-emerald-50" : "text-emerald-950"
            }`}
          >
            {t("hero.heading1")}{" "}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 bg-clip-text text-transparent">
              {t("hero.heading2")}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...makeProps(0.3)}
            className={`max-w-lg text-base sm:text-lg leading-relaxed ${isDark ? "text-emerald-300" : "text-muted"}`}
          >
            {t("hero.desc")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...makeProps(0.4)}
            className="flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#contact"
              className="btn-vibrant inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-base font-bold shadow-lg shadow-emerald-600/30"
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>{t("hero.cta.book")}</span>
              <motion.span
                aria-hidden="true"
                animate={reduced ? {} : { x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.a>

            <motion.a
              href="#services"
              className={`inline-flex items-center justify-center rounded-full border-2 px-7 py-3 text-base font-semibold backdrop-blur-sm transition-all active:scale-98 ${
                isDark
                  ? "border-emerald-600/40 bg-emerald-900/50 text-emerald-200 hover:border-emerald-500 hover:bg-emerald-800/60"
                  : "border-emerald-600/25 bg-white/90 text-emerald-900 hover:border-emerald-600 hover:bg-emerald-50"
              }`}
              whileHover={reduced ? {} : { scale: 1.02 }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {t("hero.cta.services")}
            </motion.a>
          </motion.div>

          {/* Credentials Pills */}
          <motion.ul {...makeProps(0.5)} className="flex flex-wrap gap-2 pt-2">
            {credentials.map((item, i) => (
              <motion.li
                key={item}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.5 + i * 0.06, ease: easeOut }}
                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs sm:text-sm font-medium shadow-2xs ${
                  isDark
                    ? "border-emerald-700/60 bg-emerald-900/60 text-emerald-200"
                    : "border-emerald-200/80 bg-white/90 text-emerald-900"
                }`}
              >
                <CheckCircle2 size={13} className="text-emerald-500 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ── Right — portrait card ── */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
            className={`relative aspect-[4/5] overflow-hidden rounded-3xl p-2 shadow-2xl ring-1 ${
              isDark
                ? "bg-gradient-to-tr from-emerald-700/20 via-emerald-900/80 to-amber-400/10 ring-emerald-700/60 shadow-emerald-950/50"
                : "bg-gradient-to-tr from-emerald-500/20 via-white to-amber-400/20 ring-emerald-200 shadow-emerald-950/15"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-surface-alt">
              <Image
                src="/priya-saha.jpeg"
                alt={t("hero.portrait.alt")}
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-emerald-950/70 via-emerald-950/20 to-transparent pointer-events-none" />

              {/* Name overlay card */}
              <div className={`absolute bottom-4 left-4 right-4 rounded-xl border p-3 shadow-lg backdrop-blur-md ${
                isDark ? "border-white/20 bg-emerald-950/80" : "border-white/40 bg-white/90"
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className={`font-serif text-base font-bold ${isDark ? "text-emerald-100" : "text-emerald-950"}`}>
                      {t("hero.card.name")}
                    </p>
                    <p className={`text-xs font-medium ${isDark ? "text-emerald-400" : "text-muted"}`}>
                      {t("hero.card.title")}
                    </p>
                  </div>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full ${isDark ? "bg-emerald-800/80 text-emerald-400" : "bg-emerald-100 text-emerald-700"}`}>
                    <Shield size={15} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: easeOut }}
            className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-3 sm:px-5 sm:py-3.5 shadow-xl shadow-amber-500/30 text-white"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-amber-200 shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-bold leading-tight">{t("hero.badge.science")}</p>
                <p className="text-[11px] text-amber-100 leading-tight">{t("hero.badge.plan")}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
