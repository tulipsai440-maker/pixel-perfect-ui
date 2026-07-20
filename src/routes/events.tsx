import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ArrowRight, Calendar } from "lucide-react";
import campingImg from "@/assets/camping.jpg";
import hikingImg from "@/assets/hiking.jpg";
import canoeImg from "@/assets/canoe.jpg";
import flagImg from "@/assets/flag.jpg";
import adventureImg from "@/assets/adventure.jpg";
import eagleImg from "@/assets/eagle.jpg";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Troop 2001 Naples" },
      { name: "description", content: "Campouts, ceremonies, and adventures from Troop 2001 Naples." },
      { property: "og:title", content: "Troop 2001 Events" },
      { property: "og:description", content: "Campouts, ceremonies, and adventures." },
    ],
  }),
  component: EventsPage,
});

const events = [
  { img: campingImg, date: "Aug 23–25, 2026", title: "Big Cypress Weekend Campout", desc: "A weekend of hiking, wildlife viewing, and Dutch oven cooking in Big Cypress Preserve." },
  { img: hikingImg, date: "Sep 20–22, 2026", title: "Ocala National Forest", desc: "A fall backpacking trip along the Florida Trail through sand pine scrub and clear springs." },
  { img: canoeImg, date: "Oct 11, 2026", title: "Estero Bay Canoe Day", desc: "Half-day paddle through mangrove estuaries with a shoreline lunch cookout." },
  { img: adventureImg, date: "Nov 8–10, 2026", title: "Fall Camporee", desc: "District camporee with skill events, campfire competition, and inter-troop games." },
  { img: flagImg, date: "Nov 27, 2026", title: "Veterans Memorial Service", desc: "Color guard and community service at Freedom Memorial in Naples." },
  { img: eagleImg, date: "Dec 14, 2026", title: "Winter Court of Honor", desc: "Recognizing rank advancements, merit badges, and outstanding service." },
];

function EventsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Events"
        title="From campouts to Courts of Honor."
        description="A rolling look at what Troop 2001 is up to. Photos and details will be updated as each event approaches."
      />
      <section className="py-16">
        <div className="container-page grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <article key={i} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={e.img} alt={e.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-xs uppercase tracking-widest text-forest">
                  <Calendar size={14} /> {e.date}
                </div>
                <h3 className="mt-2 font-display text-2xl">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:gap-2.5 transition-all">
                  Learn more <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
