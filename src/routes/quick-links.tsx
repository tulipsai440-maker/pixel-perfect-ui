import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/Layout";
import { ExternalLink, FileText, CreditCard, Globe, Shield, Award, BookOpen, MapPin, ClipboardList, Folder, Newspaper, Images } from "lucide-react";
import type { ComponentType } from "react";

export const Route = createFileRoute("/quick-links")({
  head: () => ({
    meta: [
      { title: "Quick Links — Troop 2001 Naples" },
      { name: "description", content: "Essential scouting resources: health forms, payments, Scoutbook, TroopTrack, and more." },
      { property: "og:title", content: "Troop 2001 Quick Links" },
      { property: "og:description", content: "Essential scouting resources for Troop 2001 families." },
    ],
  }),
  component: QuickLinksPage,
});

type LinkItem = { label: string; href: string; icon: ComponentType<{ size?: number }>; desc: string };

const links: LinkItem[] = [
  { label: "Health Forms", href: "https://www.scouting.org/health-and-safety/ahmr/", icon: FileText, desc: "Annual Health & Medical Record forms A, B, and C." },
  { label: "Online Payments", href: "#", icon: CreditCard, desc: "Pay dues, camp fees, and event costs online." },
  { label: "Scouting America", href: "https://www.scouting.org/", icon: Globe, desc: "National Scouting America website." },
  { label: "Gulf Coast Council", href: "https://www.gulfcoastcouncil.org/", icon: MapPin, desc: "Our local Scouts BSA council." },
  { label: "Scoutbook", href: "https://www.scoutbook.com/", icon: BookOpen, desc: "Advancement tracking and unit management." },
  { label: "TroopTrack", href: "https://www.trooptrack.com/", icon: ClipboardList, desc: "Attendance, calendar, and communications." },
  { label: "Youth Protection", href: "https://www.scouting.org/training/youth-protection/", icon: Shield, desc: "Required training for adult leaders." },
  { label: "Merit Badge Resources", href: "https://www.scouting.org/skills/merit-badges/", icon: Award, desc: "Merit badge worksheets, pamphlets, and counselors." },
  { label: "Guide to Safe Scouting", href: "https://www.scouting.org/health-and-safety/gss/", icon: Shield, desc: "Health and safety guidelines for all activities." },
  { label: "Camping Checklist", href: "#", icon: ClipboardList, desc: "What to bring for weekend and long-term campouts." },
  { label: "Forms", href: "#", icon: FileText, desc: "Permission slips, medical, and troop-specific forms." },
  { label: "Documents", href: "#", icon: Folder, desc: "Troop handbook, bylaws, and reference documents." },
  { label: "Newsletter", href: "#", icon: Newspaper, desc: "Monthly troop newsletter archive." },
  { label: "Photo Gallery", href: "#", icon: Images, desc: "Photos from campouts, ceremonies, and service." },
];

function QuickLinksPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quick Links"
        title="Everything scouts and parents need."
        description="Essential resources for Troop 2001 families — from health forms to merit badge references."
      />
      <section className="py-16">
        <div className="container-page grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((l) => {
            const Icon = l.icon;
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-forest"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <div className="font-display text-lg">{l.label}</div>
                    {external && <ExternalLink size={13} className="text-muted-foreground" />}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{l.desc}</p>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
