"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { useT } from "@/lib/language-context";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const reduced = useReducedMotion();
  const t = useT();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    // Simulate network delay — replace with actual API call
    await new Promise((r) => setTimeout(r, 1000));
    setState("success");
  }

  const successProps = reduced
    ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -8 },
        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      };

  return (
    <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm">
      <AnimatePresence mode="wait">
        {state === "success" ? (
          <motion.div
            key="success"
            {...successProps}
            className="flex flex-col items-center justify-center py-12 text-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 size={32} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-primary-dark">
              {t("form.success.title")}
            </h3>
            <p className="text-muted">
              {t("form.success.desc")}
            </p>
            <button
              type="button"
              onClick={() => setState("idle")}
              className="mt-2 text-sm text-primary underline-offset-4 hover:underline"
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
            className="space-y-5"
          >
            <div>
              <h3 className="text-xl font-semibold text-primary-dark">
                {t("form.title")}
              </h3>
              <p className="mt-1 text-sm text-muted">
                {t("form.subtitle")}
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-1.5 block text-sm font-medium text-primary-dark"
                >
                  {t("form.name")} <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder={t("form.name.placeholder")}
                  className="form-input w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-age"
                  className="mb-1.5 block text-sm font-medium text-primary-dark"
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
                  className="form-input w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-1.5 block text-sm font-medium text-primary-dark"
                >
                  {t("form.phone")} <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="01XXXXXXXXX"
                  className="form-input w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-problem"
                  className="mb-1.5 block text-sm font-medium text-primary-dark"
                >
                  {t("form.problem")}
                </label>
                <textarea
                  id="contact-problem"
                  name="problem"
                  rows={4}
                  placeholder={t("form.problem.placeholder")}
                  className="form-input w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted/60"
                />
              </div>

              <motion.button
                type="submit"
                disabled={state === "submitting"}
                className="btn-vibrant flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold shadow-lg shadow-emerald-600/30 disabled:opacity-70"
                whileHover={reduced || state === "submitting" ? {} : { scale: 1.02 }}
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
                    <Send size={16} aria-hidden="true" />
                    {t("form.submit")}
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
