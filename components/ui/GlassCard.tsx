import { ReactNode } from 'react';

interface GlassCardProps {
  className?: string;
  children: ReactNode;
}

export const GlassCard = ({ className, children }: GlassCardProps) => {
  const base = "relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-2xl";
  return (
    <div className={[base, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};