import { Briefcase } from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "./Button";

interface ServiceDetailProps {
  service: Service;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <section
      id={service.id}
      className="scroll-mt-20 rounded-2xl border border-navy/10 bg-white p-6 md:p-8"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
        <Briefcase size={24} />
      </div>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-navy md:text-2xl">{service.title}</h2>
          <p className="mt-2 text-sm font-medium text-green">{service.short}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-navy/70 md:text-base">{service.full}</p>
      <div className="mt-6">
        <Button href={`/contact?service=${encodeURIComponent(service.title)}`}>
          Request this service
        </Button>
      </div>
    </section>
  );
}
