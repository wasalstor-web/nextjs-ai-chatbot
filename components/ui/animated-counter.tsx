"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  locale?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2,
  locale,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    return locale ? rounded.toLocaleString(locale) : String(rounded);
  });

  useEffect(() => {
    if (inView) {
      animate(count, value, { duration, ease: "easeOut" });
    }
  }, [inView, value, count, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {inView ? <motion.span>{display}</motion.span> : "0"}
      {suffix}
    </motion.span>
  );
}
