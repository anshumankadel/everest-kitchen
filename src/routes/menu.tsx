import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Flame, Utensils, Sandwich, Drumstick, Wheat, Soup, Sparkles } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MountainDivider } from "@/components/site/MountainDivider";
import { Reveal } from "@/components/site/Reveal";
import { menu, addOns, type MenuCategory, type AddOn } from "@/data/menu";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Everest Kitchen" },
      { name: "description", content: "Tandoor BBQ, signature platters, wraps, and fresh naan. The full Everest Kitchen menu." },
      { property: "og:title", content: "Menu — Everest Kitchen" },
      { property: "og:description", content: "Explore the full tandoor & BBQ menu at Everest Kitchen." },
    ],
  }),
  component: MenuPage,
});

const ICONS: Record<string, typeof Flame> = {
  flame: Flame,
  utensils: Utensils,
  sandwich: Sandwich,
  drumstick: Drumstick,
  wheat: Wheat,
  soup: Soup,
  sparkles: Sparkles,
};

function MenuPage() {
  const [active, setActive] = useState<string>(menu[0].id);

  useEffect(() => {
    const sections = [...menu.map((c) => c.id), "add-ons"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative pt-36 pb-16 bg-sunny overflow-hidden">
        <div className="absolute inset-0 opacity-8 bg-[radial-gradient(ellipse_at_top_right,_var(--marigold)_0%,_transparent_60%)]" />
        <div className="relative container-x mx-auto max-w-7xl text-center">
          <p className="font-stencil text-chili text-xs mb-4 tracking-widest">— The Menu —</p>
          <h1 className="font-display text-5xl sm:text-7xl text-navy-deep text-balance leading-[1]">
            Made to order. <br className="sm:hidden" />Built around fire.
          </h1>
          <p className="mt-6 text-navy/75 max-w-2xl mx-auto text-lg">
            Every dish is grilled, char-kissed, or pulled fresh from the tandoor.
            Prices reflect current market rates and may vary slightly in-house.
          </p>
        </div>
        <MountainDivider fill="sunny" className="absolute bottom-0 inset-x-0 z-10" />
      </section>

      {/* STICKY TABS */}
      <div className="sticky top-20 z-30 bg-sunny/95 backdrop-blur-md border-b border-navy/15">
        <div className="container-x mx-auto max-w-7xl overflow-x-auto no-scrollbar">
          <div className="flex gap-1 py-3 min-w-max">
            {menu.map((cat) => {
              const Icon = ICONS[cat.icon];
              return (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors whitespace-nowrap",
                    active === cat.id
                      ? "bg-navy-deep text-cream shadow"
                      : "text-navy/80 hover:bg-navy/10",
                  )}
                >
                  {Icon && <Icon className="size-3.5" />}
                  {cat.title}
                </a>
              );
            })}
            <a
              href="#add-ons"
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors whitespace-nowrap",
                active === "add-ons" ? "bg-navy-deep text-cream shadow" : "text-navy/80 hover:bg-navy/10",
              )}
            >
              <Sparkles className="size-3.5" /> Add-Ons
            </a>
          </div>
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="container-x mx-auto max-w-7xl py-16 space-y-24">
        {menu.map((cat) => (
          <Category key={cat.id} cat={cat} />
        ))}

        {/* ADD ONS */}
        <section id="add-ons" className="scroll-mt-40">
          <Reveal as="header" className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <Sparkles className="size-5 text-sunny" />
              <p className="font-stencil text-terracotta text-xs">Add-Ons</p>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl text-navy">Naan, Sides &amp; Sauces</h2>
            <p className="text-charcoal/70 mt-3 max-w-2xl">
              Round out the table with hot bread, crispy fries, and the chutneys that make every bite better.
            </p>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            <Reveal delay={0}><AddOnCard icon={Wheat} title="Naan" items={addOns.naan} /></Reveal>
            <Reveal delay={120}><AddOnCard icon={Soup} title="Sides" items={addOns.sides} /></Reveal>
            <Reveal delay={240}><AddOnCard icon={Sparkles} title="Sauces" items={addOns.sauces} /></Reveal>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}

function Category({ cat }: { cat: MenuCategory }) {
  const Icon = ICONS[cat.icon];
  return (
    <section id={cat.id} className="scroll-mt-40">
      <Reveal as="header" className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          {Icon && <Icon className="size-5 text-chili" />}
          <p className="font-stencil text-terracotta text-xs">{cat.title}</p>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl text-navy">{cat.title}</h2>
        {cat.tagline && <p className="text-charcoal/70 mt-3 max-w-2xl">{cat.tagline}</p>}
      </Reveal>

      <div className="grid gap-x-14 lg:grid-cols-2">
        {cat.dishes.map((d, i) => (
          <Reveal key={d.name} delay={(i % 4) * 80}>
            <div className="group flex gap-5 sm:gap-6 py-6 border-b border-dashed border-border">
              {d.image ? (
                <img
                  src={d.image}
                  alt={d.name}
                  width={300}
                  height={300}
                  loading="lazy"
                  className="size-24 sm:size-32 rounded-full object-cover ring-1 ring-border shrink-0 transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="size-24 sm:size-32 rounded-full bg-secondary grid place-items-center text-navy/20 shrink-0">
                  <Flame className="size-8" />
                </div>
              )}
              <div className="flex-1 min-w-0 pt-1">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-display text-xl text-navy leading-tight whitespace-nowrap">{d.name}</h3>
                  <span className="flex-1 border-b border-dotted border-charcoal/30 translate-y-[-4px]" aria-hidden="true" />
                  <span className="font-display text-cream font-bold text-lg shrink-0 bg-sunny px-2 py-0.5 rounded-full">{d.price}</span>
                </div>
                {d.badge && (
                  <span className="inline-block mt-2 text-[9px] uppercase tracking-widest font-bold text-navy bg-sunny rounded-full px-2.5 py-0.5">
                    {d.badge}
                  </span>
                )}
                <p className="text-sm text-charcoal/65 leading-relaxed mt-2 pr-2">{d.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function AddOnCard({ icon: Icon, title, items }: { icon: typeof Flame; title: string; items: AddOn[] }) {
  return (
    <div className="group bg-card rounded-2xl p-7 shadow-card hover:shadow-warm transition-all duration-500 border border-border/50 hover:border-chili/40 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-5">
        <div className="size-10 rounded-full bg-sunny/20 grid place-items-center text-navy group-hover:bg-sunny group-hover:text-navy group-hover:rotate-6 transition-all duration-500">
          <Icon className="size-4" />
        </div>
        <h3 className="font-display text-xl text-navy">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-2 text-sm text-charcoal/80 pb-2 border-b border-dashed border-border last:border-0">
            <span>{item.name}</span>
            <span className="flex-1 border-b border-dotted border-charcoal/25 translate-y-[-3px]" aria-hidden="true" />
            <span className="font-display text-cream text-xs font-bold shrink-0 bg-sunny px-1.5 py-0.5 rounded">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
