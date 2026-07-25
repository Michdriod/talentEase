import { User, ExternalLink } from "lucide-react";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  const content = (
    <>
      <div className="flex aspect-[3/4] w-full items-start justify-center overflow-hidden rounded-t-2xl bg-light max-md:max-h-64">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="h-full w-full object-cover object-top" />
        ) : (
          <User size={48} className="text-navy/30" />
        )}
      </div>
      <div className="p-5 text-center">
        <h3 className="text-lg font-bold text-navy">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-green">{member.role}</p>
        {member.bio && (
          <p className="mt-3 text-sm leading-relaxed text-navy/60">{member.bio}</p>
        )}
      </div>
    </>
  );

  if (member.linkedin) {
    return (
      <a
        href={member.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block rounded-2xl border border-navy/10 bg-white p-0 shadow-sm transition-shadow hover:shadow-md"
      >
        {content}
        <span className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-navy/40 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          <ExternalLink size={14} />
        </span>
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-0 shadow-sm">
      {content}
    </div>
  );
}
