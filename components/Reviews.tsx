"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useT, useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import Reveal from "@/components/ui/Reveal";
import StaggerReveal, { StaggerItem } from "@/components/ui/StaggerReveal";

interface Review {
  name: string;
  role: string;
  rating: number;
  quote: string;
  avatar: string; // initials fallback
}

const reviewsBn: Review[] = [
  {
    name: "মোঃ আবদুল করিম",
    role: "রোগী · ডায়াবেটিক ডায়েট · ২০২৫",
    rating: 5,
    quote: "প্রিয়া ম্যামের পরামর্শে ডায়াবেটিস অনেকটাই নিয়ন্ত্রণে এসেছে। তাঁর ডায়েট প্ল্যান মেনে চলা খুব সহজ এবং ফলাফলও অসাধারণ।",
    avatar: "আক",
  },
  {
    name: "সুমাইয়া বেগম",
    role: "রোগী · গর্ভকালীন পুষ্টি · ২০২৫",
    rating: 5,
    quote: "গর্ভকালীন সময়ে প্রিয়া ম্যামের পুষ্টি পরামর্শ আমার ও আমার শিশুর স্বাস্থ্য রক্ষায় অনেক সাহায্য করেছে। অত্যন্ত যত্নশীল ও পেশাদার।",
    avatar: "সব",
  },
  {
    name: "রাহেলা খাতুন",
    role: "রোগী · ওজন নিয়ন্ত্রণ · ২০২৪",
    rating: 5,
    quote: "মাত্র ৩ মাসে ১০ কেজি ওজন কমিয়েছি, কোনো ক্র্যাশ ডায়েট ছাড়াই। সত্যিই অসাধারণ অভিজ্ঞতা, ধন্যবাদ ম্যাম।",
    avatar: "রখ",
  },
  {
    name: "মোঃ জাহিদ হোসেন",
    role: "রোগী · কিডনি ডায়েট · ২০২৪",
    rating: 5,
    quote: "কিডনির সমস্যায় ডায়েট বুঝতে পারছিলাম না। প্রিয়া ম্যামের বিস্তারিত গাইডলাইন পেয়ে এখন অনেক ভালো আছি। পরীক্ষার ফলাফলও উন্নত।",
    avatar: "জহ",
  },
  {
    name: "নুসরাত জাহান",
    role: "রোগী · PCOS ডায়েট · ২০২৫",
    rating: 5,
    quote: "PCOS-এর সমস্যায় অনেক কষ্টে ছিলাম। প্রিয়া ম্যামের ডায়েট প্ল্যান মেনে ৪ মাসে মাসিক নিয়মিত হয়েছে। অনেক কৃতজ্ঞ।",
    avatar: "নজ",
  },
  {
    name: "তানভীর আহমেদ",
    role: "রোগী · স্পোর্টস ডায়েট · ২০২৫",
    rating: 5,
    quote: "জিমে যাওয়ার পর ডায়েট কেমন হবে বুঝতাম না। ম্যামের প্রি ও পোস্ট ওয়ার্কআউট মিল প্ল্যান পেয়ে স্ট্যামিনা ও মাসেল দুটোই বেড়েছে।",
    avatar: "তআ",
  },
];

const reviewsEn: Review[] = [
  {
    name: "Md. Abdul Karim",
    role: "Patient · Diabetic Diet · 2025",
    rating: 5,
    quote: "With Priya Ma'am's guidance my diabetes is now well under control. Her diet plan is very easy to follow and the results are remarkable.",
    avatar: "AK",
  },
  {
    name: "Sumaiya Begum",
    role: "Patient · Prenatal Nutrition · 2025",
    rating: 5,
    quote: "Priya Ma'am's nutritional advice during my pregnancy was invaluable for both my health and my baby's wellbeing. Extremely caring and professional.",
    avatar: "SB",
  },
  {
    name: "Rahela Khatun",
    role: "Patient · Weight Management · 2024",
    rating: 5,
    quote: "I lost 10 kg in just 3 months — without any crash dieting. A truly remarkable experience. Thank you Ma'am.",
    avatar: "RK",
  },
  {
    name: "Md. Zahid Hossain",
    role: "Patient · Kidney Diet · 2024",
    rating: 5,
    quote: "I was very confused about kidney diet. Priya Ma'am's detailed guidelines made everything clear and my test results have significantly improved.",
    avatar: "ZH",
  },
  {
    name: "Nusrat Jahan",
    role: "Patient · PCOS Diet · 2025",
    rating: 5,
    quote: "I was struggling with PCOS. Following Priya Ma'am's diet plan, my cycle became regular within 4 months. Extremely grateful.",
    avatar: "NJ",
  },
  {
    name: "Tanvir Ahmed",
    role: "Patient · Sports Diet · 2025",
    rating: 5,
    quote: "I didn't know how to eat around gym sessions. Ma'am's pre and post-workout meal plan helped me build muscle and boost stamina tremendously.",
    avatar: "TA",
  },
];

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-amber-400 text-amber-400" : "text-border"}
        />
      ))}
    </div>
  );
}

const CARDS_PER_PAGE = 3;

export default function Reviews() {
  const t = useT();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const reduced = useReducedMotion();
  const isDark = theme === "dark";

  const reviews = lang === "en" ? reviewsEn : reviewsBn;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / CARDS_PER_PAGE);
  const visible = reviews.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="py-20 md:py-28 bg-surface-alt">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <Reveal variant="fadeUp">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary-light">
              {t("reviews.label")}
            </p>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.08}>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-primary-dark md:text-5xl">
              {t("reviews.heading")}
            </h2>
          </Reveal>

          {/* Aggregate rating badge */}
          <Reveal variant="fadeUp" delay={0.14}>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-amber-200 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700/40 px-5 py-2.5 shadow-sm">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-amber-700 dark:text-amber-300">
                {avgRating} / 5
              </span>
              <span className={`text-sm ${isDark ? "text-emerald-400" : "text-muted"}`}>
                ({reviews.length} {t("reviews.count")})
              </span>
            </div>
          </Reveal>
        </div>

        {/* Review cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((review) => (
              <article
                key={review.name}
                className={`flex h-full flex-col rounded-2xl border p-7 transition-shadow hover:shadow-lg ${
                  isDark
                    ? "border-emerald-800/50 bg-emerald-900/30 hover:shadow-emerald-900/30"
                    : "border-border bg-surface hover:shadow-emerald-100/60"
                }`}
              >
                {/* Quote icon */}
                <Quote
                  size={26}
                  className={isDark ? "text-emerald-600/60" : "text-emerald-200"}
                  aria-hidden="true"
                />

                {/* Rating */}
                <div className="mt-3">
                  <StarRow rating={review.rating} />
                </div>

                {/* Quote text */}
                <p className={`mt-4 flex-1 text-sm leading-relaxed ${isDark ? "text-emerald-200" : "text-muted"}`}>
                  &ldquo;{review.quote}&rdquo;
                </p>

                {/* Author */}
                <footer className={`mt-6 flex items-center gap-3 border-t pt-5 ${isDark ? "border-emerald-800/40" : "border-border"}`}>
                  {/* Avatar circle */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-xs font-bold text-white shadow-sm">
                    {review.avatar}
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? "text-emerald-100" : "text-primary-dark"}`}>
                      {review.name}
                    </p>
                    <p className={`text-xs ${isDark ? "text-emerald-500" : "text-muted"}`}>
                      {review.role}
                    </p>
                  </div>
                </footer>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label={t("reviews.prev")}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:opacity-40 ${
                isDark
                  ? "border-emerald-700/60 bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/60"
                  : "border-border bg-surface text-muted hover:bg-emerald-50 hover:text-primary"
              }`}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-6 bg-primary"
                      : isDark
                        ? "w-2 bg-emerald-700/60 hover:bg-emerald-600"
                        : "w-2 bg-border hover:bg-primary-light"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              aria-label={t("reviews.next")}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors disabled:opacity-40 ${
                isDark
                  ? "border-emerald-700/60 bg-emerald-900/40 text-emerald-300 hover:bg-emerald-800/60"
                  : "border-border bg-surface text-muted hover:bg-emerald-50 hover:text-primary"
              }`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
