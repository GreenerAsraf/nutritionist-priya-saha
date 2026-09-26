"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Calendar,
  Search,
  Sparkles,
  HelpCircle,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionDock from "@/components/MobileActionDock";
import { whyConsultList } from "@/lib/why-consult-data";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import ServiceModalIcon from "@/components/ServiceModalIcon";

const toBengaliDigits = (num: number): string => {
  const bnDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .padStart(2, "0")
    .split("")
    .map((d) => bnDigits[parseInt(d, 10)] ?? d)
    .join("");
};

export default function WhyConsultPage() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return [
      { key: "all", labelBn: "সবগুলো (২৪)", labelEn: "All Services (24)" },
      { key: "chronic", labelBn: "ডায়াবেটিস, কিডনি ও লিভার", labelEn: "Diabetes, Kidney & Liver", ids: [1, 4, 5, 22, 23] },
      { key: "maternal", labelBn: "মা ও শিশু পুষ্টি", labelEn: "Maternal & Child Health", ids: [16, 19, 20] },
      { key: "lifestyle", labelBn: "ওজন, ত্বক ও ফিটনেস", labelEn: "Weight, Skin & Fitness", ids: [3, 8, 12, 17] },
      { key: "critical", labelBn: "ক্যান্সার, ICU ও স্ট্রোক", labelEn: "Cancer, ICU & Stroke", ids: [2, 7, 14, 15] },
      { key: "special", labelBn: "PCOS, গ্যাস্ট্রিক ও অন্যান্য", labelEn: "PCOS, Gastric & Others", ids: [6, 9, 10, 11, 13, 18, 21, 24] },
    ];
  }, []);

  const filteredItems = useMemo(() => {
    return whyConsultList.filter((item) => {
      const content = lang === "en" ? item.en : item.bn;
      const matchesSearch =
        searchQuery.trim() === "" ||
        content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content.description.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;

      if (activeCategory === "all") return true;

      const catObj = categories.find((c) => c.key === activeCategory);
      return catObj?.ids ? catObj.ids.includes(item.serial) : true;
    });
  }, [searchQuery, activeCategory, lang, categories]);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <div className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-primary transition-colors"
            >
              <ArrowLeft size={16} />
              <span>{lang === "bn" ? "মূল পাতায় ফিরে যান" : "Back to Home"}</span>
            </Link>
          </div>

          {/* Page Header */}
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <HelpCircle size={14} />
              {lang === "bn" ? "বিশেষজ্ঞ পুষ্টি সেবা ও পরামর্শ" : "Specialist Nutrition Guidance"}
            </span>

            <h1 className="mt-4 font-serif text-3xl font-bold text-primary-dark dark:text-primary-light sm:text-4xl md:text-5xl leading-tight">
              {lang === "bn" ? "কেন আমার পরামর্শ বা ডায়েট নিবেন?" : "Why Choose My Diet & Nutrition Advice?"}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed">
              {lang === "bn"
                ? "২৪টি সুনির্দিষ্ট স্বাস্থ্য সমস্যা ও বিশেষায়িত ডায়েট নির্দেশিকা — প্রতিটি মানুষের শারীরিক অবস্থা ও মেটাবলিজম বিশ্লেষণ করে প্রদান করা হয় বিজ্ঞানসম্মত ব্যক্তিগত পরামর্শ।"
                : "Comprehensive clinical dietary solutions for 24 specific medical conditions — designed precisely around your diagnostics, age, and individual metabolic profile."}
            </p>
          </div>

          {/* Unified Call-to-Action Banner */}
          <div className="mx-auto mb-12 max-w-4xl">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-900/10 via-surface to-teal-900/10 p-6 sm:p-8 shadow-sm backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-3.5 text-left">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-white shadow-md shadow-primary/25 mt-0.5">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-foreground">
                      {lang === "bn" ? "পরামর্শ ও সিরিয়াল বুকিং" : "Consultation & Appointment"}
                    </h2>
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

                  <Link
                    href="/#contact"
                    className="btn-vibrant flex items-center justify-center gap-2 rounded-2xl py-3 px-6 text-sm font-bold shadow-md shadow-emerald-500/20"
                  >
                    <Calendar size={16} className="shrink-0" />
                    <span>{lang === "bn" ? "অ্যাপয়েন্টমেন্ট" : "Appointment"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Search & Category filter */}
          <div className="mx-auto mb-10 max-w-3xl">
            <div className="mx-auto flex max-w-md items-center rounded-2xl border border-border bg-surface px-4 py-2.5 shadow-sm ring-1 ring-black/5 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
              <Search size={18} className="text-muted shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === "bn"
                    ? "যে কোনো রোগ বা সেবার নাম লিখে খুঁজুন..."
                    : "Search by health condition or service..."
                }
                className="w-full bg-transparent px-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-hidden"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-xs font-semibold text-muted hover:text-foreground cursor-pointer"
                >
                  {lang === "bn" ? "মুছুন" : "Clear"}
                </button>
              )}
            </div>

            {/* Category tabs */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      isActive
                        ? "bg-primary text-white shadow-sm shadow-primary/30 scale-102"
                        : "border border-border bg-surface text-muted hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {lang === "en" ? cat.labelEn : cat.labelBn}
                  </button>
                );
              })}
            </div>
          </div>

          {/* All 24 Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => {
                const content = lang === "en" ? item.en : item.bn;
                const formattedSerial =
                  lang === "bn"
                    ? `${toBengaliDigits(item.serial)}.`
                    : `${String(item.serial).padStart(2, "0")}.`;

                return (
                  <motion.article
                    layout
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
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
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Empty search state */}
          {filteredItems.length === 0 && (
            <div className="mx-auto max-w-md rounded-3xl border border-border bg-surface p-8 text-center mt-6">
              <p className="text-base font-bold text-foreground">
                {lang === "bn" ? "কোনো ফলাফল পাওয়া যায়নি" : "No services found"}
              </p>
              <p className="mt-1 text-sm text-muted">
                {lang === "bn" ? "অনুগ্রহ করে অন্য শব্দ লিখে চেষ্টা করুন।" : "Please try a different search term."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("all");
                }}
                className="mt-4 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-primary-dark cursor-pointer"
              >
                {lang === "bn" ? "সব সেবা দেখুন" : "View All Services"}
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <MobileActionDock />
    </>
  );
}
