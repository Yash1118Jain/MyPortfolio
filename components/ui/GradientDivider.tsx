import { ReactNode } from 'react';

interface GradientDividerProps {
   className?: string;
   orientation?: 'horizontal' | 'vertical';
   gradient?: string;
   size?: string;
}

export const GradientDivider = ({
   className,
   orientation = 'horizontal',
   gradient = "linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))",
   /* Note: the gradient string was cut off in the thinking, but we will use the one from the Hero's background: "linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))" */
   size = '1px',
}: GradientDividerProps) => {
   return (
      <div
         className={className}
         style={{
            background: gradient,
            [orientation === 'horizontal' ? 'height' : 'width']: size,
         }}
      />
   );
};