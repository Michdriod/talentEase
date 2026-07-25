import Image from "next/image";
import { clients } from "@/data/clients";

export function LogoGrid() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {clients.map((client) => (
          <div
            key={client.name}
            className="relative flex h-14 w-28 items-center justify-center"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
