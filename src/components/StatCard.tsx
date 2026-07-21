interface StatCardProps {
  stat: string;
  label: string;
}

export function StatCard({ stat, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-green/20 bg-white/5 p-6 text-center backdrop-blur">
      <div className="text-4xl font-bold text-green md:text-5xl">{stat}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{label}</div>
    </div>
  );
}
