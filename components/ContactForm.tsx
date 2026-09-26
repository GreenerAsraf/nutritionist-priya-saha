"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send, Phone, Mail, MessageCircle } from "lucide-react";
import { useT, useLanguage } from "@/lib/language-context";
import { siteConfig } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    age: string;
    phone: string;
    chamber: string;
    problem: string;
    waUrl: string;
    mailUrl: string;
  } | null>(null);

  const reduced = useReducedMotion();
  const t = useT();
  const { lang } = useLanguage();

  const chamberOptions = [
    {
      value: "ম্যাক্স হসপিটাল লিঃ (মেহেদীবাগ, চট্টগ্রাম)",
      labelBn: "ম্যাক্স হসপিটাল লিঃ (মেহেদীবাগ, চট্টগ্রাম)",
      labelEn: "Max Hospital Ltd. (Mehedibagh, Chittagong)",
    },
    {
      value: "রাঙ্গুনিয়া হেলথ কেয়ার হাসপাতাল (রাঙ্গুনিয়া, চট্টগ্রাম)",
      labelBn: "রাঙ্গুনিয়া হেলথ কেয়ার হাসপাতাল (রাঙ্গুনিয়া, চট্টগ্রাম)",
      labelEn: "Rangamati Healthcare Hospital (Rangamati, Chittagong)",
    },
    {
      value: "অনলাইন কনসালটেশন (ভিডিও কল / হোয়াটসঅ্যাপ)",
      labelBn: "অনলাইন কনসালটেশন (যেকোনো স্থান থেকে)",
      labelEn: "Online Consultation (From Anywhere)",
    },
  ];

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") as string)?.trim() || "";
    const age = (formData.get("age") as string)?.trim() || "";
    const phone = (formData.get("phone") as string)?.trim() || "";
    const chamber = (formData.get("chamber") as string) || chamberOptions[0].value;
    const problem = (formData.get("problem") as string)?.trim() || "";

    // Format WhatsApp message text
    const waText =
      lang === "bn"
        ? `*নতুন অ্যাপয়েন্টমেন্ট অনুরোধ — ডায়েটিশিয়ান প্রিয়া সাহা*\n\n` +
          `👤 *নাম:* ${name}\n` +
          `🎂 *বয়স:* ${age ? `${age} বছর` : "নির্দিষ্ট নয়"}\n` +
          `📱 *মোবাইল নম্বর:* ${phone}\n` +
          `🏥 *পছন্দের চেম্বার/মাধ্যম:* ${chamber}\n` +
          `🩺 *সমস্যা / পরামর্শের বিষয়:* ${problem || "সাধারণ পুষ্টি পরামর্শ"}\n\n` +
          `🌐 *উৎস:* অফিশিয়াল ওয়েবসাইট`
        : `*New Appointment Request — Dietitian Priya Saha*\n\n` +
          `👤 *Name:* ${name}\n` +
          `🎂 *Age:* ${age ? `${age} yrs` : "Not specified"}\n` +
          `📱 *Phone:* ${phone}\n` +
          `🏥 *Preferred Chamber/Mode:* ${chamber}\n` +
          `🩺 *Health Concern:* ${problem || "General Nutrition Consultation"}\n\n` +
          `🌐 *Source:* Official Website`;

    const waUrl = `https://wa.me/8801571159059?text=${encodeURIComponent(waText)}`;

    // Format Email Body for backup
    const emailSubject = encodeURIComponent(
      `নতুন অ্যাপয়েন্টমেন্ট অনুরোধ: ${name} (${phone})`
    );
    const emailBody = encodeURIComponent(waText.replace(/\*/g, ""));
    const mailUrl = `mailto:saha90964@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setSubmittedData({
      name,
      age,
      phone,
      chamber,
      problem,
      waUrl,
      mailUrl,
    });

    // Automatically trigger WhatsApp in a new tab
    if (typeof window !== "undefined") {
      window.open(waUrl, "_blank");
    }

    setState("success");
    form.reset();
  }

  const successProps = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  return (
    <div className="rounded-3xl border border-border/80 bg-surface/95 p-6 sm:p-8 shadow-sm backdrop-blur-xs">
      <AnimatePresence mode="wait">
        {state === "success" && submittedData ? (
          <motion.div
            key="success"
            {...successProps}
            className="flex flex-col items-center justify-center py-6 text-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-primary ring-1 ring-emerald-500/20">
              <CheckCircle2 size={36} className="text-primary" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-foreground">
                {lang === "bn" ? "তথ্য সফলভাবে প্রস্তুত হয়েছে!" : "Information Prepared Successfully!"}
              </h3>
              <p className="mt-1.5 text-sm text-muted max-w-sm mx-auto leading-relaxed">
                {lang === "bn"
                  ? "আপনার অ্যাপয়েন্টমেন্টের তথ্য WhatsApp-এ পাঠানো হয়েছে। নিচের বাটন দিয়ে সরাসরি মেসেজ ও কল করতে পারেন।"
                  : "Your appointment details have been formatted. You can directly send via WhatsApp or call us."}
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div className="w-full space-y-3 pt-2">
              <a
                href={submittedData.waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 font-bold text-sm shadow-md shadow-emerald-600/25 transition-all active:scale-98"
              >
                <MessageCircle size={18} />
                <span>
                  {lang === "bn"
                    ? "WhatsApp-এ মেসেজ পাঠান (০১৫৭১-১৫৯০৫৯)"
                    : "Send via WhatsApp (01571-159059)"}
                </span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="tel:01571159059"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface-alt py-3 px-4 text-xs sm:text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
                >
                  <Phone size={15} className="text-primary shrink-0" />
                  <span>{lang === "bn" ? "সরাসরি কল" : "Call Directly"}</span>
                </a>

                <a
                  href={submittedData.mailUrl}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface-alt py-3 px-4 text-xs sm:text-sm font-semibold text-foreground hover:border-primary/40 transition-colors"
                >
                  <Mail size={15} className="text-primary shrink-0" />
                  <span>{lang === "bn" ? "ইমেইল পাঠান" : "Send Email"}</span>
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setState("idle")}
              className="mt-3 text-xs font-semibold text-primary underline-offset-4 hover:underline cursor-pointer"
            >
              {t("form.success.again")}
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            {...(reduced
              ? {}
              : {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                })}
            className="space-y-4"
          >
            <div>
              <h3 className="text-xl font-bold text-foreground">
                {t("form.title")}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {t("form.subtitle")}
              </p>
            </div>

            <div className="space-y-3.5 pt-1">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1 block text-xs font-semibold text-foreground"
                >
                  {t("form.name")} <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder={t("form.name.placeholder")}
                  className="form-input w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60"
                />
              </div>

              {/* Age & Mobile in 2 cols on tablet+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="contact-age"
                    className="mb-1 block text-xs font-semibold text-foreground"
                  >
                    {t("form.age")}
                  </label>
                  <input
                    id="contact-age"
                    name="age"
                    type="number"
                    min="1"
                    max="120"
                    placeholder={t("form.age.placeholder")}
                    className="form-input w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-1 block text-xs font-semibold text-foreground"
                  >
                    {t("form.phone")} <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    className="form-input w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60"
                  />
                </div>
              </div>

              {/* Preferred Chamber */}
              <div>
                <label
                  htmlFor="contact-chamber"
                  className="mb-1 block text-xs font-semibold text-foreground"
                >
                  {lang === "bn" ? "পছন্দের চেম্বার বা মাধ্যম" : "Preferred Chamber / Consultation Mode"}
                </label>
                <select
                  id="contact-chamber"
                  name="chamber"
                  className="form-input w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground"
                >
                  {chamberOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {lang === "en" ? opt.labelEn : opt.labelBn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Problem description */}
              <div>
                <label
                  htmlFor="contact-problem"
                  className="mb-1 block text-xs font-semibold text-foreground"
                >
                  {t("form.problem")}
                </label>
                <textarea
                  id="contact-problem"
                  name="problem"
                  rows={3}
                  placeholder={t("form.problem.placeholder")}
                  className="form-input w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted/60"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state === "submitting"}
                className="btn-vibrant flex w-full items-center justify-center gap-2 rounded-2xl py-3.5 text-sm sm:text-base font-bold shadow-lg shadow-emerald-600/25 disabled:opacity-70 cursor-pointer"
                whileHover={reduced || state === "submitting" ? {} : { scale: 1.01 }}
                whileTap={reduced || state === "submitting" ? {} : { scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                {state === "submitting" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    {t("form.submitting")}
                  </>
                ) : (
                  <>
                    <MessageCircle size={17} aria-hidden="true" />
                    <span>
                      {lang === "bn"
                        ? "অ্যাপয়েন্টমেন্ট পাঠান (WhatsApp / কল)"
                        : "Send Appointment Request (WhatsApp)"}
                    </span>
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
