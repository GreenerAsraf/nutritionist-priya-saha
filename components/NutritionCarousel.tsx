"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Apple,
  Salad,
  ClipboardCheck,
  CheckCircle2,
  Calendar,
  Play,
  Pause,
  ArrowRight,
  X,
  Info,
} from "lucide-react";
import { nutritionItems, type NutritionItem } from "@/lib/nutrition-data";
import { useT, useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";

type FilterCategory = "all" | "fruits" | "meals" | "advice";

export default function NutritionCarousel() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedItem, setSelectedItem] = useState<NutritionItem | null>(null);
  const prefersReduced = useReducedMotion();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const t = useT();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const categories: { key: FilterCategory; label: string; icon: typeof Apple }[] = [
    { key: "all",    label: t("nutrition.filter.all"),    icon: Sparkles },
    { key: "fruits", label: t("nutrition.filter.fruits"), icon: Apple },
    { key: "meals",  label: t("nutrition.filter.meals"),  icon: Salad },
    { key: "advice", label: t("nutrition.filter.advice"), icon: ClipboardCheck },
  ];

  // Filter items based on active tab
  const filteredItems = nutritionItems.filter((item) =>
    activeCategory === "all" ? true : item.category === activeCategory
  );

  const total = filteredItems.length;

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying || prefersReduced || selectedItem !== null) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 3500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, prefersReduced, handleNext, selectedItem]);

  // Touch drag swipe handler
  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number }; velocity: { x: number; y: number } }
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold || info.velocity.x < -400) {
      handleNext();
    } else if (info.offset.x > swipeThreshold || info.velocity.x > 400) {
      handlePrev();
    }
  };

  const currentItem = filteredItems[currentIndex] || filteredItems[0];

  // Get display text based on language
  const getTitle = (item: NutritionItem) => lang === "en" ? (item.titleEn ?? item.title) : item.title;
  const getSubtitle = (item: NutritionItem) => lang === "en" ? (item.subtitleEn ?? item.subtitle) : item.subtitle;
  const getDescription = (item: NutritionItem) => lang === "en" ? (item.descriptionEn ?? item.description) : item.description;
  const getDietitianTip = (item: NutritionItem) => lang === "en" ? (item.dietitianTipEn ?? item.dietitianTip) : item.dietitianTip;
  const getBenefits = (item: NutritionItem) => lang === "en" ? (item.benefitsEn ?? item.benefits) : item.benefits;
  const getCategoryName = (item: NutritionItem) => lang === "en" ? (item.categoryNameEn ?? item.categoryName) : item.categoryName;

  return (
    <section
      id="gallery"
      className={`relative overflow-hidden py-14 sm:py-20 lg:py-24 ${
        isDark
          ? "bg-gradient-to-b from-emerald-950/40 via-background to-background"
          : "bg-gradient-to-b from-white via-emerald-50/40 to-white"
      }`}
    >
      {/* Subtle background ambient elements */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-16 -right-16 h-72 w-72 rounded-full blur-3xl ${isDark ? "bg-emerald-900/20" : "bg-emerald-200/30"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 -left-16 h-80 w-80 rounded-full blur-3xl ${isDark ? "bg-amber-900/10" : "bg-amber-200/20"}`}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center space-y-3 sm:space-y-4">
          <div className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs sm:text-sm font-semibold shadow-2xs ${
            isDark
              ? "border-emerald-700/60 bg-emerald-900/50 text-emerald-200"
              : "border-emerald-300/80 bg-emerald-100/70 text-emerald-900"
          }`}>
            <Sparkles size={15} className="text-amber-500 animate-pulse" />
            <span>{t("nutrition.badge")}</span>
          </div>

          <h2 className={`font-serif text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl ${isDark ? "text-emerald-50" : "text-emerald-950"}`}>
            {t("nutrition.heading1")}{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-amber-500 bg-clip-text text-transparent">
              {t("nutrition.heading2")}
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            {t("nutrition.desc")}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center">
          <div className={`inline-flex max-w-full overflow-x-auto p-1.5 rounded-2xl backdrop-blur-sm border shadow-inner no-scrollbar ${
            isDark ? "bg-emerald-900/40 border-emerald-800/60" : "bg-emerald-950/5 border-emerald-100"
          }`}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30 scale-[1.02]"
                      : isDark
                        ? "text-emerald-200/80 hover:text-emerald-100 hover:bg-emerald-800/50"
                        : "text-emerald-950/80 hover:text-emerald-700 hover:bg-emerald-50/60"
                  }`}
                >
                  <Icon size={16} className={isActive ? "text-amber-300" : "text-emerald-600"} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="mt-8 sm:mt-12 relative"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
          onTouchStart={() => setIsPlaying(false)}
          onTouchEnd={() => setIsPlaying(true)}
        >
          {/* Main Featured Slide Card */}
          <div className="relative mx-auto max-w-5xl">
            <AnimatePresence mode="wait">
              {currentItem && (
                <motion.div
                  key={`${activeCategory}-${currentItem.id}`}
                  initial={{ opacity: 0, x: prefersReduced ? 0 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: prefersReduced ? 0 : -30 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  drag={prefersReduced ? false : "x"}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className={`touch-pan-y overflow-hidden rounded-3xl border shadow-xl transition-all ${
                    isDark
                      ? "bg-emerald-950 border-emerald-800/60 shadow-emerald-950/40"
                      : "bg-white border-emerald-100 shadow-emerald-950/5"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left: Image Card */}
                    <div className="relative lg:col-span-7 h-64 sm:h-80 lg:h-[430px] w-full overflow-hidden bg-surface-alt">
                      <Image
                        src={currentItem.image}
                        alt={currentItem.alt}
                        fill
                        priority
                        className="object-cover transition-transform duration-700 hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 55vw"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-950/15 to-transparent pointer-events-none" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold text-white shadow-md bg-gradient-to-r ${currentItem.badgeColor}`}>
                          <Sparkles size={12} className="text-amber-200" />
                          <span>{currentItem.badge}</span>
                        </span>
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-950 shadow-sm backdrop-blur-md">
                          {getCategoryName(currentItem)}
                        </span>
                      </div>

                      {/* Mobile Caption */}
                      <div className="absolute bottom-3 left-4 right-4 text-white lg:hidden">
                        <p className="text-xs font-medium text-amber-200 uppercase tracking-wider">
                          {getSubtitle(currentItem)}
                        </p>
                        <h3 className="font-serif text-lg font-bold drop-shadow-sm line-clamp-1">
                          {getTitle(currentItem)}
                        </h3>
                      </div>
                    </div>

                    {/* Right: Content Panel */}
                    <div className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 ${
                      isDark
                        ? "bg-gradient-to-br from-emerald-950 to-emerald-900/30"
                        : "bg-gradient-to-br from-white to-emerald-50/20"
                    }`}>
                      <div className="space-y-4">
                        {/* Header (Desktop) */}
                        <div className="hidden lg:block space-y-1.5">
                          <span className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border inline-block ${
                            isDark
                              ? "text-emerald-300 bg-emerald-900/60 border-emerald-700/60"
                              : "text-emerald-700 bg-emerald-50 border-emerald-200/60"
                          }`}>
                            {getSubtitle(currentItem)}
                          </span>
                          <h3 className={`font-serif text-2xl xl:text-3xl font-bold leading-snug ${isDark ? "text-emerald-50" : "text-emerald-950"}`}>
                            {getTitle(currentItem)}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-xs sm:text-sm md:text-base text-muted leading-relaxed">
                          {getDescription(currentItem)}
                        </p>

                        {/* Dietitian Tip */}
                        <div className={`rounded-2xl border p-3.5 sm:p-4 shadow-2xs space-y-1.5 ${
                          isDark
                            ? "border-amber-700/50 bg-amber-900/20"
                            : "border-amber-200/80 bg-amber-50/70"
                        }`}>
                          <div className="flex items-center gap-2">
                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-white font-bold text-[10px]">
                              ★
                            </span>
                            <h4 className={`text-xs sm:text-sm font-bold ${isDark ? "text-amber-200" : "text-amber-950"}`}>
                              {t("nutrition.tip.label")}
                            </h4>
                          </div>
                          <p className={`text-xs sm:text-[13px] leading-relaxed italic pl-7 ${isDark ? "text-amber-300/90" : "text-amber-900/90"}`}>
                            &ldquo;{getDietitianTip(currentItem)}&rdquo;
                          </p>
                        </div>

                        {/* Benefits */}
                        <div className="space-y-1.5 pt-1">
                          <p className={`text-xs font-bold ${isDark ? "text-emerald-200" : "text-emerald-950"}`}>
                            {t("nutrition.benefits")}
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {getBenefits(currentItem).map((benefit, idx) => (
                              <span
                                key={idx}
                                className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-medium ${
                                  isDark
                                    ? "bg-emerald-900/60 text-emerald-200"
                                    : "bg-emerald-100/60 text-emerald-900"
                                }`}
                              >
                                <CheckCircle2 size={12} className="text-emerald-600 shrink-0" />
                                <span>{benefit}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className={`flex flex-col sm:flex-row gap-2.5 pt-2 border-t ${isDark ? "border-emerald-800/60" : "border-emerald-100/80"}`}>
                        <button
                          onClick={() => setSelectedItem(currentItem)}
                          className={`inline-flex items-center justify-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                            isDark
                              ? "border-emerald-700/60 bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800/80"
                              : "border-emerald-300/80 bg-emerald-50/80 text-emerald-900 hover:bg-emerald-100"
                          }`}
                        >
                          <Info size={15} className="text-emerald-700" />
                          <span>{t("nutrition.view")}</span>
                        </button>

                        <a
                          href="#contact"
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/25 hover:bg-emerald-700 transition-all hover:gap-2 active:scale-98"
                        >
                          <Calendar size={15} />
                          <span>{t("nutrition.consult")}</span>
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto px-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                aria-label={t("nutrition.prev")}
                className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                  isDark
                    ? "border-emerald-700/60 bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800/80 hover:border-emerald-600"
                    : "border-emerald-200 bg-white text-emerald-900 hover:bg-emerald-50 hover:border-emerald-400"
                }`}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                aria-label={t("nutrition.next")}
                className={`flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                  isDark
                    ? "border-emerald-700/60 bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800/80 hover:border-emerald-600"
                    : "border-emerald-200 bg-white text-emerald-900 hover:bg-emerald-50 hover:border-emerald-400"
                }`}
              >
                <ChevronRight size={20} />
              </button>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? t("nutrition.autoplay.pause") : t("nutrition.autoplay.play")}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all cursor-pointer ${
                  isPlaying
                    ? isDark
                      ? "border-emerald-700/60 bg-emerald-900/60 text-emerald-300"
                      : "border-emerald-200 bg-emerald-50/70 text-emerald-800"
                    : "border-amber-300 bg-amber-50 text-amber-800"
                }`}
              >
                {isPlaying ? <Pause size={15} /> : <Play size={15} className="ml-0.5" />}
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? "h-2.5 w-7 bg-emerald-600 shadow-sm"
                      : isDark
                        ? "h-2.5 w-2.5 bg-emerald-700 hover:bg-emerald-600"
                        : "h-2.5 w-2.5 bg-emerald-200 hover:bg-emerald-300"
                  }`}
                />
              ))}
            </div>

            {/* Counter */}
            <div className={`text-xs font-semibold border px-3 py-1 rounded-full ${
              isDark
                ? "text-emerald-300 bg-emerald-900/60 border-emerald-700/60"
                : "text-emerald-900 bg-emerald-100/70 border-emerald-200/80"
            }`}>
              <span>{currentIndex + 1}</span> / <span>{total}</span>{" "}
              {t("nutrition.counter")}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-8 hidden sm:grid grid-cols-5 md:grid-cols-9 gap-2 max-w-5xl mx-auto">
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`relative aspect-square overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "border-emerald-600 scale-105 shadow-md shadow-emerald-600/30 ring-2 ring-emerald-400/40"
                    : "border-transparent opacity-60 hover:opacity-100 hover:scale-102"
                }`}
                title={getTitle(item)}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className={`relative w-full max-w-xl overflow-hidden rounded-3xl shadow-2xl border max-h-[90vh] flex flex-col ${
                isDark
                  ? "bg-emerald-950 border-emerald-800/60"
                  : "bg-white border-emerald-100"
              }`}
            >
              {/* Modal Image */}
              <div className="relative h-48 sm:h-56 w-full shrink-0">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 via-emerald-950/30 to-transparent" />

                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/80 hover:bg-white text-emerald-950 flex items-center justify-center shadow-md backdrop-blur-md transition-colors cursor-pointer"
                  aria-label={t("nutrition.close")}
                >
                  <X size={18} />
                </button>

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-semibold bg-emerald-600/90 text-white px-2.5 py-0.5 rounded-full mb-1 inline-block">
                    {getCategoryName(selectedItem)}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    {getTitle(selectedItem)}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-4">
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {getDescription(selectedItem)}
                </p>

                <div className={`rounded-2xl border p-4 space-y-1 ${isDark ? "border-amber-700/50 bg-amber-900/20" : "border-amber-200 bg-amber-50/80"}`}>
                  <p className={`text-xs font-bold flex items-center gap-1.5 ${isDark ? "text-amber-300" : "text-amber-900"}`}>
                    <Sparkles size={14} className="text-amber-600" />
                    {t("nutrition.modal.tip")}
                  </p>
                  <p className={`text-sm leading-relaxed italic ${isDark ? "text-amber-200/90" : "text-amber-950"}`}>
                    &ldquo;{getDietitianTip(selectedItem)}&rdquo;
                  </p>
                </div>

                <div className="space-y-2">
                  <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-emerald-200" : "text-emerald-950"}`}>
                    {t("nutrition.modal.benefits")}
                  </p>
                  <ul className="space-y-1.5">
                    {getBenefits(selectedItem).map((b, i) => (
                      <li key={i} className={`flex items-center gap-2 text-xs sm:text-sm ${isDark ? "text-emerald-200" : "text-emerald-900"}`}>
                        <CheckCircle2 size={15} className="text-emerald-600 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className={`p-4 border-t flex items-center justify-between gap-3 shrink-0 ${
                isDark ? "bg-emerald-900/30 border-emerald-800/60" : "bg-emerald-50/50 border-emerald-100"
              }`}>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold text-muted hover:text-emerald-950 dark:hover:text-emerald-100 transition-colors cursor-pointer"
                >
                  {t("nutrition.close")}
                </button>
                <a
                  href="#contact"
                  onClick={() => setSelectedItem(null)}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-emerald-600/30 hover:bg-emerald-700 transition-colors"
                >
                  <Calendar size={15} />
                  <span>{t("nutrition.book")}</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
