"use client";

import { ServiceDetail } from "./ServiceDetail";
import { useInView } from "@/hooks/useInView";
import type { Service } from "@/data/services";

interface ServiceDetailGridProps {
  services: Service[];
}

function ServiceDetailWrapper({ service, delay }: { service: Service; delay: number }) {
  const { ref, isInView } = useInView({ margin: "-40px", once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
      }}
    >
      <ServiceDetail service={service} />
    </div>
  );
}

export function ServiceDetailGrid({ services }: ServiceDetailGridProps) {
  return (
    <>
      {services.map((service, i) => (
        <ServiceDetailWrapper key={service.id} service={service} delay={i * 0.12} />
      ))}
    </>
  );
}
