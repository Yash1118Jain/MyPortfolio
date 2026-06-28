import { Variants } from "framer-motion";
import { motionPresets } from "./presets";

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: motionPresets.gentle },
};