"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function NumberTicker({
  value,
  duration = 1.6,
  decimals = 0,
  prefix,
  suffix,
  className,
}: {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    decimals === 0
      ? Math.round(v).toLocaleString("it-IT")
      : v.toLocaleString("it-IT", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
  );

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, value, { duration, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [inView, value, duration, motionValue]);

  return (
    <span ref={ref} className={cn("inline-flex tabular-nums", className)}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
