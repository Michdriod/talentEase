import Link from "next/link";
import { site } from "@/data/site";
import { services } from "@/data/services";

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const InstagramIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const YouTubeIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-0.5 text-xl font-bold tracking-tight">
              <span className="text-white">Talent</span>
              <span className="text-green">Ease</span>
              <span className="text-white">HR</span>
            </Link>
            <p className="mt-2 text-sm text-green">{site.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Accessible, affordable, people-centered HR solutions for growing businesses.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-white/60 transition-colors hover:text-green"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a href={`tel:${site.phone}`} className="inline-block py-1 hover:text-green">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="inline-block py-1 hover:text-green">
                  {site.email}
                </a>
              </li>
              <li>{site.address}</li>
              <li>{site.hours}</li>
              <li className="flex gap-3">
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-green hover:text-green"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon size={16} />
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-green hover:text-green"
                  aria-label="Instagram"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={site.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition-colors hover:border-green hover:text-green"
                  aria-label="YouTube"
                >
                  <YouTubeIcon size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-sm text-white/40">
        &copy; {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
