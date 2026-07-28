import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { jobs } from "@/data/jobs";
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

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) notFound();

  return (
    <>
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
              <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">{job.type}</span>
            </div>
            <p className="mt-3 text-sm text-navy/60">{job.location}</p>
            <p className="mt-1 text-sm text-navy/50">Reports to: {job.reportsTo}</p>
          </div>
        </div>
      </FadeSection>

      <FadeSection className="pb-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
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
              <p className="text-sm text-navy/60">
                Send your CV to{" "}
                <a href={`mailto:${job.email}`} className="font-semibold text-green hover:underline">
                  {job.email}
                </a>
              </p>
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
