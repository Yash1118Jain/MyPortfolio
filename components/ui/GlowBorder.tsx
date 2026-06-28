import { ReactNode } from 'react';

interface GlowBorderProps {
   className?: string;
   children: ReactNode;
   glowColor?: string;
   glowBlur?: string;
   glowSize?: string;
}

export const GlowBorder = ({
   className,
   children,
   glowColor = "rgba(96,165,250,0.14)",
   glowBlur = "70%",
   glowSize = "360px",
}: GlowBorderProps) => {
   return (
      <div className={`relative ${className}`}>
         <div
            className="absolute inset-0 pointer-events-none"
            style={{
               background: `linear-gradient(var(--bg, white), var(--bg, white)) padding-box,
                           radial-gradient(circle at 50% 50%, var(--color, ${glowColor}), transparent var(--blur, ${glowBlur})) border-box;`,
               border: '2px solid transparent',
               borderRadius: 'inherit',
            }}
         ></div>
         <div className="relative z-10">{children}</div>
      </div>
   );
};