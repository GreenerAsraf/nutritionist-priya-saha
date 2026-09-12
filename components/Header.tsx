"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  ChevronRight,
  Sun,
  Moon,
  Languages,
} from "lucide-react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/constants";
import { useTheme } from "@/lib/theme-context";
import { useLanguage } from "@/lib/language-context";

const easeCustom: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeExit: [number, number, number, number] = [0.45, 0, 0.55, 1];

/** Maps nav link hrefs to their i18n keys. */
const NAV_KEY_MAP: Record<string, string> = {
  "#gallery":      "nav.gallery",
  "#about":        "nav.about",
  "#services":     "nav.services",
  "#approach":     "nav.approach",
  "#testimonials": "nav.testimonials",
  "#contact":      "nav.contact",
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  const menuVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -12, scale: 0.98 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.26, ease: easeCustom, staggerChildren: 0.045, delayChildren: 0.04 },
    },
    exit: { opacity: 0, y: prefersReducedMotion ? 0 : -10, scale: 0.98,
      transition: { duration: 0.18, ease: easeExit } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -12 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.22, ease: easeCustom } },
  };

  /** Shared theme + language toggle row */
  const ToggleRow = ({ inDrawer = false }: { inDrawer?: boolean }) => (
    <div className={`flex items-center gap-2 ${inDrawer ? "justify-center" : ""}`}>
      {/* Dark / Light toggle */}
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={isDark ? t("theme.light") : t("theme.dark")}
        title={isDark ? t("theme.light") : t("theme.dark")}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-all cursor-pointer ${
          isDark
            ? "bg-amber-400/15 text-amber-300 hover:bg-amber-400/25 border border-amber-400/30"
            : "bg-emerald-100/80 text-emerald-800 hover:bg-emerald-200/80 border border-emerald-200"
        }`}
      >
        {isDark ? <Sun size={15} /> : <Moon size={15} />}
      </button>

      {/* Language toggle */}
      <button
        type="button"
        onClick={toggleLang}
        aria-label={lang === "bn" ? "Switch to English" : "বাংলায় পরিবর্তন করুন"}
        className={`flex items-center gap-1 h-8 rounded-full px-2.5 text-xs font-bold transition-all cursor-pointer border ${
          isDark
            ? "bg-emerald-900/50 text-emerald-300 hover:bg-emerald-800/70 border-emerald-700/60"
            : "bg-white/80 text-emerald-900 hover:bg-emerald-50 border-emerald-200/80"
        }`}
      >
        <Languages size={13} />
        <span>{t("lang.switch")}</span>
      </button>
    </div>
  );

  return (
    <>
      {/* ── Main Floating Glass Navbar ──────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: easeCustom }}
        className="sticky top-0 z-40 px-3 py-1.5 sm:px-5 sm:py-2 transition-all duration-300"
      >
        <div
          className={`mx-auto max-w-6xl rounded-2xl sm:rounded-full px-4 py-2 sm:px-5 transition-all duration-300 ${
            scrolled ? "glass-pill-scrolled" : "glass-pill"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            {/* Logo & Identity */}
            <a href="#" className="group flex items-center gap-2.5 shrink-0">
              <div className="relative h-9 w-9 sm:h-10 sm:w-10 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 shadow transition-transform duration-300 group-hover:scale-105">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-surface">
                  <Image
                    src="/logo.jpeg"
                    alt={`${t("site.name")} ${t("site.tagline")}`}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 36px, 40px"
                  />
                </div>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500 shadow-xs" />
              </div>

              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1.5">
                  <span
                    className={`font-serif text-base sm:text-lg font-bold tracking-tight ${
                      isDark ? "text-emerald-100" : "text-emerald-950"
                    }`}
                  >
                    {t("site.name")}
                  </span>
                  <span
                    className={`hidden sm:inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      isDark
                        ? "bg-emerald-800/60 text-emerald-300"
                        : "bg-emerald-100/90 text-emerald-800"
                    }`}
                  >
                    <Sparkles size={9} className="text-amber-500" />
                    {t("site.certified")}
                  </span>
                </div>
                <span className={`text-[10px] font-medium tracking-wider ${isDark ? "text-emerald-400" : "text-muted"}`}>
                  {t("site.tagline")}
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-5 lg:flex" aria-label={lang === "bn" ? "প্রধান মেনু" : "Main menu"}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-xs font-semibold transition-colors ${
                    isDark ? "text-emerald-300 hover:text-emerald-100" : "text-muted hover:text-emerald-700"
                  }`}
                >
                  {t(NAV_KEY_MAP[link.href] ?? link.href)}
                </a>
              ))}
            </nav>

            {/* Desktop right actions: toggles + CTA */}
            <div className="hidden lg:flex items-center gap-2">
              <ToggleRow />

              <a
                href="#contact"
                className="btn-vibrant inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold shadow-md"
              >
                <Calendar size={14} />
                <span>{t("nav.appointment")}</span>
              </a>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <ToggleRow />

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                className={`flex h-9 w-9 items-center justify-center rounded-full border transition-colors active:scale-95 cursor-pointer ${
                  isDark
                    ? "border-emerald-700/60 bg-emerald-900/60 text-emerald-200 hover:bg-emerald-800/80"
                    : "border-emerald-200/80 bg-white/90 text-emerald-950 hover:bg-emerald-50"
                }`}
                onClick={() => setOpen(!open)}
                aria-label={open ? t("nav.close") : t("nav.open")}
                aria-expanded={open}
              >
                {open ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full Drawer / Overlay ─────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col justify-end bg-emerald-950/60 backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
          >
            {/* Drawer Container */}
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`relative max-h-[88vh] overflow-y-auto rounded-t-3xl border-t p-5 shadow-2xl ${
                isDark
                  ? "border-emerald-800/60 bg-emerald-950"
                  : "border-emerald-200/80 bg-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Header */}
              <div className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-emerald-800/60" : "border-emerald-100"}`}>
                <div className="flex items-center gap-2.5">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-emerald-500">
                    <Image src="/logo.jpeg" alt={t("site.name")} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className={`font-serif text-base font-bold ${isDark ? "text-emerald-100" : "text-emerald-950"}`}>
                      {t("site.name")}
                    </h3>
                    <p className={`text-xs ${isDark ? "text-emerald-400" : "text-muted"}`}>{t("site.tagline")}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className={`rounded-full p-2 transition-colors cursor-pointer ${
                    isDark ? "bg-emerald-800/60 text-emerald-300 hover:bg-emerald-700/60" : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100"
                  }`}
                  aria-label={t("nav.close")}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-3 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={itemVariants}
                    className={`flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                      isDark
                        ? "text-emerald-200 hover:bg-emerald-800/50 active:bg-emerald-700/50"
                        : "text-emerald-950 hover:bg-emerald-50 active:bg-emerald-100"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    <span>{t(NAV_KEY_MAP[link.href] ?? link.href)}</span>
                    <ChevronRight size={16} className="text-emerald-500" />
                  </motion.a>
                ))}
              </div>

              {/* Quick Chamber Cards */}
              <div className={`mt-4 space-y-2 rounded-2xl p-3.5 border ${isDark ? "bg-emerald-900/40 border-emerald-800/50" : "bg-emerald-50/70 border-emerald-100"}`}>
                <p className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-emerald-400" : "text-emerald-800"}`}>
                  {t("nav.chamber.direct")}
                </p>

                {/* Max Hospital */}
                <div className={`flex items-center justify-between rounded-xl p-2.5 shadow-xs ${isDark ? "bg-emerald-900/70" : "bg-white"}`}>
                  <div>
                    <p className={`text-xs font-bold ${isDark ? "text-emerald-200" : "text-emerald-950"}`}>{t("nav.max.title")}</p>
                    <p className={`text-[11px] ${isDark ? "text-emerald-400" : "text-muted"}`}>{t("nav.max.hours")}</p>
                  </div>
                  <a
                    href="tel:01713998166"
                    className="flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    <Phone size={11} />
                    {t("nav.call.short")}
                  </a>
                </div>

                {/* Rangamati Hospital */}
                <div className={`flex items-center justify-between rounded-xl p-2.5 shadow-xs ${isDark ? "bg-emerald-900/70" : "bg-white"}`}>
                  <div>
                    <p className={`text-xs font-bold ${isDark ? "text-emerald-200" : "text-emerald-950"}`}>{t("nav.rangamati.title")}</p>
                    <p className={`text-[11px] ${isDark ? "text-emerald-400" : "text-muted"}`}>{t("nav.rangamati.hours")}</p>
                  </div>
                  <a
                    href="tel:01835705031"
                    className="flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700"
                  >
                    <Phone size={11} />
                    {t("nav.call.short")}
                  </a>
                </div>
              </div>

              {/* Main CTA Button */}
              <div className="mt-4">
                <a
                  href="#contact"
                  className="btn-vibrant flex w-full items-center justify-center gap-2 rounded-2xl py-3 text-sm font-bold shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  <Calendar size={16} />
                  <span>{t("nav.online.form")}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
