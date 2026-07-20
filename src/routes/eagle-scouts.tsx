import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { Award } from "lucide-react";

export const Route = createFileRoute("/eagle-scouts")({
  head: () => ({
    meta: [
      { title: "Eagle Scouts — Troop 2001 Naples" },
      { name: "description", content: "Meet the Eagle Scouts of Troop 2001 Naples and their service projects." },
      { property: "og:title", content: "Eagle Scouts — Troop 2001 Naples" },
      { property: "og:description", content: "Our Eagle Scout roll of honor." },
    ],
  }),
  component: EagleScoutsPage,
});

type EagleRow = { year: string; name: string; project: string };

const eagles: EagleRow[] = [
  { year: "2024", name: "Ethan M.", project: "Built native-plant nature trail markers at a local park." },
  { year: "2024", name: "Noah R.", project: "Constructed benches and shade for a community garden." },
  { year: "2023", name: "Liam S.", project: "Renovated an outdoor classroom at an elementary school." },
  { year: "2023", name: "Owen P.", project: "Organized food drive and pantry shelving project." },
  { year: "2022", name: "Caleb T.", project: "Installed bat houses to support local ecosystem." },
  { year: "2022", name: "Mason K.", project: "Refurbished veterans memorial landscaping." },
  { year: "2021", name: "Jacob H.", project: "Built little free libraries across four neighborhoods." },
  { year: "2020", name: "Aiden B.", project: "Assembled pandemic-response care packages for seniors." },
];

function EagleScoutsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Roll of Honor"
        title="Our Eagle Scouts."
        description="Only about 6% of scouts nationwide reach the rank of Eagle. Each name below represents years of leadership, service, and a project that strengthened our community."
      />

      <section className="py-16">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="hidden grid-cols-[100px_1fr_2fr] border-b border-border bg-forest text-cream md:grid">
              <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">Year</div>
              <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">Name</div>
              <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.18em]">Eagle Project</div>
            </div>
            <ul className="divide-y divide-border">
              {eagles.map((e, i) => (
                <li
                  key={i}
                  className="grid gap-2 px-6 py-5 md:grid-cols-[100px_1fr_2fr] md:items-center md:gap-0 md:px-0"
                >
                  <div className="flex items-center gap-3 md:px-6">
                    <Award size={18} className="text-gold md:hidden" />
                    <span className="font-display text-lg text-forest">{e.year}</span>
                  </div>
                  <div className="font-medium md:px-6">{e.name}</div>
                  <div className="text-sm text-muted-foreground md:px-6">{e.project}</div>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New Eagle Scouts are added after their board of review. Contact the troop to update this list.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
