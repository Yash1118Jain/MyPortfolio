import { Variants } from "framer-motion";
import { motionPresets } from "./presets";

export const buttonHover: Variants = {
  rest: { scale: 1, y: 0, boxShadow: "0 0 0 rgba(59,130,246,0)" },
  hover: {
    scale: 1.01,
    y: -2,
    boxShadow: "0 0 0 1px rgba(59,130,246,0.16), 0 0 24px rgba(59,59,130,246,0.12)",
    transition: motionPresets.snappy,
  },
  tap: {
    scale: 0.985,
    transition: motionPresets.snappy,
  },
};

export const magneticHover: Variants = {
  rest: { scale: 1, x: 0, y: 0 },
  hover: { scale: 1.01, transition: motionPresets.snappy },
};