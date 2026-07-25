"use client";

import { type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface FadeSectionProps {
  children: ReactNode;
  className?: string;
}

export function FadeSection({ children, className }: FadeSectionProps) {
  const { ref, isInView } = useInView({ margin: "-80px", once: true });

  return (
    <section
      ref={ref}
      className={className}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
      }}
    >
      {children}
    </section>
  );
}
