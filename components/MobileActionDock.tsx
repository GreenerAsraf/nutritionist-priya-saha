"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

export default function MobileActionDock() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Show dock after scrolling past the hero fold (150px)
      setVisible(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.aside
      aria-label="মোবাইল কুইক অ্যাকশন"
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-3 left-3 right-3 z-40 lg:hidden"
    >
      <div className="flex items-center gap-2 rounded-2xl border border-emerald-300/60 bg-white/95 p-2 shadow-[0_10px_30px_rgba(5,150,105,0.22)] backdrop-blur-xl">
        {/* Quick Call */}
        <a
          href="tel:01713998166"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-50 py-3 text-sm font-bold text-emerald-800 transition-colors active:bg-emerald-100"
        >
          <Phone size={17} className="text-emerald-600" />
          <span>সরাসরি কল</span>
        </a>

        {/* Appointment */}
        <a
          href="#contact"
          className="btn-vibrant flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold shadow-md shadow-emerald-500/25 active:scale-95"
        >
          <Calendar size={17} />
          <span>অ্যাপয়েন্টমেন্ট</span>
        </a>
      </div>
    </motion.aside>
  );
}
