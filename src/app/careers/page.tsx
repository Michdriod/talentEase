import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { JobCard } from "@/components/JobCard";
import { FadeSection } from "@/components/FadeSection";
import { CTABannerAnimated } from "@/components/CTABannerAnimated";
import { jobs } from "@/data/jobs";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join TalentEase HR Services. Browse current openings or join our talent network to be considered for future roles in HR and business support.",
};

export default function CareersPage() {
  return (
    <>
      <FadeSection className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-navy md:text-4xl lg:text-5xl">Careers</h1>
          <p className="mt-6 text-sm leading-relaxed text-navy/60 sm:text-base md:text-lg">
            We connect talented professionals with growing businesses. Browse current openings
            below, or join our talent network to be considered for future roles.
          </p>
        </div>
      </FadeSection>

      <FadeSection className="pb-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          {jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job) => (
                <JobCard key={job.title} job={job} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm sm:p-8">
              <p className="text-navy/60">
                There are no open roles right now, but we&apos;re always happy to meet great talent.
                Send your CV to{" "}
                <a href={`mailto:${site.email}`} className="text-green hover:underline">
                  {site.email}
                </a>{" "}
                or join our talent network below.
              </p>
            </div>
          )}

          <div className="mt-10 rounded-2xl border border-green/20 bg-green/5 p-6 text-center sm:p-8">
            <h2 className="text-xl font-bold text-navy">Apply / Join Our Talent Network</h2>
            <p className="mt-3 text-sm text-navy/60">
              You&apos;ll be redirected to a short Google Form where you can apply for roles and
              attach your CV.
            </p>
            <div className="mt-6">
              <Button href={site.careersFormUrl} external>
                Apply Now
              </Button>
            </div>
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
