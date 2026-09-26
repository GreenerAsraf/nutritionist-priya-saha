"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Phone, Calendar, CheckCircle2 } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";
import { useT, useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import ServiceModalIcon from "@/components/ServiceModalIcon";

interface Props {
  service: ServiceData | null;
  onClose: () => void;
}

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];
const easeOut: [number, number, number, number] = [0.45, 0, 0.55, 1];

export default function ServiceModal({ service, onClose }: Props) {
  const reduced = useReducedMotion();
  const t = useT();
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Lock body scroll when open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [service]);

  // Close on Escape key
  const handleKey = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  const content = service ? (lang === "en" ? service.en : service.bn) : null;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.25 } },
    exit: { opacity: 0, transition: { duration: 0.2, ease: easeOut } },
  };

  const panelVariants = reduced
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.2 } },
        exit: { opacity: 0, transition: { duration: 0.15 } },
      }
    : {
        hidden: { opacity: 0, y: 40, scale: 0.97 },
        visible: {
          opacity: 1, y: 0, scale: 1,
          transition: { duration: 0.38, ease },
        },
        exit: {
          opacity: 0, y: 24, scale: 0.98,
          transition: { duration: 0.22, ease: easeOut },
        },
      };

  return (
    <AnimatePresence>
      {service && content && (
        <motion.div
          key="service-modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          style={{ background: "rgba(2, 44, 34, 0.55)", backdropFilter: "blur(6px)" }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
          aria-label={content.title}
        >
          {/* Panel */}
          <motion.div
            key="service-modal-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl shadow-2xl flex flex-col ${
              isDark
                ? "bg-emerald-950 border border-emerald-800/60"
                : "bg-white border border-emerald-100"
            }`}
          >
            {/* Sticky header */}
            <div
              className={`sticky top-0 z-10 flex items-center justify-between px-6 py-4 rounded-t-3xl ${
                isDark
                  ? "bg-emerald-950/95 border-b border-emerald-800/50"
                  : "bg-white/95 border-b border-emerald-100"
              } backdrop-blur-md`}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                  isDark
                    ? "bg-emerald-800/60 text-emerald-300"
                    : "bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700"
                }`}>
                  <ServiceModalIcon name={service.icon} />
                </div>
                <h2 className={`font-serif text-lg font-bold leading-tight ${isDark ? "text-emerald-100" : "text-emerald-950"}`}>
                  {content.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t("nutrition.close")}
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors cursor-pointer ${
                  isDark
                    ? "bg-emerald-800/60 text-emerald-300 hover:bg-emerald-700/60"
                    : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                }`}
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-6 px-6 py-6">

              {/* Why section */}
              <div className={`rounded-2xl p-5 ${
                isDark ? "bg-emerald-900/40 border border-emerald-800/40" : "bg-emerald-50/70 border border-emerald-100"
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2
                    size={17}
                    className={isDark ? "text-emerald-400" : "text-emerald-600"}
                  />
                  <p className={`text-xs font-bold uppercase tracking-widest ${isDark ? "text-emerald-400" : "text-emerald-700"}`}>
                    {lang === "bn" ? "কেন আমার পরামর্শ নিবেন?" : "Why Choose My Advice?"}
                  </p>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? "text-emerald-200" : "text-emerald-900"}`}>
                  {content.why}
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="grid grid-cols-2 gap-3 pb-2">
                <a
                  href="tel:01571159059"
                  className={`flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold transition-colors ${
                    isDark
                      ? "bg-emerald-800/60 text-emerald-200 hover:bg-emerald-700/70 border border-emerald-700/60"
                      : "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
                  }`}
                >
                  <Phone size={15} />
                  <span>{lang === "bn" ? "সরাসরি কল" : "Call Now"}</span>
                </a>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="btn-vibrant flex items-center justify-center gap-2 rounded-2xl py-3.5 text-sm font-bold shadow-lg shadow-emerald-500/25"
                >
                  <Calendar size={15} />
                  <span>{lang === "bn" ? "অ্যাপয়েন্টমেন্ট" : "Appointment"}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
