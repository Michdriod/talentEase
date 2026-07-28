import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceDetailGrid } from "@/components/ServiceDetailGrid";
import { ProcessStepsGrid } from "@/components/ProcessStepsGrid";
import { CTABannerAnimated } from "@/components/CTABannerAnimated";
import { FadeSection } from "@/components/FadeSection";
import { Button } from "@/components/Button";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore TalentEase HR's premium services: Outsourced HR Management, Recruitment, Employee Leasing, Fractional HR, Learning & Development, and HR Strategy & Advisory.",
};

export default function ServicesPage() {
  const flagship = services.find((s) => s.flagship);
  const others = services.filter((s) => !s.flagship);

  return (
    <>
      <FadeSection className="bg-navy py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center">
            <div className="max-w-2xl text-center lg:flex-1 lg:text-left">
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Our Premium Services</h1>
              <p className="mt-6 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg">
                From finding the right talent to supporting employees throughout their journey, our
                services are designed to help your business build a thriving team, while you focus
                on growing with confidence.
              </p>
            </div>
            <div className="w-full max-w-md lg:block lg:flex-1">
              <div className="relative flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-white/10 sm:h-72 lg:h-80">
                <Image src="/services-hero.png" alt="HR consulting services meeting" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      {flagship && (
        <FadeSection className="-mt-16 px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl bg-navy-dark p-6 md:p-8 lg:p-12">
            <span className="inline-block rounded-full bg-green/20 px-4 py-1.5 text-sm font-semibold text-green">
              Our Flagship Service
            </span>
            <h2 className="mt-4 text-xl font-bold text-white md:text-2xl lg:text-3xl">{flagship.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">{flagship.full}</p>
            <div className="mt-6">
              <Button
                href={`/contact?service=${encodeURIComponent(flagship.title)}`}
                variant="primary"
              >
                Request this service
              </Button>
            </div>
          </div>
        </FadeSection>
      )}

      <FadeSection className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-5xl space-y-6 md:space-y-8 px-4 md:px-6 lg:px-8">
            <ServiceDetailGrid services={others} />
          </div>
      </FadeSection>

      <FadeSection className="bg-dot-pattern relative overflow-hidden bg-light py-16 md:py-20 lg:py-28">
        <div className="pointer-events-none absolute -right-16 top-0 h-56 w-56 rounded-[3rem] border border-green/10" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="How We Work" />
          <ProcessStepsGrid />
        </div>
      </FadeSection>

      <CTABannerAnimated
        title="Ready to build a stronger team?"
        subtitle="Let's fix it. Together."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
