import { ReactNode } from 'react';

const maxWidths = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
};

interface ContainerProps {
  className?: string;
  children: ReactNode;
  maxWidth?: keyof typeof maxWidths;
}

export const Container = ({ className, children, maxWidth = 'max-width': maxWidth = '7xl' }: ContainerProps) => {
  const base = "mx-auto";
  const widthClass = maxWidths[maxWidth] || maxWidths['7xl'];
  return (
    <div className={[base, widthClass, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};