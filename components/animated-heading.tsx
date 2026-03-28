"use client";

import { motion } from "motion/react";

export function AnimatedHeading({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      className="font-heading text-4xl font-bold tracking-tight sm:text-5xl"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
}
