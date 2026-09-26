"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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
      {/* Ambient Glow Blobs — always in DOM; CSS prefers-reduced-motion disables animation */}
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent blur-3xl"
      />
      <div
        aria-hidden="true"
        className="animate-glow pointer-events-none absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-amber-400/15 via-emerald-300/10 to-transparent blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="mx-auto grid max-w-[1560px] items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 xl:gap-14 lg:px-8 xl:px-12">
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

        {/* ── Right — half screen banner card ── */}
        <div className="relative w-full flex items-center justify-center">
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: easeOut }}
            className={`relative w-full aspect-[1376/768] overflow-hidden rounded-2xl sm:rounded-3xl p-1.5 sm:p-2.5 shadow-2xl ring-1 transition-all duration-300 hover:shadow-emerald-900/30 ${
              isDark
                ? "bg-gradient-to-tr from-emerald-700/30 via-emerald-900/60 to-amber-400/10 ring-emerald-700/60 shadow-emerald-950/60"
                : "bg-gradient-to-tr from-emerald-500/20 via-white to-amber-400/20 ring-emerald-200 shadow-emerald-950/15"
            }`}
          >
            <div className="relative h-full w-full overflow-hidden rounded-xl sm:rounded-2xl bg-surface-alt">
              <Image
                src="/image.png"
                alt={t("hero.portrait.alt")}
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
