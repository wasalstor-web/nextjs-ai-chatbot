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
  popular = false 
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      whileHover={{ y: -8, scale: popular ? 1.02 : 1.01 }}
      className={`relative bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-3xl border ${
        popular 
          ? 'border-green-500/50 shadow-2xl shadow-green-500/20' 
          : 'border-white/20 dark:border-white/10'
      } shadow-xl shadow-green-500/5 hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
}
