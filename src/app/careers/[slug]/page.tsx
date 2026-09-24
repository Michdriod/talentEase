import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { jobs, type Job } from "@/data/jobs";
import { site } from "@/data/site";
import { Button } from "@/components/Button";
import { FadeSection } from "@/components/FadeSection";
import { notFound } from "next/navigation";

interface JobDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: JobDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return { title: "Job Not Found" };
  return {
    title: `${job.title} | TalentEase HR Careers`,
    description: `Apply for ${job.title} at TalentEase HR Services. ${job.type} position in ${job.location}.`,
  };
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

const employmentTypes: Record<string, string> = {
  "Full-Time": "FULL_TIME",
  "Part-Time": "PART_TIME",
  Contract: "CONTRACTOR",
  Internship: "INTERN",
};

// Google for Jobs listing. Only open jobs with a datePosted get one, so marking a job
// as filled removes it from Google Jobs.
function jobPostingJsonLd(job: Job) {
  const list = (items: string[]) => `<ul>${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
  const salary = job.salary.match(/₦([\d,]+)\/month/);

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description:
      `<p>${job.title} (${job.location}). Reports to: ${job.reportsTo}.</p>` +
      `<h3>What You'll Do</h3>${list(job.whatYouWillDo)}` +
      `<h3>Requirements</h3>${list(job.requirements)}` +
      `<h3>What We Offer</h3>${list(job.whatWeOffer)}` +
      `<p>Send your CV to ${job.email}</p>`,
    identifier: { "@type": "PropertyValue", name: site.name, value: job.slug },
    datePosted: job.datePosted,
    employmentType: employmentTypes[job.type],
    hiringOrganization: {
      "@type": "Organization",
      name: site.name,
      sameAs: "https://talenteasehr.com",
      logo: "https://talenteasehr.com/logo.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: job.location.split(/[,(]/)[0].trim(),
        addressRegion: "Lagos",
        addressCountry: "NG",
      },
    },
    ...(salary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "NGN",
        value: {
          "@type": "QuantitativeValue",
          value: Number(salary[1].replace(/,/g, "")),
          unitText: "MONTH",
        },
      },
    }),
  };
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) notFound();

  return (
    <>
      {!job.filled && job.datePosted && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jobPostingJsonLd(job)).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <FadeSection className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy/60 transition-colors hover:text-green"
          >
            <ArrowLeft size={16} />
            Back to Careers
          </Link>

          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold text-navy md:text-4xl lg:text-5xl">{job.title}</h1>
              {job.filled ? (
                <span className="rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold text-navy/50">Position Filled</span>
              ) : (
                <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">{job.type}</span>
              )}
            </div>
            <p className="mt-3 text-sm text-navy/60">{job.location}</p>
            <p className="mt-1 text-sm text-navy/50">Reports to: {job.reportsTo}</p>
          </div>
        </div>
      </FadeSection>

      <FadeSection className="pb-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          {job.filled && (
            <div className="mb-6 rounded-2xl border border-navy/10 bg-navy/5 p-6 text-center">
              <p className="text-lg font-semibold text-navy">This position has been filled.</p>
              <p className="mt-2 text-sm text-navy/60">Check out our other open roles below.</p>
            </div>
          )}

          <div className="space-y-8 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:p-8">
            <div>
              <h2 className="mb-3 text-lg font-bold text-navy">What You&apos;ll Do</h2>
              <ul className="space-y-2">
                {job.whatYouWillDo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-navy/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-navy">Requirements</h2>
              <ul className="space-y-2">
                {job.requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-navy/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-3 text-lg font-bold text-navy">What We Offer</h2>
              <ul className="space-y-2">
                {job.whatWeOffer.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-navy/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl bg-light p-6 text-center">
              {job.filled ? (
                <p className="text-sm text-navy/60">
                  This position is no longer accepting applications. View our{" "}
                  <a href="/careers" className="font-semibold text-green hover:underline">other open roles</a>.
                </p>
              ) : (
                <p className="text-sm text-navy/60">
                  Send your CV to{" "}
                  <a href={`mailto:${job.email}`} className="font-semibold text-green hover:underline">
                    {job.email}
                  </a>
                </p>
              )}
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/careers" variant="secondary">
              View Other Openings
            </Button>
          </div>
        </div>
      </FadeSection>
    </>
  );
}
