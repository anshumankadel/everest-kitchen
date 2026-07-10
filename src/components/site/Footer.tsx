import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock, ArrowRight, Heart } from "lucide-react";
import { Logo } from "./Logo";
import { MountainDivider } from "./MountainDivider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import igBbq from "@/assets/dish-bbq-platter.jpg";
import igPatio from "@/assets/patio.jpg";
import igSekuwa from "@/assets/chicken-sekuwa.jpg";
import igShrimp from "@/assets/dish-tandoori-shrimp.jpg";
import igPatio2 from "@/assets/patio-3.jpg";
import igWrap from "@/assets/dish-naan-wrap.jpg";

const IG_GRID = [igBbq, igPatio, igSekuwa, igShrimp, igPatio2, igWrap];

export function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="relative bg-navy-deep text-cream/80">
      <MountainDivider fill="navy-deep" className="absolute top-0 inset-x-0 -mt-9 sm:-mt-[3.8rem] z-10" />

      <div className="h-2.5 bg-gradient-to-r from-chili via-paprika via-ember via-marigold to-sunny" />

      <div className="border-b border-cream/10">
        <div className="container-x mx-auto max-w-7xl py-12 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-md">
            <p className="font-stencil text-saffron text-xs mb-2">— Stay in the loop —</p>
            <h3 className="font-display text-2xl sm:text-3xl text-cream">
              First word on specials &amp; patio nights.
            </h3>
          </div>
          {subscribed ? (
            <p className="text-saffron text-sm font-medium">You're on the list — thank you!</p>
          ) : (
            <form
              className="flex w-full max-w-md gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSubscribed(true);
              }}
            >
              <Input
                type="email"
                required
                placeholder="you@email.com"
                aria-label="Email address"
                className="bg-cream/5 border-cream/20 text-cream placeholder:text-cream/40 h-12"
              />
              <Button type="submit" variant="hero" size="default" className="shrink-0 h-12">
                Subscribe <ArrowRight className="size-4" />
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="container-x mx-auto max-w-7xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <Logo variant="light" size="lg" />
          <p className="text-sm leading-relaxed max-w-xs">
            Fire-grilled. Mountain-inspired. A modern Indian &amp; Nepali grill house with
            an outdoor patio worth lingering on.
          </p>
          <div className="flex gap-3 pt-2">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 hover:border-sunny hover:text-sunny transition-colors"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-stencil text-cream text-sm mb-5">Explore</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/menu", label: "Menu" },
              { to: "/about", label: "About" },
              { to: "/gallery", label: "Gallery" },
              { to: "/reservations", label: "Reservations" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-saffron transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-stencil text-cream text-sm mb-5">Visit</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 text-saffron shrink-0" /> 1247 Mountain Ridge Ave, Aurora, CO 80012</li>
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 text-saffron shrink-0" /> (303) 555-0142</li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 text-saffron shrink-0" /> hello@everestkitchen.co</li>
          </ul>
        </div>

        <div>
          <h4 className="font-stencil text-cream text-sm mb-5">Hours</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-3">
              <Clock className="size-4 mt-0.5 text-saffron shrink-0" />
              <div>
                <p>Mon – Thu · 4:00 PM – 10:00 PM</p>
                <p>Fri – Sat · 12:00 PM – 11:30 PM</p>
                <p>Sun · 12:00 PM – 9:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 bg-navy">
        <div className="container-x mx-auto max-w-7xl py-10">
          <div className="flex items-center justify-between gap-4 mb-5">
            <p className="font-script text-2xl text-marigold">@everestkitchen on the gram</p>
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-cream/70 hover:text-saffron transition-colors"
            >
              Follow us <Instagram className="size-3.5" />
            </a>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-2">
            {IG_GRID.map((src, i) => (
              <a
                key={i}
                href="#"
                aria-label="View on Instagram"
                className="group relative aspect-square overflow-hidden rounded-md"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-chili-deep/0 group-hover:bg-chili-deep/60 transition-colors duration-300 grid place-items-center">
                  <Heart className="size-5 text-cream opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 fill-current" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x mx-auto max-w-7xl py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Everest Kitchen. All rights reserved.</p>
          <p className="font-stencil tracking-widest text-cream/40">Fire · Smoke · Hospitality</p>
        </div>
      </div>
    </footer>
  );
}
