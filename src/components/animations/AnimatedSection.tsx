"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/lib/motion-prefs";

export function AnimatedSection({
  id,
  className,
  children,
  delay = 0,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const liteMotion = useLiteMotion();

  if (liteMotion) {
    return (
      <section id={id} className={cn("scroll-mt-24", className)}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn("scroll-mt-24", className)}
    >
      {children}
    </motion.section>
  );
}
