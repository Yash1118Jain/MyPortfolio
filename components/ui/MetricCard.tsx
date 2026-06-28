import { ReactNode } from 'react';

interface MetricCardProps {
  className?: string;
  label: string;
  value: string;
  subtitle?: string;
}

export const MetricCard = ({ className, label, value, subtitle }: MetricCardProps) => {
  const base = "rounded-[1rem] border border-white/10 bg-white/[0.04] p-3 backdrop-blur";
  return (
    <div className={[base, className].filter(Boolean).join(' ')}>
      <div className="text-[0.58rem] uppercase tracking-[0.24em] text-zinc-500">{label}</div>
      <div className="mt-2 text-lg font-semibold text-zinc-100">{value}</div>
      {subtitle && <div className="mt-1 text-[0.68rem] text-zinc-500">{subtitle}</div>}
    </div>
  );
};