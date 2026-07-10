import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const transparent = isHome && !scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-navy/95 backdrop-blur-md border-b border-cream/10 shadow-sm",
      )}
    >
      {/* UTILITY STRIP */}
      <div
        className={cn(
          "hidden lg:block overflow-hidden border-b border-cream/10 transition-[max-height,opacity] duration-500",
          transparent ? "max-h-10 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="container-x mx-auto max-w-7xl h-9 flex items-center justify-between text-cream/65 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="size-3" /> (303) 555-0142</span>
            <span className="flex items-center gap-1.5"><MapPin className="size-3" /> 1247 Mountain Ridge Ave, Aurora, CO</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-stencil tracking-[0.25em] text-saffron/80 text-[10px]">Fire · Smoke · Hospitality</span>
            <span className="flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="hover:text-saffron transition-colors"><Instagram className="size-3.5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-saffron transition-colors"><Facebook className="size-3.5" /></a>
            </span>
          </div>
        </div>
      </div>

      <div className="container-x mx-auto max-w-7xl flex items-center justify-between h-20">
        <Logo variant={transparent || !isHome ? "light" : "light"} />

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "text-sm font-medium tracking-wide uppercase transition-colors relative py-2",
                  "text-cream/80 hover:text-sunny",
                  active && "text-sunny",
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 h-px w-6 bg-sunny" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full text-cream hover:bg-cream/10"
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden bg-navy-deep border-t border-cream/10 transition-[max-height] duration-500",
          open ? "max-h-[480px]" : "max-h-0",
        )}
      >
        <nav className="container-x mx-auto max-w-7xl flex flex-col py-4">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="py-3 text-cream/90 hover:text-sunny font-medium uppercase tracking-wider text-sm border-b border-cream/5 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Scroll progress seam */}
      <div className="h-[2px] w-full bg-cream/5">
        <div
          className="h-full bg-gradient-to-r from-chili via-paprika via-ember via-marigold to-sunny transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
}
