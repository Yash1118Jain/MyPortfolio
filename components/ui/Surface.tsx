import { ReactNode } from 'react';

const surfaceVariants = {
   glass: "border border-white/10 bg-white/[0.045] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur-2xl",
   "dark-glass": "border border-white/10 bg-black/30 p-4 backdrop-blur-sm",
   light: "bg-white/5 border border-white/10",
   dark: "bg-black/5 border border-white/10",
};

interface SurfaceProps {
   className?: string;
   children: ReactNode;
   variant?: keyof typeof surfaceVariants;
}

export const Surface = ({
   className,
   children,
   variant = 'glass',
}: SurfaceProps) => {
   const base = "relative";
   const variantClass = surfaceVariants[variant] || surfaceVariants.glass;
   return (
      <div className={[base, variantClass, className].filter(Boolean).join(' ')}>
         {children}
      </div>
   );
};