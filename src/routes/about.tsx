import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { MapPin, Clock, Heart, Mountain, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Troop 2001 — Scouts BSA in Naples, Florida" },
      { name: "description", content: "Founded in 2000, Troop 2001 Naples builds character, leadership, and outdoor skills. Meet our scoutmasters and learn our story." },
      { property: "og:title", content: "About Troop 2001 Naples" },
      { property: "og:description", content: "Our history, mission, values, and leadership team." },
    ],
  }),
  component: AboutPage,
});

const scoutmasters = Array.from({ length: 10 }, (_, i) => ({
  name: [
    "Michael Anderson", "James Rodriguez", "David Thompson", "Robert Martinez",
    "William Chen", "Christopher Lee", "Daniel O'Brien", "Matthew Patel",
    "Andrew Sullivan", "John Whitaker",
  ][i],
  years: [
    "2020–Present", "2018–2020", "2015–2018", "2012–2015", "2010–2012",
    "2008–2010", "2006–2008", "2004–2006", "2002–2004", "2000–2002",
  ][i],
  bio: "Placeholder biography. An experienced volunteer leader dedicated to scouting values, outdoor skills, and youth development in the Naples community.",
}));

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Guided by scouting values since 2000."
        description="Troop 2001 was chartered in Naples in 2000 with a simple mission: prepare young people for life through the outdoors, service, and self-reliance."
      />

      <section className="py-20">
        <div className="container-page grid gap-12 md:grid-cols-3">
          <ValueCard icon={<Heart />} title="Mission">
            To develop character, citizenship, and personal fitness in youth through the timeless
            program of the Scouts BSA.
          </ValueCard>
          <ValueCard icon={<Mountain />} title="Values">
            Trustworthy, loyal, helpful, friendly, courteous, kind, obedient, cheerful, thrifty,
            brave, clean, and reverent — the Scout Law in practice.
          </ValueCard>
          <ValueCard icon={<Users />} title="Community">
            A parent-supported troop where scouts lead the way, older scouts mentor younger ones,
            and every family belongs.
          </ValueCard>
        </div>
      </section>

      <section className="border-y border-border/60 bg-sand py-20">
        <div className="container-page grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="eyebrow">Where we meet</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Come see us on Wednesday.</h2>
            <p className="mt-4 text-muted-foreground">
              Meetings are open to scouts, parents, and any young person curious about scouting.
              Bring questions — we'll bring the pizza on the first Wednesday of the month.
            </p>
            <ul className="mt-6 space-y-3 text-foreground">
              <li className="flex gap-3"><MapPin className="mt-0.5 shrink-0 text-forest" size={20} /><span>North Collier Fire Station #45<br/>1885 Veterans Park Dr, Naples, FL 34109</span></li>
              <li className="flex gap-3"><Clock className="mt-0.5 shrink-0 text-forest" size={20} /><span>Every Wednesday at 7:00 PM</span></li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              title="Meeting location map"
              className="h-[380px] w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=1885+Veterans+Park+Dr,+Naples,+FL+34109&output=embed"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="eyebrow">Leadership</div>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Our Scoutmasters.</h2>
              <p className="mt-3 max-w-xl text-muted-foreground">
                The volunteers who have shaped Troop 2001 across two decades.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {scoutmasters.map((s, i) => (
              <article key={i} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-1">
                <div className="aspect-[4/5] bg-gradient-to-br from-forest via-forest-deep to-navy">
                  <div className="flex h-full w-full items-center justify-center text-cream/80">
                    <div className="grid h-24 w-24 place-items-center rounded-full border-2 border-cream/20 bg-cream/5 font-display text-3xl">
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-[0.18em] text-forest">{s.years}</div>
                  <h3 className="mt-1 font-display text-xl">{s.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
            <div className="eyebrow">Our Founders</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Chartered in the year 2000.</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Troop 2001 was founded by a group of Naples families who wanted a scouting program
              rooted in outdoor adventure and youth-led leadership. Placeholder founder names
              and biographies will appear here as our historical archive is compiled.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ValueCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-8">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-forest/10 text-forest">{icon}</div>
      <h3 className="mt-5 font-display text-2xl">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}
