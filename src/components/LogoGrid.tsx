"use client";

import Image from "next/image";
import { clients } from "@/data/clients";
import { StaggeredWrapper } from "@/components/StaggeredWrapper";

export function LogoGrid() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {clients.map((client, i) => (
          <StaggeredWrapper key={client.name} delay={i * 0.08}>
            <div className="relative flex h-16 w-28 items-center justify-center">
              <Image
                src={client.logo}
                alt={`${client.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </StaggeredWrapper>
        ))}
      </div>
    </div>
  );
}
