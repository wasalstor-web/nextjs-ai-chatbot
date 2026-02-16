"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({ 
  value, 
  suffix = "",
  prefix = "",
  duration = 2
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [inView, value, count, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {inView ? <motion.span>{rounded}</motion.span> : "0"}
      {suffix}
    </motion.span>
  );
}
