"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { site } from "@/data/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt="TalentEase HR Services"
            width={170}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-green ${
                  isActive ? "text-green" : "text-navy"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-green" />
                )}
              </Link>
            );
          })}
          <Button href="/contact">Book a Consultation</Button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} className="text-navy" /> : <Menu size={24} className="text-navy" />}
        </button>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full bg-white shadow-lg md:hidden">
          <nav className="flex flex-col gap-2 px-4 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-light hover:text-green ${
                    isActive ? "bg-light text-green" : "text-navy"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" className="mt-2">
              Book a Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
