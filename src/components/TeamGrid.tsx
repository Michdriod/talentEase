"use client";

import { TeamCard } from "./TeamCard";
import { useInView } from "@/hooks/useInView";
import type { TeamMember } from "@/data/team";

interface TeamGridProps {
  members: TeamMember[];
}

function TeamCardWrapper({ member, delay }: { member: TeamMember; delay: number }) {
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
      <TeamCard member={member} />
    </div>
  );
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <>
      {members.map((member, i) => (
        <TeamCardWrapper key={member.name} member={member} delay={i * 0.12} />
      ))}
    </>
  );
}
