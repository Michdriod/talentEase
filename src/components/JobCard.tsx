import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Job } from "@/data/jobs";

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-navy">{job.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-navy/60">
            <span className="rounded-full bg-green/10 px-3 py-1 text-xs font-semibold text-green">{job.type}</span>
            <span>{job.location}</span>
          </div>
          <p className="mt-2 text-sm font-semibold text-green">{job.salary}</p>
        </div>
        <Link
          href={`/careers/${job.slug}`}
          className="inline-flex items-center gap-2 rounded-lg bg-navy px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-dark"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
