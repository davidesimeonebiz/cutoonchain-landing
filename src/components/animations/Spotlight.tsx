"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Spotlight({
  className,
  fill = "var(--bull)",
}: {
  className?: string;
  fill?: string;
}) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className={cn(
        "pointer-events-none absolute z-0 h-[80vh] w-[120vw] opacity-50 mix-blend-screen",
        className
      )}
      viewBox="0 0 3787 2842"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822 -0.569 -0.569 0.822 3631.88 2291.09)"
          fill={fill}
          fillOpacity="0.21"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1" />
        </filter>
      </defs>
    </motion.svg>
  );
}
