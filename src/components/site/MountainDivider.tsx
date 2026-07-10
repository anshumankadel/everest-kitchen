import { cn } from "@/lib/utils";

interface MountainDividerProps {
  /** Fill color of the peaks — should match the section ABOVE the divider. */
  fill?: "navy" | "navy-deep" | "cream" | "secondary" | "chili-deep" | "chalkboard" | "sunny";
  flip?: boolean;
  className?: string;
}

const FILL_MAP: Record<NonNullable<MountainDividerProps["fill"]>, string> = {
  navy: "text-navy",
  "navy-deep": "text-navy-deep",
  cream: "text-cream",
  secondary: "text-secondary",
  "chili-deep": "text-chili-deep",
  chalkboard: "text-chalkboard",
  sunny: "text-sunny",
};

/**
 * Everest Kitchen's signature skyline seam — echoes the three peaks in the
 * brand crest. Drop between sections instead of a flat edge.
 */
export function MountainDivider({ fill = "cream", flip = false, className }: MountainDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative w-full h-10 sm:h-16 overflow-hidden", flip && "rotate-180", className)}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={cn("absolute inset-0 h-full w-full", FILL_MAP[fill])}
      >
        <path
          fill="currentColor"
          d="M0,120 L0,90 L160,30 L260,68 L420,8 L600,72 L760,18 L900,66 L1040,32 L1200,80 L1200,120 Z"
        />
      </svg>
    </div>
  );
}
