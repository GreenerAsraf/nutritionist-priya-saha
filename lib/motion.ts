import type { Variants, Transition } from "framer-motion";

// ─── Easing ────────────────────────────────────────────────────────────────
export const ease = {
  /** Smooth deceleration — most common */
  out: [0.22, 1, 0.36, 1] as const,
  /** Gentle in-out for two-way transitions */
  inOut: [0.45, 0, 0.55, 1] as const,
  /** Slightly sharper for hover micro-interactions */
  micro: [0.34, 1.56, 0.64, 1] as const,
};

// ─── Duration ──────────────────────────────────────────────────────────────
export const duration = {
  fast: 0.2,
  normal: 0.45,
  elegant: 0.65,
  hero: 0.8,
} as const;

// ─── Reusable transitions ───────────────────────────────────────────────────
export const transition = {
  fast: { duration: 0.2, ease: [0.22, 1, 0.36, 1] } satisfies Transition,
  normal: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } satisfies Transition,
  elegant: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } satisfies Transition,
  hero: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } satisfies Transition,
  spring: { type: "spring" as const, stiffness: 200, damping: 30, mass: 0.8 } satisfies Transition,
};

// ─── Variants ──────────────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.1, staggerChildren: 0.1 } },
};

export const staggerContainerFast: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: 0.05, staggerChildren: 0.07 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const reducedFadeUp: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.15 } },
};

export const reducedStaggerItem: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.1 } },
};

export const reducedStaggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
