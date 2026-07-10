import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Wheat, TreePine, Drumstick, ArrowRight, Star, MapPin, Phone, Clock, ChevronDown, ChevronLeft, ChevronRight, Mountain, ShoppingBag, Quote } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { MountainDivider } from "@/components/site/MountainDivider";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";
import { menu } from "@/data/menu";
import heroImg from "@/assets/hero-tandoor.jpg";
import patioImg from "@/assets/patio.jpg";
import patio3 from "@/assets/patio-3.jpg";
import naanImg from "@/assets/naan.jpg";
import chefImg from "@/assets/chef-tandoor.jpg";
import logoMark from "@/assets/everest-kitchen-logo.jpeg";
import patio2Img from "@/assets/patio-2.jpg";
import familyBbqFeastImg from "@/assets/family-bbq-feast.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Everest Kitchen — Fire-Grilled. Mountain-Inspired." },
      { name: "description", content: "A modern Indian & Nepali grill house with a tandoor at its heart and an outdoor patio worth lingering on." },
      { property: "og:title", content: "Everest Kitchen — Fire-Grilled. Mountain-Inspired." },
      { property: "og:description", content: "Tandoor, BBQ platters, fresh naan, and an inviting outdoor patio." },
    ],
  }),
  component: Home,
});

const FEATURES = [
  { icon: Flame, title: "Authentic Tandoor", accent: "chili" as const, pos: "top-4 left-4 sm:top-7 sm:left-7 -rotate-3" },
  { icon: Wheat, title: "Fresh Naan, All Day", accent: "sunny" as const, pos: "top-4 right-4 sm:top-7 sm:right-7 rotate-2" },
  { icon: TreePine, title: "Patio Seating", accent: "terracotta" as const, pos: "bottom-4 left-4 sm:bottom-9 sm:left-10 rotate-2" },
  { icon: Drumstick, title: "Signature Platters", accent: "sunny" as const, pos: "bottom-4 right-4 sm:bottom-9 sm:right-10 -rotate-3" },
];

const ACCENT_CLASSES = {
  chili: "bg-chili text-cream",
  terracotta: "bg-terracotta text-cream",
  marigold: "bg-marigold text-navy",
  saffron: "bg-saffron text-navy",
  sunny: "bg-sunny text-navy",
};

const TICKER = [
  "Tandoor-Fired Daily",
  "Hand-Stretched Naan",
  "Himalayan Sekuwa",
  "Est. 2021 · Aurora, CO",
  "Outdoor Patio Open",
  "Mountain-Inspired",
];

const TESTIMONIALS = [
  { quote: "The Aama's Platter is unreal. The patio at sunset feels like a tiny mountain getaway in the middle of the city.", name: "Priya R.", role: "Aurora, CO" },
  { quote: "Best tandoori chicken outside of Kathmandu — I'd argue better. The smoke, the char, the chutneys. Perfect.", name: "Marcus T.", role: "Food blogger" },
  { quote: "We came for one drink and ended up staying three hours. The staff treats you like family.", name: "Lena & Sam", role: "Regulars since 2022" },
];

function Home() {
  const previewDishes = [
    menu[0].dishes[0], // Tandoori Chicken BBQ
    menu[1].dishes[0], // Aama's BBQ Platter
    menu[0].dishes[3], // Malai
    menu[0].dishes[6], // Tandoori Shrimp
    menu[0].dishes[4], // Lamb Seekh
    menu[2].dishes[0], // Tandoori Chicken Naan Wrap
  ];
  const [activeSpecial, setActiveSpecial] = useState(0);
  const specialTrackRef = useRef<HTMLDivElement>(null);
  const specialSlideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToSpecial = (i: number) => {
    specialSlideRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  useEffect(() => {
    const track = specialTrackRef.current;
    if (!track) return;
    let frame: number;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const trackRect = track.getBoundingClientRect();
        const center = trackRect.left + trackRect.width / 2;
        let closest = 0;
        let closestDist = Infinity;
        specialSlideRefs.current.forEach((el, i) => {
          if (!el) return;
          const r = el.getBoundingClientRect();
          const dist = Math.abs(r.left + r.width / 2 - center);
          if (dist < closestDist) {
            closestDist = dist;
            closest = i;
          }
        });
        setActiveSpecial(closest);
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const prevSpecial = () => {
    const i = (activeSpecial - 1 + previewDishes.length) % previewDishes.length;
    setActiveSpecial(i);
    scrollToSpecial(i);
  };
  const nextSpecial = () => {
    const i = (activeSpecial + 1) % previewDishes.length;
    setActiveSpecial(i);
    scrollToSpecial(i);
  };

  const [activeQuote, setActiveQuote] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActiveQuote((v) => (v + 1) % TESTIMONIALS.length), 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden grain-texture">
        <img
          src={heroImg}
          alt="Tandoor with rising flames and smoke at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chili-deep/55 via-chili-deep/20 to-chili-deep/95" />
        <div className="absolute inset-0 bg-gradient-to-t from-chili-deep/95 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tr from-ember/20 via-transparent to-marigold/15" />

        <div className="relative container-x mx-auto max-w-7xl w-full pb-20 pt-32 sm:pb-28">
          <div className="max-w-3xl fade-in-up">
            <h1 className="font-display font-bold uppercase text-cream text-balance text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Fire-Grilled.<br />
              Mountain-Inspired.<br />
              <span className="text-sunny">Always Memorable.</span>
            </h1>
            <p className="mt-7 text-cream/80 text-lg sm:text-xl max-w-xl leading-relaxed">
              A modern tandoor &amp; BBQ kitchen with a patio built for long, lamp-lit
              dinners under the open sky.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/menu"><ShoppingBag className="size-4" /> Order Online</Link>
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-2 text-cream/75 text-sm">
              <div className="flex gap-0.5 text-sunny">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <span className="font-semibold text-cream">4.8</span> rated by 340+ Aurora diners
            </div>
          </div>
        </div>

        <div className="absolute top-32 sm:top-40 right-6 sm:right-16 wobble-in hidden sm:block">
          <div className="relative size-28 rounded-full bg-sunny shadow-warm grid place-items-center text-center border-[3px] border-dashed border-navy rotate-[-8deg]">
            <span className="font-script text-2xl text-navy leading-none -mb-1">Yum!</span>
            <div className="flex gap-0.5 text-chili my-1">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}
            </div>
            <div className="text-[9px] uppercase tracking-wide font-bold text-navy leading-tight px-2">
              Aurora's Pick<br />2024
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 text-cream/60 flex flex-col items-center gap-1 animate-bounce">
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="size-4" />
        </div>
      </section>

      {/* MURAL TICKER */}
      <div className="relative bg-chili-deep mural-pattern border-y-4 border-sunny py-3.5 overflow-hidden">
        <div className="marquee-track relative z-[1]">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="flex items-center gap-3 px-6 shrink-0 text-cream text-xs uppercase tracking-[0.25em] font-bold">
              <Mountain className="size-3.5 text-sunny" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* TODAY'S SPECIAL */}
      <section className="relative bg-sunny overflow-hidden">
        <div className="container-x mx-auto max-w-4xl pt-16 sm:pt-20 text-center">
          <Reveal className="flex flex-col items-center">
            <p className="font-script text-3xl sm:text-4xl text-navy-deep mb-1">Today's Special</p>
            <span className="h-px w-20 bg-navy/25 mb-9" />
          </Reveal>
        </div>

        <Reveal className="relative">
          <button
            onClick={prevSpecial}
            aria-label="Previous special"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center size-9 sm:size-10 rounded-full border border-navy/20 bg-navy/10 text-navy/60 hover:text-chili hover:border-chili transition-colors"
          >
            <ChevronLeft className="size-4 sm:size-5" />
          </button>

          <div
            ref={specialTrackRef}
            className="flex gap-10 sm:gap-24 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar sm:px-[20%]"
          >
            {previewDishes.map((d, i) => (
              <div
                key={d.name}
                ref={(el) => { specialSlideRefs.current[i] = el; }}
                className={cn(
                  "snap-center shrink-0 w-full sm:w-[460px] py-6 px-10 sm:px-0 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center text-center sm:text-left transition-opacity duration-300",
                  i === activeSpecial ? "opacity-100" : "opacity-30",
                )}
              >
                <img
                  src={d.image}
                  alt={d.name}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="rounded-full size-28 sm:size-44 object-cover ring-4 ring-navy/30 shrink-0"
                />
                <div className="min-w-0">
                  {d.badge && (
                    <span className="inline-block mb-2 text-[10px] uppercase tracking-widest font-bold text-chili border border-chili/40 rounded-full px-3 py-1 bg-chili/8">
                      {d.badge}
                    </span>
                  )}
                  <h3 className="font-display text-xl sm:text-3xl uppercase text-navy-deep tracking-wide">{d.name}</h3>
                  <p className="mt-3 text-navy/65 text-sm leading-relaxed max-w-sm line-clamp-2 sm:line-clamp-none">{d.desc}</p>
                  <div className="mt-5 inline-grid place-items-center size-16 rounded-full bg-herb text-cream font-display font-bold rotate-[-4deg] shadow-md">
                    {d.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={nextSpecial}
            aria-label="Next special"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 grid place-items-center size-9 sm:size-10 rounded-full border border-navy/20 bg-navy/10 text-navy/60 hover:text-chili hover:border-chili transition-colors"
          >
            <ChevronRight className="size-4 sm:size-5" />
          </button>
        </Reveal>

        <div className="flex justify-center gap-2 pb-16 sm:pb-20">
          {previewDishes.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveSpecial(i); scrollToSpecial(i); }}
              aria-label={`Show special ${i + 1}`}
              className={cn(
                "size-2 rounded-full transition-colors",
                i === activeSpecial ? "bg-navy-deep" : "bg-navy/20 hover:bg-navy/40",
              )}
            />
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="section relative">
        <div className="container-x mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal from="left" className="relative">
            <div className="absolute -inset-3 border-2 border-saffron/40 rounded-2xl -rotate-2" />
            <img
              src={chefImg}
              alt="Chef placing fresh naan into the tandoor"
              width={1400}
              height={1600}
              loading="lazy"
              className="relative rounded-2xl object-cover aspect-[4/5] w-full shadow-card"
            />
            <img
              src={logoMark}
              alt="Everest Kitchen crest"
              width={140}
              height={140}
              className="absolute -bottom-6 -right-6 size-24 sm:size-28 rounded-full shadow-warm ring-4 ring-cream rotate-6 hover:rotate-0 transition-transform duration-500"
            />
          </Reveal>
          <Reveal from="right" delay={120}>
            <p className="font-stencil text-terracotta text-xs mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-terracotta" /> Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl text-navy text-balance leading-tight">
              A tandoor, two cuisines, and a stubborn belief in bold flavor.
            </h2>
            <p className="mt-6 text-charcoal/80 text-lg leading-relaxed">
              Everest Kitchen opened in 2021 with one idea: bring the smoke and warmth
              of a traditional clay-oven kitchen into a space that feels modern,
              relaxed, and genuinely inviting. Our chefs grew up cooking sekuwa in the
              foothills of the Himalayas and tandoori in the kitchens of Delhi — the menu
              is what happens when those two traditions sit down at the same fire.
            </p>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Everything that can be made in-house, is. Naan is hand-stretched to order.
              Chutneys are ground fresh. The patio is built for lingering.
            </p>
            <div className="mt-8 flex gap-6">
              <div className="bg-sunny rounded-2xl px-6 py-4 text-center shadow-sm">
                <div className="font-display text-4xl text-navy-deep">2021</div>
                <div className="text-[10px] uppercase tracking-widest text-navy mt-1 font-bold">Established</div>
              </div>
              <div className="bg-sunny rounded-2xl px-6 py-4 text-center shadow-sm">
                <div className="font-display text-4xl text-navy-deep">40+</div>
                <div className="text-[10px] uppercase tracking-widest text-navy mt-1 font-bold">Dishes from the grill</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY US */}
      <section className="section bg-sunny relative">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-14">
            <p className="font-stencil text-navy text-xs mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-navy" /> Why Everest Kitchen
            </p>
            <h2 className="text-4xl sm:text-5xl text-navy-deep text-balance leading-tight">
              The small things that make a real difference.
            </h2>
          </Reveal>
          <Reveal className="relative rounded-3xl overflow-hidden shadow-warm aspect-[4/5] sm:aspect-[16/9]">
            <img
              src={familyBbqFeastImg}
              alt="Family BBQ feast spread across the table"
              width={1600}
              height={1000}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chili-deep/55 via-transparent to-chili-deep/10" />

            {FEATURES.map((f, i) => (
              <div key={f.title} className={cn("absolute wobble-in", f.pos)} style={{ animationDelay: `${i * 150}ms` }}>
                <div className="flex items-center gap-2 bg-navy-deep rounded-full pl-1.5 pr-3.5 py-1.5 shadow-warm border border-sunny/30">
                  <span className={cn("grid place-items-center size-7 sm:size-8 rounded-full shrink-0", ACCENT_CLASSES[f.accent])}>
                    <f.icon className="size-3.5 sm:size-4" />
                  </span>
                  <span className="font-stencil text-[10px] sm:text-xs text-cream whitespace-nowrap">{f.title}</span>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
        <MountainDivider fill="sunny" className="absolute bottom-0 inset-x-0 z-10" />
      </section>

      {/* PATIO SHOWCASE */}
      <section className="section relative">
        <div className="container-x mx-auto max-w-7xl">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="font-stencil text-terracotta text-xs mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" /> Outdoor Seating
              </p>
              <h2 className="text-4xl sm:text-5xl text-navy text-balance leading-tight">
                Dine under the open sky.
              </h2>
            </div>
            <p className="text-charcoal/70 max-w-md lg:text-right">
              Our patio is the heart of the restaurant. Wood tables, hanging greenery,
              warm bulbs, and the soft hum of a kitchen working at full tilt.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center items-start gap-x-2 gap-y-10 sm:gap-x-0 lg:-space-x-8 pt-4">
            {[
              { img: patioImg, alt: "Outdoor patio with string lights at dusk", caption: "string lights & greenery", rotate: "-rotate-3", lift: "" },
              { img: naanImg, alt: "Fresh garlic naan, hand-stretched and baked to order", caption: "hand-stretched, daily", rotate: "rotate-2", lift: "sm:-translate-y-5 sm:z-10" },
              { img: patio3, alt: "Patio table with tandoori spread and lassi", caption: "family-style spread", rotate: "-rotate-2", lift: "" },
              { img: patio2Img, alt: "Patio seating at golden hour", caption: "golden hour, every night", rotate: "rotate-3", lift: "sm:-translate-y-3" },
            ].map((tile, i) => (
              <Reveal
                key={tile.caption}
                delay={i * 120}
                from={i % 2 === 0 ? "left" : "right"}
                className={cn(
                  "polaroid relative w-56 sm:w-60 shrink-0 hover:!rotate-0 hover:z-20 hover:-translate-y-2 transition-transform duration-500",
                  tile.rotate,
                  tile.lift,
                )}
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 w-14 h-5 bg-sunny -rotate-6 shadow-sm" aria-hidden="true" />
                <div className="overflow-hidden">
                  <img src={tile.img} alt={tile.alt} width={600} height={750} loading="lazy" className="w-full aspect-[4/5] object-cover" />
                </div>
                <p className="font-script text-xl text-charcoal text-center pt-3">{tile.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="section bg-secondary relative">
        <MountainDivider fill="secondary" className="absolute top-0 inset-x-0 -mt-9 sm:-mt-[3.8rem] z-10" />
        <div className="container-x mx-auto max-w-7xl">
          <Reveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <p className="font-stencil text-terracotta text-xs mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-terracotta" /> From the Tandoor
              </p>
              <h2 className="text-4xl sm:text-5xl text-navy text-balance leading-tight">
                A taste of what's on the grill tonight.
              </h2>
              <p className="font-script text-2xl text-sunny mt-1">fresh off the fire, every night</p>
            </div>
            <Button asChild variant="hero" size="lg">
              <Link to="/menu">View Full Menu <ArrowRight className="size-4" /></Link>
            </Button>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[260px]">
            {previewDishes.map((d, i) => (
              <Reveal
                key={d.name}
                delay={i * 90}
                className={cn(
                  "group relative rounded-2xl overflow-hidden shadow-card hover:shadow-warm transition-all duration-500 hover:-translate-y-1.5 aspect-[4/3] lg:aspect-auto",
                  i === 0 && "sm:col-span-2 lg:row-span-2",
                )}
              >
                {d.image ? (
                  <img
                    src={d.image}
                    alt={d.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-chili/10 to-terracotta/20" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-chili-deep/95 via-chili-deep/20 to-chili-deep/0" />
                {d.badge && (
                  <span className="absolute top-4 left-4 bg-herb text-cream text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow">
                    {d.badge}
                  </span>
                )}
                <span
                  className={cn(
                    "absolute top-3 right-3 grid place-items-center rounded-full bg-herb text-cream font-display font-bold rotate-6 shadow-md ring-2 ring-cream group-hover:rotate-0 transition-transform duration-500",
                    i === 0 ? "size-14 sm:size-16 text-base sm:text-lg" : "size-11 text-sm",
                  )}
                >
                  {d.price}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className={cn("font-display text-cream mb-1.5", i === 0 ? "text-2xl sm:text-3xl" : "text-lg")}>
                    {d.name}
                  </h3>
                  <p className={cn("text-cream/75 leading-relaxed", i === 0 ? "text-sm max-w-md line-clamp-2" : "text-xs line-clamp-2")}>
                    {d.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section paper-texture relative">
        <MountainDivider fill="cream" className="absolute top-0 inset-x-0 -mt-9 sm:-mt-[3.8rem] z-10" />
        <div className="container-x mx-auto max-w-7xl">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <p className="font-stencil text-terracotta text-xs mb-4">— Kind Words —</p>
            <h2 className="text-4xl sm:text-5xl text-navy text-balance leading-tight">
              What our guests are saying.
            </h2>
          </Reveal>

          <Reveal className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
            {[
              { platform: "Google", rating: "4.8", count: "340+ reviews" },
              { platform: "Yelp", rating: "4.5", count: "210+ reviews" },
              { platform: "OpenTable", rating: "Diners' Choice", count: "2024" },
            ].map((p) => (
              <div key={p.platform} className="flex items-center gap-3 bg-card border border-border/50 rounded-full pl-4 pr-5 py-2 shadow-card">
                <span className="font-display font-bold text-navy text-sm">{p.platform}</span>
                <span className="flex gap-0.5 text-sunny">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-3 fill-current" />)}
                </span>
                <span className="text-xs text-charcoal/60 whitespace-nowrap">{p.rating} · {p.count}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="max-w-2xl mx-auto text-center">
            <Quote className="size-9 text-sunny mx-auto mb-6" />
            <blockquote key={activeQuote} className="fade-in-up font-display text-2xl sm:text-3xl text-navy leading-snug text-balance min-h-[7rem] sm:min-h-[6rem]">
              "{TESTIMONIALS[activeQuote].quote}"
            </blockquote>
            <div className="mt-7 flex flex-col items-center gap-2">
              <div className="flex gap-0.5 text-sunny">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <p className="text-sm text-charcoal/70">
                <span className="font-semibold text-navy">{TESTIMONIALS[activeQuote].name}</span> · {TESTIMONIALS[activeQuote].role}
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveQuote(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={cn(
                    "size-2.5 rounded-full transition-colors",
                    i === activeQuote ? "bg-chili" : "bg-navy/15 hover:bg-navy/30",
                  )}
                />
              ))}
            </div>
          </Reveal>
        </div>
        <MountainDivider fill="sunny" className="absolute bottom-0 inset-x-0 z-10" />
      </section>

      {/* RESERVATION BAND */}
      <section className="relative overflow-hidden bg-sunny">
        <div className="absolute inset-0 opacity-15">
          <img src={patioImg} alt="" width={1600} height={1200} loading="lazy" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-sunny/90 via-marigold/70 to-sunny/80" />
        <div className="relative container-x mx-auto max-w-7xl py-20 grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal from="left">
            <p className="font-stencil text-chili text-xs mb-4">— Plan Your Visit —</p>
            <h2 className="text-4xl sm:text-5xl text-navy-deep text-balance leading-tight">
              Save your seat by the fire.
            </h2>
            <p className="mt-5 text-navy/75 max-w-md leading-relaxed">
              The patio fills up fast on weekends. Reserve ahead and we'll have a table ready,
              naan warm, and chutneys on the table.
            </p>
          </Reveal>
          <Reveal from="right" delay={120} className="grid sm:grid-cols-3 gap-6 lg:gap-4 lg:pl-10 lg:border-l lg:border-navy/15">
            <div>
              <Clock className="size-5 text-chili mb-3" />
              <h3 className="font-stencil text-navy-deep text-sm mb-2">Hours</h3>
              <p className="text-sm text-navy/70 leading-relaxed">Mon–Thu 4–10 PM<br />Fri–Sat 12–11:30 PM<br />Sun 12–9 PM</p>
            </div>
            <div>
              <MapPin className="size-5 text-chili mb-3" />
              <h3 className="font-stencil text-navy-deep text-sm mb-2">Visit</h3>
              <p className="text-sm text-navy/70 leading-relaxed">1247 Mountain Ridge Ave<br />Aurora, CO 80012</p>
            </div>
            <div>
              <Phone className="size-5 text-chili mb-3" />
              <h3 className="font-stencil text-navy-deep text-sm mb-2">Call</h3>
              <p className="text-sm text-navy/70 leading-relaxed">(303) 555-0142<br />hello@everestkitchen.co</p>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
