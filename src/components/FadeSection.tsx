"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeSectionProps {
  children: ReactNode;
  className?: string;
}

export function FadeSection({ children, className }: FadeSectionProps) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
