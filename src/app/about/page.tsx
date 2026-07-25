import type { Metadata } from "next";
import { Target, Rocket, Building2, UserX, Search, Building } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamGrid } from "@/components/TeamGrid";
import { CTABannerAnimated } from "@/components/CTABannerAnimated";
import { FadeSection } from "@/components/FadeSection";
import { LogoGrid } from "@/components/LogoGrid";
import { portfolioIntro } from "@/data/clients";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "TalentEase HR Services provides accessible, affordable, people-centered HR solutions for startups and growing businesses in Nigeria.",
};

const audiences = [
  { title: "Startups", icon: Rocket, desc: "Early-stage companies building their people foundation from the ground up." },
  { title: "Small Businesses", icon: Building2, desc: "Growing teams that need practical HR support without a full in-house department." },
  { title: "Medium Businesses", icon: Target, desc: "Established organizations scaling operations and strengthening workforce structure." },
];

const problems = [
  {
    icon: UserX,
    title: "Lack of Dedicated HR Support",
    desc: "We help businesses that need professional HR expertise but cannot afford the cost of hiring a full-time HR manager or setting up an internal HR department.",
  },
  {
    icon: Search,
    title: "Challenges with Hiring and Managing Talent",
    desc: "We support organizations in finding the right candidates, improving employee management, and creating effective people processes that help teams perform better.",
  },
  {
    icon: Building,
    title: "Limited HR Structure and Processes",
    desc: "We help businesses establish practical HR systems, policies, and practices that improve efficiency, employee experience, and long-term growth.",
  },
];

export default function AboutPage() {
  return (
    <>
      <FadeSection className="relative overflow-hidden bg-navy py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Who We Are</h1>
          <p className="mt-4 text-base font-bold text-green md:text-lg">People. Growth. Impact.</p>
        </div>
        <div
          className="pointer-events-none absolute -bottom-px right-0 h-24 w-72 bg-white"
          style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
        />
      </FadeSection>

      <FadeSection className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
        <div className="pointer-events-none absolute -left-20 top-1/3 h-40 w-40 -translate-y-1/2 rounded-[2rem] bg-gradient-to-br from-green/[0.03] to-transparent" />

        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight text-navy md:text-3xl lg:text-4xl">
                Our
                <br />
                <span className="text-green">Story</span>
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-green to-green-dark" />
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-navy/70 md:text-lg lg:col-span-3">
              <p className="border-l-4 border-green pl-5 text-lg font-medium leading-relaxed text-navy md:text-xl">
                TalentEase HR Services was born from a simple belief: every business, regardless
                of its size, deserves access to exceptional HR support.
              </p>
              <p>
                We saw many growing organizations struggling with hiring, managing people, and
                building strong workplace cultures, not because they lacked ambition, but
                because they couldn&apos;t justify the cost of a full-fledged HR department.
              </p>
              <p>
                We founded TalentEase to bridge that gap by making professional HR services
                accessible, practical, and affordable.
              </p>
              <p>
                From finding the right talent to supporting employees throughout their journey,
                we&apos;re committed to helping businesses build thriving teams while they focus
                on growing with confidence.
              </p>
            </div>
          </div>
        </div>
      </FadeSection>

      <FadeSection className="relative overflow-hidden bg-light py-16 md:py-24 lg:py-32">
        <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-[3rem] border border-green/10" />
        <div className="pointer-events-none absolute -bottom-8 -right-8 h-56 w-56 rounded-[2rem] border border-navy/5" />
        <div className="pointer-events-none absolute -left-20 top-1/3 h-40 w-40 -translate-y-1/2 rounded-[2rem] bg-gradient-to-br from-green/[0.03] to-transparent" />

        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold leading-tight text-navy md:text-3xl lg:text-4xl">
                What We
                <br />
                <span className="text-green">Do</span>
              </h2>
              <div className="mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-green to-green-dark" />
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-navy/70 md:text-lg lg:col-span-3">
              <p className="border-l-4 border-green pl-5 text-lg font-medium leading-relaxed text-navy md:text-xl">
                We help startups and growing businesses build effective people structures
                and employee engagement systems that support business growth and operational
                efficiency.
              </p>
              <p>
                Our talent strategy and engagement solutions are designed to help businesses
                develop the right workforce structure, improve employee performance, and
                build a strong workplace culture from the early stages of growth.
              </p>
              <p>
                By simplifying people management processes, we enable businesses to focus on
                growth while maintaining a productive and compliant workforce.
              </p>
            </div>
          </div>
        </div>
      </FadeSection>

      <FadeSection className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Who We Serve" />
          <div className="grid gap-6 md:grid-cols-3">
            {audiences.map(({ title, icon: Icon, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      <FadeSection className="bg-light py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
          <div className="relative rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-navy/5 sm:p-10">
            <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-green to-green-dark" />
            <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
              <Target size={24} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-navy md:text-2xl">Our Mission</h3>
            <p className="text-base leading-relaxed text-navy/70 md:text-lg">
              To empower businesses with accessible, affordable, and people-centered HR solutions
              that help them build stronger teams and achieve lasting growth.
            </p>
          </div>
        </div>
      </FadeSection>

      <FadeSection className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Problems We Solve" />
          <div className="grid gap-6 md:grid-cols-3">
            {problems.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green transition-colors group-hover:bg-green group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-navy">{title}</h3>
                <p className="text-sm leading-relaxed text-navy/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </FadeSection>

      <FadeSection className="bg-light py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <SectionHeading title="Our Portfolio" />
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-navy/60 md:text-lg">
            {portfolioIntro}
          </p>
          <LogoGrid />
        </div>
      </FadeSection>

      <FadeSection className="py-16 md:py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title="Meet the Team" />
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            <TeamGrid members={team} />
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
