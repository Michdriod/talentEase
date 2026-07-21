import Link from "next/link";
import Image from "next/image";
import { BadgeDollarSign, HeartHandshake, UserPlus, TrendingUp } from "lucide-react";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { ProcessSteps } from "@/components/ProcessSteps";
import { StatCard } from "@/components/StatCard";
import { CTABanner } from "@/components/CTABanner";
import { LogoGrid } from "@/components/LogoGrid";
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
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-12">
            <div className="max-w-2xl shrink-0">
              <span className="inline-block rounded-full bg-green/10 px-4 py-1.5 text-sm font-semibold text-green">
                People. Growth. Impact.
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl">
                Build Stronger Teams<br />
                <span className="whitespace-nowrap">Grow With Confidence</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-navy/60 md:text-xl">
                 TalentEase HR gives startups and growing businesses access to professional,
                affordable HR support, from recruitment to compliance, without the cost of an
                in-house HR department.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/contact">Book a Free Consultation</Button>
                <Button href="/services" variant="secondary">
                  Explore Our Services
                </Button>
              </div>
            </div>
            <div className="hidden flex-1 lg:block">
              <div className="relative ml-auto h-96 w-full max-w-md overflow-hidden rounded-2xl">
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
          className="absolute -right-32 top-0 h-full w-96 bg-navy opacity-5"
          style={{ clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)" }}
        />
        <div
          className="absolute -left-16 bottom-0 h-64 w-64 bg-green opacity-5"
          style={{ clipPath: "polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)" }}
        />
      </section>

      <section className="bg-light py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <p className="mb-8 text-sm font-semibold uppercase tracking-wider text-navy/50">
            Trusted by organizations across sectors
          </p>
          <LogoGrid />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading title="Who We Are" />
            <p className="text-lg leading-relaxed text-navy/70">
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
        </div>
      </section>

      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Why HR Can't Be an Afterthought"
            light
          />
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <p className="text-white/70">
              Research consistently identifies poor management, weak leadership, and lack of
              operational structure as major contributors to small business failure.
            </p>
            <p className="text-white/70">
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
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Our Premium Services"
            subtitle="Our approach is simple: delivering tailored HR solutions that prioritise your business, discover talents, foster people growth, create lasting impact."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="How We Work With You" />
          <ProcessSteps />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="The TalentEase Difference" />
          <p className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-navy/60">
            Our commitment to delivering professional, affordable, and personalized HR solutions
            gives your business access to expert HR support, without the cost of an in-house HR
            department.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differences.map(({ title, icon: Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials.length > 0 && (
        <section className="bg-light py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading title="What Our Clients Say" />
          </div>
        </section>
      )}

      <CTABanner
        title="Ready to build a stronger team?"
        subtitle="Let's fix it. Together."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
