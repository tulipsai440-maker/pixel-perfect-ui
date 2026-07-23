import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Mail } from "lucide-react";
import logoAsset from "@/assets/troop-2001-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-forest-deep text-cream">
      <div className="container-page grid gap-10 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-cream p-1.5 ring-1 ring-cream/30 shadow-sm">
              <img
                src={logoAsset.url}
                alt="Boy Scouts of America Troop 2001 Naples"
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
            </span>
            <div>
              <div className="font-display text-lg font-semibold">Troop 2001</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-cream/60">Naples · Florida</div>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            Building character, leadership, and a lifelong love of the outdoors through Scouting since 2000.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-base text-cream">Meeting Location</h3>
          <ul className="mt-3 space-y-2 text-cream/80">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" /><span>North Collier Fire Station #45<br/>1885 Veterans Park Dr<br/>Naples, FL 34109</span></li>
            <li className="flex gap-2"><Clock size={16} className="mt-0.5 shrink-0 text-gold" /><span>Every Wednesday · 7:00 PM</span></li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 shrink-0 text-gold" /><Link to="/join" className="underline-offset-4 hover:underline">Contact us to visit</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-base text-cream">Explore</h3>
          <ul className="mt-3 grid grid-cols-2 gap-y-2 text-cream/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/eagle-scouts" className="hover:text-gold">Eagle Scouts</Link></li>
            <li><Link to="/calendar" className="hover:text-gold">Calendar</Link></li>
            <li><Link to="/events" className="hover:text-gold">Events</Link></li>
            <li><Link to="/join" className="hover:text-gold">Join Us</Link></li>
            <li><Link to="/quick-links" className="hover:text-gold">Quick Links</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 text-xs text-cream/60 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Troop 2001 Naples. All rights reserved.</div>
          <div>Meets every Wednesday at 7:00 PM · North Collier Fire Station #45</div>
        </div>
      </div>
    </footer>
  );
}
