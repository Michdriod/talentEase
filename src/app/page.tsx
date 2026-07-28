"use client";

import Link from "next/link";
import Image from "next/image";
import { BadgeDollarSign, HeartHandshake, UserPlus, TrendingUp } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCardGrid } from "@/components/ServiceCardGrid";
import { ProcessStepsGrid } from "@/components/ProcessStepsGrid";
import { StatCard } from "@/components/StatCard";
import { CTABannerAnimated } from "@/components/CTABannerAnimated";
import { FadeSection } from "@/components/FadeSection";
import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";

const stats = [
  { stat: "90%", label: "Poor Management / Leadership" },
  { stat: "63%", label: "Weak Workforce Structure" },
  { stat: "52%", label: "Employee Turnover & Retention Issues" },
  { stat: "19%", label: "Poor Onboarding / Integration" },
];

const differences = [
  { title: "Affordable expertise", icon: BadgeDollarSign },
  { title: "Tailored, people-centered solutions", icon: HeartHandshake },
  { title: "An extension of your leadership", icon: UserPlus },
  { title: "Built for growing businesses", icon: TrendingUp },
];

export default function HomePage() {
  return (
    <>
      <FadeSection className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:items-center">
            <div className="min-w-0 max-w-2xl lg:shrink-0">
              <span className="inline-block rounded-full bg-green/10 px-4 py-1.5 text-sm font-semibold text-green">
                People. Growth. Impact.
              </span>
              <h1 className="mt-6 text-2xl font-bold leading-tight text-navy sm:text-3xl md:text-5xl lg:text-6xl">
                Build Stronger Teams<br />
                Grow With Confidence
              </h1>
                <p className="mt-6 text-sm leading-relaxed text-navy/60 sm:text-base md:text-lg lg:text-xl">
                  TalentEase HR gives startups and growing businesses access to professional,
                affordable HR support, from recruitment and management to compliance, without
                the cost of an in-house HR department.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" className="w-full sm:w-auto">Book a Free Consultation</Button>
                <Button href="/services" variant="secondary" className="w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </div>
            </div>
            <div className="relative w-full flex-1 lg:block">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl sm:h-72 lg:ml-auto lg:h-96 lg:max-w-md">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-white/60 to-transparent lg:hidden" />
                <Image
                  src="/hero.png"
                  alt="Professional workplace"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="pointer-events-none absolute -right-32 top-0 h-full w-96 bg-navy opacity-5"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div
          className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 bg-green opacity-5"
          style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)" }}
        />
      </FadeSection>

      <FadeSection className="relative overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-16 top-1/4 h-48 w-48 rounded-full bg-gradient-to-br from-green/[0.04] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <SectionHeading title="Who We Are" centered={false} />
              <p className="mx-auto max-w-xl text-sm leading-relaxed text-navy/70 sm:text-base md:text-lg lg:mx-0">
                We are a people-focused HR consulting firm committed to helping businesses build
                stronger, more efficient, and sustainable workplaces. Our team operates as an
                extension of your leadership because we believe that every organisation thrives
                when its people and processes work in harmony.
              </p>
              <div className="mt-8">
                <Link
                  href="/about"
                  className="text-sm font-semibold text-green transition-colors hover:text-green-dark"
                >
                  Learn more about us &rarr;
                </Link>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md">
              <div className="relative mt-8 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-light sm:h-56 lg:h-64">
                <Image src="/who-we-are.png" alt="TalentEase team collaborating" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      <FadeSection className="bg-navy py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Why HR can't be an afterthought"
            light
          />
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-sm text-white/70 sm:text-base md:text-lg">
              Research consistently identifies poor management, weak leadership, and lack of
              operational structure as major contributors to failure for small and growing businesses.
            </p>
            <p className="text-sm text-white/70 sm:text-base md:text-lg">
              And this is true because startups struggle with unclear HR processes, talent gaps,
              weak organizational structure, and low employee engagement, which can and will
              impact productivity and scalability.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.stat} stat={s.stat} label={s.label} />
            ))}
          </div>
        </div>
      </FadeSection>

      <FadeSection className="relative overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-20 top-0 h-64 w-64 rounded-[3rem] border border-navy/5" />
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-gradient-to-br from-green/[0.04] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Our approach is simple: delivering tailored HR solutions that prioritise your business, discover talents, foster people growth, create lasting impact."
          />
          <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
            <ServiceCardGrid services={services} />
          </div>
        </div>
      </FadeSection>

      <FadeSection className="bg-dot-pattern relative overflow-hidden bg-light py-16 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-[3rem] border border-green/10" />
        <div className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gradient-to-br from-green/[0.04] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="How We Work With You" />
          <ProcessStepsGrid />
        </div>
      </FadeSection>

      <FadeSection className="relative overflow-hidden py-16 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-16 top-1/3 h-56 w-56 rounded-[2rem] border border-navy/5" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-gradient-to-br from-green/[0.04] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="The TalentEase Difference" />
          <p className="mx-auto mb-12 max-w-3xl text-center text-sm leading-relaxed text-navy/60 sm:text-base md:text-lg">
            Our commitment to delivering professional, affordable, and personalized HR solutions
            gives your business access to expert HR support, without the cost of an in-house HR
            department.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differences.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      {testimonials.length > 0 && (
      <FadeSection className="bg-dot-pattern relative overflow-hidden bg-light py-16 md:py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading title="What Our Clients Say" />
          </div>
        </FadeSection>
      )}

      <CTABannerAnimated
        title="Ready to build a stronger team?"
        subtitle="Let's fix it. Together."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
