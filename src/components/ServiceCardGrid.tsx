"use client";

import { ServiceCard } from "./ServiceCard";
import { useInView } from "@/hooks/useInView";
import type { Service } from "@/data/services";

interface ServiceCardGridProps {
  services: Service[];
}

function ServiceCardWrapper({ service, delay }: { service: Service; delay: number }) {
  const { ref, isInView } = useInView({ margin: "0px", once: true });

  return (
    <div
      ref={ref}
      className="w-full sm:w-[48%] lg:w-[31%]"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.93)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      <ServiceCard service={service} className="h-full" />
    </div>
  );
}

export function ServiceCardGrid({ services }: ServiceCardGridProps) {
  return (
    <>
      {services.map((service, i) => (
        <ServiceCardWrapper key={service.id} service={service} delay={i * 0.12} />
      ))}
    </>
  );
}
