"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  reducedFadeUp,
} from "@/lib/motion";
import type { Variants } from "framer-motion";

type VariantKey = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleIn";

const variantMap: Record<VariantKey, Variants> = {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
};

interface RevealProps {
  children: ReactNode;
  variant?: VariantKey;
  delay?: number;
  className?: string;
  /** Override the viewport amount threshold (0–1). Defaults to 0.15 */
  amount?: number;
}

/**
 * Scroll-triggered reveal wrapper.
 * Keeps content server-rendered; only the animation wrapper is a client component.
 * Respects prefers-reduced-motion automatically.
 */
export default function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className,
  amount = 0.15,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const variants = prefersReducedMotion ? reducedFadeUp : variantMap[variant];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
