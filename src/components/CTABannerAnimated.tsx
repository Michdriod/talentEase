"use client";

import { useInView } from "@/hooks/useInView";
import { Button } from "./Button";

interface CTABannerAnimatedProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
}

function FadeInDiv({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const { ref, isInView } = useInView({ margin: "0px", once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : "translateY(50px) scale(0.93)",
        transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

export function CTABannerAnimated({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
}: CTABannerAnimatedProps) {
  return (
    <section className="bg-green py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <FadeInDiv delay={0}>
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">{title}</h2>
        </FadeInDiv>
        <FadeInDiv delay={0.12}>
          <p className="mt-4 text-base text-white/80 md:text-lg">{subtitle}</p>
        </FadeInDiv>
        <FadeInDiv delay={0.24}>
          <div className="mt-8">
            <Button
              href={buttonHref}
              variant="secondary"
              className="w-full border-white text-white hover:bg-white hover:text-green sm:w-auto"
            >
              {buttonLabel}
            </Button>
          </div>
        </FadeInDiv>
      </div>
    </section>
  );
}
