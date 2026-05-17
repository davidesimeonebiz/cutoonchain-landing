"use client";

import { cn } from "@/lib/utils";
import { useLiteMotion } from "@/lib/motion-prefs";

export function AuroraBackground({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const liteMotion = useLiteMotion();

  return (
    <div className={cn("relative isolate overflow-hidden", className)}>
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]",
          !liteMotion && "blur-2xl lg:blur-3xl"
        )}
      >
        <div
          className={cn(
            "absolute inset-0",
            liteMotion
              ? "bg-[radial-gradient(ellipse_at_30%_20%,color-mix(in_oklch,var(--bull)_18%,transparent),transparent_55%)]"
              : "animate-aurora"
          )}
          style={
            liteMotion
              ? undefined
              : {
                  backgroundImage:
                    "repeating-linear-gradient(100deg, var(--bull) 0%, color-mix(in oklch, var(--bull) 70%, transparent) 7%, transparent 14%, transparent 28%, var(--gold) 35%, color-mix(in oklch, var(--gold) 60%, transparent) 50%, transparent 70%), repeating-linear-gradient(100deg, #0a0d10 0%, #0a0d10 7%, transparent 10%, transparent 18%, #0a0d10 22%)",
                  backgroundSize: "300% 200%, 200% 200%",
                  backgroundPosition: "50% 50%, 50% 50%",
                }
          }
        />
      </div>
      {children}
    </div>
  );
}
