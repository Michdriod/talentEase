import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline-2 focus-visible:outline-green"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
