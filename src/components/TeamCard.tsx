import { User } from "lucide-react";
import type { TeamMember } from "@/data/team";

interface TeamCardProps {
  member: TeamMember;
}

export function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="rounded-2xl border border-navy/10 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-light text-navy/30">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="h-full w-full rounded-full object-cover" />
        ) : (
          <User size={48} />
        )}
      </div>
      <h3 className="text-lg font-bold text-navy">{member.name}</h3>
      <p className="mt-1 text-sm font-medium text-green">{member.role}</p>
      {member.bio && (
        <p className="mt-3 text-sm leading-relaxed text-navy/60">{member.bio}</p>
      )}
      {!member.bio && (
        <p className="mt-3 text-sm italic text-navy/40">Details coming soon</p>
      )}
    </div>
  );
}
