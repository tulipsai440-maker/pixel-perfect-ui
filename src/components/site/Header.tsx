import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/troop-2001-logo.png.asset.json";

const nav = [
  { to: "/about", label: "About Us" },
  { to: "/eagle-scouts", label: "Eagle Scouts" },
  { to: "/calendar", label: "Calendar" },
  { to: "/events", label: "Events" },
  { to: "/join", label: "Join Us" },
  { to: "/quick-links", label: "Quick Links" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="container-page flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid place-items-center rounded-full bg-cream ring-1 ring-border p-1.5 shadow-sm">
            <img
              src={logoAsset.url}
              alt="Boy Scouts of America Troop 2001 Naples"
              width={72}
              height={72}
              className="h-16 w-16 object-contain md:h-[72px] md:w-[72px]"
            />
          </span>
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-lg md:text-xl text-forest-deep">Troop 2001</span>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Naples, FL</span>
          </span>
        </Link>


        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((i) => (
            <Link
              key={i.to}
              to={i.to}
              className="rounded-full px-3.5 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
              activeProps={{ className: "rounded-full px-3.5 py-2 text-sm bg-muted text-foreground font-medium" }}
            >
              {i.label}
            </Link>
          ))}
          <Link to="/join" className="btn-primary ml-2 !py-2 !px-4 text-sm">Join Troop 2001</Link>
        </nav>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <div className="container-page flex flex-col py-3">
            {nav.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-foreground hover:bg-muted"
              >
                {i.label}
              </Link>
            ))}
            <Link to="/join" onClick={() => setOpen(false)} className="btn-primary mt-2 text-sm">Join Troop 2001</Link>
          </div>
        </div>
      )}
    </header>
  );
}
