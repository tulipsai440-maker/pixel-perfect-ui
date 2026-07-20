import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Calendar as CalendarIcon, MapPin } from "lucide-react";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar — Troop 2001 Naples" },
      { name: "description", content: "Upcoming meetings, campouts, and events for Troop 2001 Naples." },
      { property: "og:title", content: "Troop 2001 Calendar" },
      { property: "og:description", content: "Meetings, campouts, and events." },
    ],
  }),
  component: CalendarPage,
});

const sample = [
  { date: "2026-08-05", title: "Weekly Troop Meeting", where: "Fire Station #45", type: "Meeting" },
  { date: "2026-08-09", title: "Summer Court of Honor", where: "Fire Station #45", type: "Ceremony" },
  { date: "2026-08-12", title: "Weekly Troop Meeting", where: "Fire Station #45", type: "Meeting" },
  { date: "2026-08-16", title: "Backpacking Prep Night", where: "Fire Station #45", type: "Meeting" },
  { date: "2026-08-23", title: "Big Cypress Weekend Campout", where: "Big Cypress Preserve", type: "Campout" },
  { date: "2026-09-02", title: "Weekly Troop Meeting", where: "Fire Station #45", type: "Meeting" },
  { date: "2026-09-09", title: "Merit Badge University Signup Deadline", where: "Online", type: "Deadline" },
  { date: "2026-09-20", title: "Fall Campout — Ocala National Forest", where: "Ocala, FL", type: "Campout" },
];

const typeColor: Record<string, string> = {
  Meeting: "bg-navy/10 text-navy",
  Ceremony: "bg-gold/20 text-forest-deep",
  Campout: "bg-forest/15 text-forest",
  Deadline: "bg-destructive/10 text-destructive",
};

function CalendarPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Calendar"
        title="What's coming up."
        description="Sample events shown below. Our calendar is architected for future TroopTrack iCal/ICS synchronization so families can subscribe in Apple Calendar, Google Calendar, or Outlook."
      />
      <section className="py-16">
        <div className="container-page">
          <div className="mb-8 flex flex-wrap gap-2">
            {Object.keys(typeColor).map((t) => (
              <span key={t} className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${typeColor[t]}`}>
                <span className="h-1.5 w-1.5 rounded-full bg-current" />{t}
              </span>
            ))}
          </div>
          <ul className="space-y-3">
            {sample.map((e, i) => {
              const d = new Date(e.date + "T00:00:00");
              const month = d.toLocaleString("en-US", { month: "short" });
              const day = d.getDate();
              const weekday = d.toLocaleString("en-US", { weekday: "long" });
              return (
                <li key={i} className="flex flex-wrap items-center gap-6 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="grid h-20 w-20 shrink-0 place-items-center rounded-xl border border-border bg-sand text-center">
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-widest text-forest">{month}</div>
                      <div className="font-display text-3xl leading-none">{day}</div>
                    </div>
                  </div>
                  <div className="min-w-[240px] flex-1">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{weekday}</div>
                    <div className="font-display text-xl">{e.title}</div>
                    <div className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin size={14} /> {e.where}
                    </div>
                  </div>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${typeColor[e.type]}`}>{e.type}</span>
                </li>
              );
            })}
          </ul>

          <div className="mt-10 rounded-2xl border border-dashed border-border bg-sand/50 p-6 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <CalendarIcon size={18} className="mt-0.5 text-forest" />
              <div>
                <div className="font-medium text-foreground">TroopTrack sync (coming soon)</div>
                <p>
                  This calendar is designed to consume an iCal/ICS feed from TroopTrack. Once
                  connected, meeting, campout, and ceremony data will update automatically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
