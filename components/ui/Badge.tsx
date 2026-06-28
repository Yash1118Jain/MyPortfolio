import { ReactNode } from 'react';

const badgeSizes = {
  xs: "text-[0.58rem]",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

interface BadgeProps {
  className?: string;
  children: ReactNode;
  size?: keyof typeof badgeSizes;
}

export const Badge = ({ className, children, size = 'xs' }: BadgeProps) => {
  const base = "uppercase text-zinc-500";
  const sizeClass = badgeSizes[size] || badgeSizes['xs'];
  return (
    <span className={[base, sizeClass, className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
};