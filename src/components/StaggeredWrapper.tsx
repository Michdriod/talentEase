"use client";

import { type ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface StaggeredWrapperProps {
  children: ReactNode;
  delay?: number;
}

export function StaggeredWrapper({ children, delay = 0 }: StaggeredWrapperProps) {
  const { ref, isInView } = useInView({ margin: "0px", once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.93)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}
