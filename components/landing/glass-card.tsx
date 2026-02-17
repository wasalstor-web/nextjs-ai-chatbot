"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  popular?: boolean;
}

export function GlassCard({
  children,
  className = "",
  delay = 0,
  popular = false,
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative rounded-3xl border bg-white/80 backdrop-blur-xl dark:bg-white/5 ${
        popular
          ? "border-zinc-400/50 shadow-2xl shadow-zinc-500/20 dark:border-zinc-500/50"
          : "border-zinc-200/60 dark:border-white/10"
      } shadow-zinc-500/5 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-zinc-500/10 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: popular ? 1.02 : 1.01 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
