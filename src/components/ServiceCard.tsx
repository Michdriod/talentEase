import Link from "next/link";
import { Briefcase } from "lucide-react";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = Briefcase;

  return (
    <Link
      href={`/services#${service.id}`}
      className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
          <Icon size={24} />
        </div>
        {service.flagship && (
          <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">
            Flagship
          </span>
        )}
      </div>
      <h3 className="mb-2 text-lg font-bold text-navy">{service.title}</h3>
      <p className="text-sm leading-relaxed text-navy/60">{service.short}</p>
    </Link>
  );
}
