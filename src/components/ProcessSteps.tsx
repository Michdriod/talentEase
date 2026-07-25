import { processSteps } from "@/data/process";

export function ProcessSteps() {
  return (
    <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <div key={step.step} className="relative rounded-2xl border border-navy/10 bg-white p-6">
          <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green text-sm font-bold text-white">
            {step.step}
          </span>
          <h3 className="mb-2 text-lg font-bold text-navy">{step.title}</h3>
          <p className="text-sm leading-relaxed text-navy/60">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
