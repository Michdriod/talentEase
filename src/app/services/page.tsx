import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceDetail } from "@/components/ServiceDetail";
import { ProcessSteps } from "@/components/ProcessSteps";
import { CTABanner } from "@/components/CTABanner";
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
      <section className="bg-navy py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">Our Premium Services</h1>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            From finding the right talent to supporting employees throughout their journey, our
            services are designed to help your business build a thriving team, while you focus
            on growing with confidence.
          </p>
        </div>
      </section>

      {flagship && (
        <section className="-mt-16 px-4 md:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl bg-navy-dark p-8 md:p-12">
            <span className="inline-block rounded-full bg-green/20 px-4 py-1.5 text-sm font-semibold text-green">
              Our Flagship Service
            </span>
            <h2 className="mt-4 text-2xl font-bold text-white md:text-3xl">{flagship.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">{flagship.full}</p>
            <div className="mt-6">
              <Button
                href={`/contact?service=${encodeURIComponent(flagship.title)}`}
                variant="primary"
              >
                Request this service
              </Button>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl space-y-8 px-4 md:px-6 lg:px-8">
          {others.map((service) => (
            <ServiceDetail key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-light py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="How We Work" />
          <ProcessSteps />
        </div>
      </section>

      <CTABanner
        title="Ready to build a stronger team?"
        subtitle="Let's fix it. Together."
        buttonLabel="Get in Touch"
        buttonHref="/contact"
      />
    </>
  );
}
