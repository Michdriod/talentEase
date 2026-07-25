import { Button } from "./Button";

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonHref: string;
}

export function CTABanner({
  title,
  subtitle,
  buttonLabel,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="bg-green py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">{title}</h2>
        <p className="mt-4 text-base text-white/80 md:text-lg">{subtitle}</p>
        <div className="mt-8">
          <Button
            href={buttonHref}
            variant="secondary"
            className="w-full border-white text-white hover:bg-white hover:text-green sm:w-auto"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
