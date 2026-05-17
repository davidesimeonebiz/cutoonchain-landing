"use client";

import { cn } from "@/lib/utils";

export function InfiniteMovingCards({
  items,
  speed = 40,
  direction = "left",
  pauseOnHover = true,
  className,
}: {
  items: { id: string; node: React.ReactNode }[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
      style={{ ["--duration" as string]: `${speed}s` }}
    >
      <div
        className={cn(
          "flex w-max gap-6 animate-marquee",
          direction === "right" && "[animation-direction:reverse]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {[...items, ...items].map((item, i) => (
          <div key={`${item.id}-${i}`} className="shrink-0">
            {item.node}
          </div>
        ))}
      </div>
    </div>
  );
}
