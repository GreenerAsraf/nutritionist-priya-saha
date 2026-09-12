"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Menu,
  X,
  Phone,
  Calendar,
  Sparkles,
  MapPin,
  ChevronRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Image from "next/image";
import { navLinks, siteConfig } from "@/lib/constants";

const easeCustom: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeExit: [number, number, number, number] = [0.45, 0, 0.55, 1];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const menuVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : -16, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.28,
        ease: easeCustom,
        staggerChildren: 0.05,
        delayChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : -12,
      scale: 0.98,
      transition: { duration: 0.2, ease: easeExit },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -14 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25, ease: easeCustom },
    },
  };

  return (
    <>
      {/* ── Top Vibrant Announcement Ribbon ────────────────────────────────────── */}
      <div className="relative z-50 bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 px-4 py-2 text-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between text-xs sm:text-sm">
          {/* Live Status Indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />
            </span>
            <span className="font-semibold tracking-wide">
              চেম্বার সিরিয়াল বুকিং চলছে
            </span>
            <span className="hidden text-emerald-200 sm:inline">|</span>
            <span className="hidden text-emerald-100 sm:inline">
              ম্যাক্স হসপিটাল (মেহেদীবাগ) &amp; রাঙ্গুনিয়া হেলথ কেয়ার
            </span>
          </div>

          {/* Quick Call */}
          <div className="flex items-center gap-3">
            <a
              href="tel:01713998166"
              className="flex items-center gap-1.5 font-bold text-amber-300 transition-colors hover:text-white"
            >
              <Phone size={13} className="animate-bounce" />
              <span>01713-998166</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Floating Glass Navbar ────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: easeCustom }}
        className={`sticky top-0 z-40 px-3 py-2 sm:px-6 sm:py-3 transition-all duration-300 ${
          scrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <div
          className={`mx-auto max-w-6xl rounded-2xl sm:rounded-full px-4 py-2.5 sm:px-6 sm:py-3 transition-all duration-300 ${
            scrolled ? "glass-pill-scrolled" : "glass-pill"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo & Identity */}
            <a href="#" className="group flex items-center gap-3">
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500 via-teal-400 to-amber-400 shadow-md transition-transform duration-300 group-hover:scale-105">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                  <Image
                    src="/logo.jpeg"
                    alt="প্রিয়া সাহা লোগো"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 44px, 48px"
                  />
                </div>
                {/* Active Online Indicator dot */}
                <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-xs" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-emerald-950">
                    {siteConfig.name}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-100/90 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
                    <Sparkles size={10} className="text-amber-500" />
                    সার্টিফাইড
                  </span>
                </div>
                <span className="text-[11px] font-medium tracking-wider text-muted">
                  ডায়েটিশিয়ান &amp; পুষ্টিবিদ
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-7 lg:flex" aria-label="প্রধান মেনু">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link text-sm font-semibold text-muted hover:text-emerald-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Vibrant Desktop Appointment Button */}
              <a
                href="#contact"
                className="btn-vibrant inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold shadow-md"
              >
                <Calendar size={15} />
                <span>অ্যাপয়েন্টমেন্ট নিন</span>
              </a>
            </nav>

            {/* Mobile Actions Container */}
            <div className="flex items-center gap-2 lg:hidden">
              {/* Quick Call Button on Mobile */}
              <a
                href="tel:01713998166"
                aria-label="সরাসরি কল করুন"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/30 transition-transform active:scale-95 animate-ripple"
              >
                <Phone size={18} />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-200/80 bg-white/90 text-emerald-950 shadow-xs transition-colors hover:bg-emerald-50 active:scale-95"
                onClick={() => setOpen(!open)}
                aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
                aria-expanded={open}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile Full Drawer / Overlay ───────────────────────────────────────── */}
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
              className="relative max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-emerald-200/80 bg-white p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between border-b border-emerald-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-emerald-500">
                    <Image
                      src="/logo.jpeg"
                      alt="লোগো"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-emerald-950">
                      {siteConfig.name}
                    </h3>
                    <p className="text-xs text-muted">ডায়েটিশিয়ান ও পুষ্টিবিদ</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-emerald-50 p-2 text-emerald-800 transition-colors hover:bg-emerald-100"
                  aria-label="বন্ধ করুন"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="mt-4 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    variants={itemVariants}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold text-emerald-950 transition-colors hover:bg-emerald-50 active:bg-emerald-100"
                    onClick={() => setOpen(false)}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={18} className="text-emerald-500" />
                  </motion.a>
                ))}
              </div>

              {/* Quick Chamber Call Cards */}
              <div className="mt-5 space-y-2 rounded-2xl bg-emerald-50/70 p-4 border border-emerald-100">
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                  সরাসরি চেম্বার সিরিয়াল
                </p>

                {/* Chamber 1 */}
                <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-xs">
                  <div>
                    <p className="text-sm font-bold text-emerald-950">
                      ম্যাক্স হসপিটাল লিঃ (মেহেদীবাগ)
                    </p>
                    <p className="text-xs text-muted">রুম ২০৮ (রবি-শুক্র ২টা-৬টা)</p>
                  </div>
                  <a
                    href="tel:01713998166"
                    className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700"
                  >
                    <Phone size={12} />
                    কল দিন
                  </a>
                </div>

                {/* Chamber 2 */}
                <div className="flex items-center justify-between rounded-xl bg-white p-3 shadow-xs">
                  <div>
                    <p className="text-sm font-bold text-emerald-950">
                      রাঙ্গুনিয়া হেলথ কেয়ার হাসপাতাল
                    </p>
                    <p className="text-xs text-muted">শনি, সোম, বৃহঃ (সকাল ৯-১২টা)</p>
                  </div>
                  <a
                    href="tel:01835705031"
                    className="flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-xs font-bold text-white shadow-xs hover:bg-emerald-700"
                  >
                    <Phone size={12} />
                    কল দিন
                  </a>
                </div>
              </div>

              {/* Main Booking Button */}
              <div className="mt-5">
                <a
                  href="#contact"
                  className="btn-vibrant flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-base font-bold shadow-lg"
                  onClick={() => setOpen(false)}
                >
                  <Calendar size={18} />
                  <span>অনলাইন অ্যাপয়েন্টমেন্ট ফর্ম</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
