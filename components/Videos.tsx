"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Play,
  ExternalLink,
  Video,
  Sparkles,
  Calendar,
  Share2,
  Heart,
  Activity,
  Apple,
  ShieldAlert,
  Flame,
  Baby,
} from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { useLanguage, useT } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import Reveal from "@/components/ui/Reveal";
import StaggerReveal, { StaggerItem } from "@/components/ui/StaggerReveal";

interface ReelTopic {
  id: string;
  tagBn: string;
  tagEn: string;
  titleBn: string;
  titleEn: string;
  descBn: string;
  descEn: string;
  gradient: string;
  icon: typeof Heart;
}

const reelTopics: ReelTopic[] = [
  {
    id: "diabetic-tips",
    tagBn: "ডায়াবেটিস সচেতনতা",
    tagEn: "Diabetes Care",
    titleBn: "ডায়াবেটিস নিয়ন্ত্রণে দৈনন্দিন খাবারের সঠিক তালিকা",
    titleEn: "Daily Diet Guide for Natural Blood Sugar Management",
    descBn: "রক্তে শর্করা না বাড়িয়ে কীভাবে পর্যাপ্ত শক্তি বজায় রাখবেন এবং জটিলতা এড়াবেন।",
    descEn: "How to maintain steady energy and prevent complications without blood sugar spikes.",
    gradient: "from-emerald-600/90 to-teal-800/90",
    icon: Heart,
  },
  {
    id: "weight-loss",
    tagBn: "ওজন নিয়ন্ত্রণ",
    tagEn: "Weight Management",
    titleBn: "ওজন কমানোর ৫টি সহজ ও টেকসই ঘরোয়া নিয়ম",
    titleEn: "5 Sustainable Habits for Healthy Weight Loss",
    descBn: "না খেয়ে না থেকে বিজ্ঞানসম্মত উপায়ে মেদ ঝরানোর সহজ ও কার্যকর খাদ্যতালিকা।",
    descEn: "Effective diet principles to burn fat without starving or losing essential muscle.",
    gradient: "from-amber-600/90 to-orange-800/90",
    icon: Flame,
  },
  {
    id: "child-nutrition",
    tagBn: "শিশু ও মা",
    tagEn: "Child Nutrition",
    titleBn: "শিশুর সঠিক বৃদ্ধি ও মেধা বিকাশে পরিপূরক পুষ্টি",
    titleEn: "Complementary Nutrition for Child Growth & Brain Health",
    descBn: "৬ মাসের পর শিশুদের ঘরের তৈরি পুষ্টিকর খাবার এবং রোগ প্রতিরোধ ক্ষমতা বৃদ্ধির টিপস।",
    descEn: "Nutritious homemade complementary foods and immunity boosters after 6 months.",
    gradient: "from-blue-600/90 to-indigo-800/90",
    icon: Baby,
  },
  {
    id: "pcos-hormones",
    tagBn: "হরমোন ও PCOS",
    tagEn: "PCOS & Hormones",
    titleBn: "PCOS ও হরমোনাল ভারসাম্য রক্ষায় বিজ্ঞানসম্মত খাদ্যাভ্যাস",
    titleEn: "Dietary Guidance for PCOS & Hormonal Balance",
    descBn: "ইনসুলিন রেজিস্ট্যান্স কমিয়ে স্বাভাবিক ওজন ও শারীরিক সুস্থতা ফিরিয়ে আনার ডায়েট।",
    descEn: "Managing insulin resistance and restoring hormonal rhythm through wholesome food.",
    gradient: "from-rose-600/90 to-pink-800/90",
    icon: Sparkles,
  },
  {
    id: "fatty-liver",
    tagBn: "লিভার ও হার্ট",
    tagEn: "Heart & Liver",
    titleBn: "ফ্যাটি লিভার ও উচ্চ রক্তচাপ প্রতিরোধে লো-ফ্যাট ডায়েট",
    titleEn: "Low-Fat Dietary Guide for Fatty Liver & Hypertension",
    descBn: "কোলেস্টেরল নিয়ন্ত্রণ এবং রক্তনালী পরিষ্কার রাখতে উপকারী খাদ্যাভ্যাস।",
    descEn: "Beneficial meal adjustments to regulate cholesterol and maintain vascular health.",
    gradient: "from-teal-600/90 to-cyan-800/90",
    icon: Activity,
  },
  {
    id: "kidney-care",
    tagBn: "কিডনি স্বাস্থ্য",
    tagEn: "Kidney Care",
    titleBn: "কিডনির সুস্থতা রক্ষায় সঠিক প্রোটিন ও পানির ভারসাম্য",
    titleEn: "Optimal Protein & Fluid Balance for Kidney Health",
    descBn: "কিডনির ওপর অতিরিক্ত চাপ না ফেলে নিরাপদ মাত্রার সুষম খাদ্যাভ্যাস তৈরির কৌশল।",
    descEn: "Strategies for a balanced renal diet without putting extra load on your kidneys.",
    gradient: "from-purple-600/90 to-slate-800/90",
    icon: ShieldAlert,
  },
];

export default function Videos() {
  const t = useT();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="videos"
      className={`relative overflow-hidden py-16 sm:py-24 transition-colors duration-300 ${
        isDark ? "bg-[#0b1410]" : "bg-gradient-to-b from-[#f8faf8] via-[#eef6f1]/60 to-[#f8faf8]"
      }`}
    >
      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-full max-w-5xl rounded-full blur-3xl opacity-30 ${
          isDark ? "bg-emerald-800/30" : "bg-emerald-300/40"
        }`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <Reveal>
            <div
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold shadow-xs ${
                isDark
                  ? "border-emerald-700/60 bg-emerald-950/60 text-emerald-300"
                  : "border-emerald-300/80 bg-emerald-100/70 text-emerald-900"
              }`}
            >
              <Video size={15} className="text-emerald-500 animate-pulse" />
              <span>{t("videos.label")}</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <a
                href={siteConfig.facebookReels}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center gap-2.5 group transition-colors duration-200 ${
                  isDark ? "text-emerald-50 hover:text-emerald-400" : "text-emerald-950 hover:text-emerald-700"
                }`}
                title={lang === "en" ? "Watch Reels on Facebook" : "ফেসবুকে রিলস দেখুন"}
              >
                <span>{t("videos.heading")}</span>
                <ExternalLink
                  size={24}
                  className="opacity-50 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:opacity-100 shrink-0"
                  aria-hidden="true"
                />
              </a>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto ${
                isDark ? "text-emerald-200/80" : "text-emerald-800/90"
              }`}
            >
              {t("videos.desc")}
            </p>
          </Reveal>
        </div>

        {/* Video / Reels Cards Grid */}
        <div className="mt-12 sm:mt-16">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reelTopics.map((reel) => {
              const Icon = reel.icon;
              const tag = lang === "en" ? reel.tagEn : reel.tagBn;
              const title = lang === "en" ? reel.titleEn : reel.titleBn;
              const desc = lang === "en" ? reel.descEn : reel.descBn;

              return (
                <StaggerItem key={reel.id}>
                  <a
                    href={siteConfig.facebookReels}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                      isDark
                        ? "border-emerald-900/60 bg-emerald-950/30 hover:border-emerald-700/80 hover:bg-emerald-900/40"
                        : "border-emerald-100 bg-white hover:border-emerald-300 hover:shadow-emerald-900/10"
                    }`}
                  >
                    {/* Top row: badge & duration */}
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                            isDark
                              ? "bg-emerald-900/80 text-emerald-200 border border-emerald-700/50"
                              : "bg-emerald-50 text-emerald-800 border border-emerald-200"
                          }`}
                        >
                          <Icon size={13} className="text-emerald-500" />
                          {tag}
                        </span>

                        <span
                          className={`text-xs flex items-center gap-1 font-medium ${
                            isDark ? "text-emerald-400" : "text-emerald-600"
                          }`}
                        >
                          <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-ping" />
                          Reel
                        </span>
                      </div>

                      {/* Video graphic preview card */}
                      <div
                        className={`relative aspect-video w-full rounded-xl overflow-hidden mb-5 bg-gradient-to-br ${reel.gradient} flex items-center justify-center shadow-inner group-hover:scale-[1.02] transition-transform duration-300`}
                      >
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

                        {/* Centered play button */}
                        <div
                          className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-emerald-900 shadow-lg backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white`}
                        >
                          <Play size={24} className="ml-1 fill-emerald-800 text-emerald-800" />
                        </div>

                        {/* Bottom overlay badge */}
                        <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-white/90 font-medium">
                          <span className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                            <Sparkles size={11} className="text-amber-300" />
                            {lang === "en" ? "Nutrition Tip" : "পুষ্টি টিপস"}
                          </span>
                          <span className="bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                            Facebook
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3
                        className={`font-serif text-lg sm:text-xl font-bold line-clamp-2 transition-colors duration-200 group-hover:text-emerald-500 ${
                          isDark ? "text-emerald-100" : "text-emerald-950"
                        }`}
                      >
                        {title}
                      </h3>

                      <p
                        className={`mt-2 text-sm line-clamp-2 leading-relaxed ${
                          isDark ? "text-emerald-300/70" : "text-emerald-700/80"
                        }`}
                      >
                        {desc}
                      </p>
                    </div>

                    {/* Bottom CTA link */}
                    <div
                      className={`mt-5 pt-4 border-t flex items-center justify-between text-sm font-semibold transition-colors duration-200 ${
                        isDark
                          ? "border-emerald-900/60 text-emerald-400 group-hover:text-emerald-300"
                          : "border-emerald-100 text-emerald-700 group-hover:text-emerald-900"
                      }`}
                    >
                      <span className="flex items-center gap-1.5">
                        {t("videos.watch.reel")}
                      </span>
                      <ExternalLink
                        size={15}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>

        {/* Facebook Page Highlight Banner */}
        <Reveal delay={0.25} className="mt-12 sm:mt-16">
          <div
            className={`relative overflow-hidden rounded-3xl border p-8 sm:p-12 shadow-xl ${
              isDark
                ? "border-emerald-800/60 bg-gradient-to-br from-emerald-950/80 via-[#0e2119] to-emerald-950/90 text-white"
                : "border-emerald-200 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 text-white shadow-emerald-950/20"
            }`}
          >
            {/* Ambient pattern */}
            <div
              aria-hidden="true"
              className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none"
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-emerald-200 backdrop-blur-md border border-white/10">
                  <Share2 size={13} className="text-amber-400" />
                  <span>{t("videos.badge.official")}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                  {t("videos.cta.title")}
                </h3>

                <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
                  {t("videos.cta.desc")}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
                <a
                  href={siteConfig.facebookReels}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 px-7 py-3.5 text-sm sm:text-base font-semibold text-emerald-950 shadow-lg shadow-emerald-900/40 transition-all duration-300 hover:scale-[1.03] hover:from-emerald-400 hover:to-teal-300"
                >
                  <span>{t("videos.cta.button")}</span>
                  <ExternalLink size={16} />
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm sm:text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  <Calendar size={16} />
                  <span>{t("videos.cta.consult")}</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
