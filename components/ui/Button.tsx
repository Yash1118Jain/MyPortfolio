import { ReactNode } from 'react';

const buttonVariants = {
  primary: "bg-white/8 text-zinc-100 hover:bg-white/20",
  secondary: "bg-white/6 text-zinc-200 hover:bg-white/20",
};

interface ButtonProps {
  as?: keyof JSX.IntrinsicElements;
  href?: string;
  variant?: keyof typeof buttonVariants;
  className?: string;
  children: ReactNode;
}

export const Button = ({
  as = 'button',
  href,
  variant = 'primary',
  className,
  children,
}: ButtonProps) => {
  const base = "inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium backdrop-blur-xl";
  const variantClass = buttonVariants[variant] || buttonVariants.primary;
  const Comp = as === 'a' ? 'a' : 'button';

  return (
    <Comp
      href={as === 'a' ? href : undefined}
      className={[base, variantClass, className].filter(Boolean).join(' ')}
    >
      {children}
    </Comp>
  );
};