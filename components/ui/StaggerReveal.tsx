"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import {
  staggerContainer,
  staggerItem,
  reducedStaggerContainer,
  reducedStaggerItem,
} from "@/lib/motion";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  /** Delay before first child animates */
  delayChildren?: number;
  /** Gap between each child */
  staggerDelay?: number;
}

/**
 * Stagger container wrapper. Direct children animate with staggered fadeUp.
 * Wrap each child in a StaggerReveal.Item for fine-grained control,
 * or use this wrapper and children will stagger automatically as motion.div children.
 */
export default function StaggerReveal({
  children,
  className,
}: StaggerRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? reducedStaggerContainer : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
}

/**
 * Individual stagger item. Must be a direct child of StaggerReveal.
 */
export function StaggerItem({ children, className }: StaggerItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={prefersReducedMotion ? reducedStaggerItem : staggerItem}
      className={className}
    >
      {children}
    </motion.div>
  );
}
