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

type LinkItem = {
  label: string;
  href: string | null;
  icon: ComponentType<{ size?: number }>;
  desc: string;
};

const links: LinkItem[] = [
  { label: "Health Forms", href: "https://filestore.scouting.org/filestore/healthsafety/pdf/680-001_ab.pdf", icon: FileText, desc: "Annual Health & Medical Record — Parts A & B (PDF from Scouting America)." },
  { label: "Scouting America", href: "https://www.scouting.org/", icon: Globe, desc: "National Scouting America website." },
  { label: "Gulf Coast Council", href: "https://www.gulfcoastcouncil.org/", icon: MapPin, desc: "Our local Scouts BSA council." },
  { label: "Scoutbook", href: "https://scoutbook.scouting.org/", icon: BookOpen, desc: "Advancement tracking and unit management." },
  { label: "TroopTrack", href: "https://www.trooptrack.com/", icon: ClipboardList, desc: "Attendance, calendar, and communications." },
  { label: "Youth Protection Training", href: "https://www.scouting.org/training/youth-protection/", icon: Shield, desc: "Required training for adult leaders." },
  { label: "Merit Badge Resources", href: "https://www.scouting.org/skills/merit-badges/", icon: Award, desc: "Merit badge worksheets, pamphlets, and counselors." },
  { label: "Guide to Safe Scouting", href: "https://www.scouting.org/health-and-safety/gss/", icon: Shield, desc: "Health and safety guidelines for all activities." },
  { label: "Online Payments", href: null, icon: CreditCard, desc: "Pay dues, camp fees, and event costs online." },
  { label: "Camping Checklist", href: null, icon: ClipboardList, desc: "What to bring for weekend and long-term campouts." },
  { label: "Forms", href: null, icon: FileText, desc: "Permission slips and troop-specific forms." },
  { label: "Documents", href: null, icon: Folder, desc: "Troop handbook, bylaws, and reference documents." },
  { label: "Newsletter", href: null, icon: Newspaper, desc: "Monthly troop newsletter archive." },
  { label: "Photo Gallery", href: null, icon: Images, desc: "Photos from campouts, ceremonies, and service." },
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
            const comingSoon = !l.href;
            const external = l.href?.startsWith("http");
            const inner = (
              <>
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="font-display text-lg">{l.label}</div>
                    {external && <ExternalLink size={13} className="text-muted-foreground" />}
                    {comingSoon && (
                      <span className="ml-auto rounded-full bg-gold/25 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-forest-deep">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{l.desc}</p>
                </div>
              </>
            );
            const base = "group flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all";
            if (comingSoon) {
              return (
                <div key={l.label} className={`${base} opacity-70`}>{inner}</div>
              );
            }
            return (
              <a
                key={l.label}
                href={l.href!}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className={`${base} hover:-translate-y-0.5 hover:border-forest`}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
