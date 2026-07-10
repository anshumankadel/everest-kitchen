import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { MountainDivider } from "@/components/site/MountainDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, Users, Phone, User, MapPin, CheckCircle2 } from "lucide-react";
import patioImg from "@/assets/patio.jpg";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — Everest Kitchen" },
      { name: "description", content: "Book a table on the patio or in the dining room at Everest Kitchen." },
      { property: "og:title", content: "Reservations — Everest Kitchen" },
      { property: "og:description", content: "Save a seat by the fire." },
    ],
  }),
  component: Reservations,
});

function Reservations() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="relative pt-36 pb-12 bg-navy text-cream">
        <div className="container-x mx-auto max-w-7xl text-center">
          <p className="font-stencil text-saffron text-xs mb-4">— Reservations —</p>
          <h1 className="font-display text-5xl sm:text-7xl text-cream text-balance leading-[1]">Save your seat.</h1>
          <p className="mt-6 text-cream/70 max-w-xl mx-auto">
            We hold the patio for weekend bookings. Tell us when you want to come and we'll have a table waiting.
          </p>
        </div>
        <MountainDivider fill="cream" className="absolute bottom-0 inset-x-0 z-10" />
      </section>

      <section className="section">
        <div className="container-x mx-auto max-w-6xl grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="bg-card rounded-3xl shadow-card border border-border/40 p-8 sm:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="size-16 mx-auto rounded-full bg-saffron/15 grid place-items-center text-saffron mb-5">
                  <CheckCircle2 className="size-8" />
                </div>
                <h2 className="font-display text-3xl text-navy mb-3">You're on the list.</h2>
                <p className="text-charcoal/70 max-w-md mx-auto">
                  We'll text you a confirmation shortly. If anything changes, just give us a call at (303) 555-0142.
                </p>
                <Button variant="navy" size="lg" className="mt-8" onClick={() => setSubmitted(false)}>
                  Make another reservation
                </Button>
              </div>
            ) : (
              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div>
                  <h2 className="font-display text-3xl text-navy">Reserve a table</h2>
                  <p className="text-sm text-charcoal/60 mt-1">All fields required unless noted.</p>
                </div>

                <Field icon={User} label="Full name" htmlFor="name">
                  <Input id="name" required placeholder="Jane Sharma" />
                </Field>

                <Field icon={Phone} label="Phone" htmlFor="phone">
                  <Input id="phone" type="tel" required placeholder="(303) 555-0123" />
                </Field>

                <div className="grid sm:grid-cols-2 gap-5">
                  <Field icon={Calendar} label="Date" htmlFor="date">
                    <Input id="date" type="date" required />
                  </Field>
                  <Field icon={Clock} label="Time" htmlFor="time">
                    <Input id="time" type="time" required />
                  </Field>
                </div>

                <Field icon={Users} label="Party size" htmlFor="party">
                  <Input id="party" type="number" min={1} max={20} required defaultValue={2} />
                </Field>

                <div>
                  <Label htmlFor="notes" className="text-xs uppercase tracking-wider text-charcoal/70 font-semibold">
                    Notes <span className="text-charcoal/40 normal-case">(optional)</span>
                  </Label>
                  <Textarea id="notes" placeholder="Allergies, special occasions, patio preference…" rows={4} className="mt-2" />
                </div>

                <Button type="submit" variant="navy" size="lg" className="w-full">
                  Request reservation
                </Button>

                <p className="text-xs text-charcoal/50 text-center">
                  By submitting, you agree to our 15-minute hold policy.
                </p>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img src={patioImg} alt="Outdoor patio at dusk" width={1600} height={1200} loading="lazy" className="w-full h-64 object-cover" />
            </div>
            <div className="space-y-6">
              <InfoRow icon={MapPin} title="Address" lines={["1247 Mountain Ridge Ave", "Aurora, CO 80012"]} />
              <InfoRow icon={Phone} title="Call us" lines={["(303) 555-0142", "hello@everestkitchen.co"]} />
              <InfoRow
                icon={Clock}
                title="Hours"
                lines={["Mon – Thu · 4 – 10 PM", "Fri – Sat · 12 – 11:30 PM", "Sun · 12 – 9 PM"]}
              />
            </div>
            <div className="bg-secondary rounded-2xl p-6 border border-border/40">
              <p className="font-stencil text-terracotta text-xs mb-2">Large groups</p>
              <p className="text-sm text-charcoal/75 leading-relaxed">
                Booking for 8+? Call us directly so we can plan the table layout and a family-style spread.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  icon: Icon,
  label,
  htmlFor,
  children,
}: {
  icon: typeof User;
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={htmlFor} className="text-xs uppercase tracking-wider text-charcoal/70 font-semibold flex items-center gap-2">
        <Icon className="size-3.5 text-saffron" />
        {label}
      </Label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: typeof Clock; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4">
      <div className="size-10 rounded-full bg-navy text-saffron grid place-items-center shrink-0">
        <Icon className="size-4" />
      </div>
      <div>
        <h3 className="font-stencil text-navy text-xs mb-1">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-sm text-charcoal/75 leading-relaxed">{l}</p>
        ))}
      </div>
    </div>
  );
}
