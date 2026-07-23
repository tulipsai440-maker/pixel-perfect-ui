import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { MapPin, Clock, ScrollText, Flag, TreePine, Sparkles } from "lucide-react";

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

const scoutLaw = [
  "Trustworthy", "Loyal", "Helpful", "Friendly", "Courteous", "Kind",
  "Obedient", "Cheerful", "Thrifty", "Brave", "Clean", "Reverent",
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Guided by scouting values since 2000."
        description="Troop 2001 was chartered in Naples in 2000 with a simple mission: prepare young people for life through the outdoors, service, and self-reliance."
      />

      {/* Fun Fact */}
      <section className="pt-14">
        <div className="container-page">
          <div className="flex flex-col gap-4 rounded-2xl border border-gold/40 bg-gold/10 p-6 md:flex-row md:items-center md:gap-6">
            <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold text-forest-deep">
              <Sparkles size={22} />
            </div>
            <div>
              <div className="eyebrow !text-forest-deep">Fun Fact</div>
              <p className="mt-1 text-base leading-relaxed text-forest-deep">
                Troop 2001 was founded in the year 2000. The Scoutmasters thought
                <em> "Troop 2001"</em> sounded more memorable than <em>"Troop 2000,"</em>
                so they chose the name 2001.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scout Oath / Law / Outdoor Code */}
      <section className="py-16">
        <div className="container-page grid gap-6 md:grid-cols-3">
          <PillarCard icon={<ScrollText />} title="Scout Oath">
            <p className="text-sm leading-relaxed text-muted-foreground">
              On my honor I will do my best to do my duty to God and my country and to obey the Scout
              Law; to help other people at all times; to keep myself physically strong, mentally
              awake, and morally straight.
            </p>
          </PillarCard>

          <PillarCard icon={<Flag />} title="Scout Law">
            <p className="text-sm leading-relaxed text-muted-foreground">A Scout is…</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-foreground">
              {scoutLaw.map((w) => (
                <li key={w} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-forest" />{w}
                </li>
              ))}
            </ul>
          </PillarCard>

          <PillarCard icon={<TreePine />} title="Outdoor Code">
            <p className="text-sm leading-relaxed text-muted-foreground">
              As an American, I will do my best to be clean in my outdoor manners, be careful with
              fire, be considerate in the outdoors, and be conservation-minded.
            </p>
          </PillarCard>
        </div>
      </section>

      {/* Meeting location */}
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

      {/* Scoutmasters */}
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

      {/* Founders — horizontal responsive layout */}
      <section className="pb-24">
        <div className="container-page">
          <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:grid-cols-3 md:items-center md:gap-10 md:p-12">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-forest via-forest-deep to-navy md:col-span-1">
              <div className="flex h-full w-full items-center justify-center font-display text-6xl text-cream/70">2000</div>
            </div>
            <div className="md:col-span-2">
              <div className="eyebrow">Our Founders</div>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">Chartered in the year 2000.</h2>
              <div className="mt-4 grid gap-4 text-muted-foreground sm:grid-cols-2">
                <p>
                  Troop 2001 was founded by a group of Naples families who wanted a scouting
                  program rooted in outdoor adventure and youth-led leadership.
                </p>
                <p>
                  A quarter-century later, that founding vision still shapes every campout,
                  service project, and Court of Honor. Placeholder founder names and biographies
                  will appear here as our historical archive is compiled.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function PillarCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-7">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-forest/10 text-forest">{icon}</div>
      <h3 className="mt-5 font-display text-2xl">{title}</h3>
      <div className="mt-3">{children}</div>
    </div>
  );
}
