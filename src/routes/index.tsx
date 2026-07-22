import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero.jpg";
import eagleImg from "@/assets/eagle.jpg";
import adventureImg from "@/assets/adventure.jpg";
import canoeImg from "@/assets/canoe.jpg";
import campingImg from "@/assets/camping.jpg";
import hikingImg from "@/assets/hiking.jpg";
import flagImg from "@/assets/flag.jpg";
import { ArrowRight, Calendar, Compass, Award, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Troop 2001 Naples — Scouts BSA in Naples, Florida" },
      { name: "description", content: "Adventure, leadership, and Eagle Scout achievement. Troop 2001 meets Wednesdays at 7 PM in Naples, Florida. Join us." },
      { property: "og:image", content: "https://troop2001naples.org/og-cover.jpg" },
    ],
  }),
  component: HomePage,
});

const slides = [heroImg, adventureImg, canoeImg, campingImg, hikingImg, flagImg];

const events = [
  { date: "Aug 09", title: "Summer Court of Honor", where: "Fire Station #45" },
  { date: "Aug 16", title: "Backpacking Prep Night", where: "Fire Station #45" },
  { date: "Aug 23–25", title: "Big Cypress Weekend Campout", where: "Big Cypress" },
];

const announcements = [
  "Registration is open for Fall camping season — see the Calendar for dates.",
  "Congratulations to our newest Eagle Scout — full ceremony recap in Events.",
  "Merit Badge University sign-ups close August 15th.",
];

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <EagleSection />
      <AdventureSection />
      <EventsAndAnnouncements />
      <PhotoSlideshow />
      <QuickLinksPreview />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={heroImg}
        alt="Scouts on a mountain ridge at sunrise"
        width={1920}
        height={1200}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-forest-deep/55 to-forest-deep/85" />
      <div className="relative">
        <div className="container-page flex min-h-[86vh] flex-col justify-end pb-16 pt-32 text-cream md:min-h-[92vh] md:pb-24">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cream/25 bg-cream/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gold" /> Scouts BSA · Naples, FL
            </div>
            <h1 className="font-display text-5xl leading-[1.02] text-cream md:text-7xl">
              Adventure begins <em className="not-italic text-gold">on the trail</em>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
              Since 2000, Troop 2001 has helped young people in Naples grow into leaders through
              camping, service, and the rank of Eagle Scout.
            </p>
            <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-cream md:text-lg">
              We inspire boys to become confident explorers, engaged citizens, and ethical leaders.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/join" className="btn-primary bg-gold !text-forest-deep hover:!bg-gold hover:brightness-110">
                Join Troop 2001 <ArrowRight size={16} />
              </Link>
              <Link to="/about" className="btn-outline !border-cream/30 !text-cream hover:!bg-cream/10">
                Learn about us
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 border-t border-cream/15 pt-8 md:grid-cols-3">
            <Stat label="Founded" value="2000" />
            <Stat label="Meets" value="Wed · 7 PM" />
            <Stat label="Location" value="Fire Station #45" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.22em] text-cream/60">{label}</div>
      <div className="mt-1 font-display text-2xl text-cream md:text-3xl">{value}</div>
    </div>
  );
}

function EagleSection() {
  return (
    <section className="py-24">
      <div className="container-page grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative overflow-hidden rounded-2xl">
          <img src={eagleImg} alt="Eagle Scout medal on uniform" width={1600} height={1100} loading="lazy" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="eyebrow">The Trail to Eagle</div>
          <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">Where scouts become <em className="text-forest not-italic">Eagles</em>.</h2>
          <p className="mt-4 max-w-lg text-muted-foreground">
            Only about 6% of scouts nationwide earn the rank of Eagle. At Troop 2001, we mentor
            each scout through the journey — from Tenderfoot to a service project that leaves a
            mark on our community.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-3"><Award size={18} className="mt-0.5 text-gold" /> Trail-tested leadership development</li>
            <li className="flex items-start gap-3"><Award size={18} className="mt-0.5 text-gold" /> Merit badge coaching and mentorship</li>
            <li className="flex items-start gap-3"><Award size={18} className="mt-0.5 text-gold" /> Eagle project planning and support</li>
          </ul>
          <div className="mt-8">
            <Link to="/eagle-scouts" className="btn-primary">See our Eagle Scouts <ChevronRight size={16} /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function AdventureSection() {
  const cards = [
    { img: campingImg, title: "Camping", copy: "Monthly campouts across Florida and the Southeast." },
    { img: hikingImg, title: "Hiking & Backpacking", copy: "From day hikes to high adventure treks." },
    { img: canoeImg, title: "Water Sports", copy: "Canoeing, kayaking, sailing, and swimming." },
  ];
  return (
    <section className="border-y border-border/60 bg-sand py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow">Outdoor Adventure</div>
            <h2 className="mt-3 font-display text-4xl text-foreground md:text-5xl">A year full of the outdoors.</h2>
            <p className="mt-4 text-muted-foreground">
              Scouting happens outside. Our program balances skills, service, and pure adventure
              across Southwest Florida and beyond.
            </p>
          </div>
          <Link to="/events" className="btn-outline">View events <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <article key={c.title} className="group overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} width={1400} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-forest">
                  <Compass size={16} />
                  <span className="eyebrow !text-forest">Program</span>
                </div>
                <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventsAndAnnouncements() {
  return (
    <section className="py-24">
      <div className="container-page grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="eyebrow">Upcoming</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">On the calendar.</h2>
          <ul className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {events.map((e) => (
              <li key={e.title} className="flex flex-wrap items-center gap-6 p-5">
                <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-forest text-cream">
                  <Calendar size={20} />
                </div>
                <div className="flex-1 min-w-[200px]">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{e.date}</div>
                  <div className="font-display text-xl text-foreground">{e.title}</div>
                  <div className="text-sm text-muted-foreground">{e.where}</div>
                </div>
                <Link to="/events" className="text-sm font-medium text-forest hover:underline">Details →</Link>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link to="/calendar" className="btn-outline">See full calendar <ArrowRight size={16} /></Link>
          </div>
        </div>

        <aside className="lg:col-span-2">
          <div className="rounded-2xl border border-border bg-forest-deep p-8 text-cream">
            <div className="eyebrow !text-gold">Announcements</div>
            <h3 className="mt-3 font-display text-2xl text-cream">Latest from the troop</h3>
            <ul className="mt-6 space-y-4 text-sm text-cream/85">
              {announcements.map((a, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function PhotoSlideshow() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="border-y border-border/60 bg-forest-deep py-24 text-cream">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow !text-gold">Photo Slideshow</div>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">Moments from the trail.</h2>
          </div>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Slide ${idx + 1}`}
                onClick={() => setI(idx)}
                className={`h-2 rounded-full transition-all ${idx === i ? "w-8 bg-gold" : "w-2 bg-cream/30"}`}
              />
            ))}
          </div>
        </div>
        <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl">
          {slides.map((s, idx) => (
            <img
              key={idx}
              src={s}
              alt="Troop 2001 activities"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinksPreview() {
  const links = ["Health Forms", "Online Payments", "Scoutbook", "TroopTrack", "Youth Protection", "Merit Badges"];
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="eyebrow">Quick Links</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Everything scouts and parents need.</h2>
          </div>
          <Link to="/quick-links" className="btn-outline">All quick links <ArrowRight size={16} /></Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {links.map((l) => (
            <Link
              key={l}
              to="/quick-links"
              className="group flex items-center justify-between rounded-xl border border-border bg-card p-5 transition-colors hover:border-forest"
            >
              <span className="font-medium">{l}</span>
              <ArrowRight size={16} className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-forest" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="pb-24">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-forest px-8 py-16 text-cream md:px-14 md:py-20">
          <div className="absolute inset-0 opacity-15" style={{ backgroundImage: `url(${flagImg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="relative max-w-2xl">
            <div className="eyebrow !text-gold">Join Us</div>
            <h2 className="mt-3 font-display text-4xl text-cream md:text-5xl">Ready to start the adventure?</h2>
            <p className="mt-4 text-cream/85">
              Visit us any Wednesday at 7 PM at North Collier Fire Station #45. Scouts and parents
              are always welcome — no experience needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/join" className="btn-primary bg-gold !text-forest-deep hover:brightness-110">Join Troop 2001</Link>
              <Link to="/about" className="btn-outline !border-cream/30 !text-cream hover:!bg-cream/10">Meet the troop</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
