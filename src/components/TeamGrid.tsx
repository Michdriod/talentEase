"use client";

import { TeamCard } from "./TeamCard";
import { useInView } from "@/hooks/useInView";
import type { TeamMember } from "@/data/team";

interface TeamGridProps {
  members: TeamMember[];
}

function TeamCardWrapper({ member, delay }: { member: TeamMember; delay: number }) {
  const { ref, isInView } = useInView({ margin: "-40px", once: true });

  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.4s ease-out ${delay}s, transform 0.4s ease-out ${delay}s`,
      }}
    >
      <TeamCard member={member} />
    </div>
  );
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <>
      {members.map((member, i) => (
        <TeamCardWrapper key={member.name} member={member} delay={i * 0.08} />
      ))}
    </>
  );
}
