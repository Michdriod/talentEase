"use client";

import { motion } from "framer-motion";
import { TeamCard } from "./TeamCard";
import type { TeamMember } from "@/data/team";

interface TeamGridProps {
  members: TeamMember[];
}

export function TeamGrid({ members }: TeamGridProps) {
  return (
    <>
      {members.map((member, i) => (
        <motion.div
          key={member.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
        >
          <TeamCard member={member} />
        </motion.div>
      ))}
    </>
  );
}
