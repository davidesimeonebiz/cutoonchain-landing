"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid w-full max-w-7xl auto-rows-[18rem] grid-cols-1 gap-4 md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  className,
  title,
  description,
  icon,
  index = 0,
}: {
  className?: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 p-6 transition-all hover:border-primary/40 hover:bg-card",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx,50%) var(--my,50%), color-mix(in oklch, var(--bull) 10%, transparent), transparent 40%)",
        }}
      />
      {icon && (
        <div className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          {icon}
        </div>
      )}
      <div className="mt-6">
        <h3 className="font-heading text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
