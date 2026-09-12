"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function AboutImage() {
  const reduced = useReducedMotion();

  return (
    <div className="relative">
      <motion.div
        className="aspect-square max-w-md overflow-hidden rounded-3xl cursor-default"
        whileHover={reduced ? {} : { scale: 1.02 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/priya-saha.jpeg"
          alt="পুষ্টিবিদ প্রিয়া সাহা"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      {/* Accent badge */}
      <div className="absolute -bottom-6 -right-6 rounded-2xl bg-primary px-6 py-4 text-white shadow-xl">
        <p className="font-serif text-3xl font-bold">৫+</p>
        <p className="text-sm text-white/80">বছরের অভিজ্ঞতা</p>
      </div>
    </div>
  );
}
