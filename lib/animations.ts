import { useMotionValue, useSpring, useTransform, type MotionProps, type Transition, type Variants } from "framer-motion";
import { useCallback } from "react";

const createSpring = (overrides: Partial<Transition> = {}): Transition => ({
  type: "spring",
  stiffness: 180,
  damping: 22,
  mass: 0.9,
  ...overrides,
});

export const motionPresets = {
  subtle: createSpring({ stiffness: 160, damping: 24 }),
  smooth: createSpring({ stiffness: 180, damping: 20 }),
  gentle: createSpring({ stiffness: 140, damping: 24 }),
  snappy: createSpring({ stiffness: 240, damping: 18 }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: motionPresets.gentle },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: motionPresets.smooth },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: motionPresets.smooth },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: motionPresets.smooth },
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: { opacity: 1, filter: "blur(0px)", transition: motionPresets.smooth },
};

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { opacity: 1, scale: 1, transition: motionPresets.smooth },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: motionPresets.gentle },
};

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: motionPresets.smooth },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: motionPresets.gentle },
};

export const buttonHover = {
  rest: { scale: 1, y: 0, boxShadow: "0 0 0 rgba(59,130,246,0)" },
  hover: {
    scale: 1.01,
    y: -2,
    boxShadow: "0 0 0 1px rgba(59,130,246,0.16), 0 0 24px rgba(59,130,246,0.12)",
    transition: motionPresets.snappy,
  },
  tap: {
    scale: 0.985,
    transition: motionPresets.snappy,
  },
};

export const magneticHover = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: { scale: 1.01, transition: motionPresets.snappy },
};

export const floatingAnimation = {
  animate: { y: [0, -4, 0] },
  transition: {
    ...motionPresets.smooth,
    repeat: Infinity,
    repeatType: "mirror" as const,
    duration: 5.5,
  },
};

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: motionPresets.smooth },
};

export function useMouseParallax(options?: { xRange?: number; yRange?: number; scale?: number }) {
  const xRange = options?.xRange ?? 8;
  const yRange = options?.yRange ?? 8;
  const scale = options?.scale ?? 1.01;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [4, -4]), {
    stiffness: 160,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-4, 4]), {
    stiffness: 160,
    damping: 18,
  });

  const motionStyle = {
    rotateX,
    rotateY,
    scale,
    transformStyle: "preserve-3d" as const,
  };

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX.set((x / rect.width - 0.5) * xRange * 2);
      mouseY.set((y / rect.height - 0.5) * yRange * 2);
    },
    [mouseX, mouseY, xRange, yRange],
  );

  const onPointerLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return {
    motionStyle,
    onPointerMove,
    onPointerLeave,
  };
}

export function useMagneticHover(options?: { strength?: number; scale?: number }) {
  const strength = options?.strength ?? 0.16;
  const scale = options?.scale ?? 1.01;

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 180, damping: 18 });
  const springY = useSpring(y, { stiffness: 180, damping: 18 });

  const motionStyle = {
    x: springX,
    y: springY,
    scale,
  };

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const relX = event.clientX - rect.left;
      const relY = event.clientY - rect.top;
      const offsetX = (relX / rect.width - 0.5) * strength * 24;
      const offsetY = (relY / rect.height - 0.5) * strength * 24;
      x.set(offsetX);
      y.set(offsetY);
    },
    [strength, x, y],
  );

  const onPointerLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return {
    motionStyle,
    onPointerMove,
    onPointerLeave,
  };
}

export function useFloatingAnimation(options?: { distance?: number; duration?: number }) {
  const distance = options?.distance ?? 4;
  const duration = options?.duration ?? 5.5;

  return {
    animate: { y: [0, -distance, 0] },
    transition: {
      ...motionPresets.smooth,
      repeat: Infinity,
      repeatType: "mirror" as const,
      duration,
    },
  } as MotionProps;
}
