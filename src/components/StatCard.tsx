interface StatCardProps {
  stat: string;
  label: string;
}

export function StatCard({ stat, label }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-green/20 bg-white/5 p-4 text-center backdrop-blur sm:p-6">
      <div className="text-3xl font-bold text-green sm:text-4xl md:text-5xl">{stat}</div>
      <div className="mt-2 text-sm leading-relaxed text-white/70">{label}</div>
    </div>
  );
}
