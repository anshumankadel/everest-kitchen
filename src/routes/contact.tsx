import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MountainDivider } from "@/components/site/MountainDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Everest Kitchen" },
      { name: "description", content: "Visit, call, or message Everest Kitchen. Hours, address, and contact form." },
      { property: "og:title", content: "Contact — Everest Kitchen" },
      { property: "og:description", content: "Get in touch with Everest Kitchen." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <SiteLayout>
      <section className="relative pt-36 pb-12 bg-navy text-cream">
        <div className="container-x mx-auto max-w-7xl text-center">
          <p className="font-stencil text-saffron text-xs mb-4">— Contact —</p>
          <h1 className="font-display text-5xl sm:text-7xl text-cream text-balance leading-[1]">Drop us a line.</h1>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto">
            Catering, private events, press, or just want to say hi after dinner — we read everything.
          </p>
        </div>
        <MountainDivider fill="cream" className="absolute bottom-0 inset-x-0 z-10" />
      </section>

      <section className="section">
        <div className="container-x mx-auto max-w-6xl grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <InfoCard icon={MapPin} title="Visit">
              <p>1247 Mountain Ridge Ave</p>
              <p>Aurora, CO 80012</p>
            </InfoCard>
            <InfoCard icon={Phone} title="Call">
              <p>(303) 555-0142</p>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <p>hello@everestkitchen.co</p>
              <p className="text-charcoal/60">For press: press@everestkitchen.co</p>
            </InfoCard>
            <InfoCard icon={Clock} title="Hours">
              <p>Mon – Thu · 4:00 PM – 10:00 PM</p>
              <p>Fri – Sat · 12:00 PM – 11:30 PM</p>
              <p>Sun · 12:00 PM – 9:00 PM</p>
            </InfoCard>
            <div className="flex gap-3 pt-2">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="size-11 rounded-full bg-navy text-cream grid place-items-center hover:bg-saffron hover:text-navy transition-colors">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-3xl shadow-card border border-border/40 p-8 sm:p-10">
            {sent ? (
              <div className="text-center py-12">
                <div className="size-16 mx-auto rounded-full bg-saffron/15 grid place-items-center text-saffron mb-5">
                  <CheckCircle2 className="size-8" />
                </div>
                <h2 className="font-display text-3xl text-navy mb-3">Message received.</h2>
                <p className="text-charcoal/70">We'll be in touch within a day or two.</p>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2 className="font-display text-3xl text-navy">Send a message</h2>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="cname" className="text-xs uppercase tracking-wider text-charcoal/70 font-semibold">Name</Label>
                    <Input id="cname" required className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="cemail" className="text-xs uppercase tracking-wider text-charcoal/70 font-semibold">Email</Label>
                    <Input id="cemail" type="email" required className="mt-2" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="csubject" className="text-xs uppercase tracking-wider text-charcoal/70 font-semibold">Subject</Label>
                  <Input id="csubject" required className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="cmsg" className="text-xs uppercase tracking-wider text-charcoal/70 font-semibold">Message</Label>
                  <Textarea id="cmsg" required rows={6} className="mt-2" />
                </div>
                <Button type="submit" variant="navy" size="lg" className="w-full">Send message</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: typeof Clock; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-5 items-start">
      <div className="size-12 rounded-full bg-navy text-saffron grid place-items-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className="font-stencil text-navy text-sm mb-1">{title}</h3>
        <div className="text-charcoal/80 text-sm space-y-0.5 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
