import { Variants } from "framer-motion";
import { motionPresets } from "./presets";

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