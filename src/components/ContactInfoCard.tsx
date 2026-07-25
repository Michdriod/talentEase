import { Phone, Mail, MapPin, Clock, Globe, Camera, Play } from "lucide-react";
import { site } from "@/data/site";

const contacts = [
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone}` },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Address", value: site.address },
  { icon: Clock, label: "Hours", value: site.hours },
  { icon: Globe, label: "LinkedIn", value: "LinkedIn", href: site.linkedin },
  { icon: Camera, label: "Instagram", value: "Instagram", href: site.instagram },
  { icon: Play, label: "YouTube", value: "YouTube", href: site.youtube },
];

export function ContactInfoCard() {
  return (
    <div className="space-y-6">
      {contacts.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
              <Icon size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-navy">{item.label}</p>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-navy/60 hover:text-green">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-navy/60">{item.value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
