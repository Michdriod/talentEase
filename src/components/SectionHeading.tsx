interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  light,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`text-2xl font-bold md:text-3xl lg:text-4xl ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl mx-auto text-base ${light ? "text-white/80" : "text-navy/70"} md:text-lg`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
