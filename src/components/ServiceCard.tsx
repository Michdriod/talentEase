import Link from "next/link";
import { Users, Building2, HeartHandshake, BookOpen, TrendingUp } from "lucide-react";
import type { Service } from "@/data/services";

const iconMap: Record<string, typeof Users> = {
  Users,
  Building2,
  HeartHandshake,
  BookOpen,
  TrendingUp,
};

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? Users;

  return (
    <Link
      href={`/services#${service.id}`}
      className={`group flex flex-col rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${className ?? ""}`}
    >
      <div className="mb-4 flex items-start justify-between">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
          <Icon size={24} />
        </div>
        {service.flagship && (
          <span className="shrink-0 rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">
            Flagship
          </span>
        )}
      </div>
      <h3 className="mb-2 text-lg font-bold text-navy">{service.title}</h3>
      <p className="text-sm leading-relaxed text-navy/60">{service.short}</p>
    </Link>
  );
}
