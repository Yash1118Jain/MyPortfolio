import { ReactNode } from 'react';

const headingSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
  "6xl": "text-6xl",
};

const headingWeights = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

interface SectionHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: keyof typeof headingSizes;
  weight?: keyof typeof headingWeights;
  className?: string;
  children: ReactNode;
}

export const SectionHeading = ({
  as = 'h2',
  size = 'base',
  weight = 'medium',
  className,
  children,
}: SectionHeadingProps) => {
  const sizeClass = headingSizes[size] || headingSizes['base'];
  const weightClass = headingWeights[weight] || headingWeights['medium'];
  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    <Tag className={[sizeClass, weightClass, className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  );
};