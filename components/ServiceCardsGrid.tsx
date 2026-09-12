"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ServiceIcon from "@/components/ServiceIcon";
import { staggerContainer, staggerItem, reducedStaggerContainer, reducedStaggerItem } from "@/lib/motion";

type Service = {
  icon: "leaf" | "heart" | "baby" | "utensils" | "activity" | "users";
  title: string;
  description: string;
};

interface Props {
  services: Service[];
}

export default function ServiceCardsGrid({ services }: Props) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reduced ? reducedStaggerContainer : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {services.map((service) => (
        <motion.article
          key={service.title}
          variants={reduced ? reducedStaggerItem : staggerItem}
          className="group service-card rounded-2xl border border-border bg-surface p-7 cursor-default"
          whileHover={
            reduced
              ? {}
              : {
                  y: -5,
                  boxShadow: "0 12px 40px -8px rgba(45, 106, 79, 0.12)",
                  borderColor: "rgba(64, 145, 108, 0.35)",
                }
          }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            whileHover={reduced ? {} : { scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <ServiceIcon name={service.icon} />
          </motion.div>
          <h3 className="mt-5 text-xl font-semibold text-primary-dark">
            {service.title}
          </h3>
          <p className="mt-3 leading-relaxed text-muted">
            {service.description}
          </p>
          <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary-light">
            <span>আরও জানুন</span>
            <motion.span
              aria-hidden="true"
              className="inline-block"
              whileHover={reduced ? {} : { x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight size={14} />
            </motion.span>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
