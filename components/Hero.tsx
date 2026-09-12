"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Shield } from "lucide-react";
import Image from "next/image";
import { credentials } from "@/lib/constants";

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

  const makeProps = (delay: number, y = 24) =>
    reduced
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.2, delay: delay * 0.3 } }
      : fadeItem(delay, y);

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-32">
      {/* Vibrant Ambient Glow Blobs */}
      {!reduced && (
        <>
          <div
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-emerald-400/20 via-teal-300/15 to-transparent blur-3xl"
          />
          <div
            aria-hidden="true"
            className="animate-glow pointer-events-none absolute top-1/2 -left-20 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-amber-400/15 via-emerald-300/10 to-transparent blur-3xl"
            style={{ animationDelay: "2s" }}
          />
        </>
      )}

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* ── Left content ── */}
        <div className="space-y-6 sm:space-y-8">
          {/* Vibrant Certified Badge */}
          <motion.div
            {...makeProps(0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50/90 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-emerald-900 shadow-xs backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <Sparkles size={14} className="text-amber-500" aria-hidden="true" />
            <span>সার্টিফাইড ডায়েটিশিয়ান ও পুষ্টিবিদ</span>
          </motion.div>

          {/* Heading with vibrant gradient text */}
          <motion.h1
            {...makeProps(0.18, 30)}
            className="font-serif text-4xl font-bold leading-[1.18] tracking-tight text-emerald-950 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            আপনার সুস্বাস্থ্য-ই,{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">
              আপনার সম্পদ।
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            {...makeProps(0.3)}
            className="max-w-lg text-base sm:text-lg leading-relaxed text-muted"
          >
            নমস্কার/সালাম, আমি প্রিয়া সাহা, একজন সার্টিফাইড ডায়েটিশিয়ান ও পুষ্টিবিদ।
            বিজ্ঞানসম্মত ডায়েট ও পুষ্টি পরামর্শের মাধ্যমে আপনার শারীরিক সুস্থতায়
            নিরলস কাজ করে যাচ্ছি।
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...makeProps(0.4)}
            className="flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            <motion.a
              href="#contact"
              className="btn-vibrant inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold shadow-lg shadow-emerald-600/30"
              whileHover={reduced ? {} : { scale: 1.03 }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <span>সিরিয়াল বুক করুন</span>
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
              className="inline-flex items-center justify-center rounded-full border-2 border-emerald-600/25 bg-white/90 px-7 py-3.5 text-base font-semibold text-emerald-900 backdrop-blur-sm transition-all hover:border-emerald-600 hover:bg-emerald-50 active:scale-98"
              whileHover={reduced ? {} : { scale: 1.02 }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              সেবাসমূহ দেখুন
            </motion.a>
          </motion.div>

          {/* Credentials Pills */}
          <motion.ul
            {...makeProps(0.5)}
            className="flex flex-wrap gap-2 pt-2"
          >
            {credentials.map((item, i) => (
              <motion.li
                key={item}
                initial={reduced ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.5 + i * 0.06, ease: easeOut }}
                className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-white/90 px-3 py-1 text-xs sm:text-sm font-medium text-emerald-900 shadow-2xs"
              >
                <CheckCircle2 size={13} className="text-emerald-600 shrink-0" aria-hidden="true" />
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
            className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-white to-amber-400/20 p-2 shadow-2xl shadow-emerald-950/15 ring-1 ring-emerald-200"
          >
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-surface-alt">
              {/* Priya's portrait */}
              <Image
                src="/priya-saha.jpeg"
                alt="ডায়েটিশিয়ান প্রিয়া সাহা"
                fill
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Gradient Bottom Vignette */}
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-emerald-950/70 via-emerald-950/20 to-transparent pointer-events-none" />

              {/* Name overlay card */}
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/40 bg-white/90 p-3.5 shadow-lg backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-serif text-base font-bold text-emerald-950">
                      প্রিয়া সাহা
                    </p>
                    <p className="text-xs font-medium text-muted">
                      সার্টিফাইড ডায়েটিশিয়ান — চট্টগ্রাম
                    </p>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Shield size={15} />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Experience Badge (Visible on all devices!) */}
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, x: -12, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55, ease: easeOut }}
            className="absolute -bottom-3 -left-2 sm:-bottom-4 sm:-left-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-3 sm:px-5 sm:py-3.5 shadow-xl shadow-amber-500/30 text-white"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-amber-200 shrink-0" />
              <div>
                <p className="text-xs sm:text-sm font-bold leading-tight">বিজ্ঞানসম্মত পুষ্টি</p>
                <p className="text-[11px] text-amber-100 leading-tight">ব্যক্তিগত ডায়েট চার্ট</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
