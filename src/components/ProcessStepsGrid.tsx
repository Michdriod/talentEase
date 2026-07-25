"use client";

import { processSteps } from "@/data/process";
import { useInView } from "@/hooks/useInView";

function StepCard({ step, delay }: { step: (typeof processSteps)[0]; delay: number }) {
  const { ref, isInView } = useInView({ margin: "-40px", once: true });

  return (
    <div
      ref={ref}
      className="relative rounded-2xl border border-navy/10 bg-white p-6"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
        {step.step}
      </span>
      <h3 className="mb-2 text-lg font-bold text-navy">{step.title}</h3>
      <p className="text-sm leading-relaxed text-navy/60">{step.description}</p>
    </div>
  );
}

export function ProcessStepsGrid() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, i) => (
        <StepCard key={step.step} step={step} delay={i * 0.12} />
      ))}
    </div>
  );
}
