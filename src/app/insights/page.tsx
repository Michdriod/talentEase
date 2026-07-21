import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { VideoEmbed } from "@/components/VideoEmbed";
import { CTABanner } from "@/components/CTABanner";
import { videos } from "@/data/videos";

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
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-navy md:text-5xl">Insights & Resources</h1>
          <p className="mt-6 text-lg leading-relaxed text-navy/60">
            Practical HR knowledge for growing businesses, from employee retention to building
            strong workplace cultures.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Videos" />
          {videos.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <VideoEmbed key={video.id} id={video.id} title={video.title} />
              ))}
            </div>
          ) : (
            <p className="text-center text-navy/40">Videos coming soon.</p>
          )}
        </div>
      </section>

      <section className="bg-light py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Articles" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((title) => (
              <div
                key={title}
                className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-3 text-sm text-navy/40">Coming soon</p>
              </div>
            ))}
          </div>
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
