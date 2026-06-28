import { Variants } from "framer-motion";
import { motionPresets } from "./presets";

export const scrollReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: motionPresets.smooth },
};

export const floatingAnimation: any = {
  animate: { y: [0, -4, 0] },
  transition: {
    ...motionPresets.smooth,
    repeat: Infinity,
    repeatType: "mirror" as const,
    duration: 5.5,
  },
};