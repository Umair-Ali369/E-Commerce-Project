// src/Animations/motionStyles.js
import { easeInOut } from "framer-motion";

// ----------------------------------
// 1. Fade Up Animation
// ----------------------------------
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ----------------------------------
// 2. Fade In Animation
// ----------------------------------
export const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

// ----------------------------------
// 3. Slide Left
// ----------------------------------
export const slideLeft = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ----------------------------------
// 4. Slide Right
// ----------------------------------
export const slideRight = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ----------------------------------
// 5. Hover Scale Button
// ----------------------------------
export const hoverScale = {
  hover: { scale: 1.08, transition: { type: "spring", stiffness: 180 } },
  tap: { scale: 0.92 },
};

// ----------------------------------
// 6. Card Hover Bounce
// ----------------------------------
export const cardHover = {
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 150 } },
};

// ----------------------------------
// 7. Page Transition (Fade)
// ----------------------------------
export const pageFade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

// ----------------------------------
// 8. Stagger Children (Grid items)
// ----------------------------------
export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// ----------------------------------
// 9. Zoom In (Image, product detail)
// ----------------------------------
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

// ----------------------------------
// 10. Smooth Opacity Loader
// ----------------------------------
export const fadeLoader = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { repeat: Infinity, duration: 0.8, ease: "easeInOut" },
  },
};
