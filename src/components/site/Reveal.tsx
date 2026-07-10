import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Subtle slide direction the element animates in from. */
  from?: "up" | "left" | "right" | "none";
  /** Wrapper tag — defaults to div, pass "header"/"li"/etc. to preserve semantics. */
  as?: ElementType;
}

const FROM_MAP: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translate-y-8",
  left: "-translate-x-8",
  right: "translate-x-8",
  none: "",
};

/** Fades/slides children in once they scroll into view — subtle, fires once. */
export function Reveal({ children, className, delay = 0, from = "up", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out",
        visible ? "opacity-100 translate-x-0 translate-y-0" : cn("opacity-0", FROM_MAP[from]),
        className,
      )}
    >
      {children}
    </Tag>
  );
}
