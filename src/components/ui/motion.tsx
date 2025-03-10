"use client";

import {
  motion as FramerMotion,
  AnimatePresence,
  HTMLMotionProps,
} from "framer-motion";
import { forwardRef, ElementType } from "react";

// Create a generic motion component factory
function createMotionComponent<T extends keyof HTMLElementTagNameMap>(
  element: T,
  displayName: string
) {
  type Props = HTMLMotionProps<T>;

  const Component = forwardRef<HTMLElementTagNameMap[T], Props>(
    (props, ref) => {
      // Use the correct way to access motion components
      const MotionComponent = FramerMotion[
        element as keyof typeof FramerMotion
      ] as ElementType;
      return <MotionComponent ref={ref} {...props} />;
    }
  );

  Component.displayName = displayName;
  return Component;
}

const Motion = createMotionComponent("div", "Motion");
const MotionH1 = createMotionComponent("h1", "MotionH1");
const MotionH2 = createMotionComponent("h2", "MotionH2");
const MotionH3 = createMotionComponent("h3", "MotionH3");
const MotionP = createMotionComponent("p", "MotionP");
const MotionSpan = createMotionComponent("span", "MotionSpan");

export {
  Motion,
  MotionH1,
  MotionH2,
  MotionH3,
  MotionP,
  MotionSpan,
  AnimatePresence,
  createMotionComponent,
};
