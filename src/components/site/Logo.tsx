import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/everest-kitchen-logo.jpeg";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "default" | "lg";
}

export function Logo({ variant = "dark", className, size = "default" }: LogoProps) {
  const isLight = variant === "light";
  return (
    <Link to="/" className={cn("group inline-flex items-center gap-3 leading-none", className)}>
      <span
        className={cn(
          "relative shrink-0 rounded-full overflow-hidden ring-2 ring-saffron/70 shadow-warm transition-transform duration-500 group-hover:rotate-[8deg]",
          size === "lg" ? "size-14 sm:size-16" : "size-10 sm:size-11",
        )}
      >
        <img
          src={logoMark}
          alt="Everest Kitchen crest"
          width={128}
          height={128}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="flex flex-col">
        <span
          className={cn(
            "font-display font-bold uppercase tracking-[0.18em] transition-colors",
            size === "lg" ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl",
            isLight ? "text-cream" : "text-navy",
          )}
        >
          Everest
        </span>
        <span className="flex items-center gap-2">
          <span className="h-px w-6 bg-saffron" />
          <span
            className={cn(
              "font-display font-bold uppercase tracking-[0.32em] text-[10px] sm:text-xs transition-colors",
              isLight ? "text-saffron" : "text-terracotta",
            )}
          >
            Kitchen · Est. 2021
          </span>
        </span>
      </span>
    </Link>
  );
}
