import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABannerAnimated } from "@/components/CTABannerAnimated";
import { FadeSection } from "@/components/FadeSection";

export const metadata: Metadata = {
  title: "Insights & Resources",
  description:
    "Practical HR knowledge for growing businesses, covering employee retention, hiring best practices, workplace culture, and more from TalentEase HR Services.",
};

const articles = [
  "Why Employees Quiet Quit and How to Fix It",
  "The True Cost of Hiring the Wrong Person",
  "5 HR Policies Every Growing Business Needs",
];

export default function InsightsPage() {
  return (
    <>
      <FadeSection className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy md:text-4xl lg:text-5xl">Insights</h1>
          <p className="mt-6 text-sm leading-relaxed text-navy/60 sm:text-base md:text-lg">
            Practical HR knowledge for growing businesses, from employee retention to building
            strong workplace cultures.
          </p>
        </div>
      </FadeSection>

      <FadeSection className="bg-dot-pattern relative overflow-hidden bg-light py-16 md:py-20">
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-gradient-to-br from-green/[0.04] to-transparent" />
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Articles" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm text-navy/40">Coming soon</p>
              </div>
            ))}
          </div>
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
