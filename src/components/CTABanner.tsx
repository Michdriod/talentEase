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
    <section className="bg-green py-20">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
        <p className="mt-4 text-lg text-white/80">{subtitle}</p>
        <div className="mt-8">
          <Button
            href={buttonHref}
            variant="secondary"
            className="border-white text-white hover:bg-white hover:text-green"
          >
            {buttonLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
