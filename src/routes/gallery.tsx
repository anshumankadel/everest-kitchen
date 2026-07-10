import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MountainDivider } from "@/components/site/MountainDivider";
import patioImg from "@/assets/patio.jpg";
import patio2 from "@/assets/patio-2.jpg";
import patio3 from "@/assets/patio-3.jpg";
import chefImg from "@/assets/chef-tandoor.jpg";
import heroImg from "@/assets/hero-tandoor.jpg";
import dish1 from "@/assets/dish-tandoori-chicken.jpg";
import dish2 from "@/assets/dish-bbq-platter.jpg";
import dish3 from "@/assets/dish-malai-kabab.jpg";
import dish4 from "@/assets/dish-tandoori-shrimp.jpg";
import dish5 from "@/assets/dish-lamb-seekh.jpg";
import dish6 from "@/assets/dish-naan-wrap.jpg";
import naan from "@/assets/naan.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Everest Kitchen" },
      { name: "description", content: "Photos of the patio, the tandoor, and the food at Everest Kitchen." },
      { property: "og:title", content: "Gallery — Everest Kitchen" },
      { property: "og:description", content: "A peek inside the kitchen, the patio, and the food." },
    ],
  }),
  component: Gallery,
});

const items: { src: string; alt: string; aspect: string }[] = [
  { src: patioImg, alt: "Outdoor patio at dusk", aspect: "aspect-[4/3]" },
  { src: dish2, alt: "BBQ platter", aspect: "aspect-square" },
  { src: chefImg, alt: "Chef at the tandoor", aspect: "aspect-[3/4]" },
  { src: dish1, alt: "Tandoori chicken", aspect: "aspect-square" },
  { src: patio2, alt: "Friends dining outdoors", aspect: "aspect-[3/4]" },
  { src: dish3, alt: "Malai chicken kabab", aspect: "aspect-square" },
  { src: heroImg, alt: "Tandoor with flames", aspect: "aspect-[4/3]" },
  { src: dish4, alt: "Tandoori shrimp", aspect: "aspect-square" },
  { src: patio3, alt: "Outdoor table spread", aspect: "aspect-[4/3]" },
  { src: dish5, alt: "Lamb seekh kabab", aspect: "aspect-square" },
  { src: naan, alt: "Fresh garlic naan", aspect: "aspect-square" },
  { src: dish6, alt: "Tandoori naan wrap", aspect: "aspect-[3/4]" },
];

function Gallery() {
  return (
    <SiteLayout>
      <section className="relative pt-36 pb-12 bg-navy text-cream">
        <div className="container-x mx-auto max-w-7xl text-center">
          <p className="font-stencil text-saffron text-xs mb-4">— Gallery —</p>
          <h1 className="font-display text-5xl sm:text-7xl text-cream text-balance leading-[1]">
            Smoke, plates &amp; string lights.
          </h1>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto">A look around the kitchen, the patio, and what comes out of the tandoor.</p>
        </div>
        <MountainDivider fill="cream" className="absolute bottom-0 inset-x-0 z-10" />
      </section>

      <section className="section">
        <div className="container-x mx-auto max-w-7xl">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {items.map((img, i) => (
              <div key={i} className={`mb-5 break-inside-avoid rounded-2xl overflow-hidden shadow-card group ${img.aspect}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
