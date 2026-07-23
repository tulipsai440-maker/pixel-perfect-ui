# Troop 2001 Naples — Revision Plan

## 1. Global
- **Header logo** — increase to ~96px badge on desktop, ~72px mobile; keep "Troop 2001 / Naples, FL" text label.
- **Footer** — add the actual Troop 2001 BSA logo image (replaces the small triangle icon) on every page.
- **Layout width** — audit narrow single-column blocks and widen to responsive horizontal layouts (About founders block, Calendar list rows, etc.).
- Authentic photos — will swap in as you upload; where none yet exist, keep current placeholders.

## 2. Home Page
- **Hero location** — replace short label with the full fire station address (North Collier Fire Station #45, 1885 Veterans Park Dr, Naples, FL 34109).
- **Eagle Scouts image** — placeholder now; swap when you upload a Court of Honor photo.
- **Upcoming Events** — pull from the new `events` table (chronological, upcoming first). Falls back to a friendly empty state until events are added via the admin page.
- **Photo section ("Moments from the Trail")** — placeholder now; swap when Philmont photos are uploaded.

## 3. Quick Links
- All `#` links get a **"Coming soon"** badge and become non-clickable.
- External links (Scoutbook, TroopTrack, Scouting.org, Youth Protection, etc.) verified.

## 4. About Us
- Keep history section.
- Add **Fun Fact** callout ("named 2001 because it sounded more memorable than 2000").
- Replace three value cards:
  - Mission → **Scout Oath** (full text)
  - Values → **Scout Law** (12 points)
  - Community → **Outdoor Code** (full text)
  - Text sized down slightly to fit cleanly.
- **Bottom section (founders)** — reformat into a horizontal responsive layout (image/photo column + narrative column) instead of one wide text block.

## 5. Calendar Page — full redesign
- New **month grid** view (Sun–Sat), like Google/Apple Calendar.
- Prev/next month + "Today" navigation across the whole year.
- Events rendered in cells; **click event → detail dialog** (title, date/time, location, description).
- Below grid: chronological upcoming list (earliest first).
- Replace TroopTrack sync callout with **Band app sync** callout.
- Data source: same `events` table as Home Upcoming Events.

## 6. Events data + admin (Lovable Cloud)
- Enable Lovable Cloud.
- Create `events` table (id, title, description, location, starts_at, ends_at, type, band_url).
- Create `user_roles` table + `has_role()` function (admin role).
- Auth: email/password + Google sign-in.
- New protected route `/_authenticated/admin/events` — admins can create/edit/delete events. Non-admins are redirected.
- Public reads via a narrow anon SELECT policy so Home/Calendar work without login.
- You'll be the first admin; I'll add a one-time promotion step after you sign up.

## 7. Verification pass
- Click through every nav + Quick Link, verify all images load, confirm mobile/tablet/desktop responsiveness.

## Notes / follow-ups after this ships
- Upload the Court of Honor Eagle photo + Philmont photos → I'll wire them into hero/gallery.
- Band app has no public API; the admin page is how events flow in. If you'd rather I paste specific upcoming events into the DB directly for you, send the list.
