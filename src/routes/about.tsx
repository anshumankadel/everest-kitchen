import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { MountainDivider } from "@/components/site/MountainDivider";
import { Flame, Heart, Mountain, Users } from "lucide-react";
import chefImg from "@/assets/chef-tandoor.jpg";
import patioImg from "@/assets/patio.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Everest Kitchen" },
      { name: "description", content: "Born from a tandoor and two traditions. Meet the team and philosophy behind Everest Kitchen." },
      { property: "og:title", content: "Our Story — Everest Kitchen" },
      { property: "og:description", content: "The team, the tandoor, and the philosophy behind Everest Kitchen." },
    ],
  }),
  component: About,
});

const PILLARS = [
  { icon: Flame, title: "Fire first", desc: "Everything runs through the tandoor or grill. Smoke is a seasoning here." },
  { icon: Mountain, title: "Two homelands", desc: "Himalayan sekuwa meets Punjabi tandoori. Both with deep respect." },
  { icon: Heart, title: "Made in-house", desc: "Naan stretched to order. Chutneys ground daily. Nothing pre-packaged." },
  { icon: Users, title: "A real welcome", desc: "Hospitality isn't a script. We want you to stay an extra hour." },
];

function About() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-20 bg-navy text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={chefImg} alt="" width={1400} height={1600} loading="lazy" className="w-full h-full object-cover object-center" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 to-navy" />
        <div className="relative container-x mx-auto max-w-5xl text-center">
          <p className="font-stencil text-saffron text-xs mb-4">— Est. 2021 —</p>
          <h1 className="font-display text-5xl sm:text-7xl text-cream text-balance leading-[1]">
            Built around a fire, named after a mountain.
          </h1>
          <p className="mt-6 text-cream/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Everest Kitchen is what happens when two cooking traditions — Himalayan grill and Indian tandoor — share the same kitchen.
          </p>
        </div>
      </section>

      <section className="section relative">
        <MountainDivider fill="cream" className="absolute top-0 inset-x-0 -mt-9 sm:-mt-[3.8rem] z-10" />
        <div className="container-x mx-auto max-w-4xl prose-lg space-y-6 text-charcoal/85 leading-relaxed text-lg">
          <p>
            We opened the doors in 2021 with a small crew, a clay oven, and a stack of recipes pulled
            from two families. Our head chef grew up in the foothills outside Pokhara, learning to grill
            sekuwa over open coals before he could ride a bike. Our pitmaster trained in tandoor kitchens
            across Delhi, where naan is theatre and char is the difference between good and unforgettable.
          </p>
          <p>
            When the two of them started cooking together, the menu wrote itself. Tandoori Chicken BBQ next to
            Chicken Sekuwa. Lamb seekh kababs alongside Nepali achar. The same fire, two traditions, one table.
          </p>
          <p>
            We built the patio first, before the dining room, because we always wanted Everest Kitchen to feel
            like the kind of place you wander into on a warm evening and end up staying long past dessert.
            String lights, green walls, wood tables you don't have to be careful with. Bring friends. Order
            too much. Stay.
          </p>
        </div>
      </section>

      <section className="section bg-sunny relative">
        <MountainDivider fill="sunny" className="absolute top-0 inset-x-0 -mt-9 sm:-mt-[3.8rem] z-10" />
        <div className="container-x mx-auto max-w-7xl">
          <h2 className="font-display text-4xl sm:text-5xl text-navy-deep text-center mb-14">What we care about</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="bg-cream p-7 rounded-2xl shadow-warm border-0">
                <div className="size-12 rounded-full bg-chili/10 grid place-items-center text-chili mb-4">
                  <p.icon className="size-5" />
                </div>
                <h3 className="font-display text-xl text-navy-deep mb-2">{p.title}</h3>
                <p className="text-sm text-charcoal/75 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <MountainDivider fill="navy" className="absolute bottom-0 inset-x-0 z-10" />
      </section>

      <section className="relative bg-navy text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={patioImg} alt="" width={1600} height={1200} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-transparent" />
        <div className="relative container-x mx-auto max-w-7xl py-20 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-cream text-balance">Come hang out.</h2>
          <p className="text-cream/75 mt-4 max-w-xl mx-auto">The patio is open. The tandoor's already hot.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild variant="hero" size="lg"><Link to="/menu">See the Menu</Link></Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
