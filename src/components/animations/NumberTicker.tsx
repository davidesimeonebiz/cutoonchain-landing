"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/lib/motion-prefs";

function formatValue(value: number, decimals: number) {
  return decimals === 0
    ? Math.round(value).toLocaleString("it-IT")
    : value.toLocaleString("it-IT", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
}

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
  const liteMotion = useLiteMotion();
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => formatValue(v, decimals));
  const staticLabel = `${prefix ?? ""}${formatValue(value, decimals)}${suffix ?? ""}`;

  useEffect(() => {
    if (liteMotion || !inView) return;
    const controls = animate(motionValue, value, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, value, duration, motionValue, liteMotion]);

  if (liteMotion) {
    return (
      <span ref={ref} className={cn("inline-flex tabular-nums", className)}>
        {staticLabel}
      </span>
    );
  }

  return (
    <span ref={ref} className={cn("inline-flex tabular-nums", className)}>
      {prefix}
      {inView ? <motion.span>{rounded}</motion.span> : formatValue(value, decimals)}
      {suffix}
    </span>
  );
}
