"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "@/hooks/useInView";

interface StatCardProps {
  stat: string;
  label: string;
}

export function StatCard({ stat, label }: StatCardProps) {
  const { ref, isInView } = useInView({ margin: "0px", once: true });
  const target = parseInt(stat.replace("%", ""), 10);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;
    const duration = 1500;
    const steps = 30;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div ref={ref} className="rounded-2xl border border-green/20 bg-white/5 p-4 text-center backdrop-blur sm:p-6">
      <div className="text-3xl font-bold text-green sm:text-4xl md:text-5xl">
        {count}%
      </div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{label}</div>
    </div>
  );
}
