import type { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold text-navy">{job.title}</h3>
      <div className="mt-2 flex gap-4 text-sm text-navy/60">
        <span>{job.type}</span>
        <span>{job.location}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-navy/60">{job.description}</p>
    </div>
  );
}
