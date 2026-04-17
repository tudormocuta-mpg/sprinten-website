# SPRINTEN Website — Design Doc

**Data:** 2026-04-17
**Autor:** Tudor Mocuță
**Stadiu:** Design aprobat, pregătit pentru implementation plan

## Context

Reconstrucție a website-ului https://www.sprinten.org/ ca site de prezentare one-page. Obiectiv: o pagină curată, caldă și concentrată, care comunică misiunea SPRINTEN și apartenența la ecosistemul de evenimente sportive MPG — fără să mai listeze proiecte specifice, alte branduri sau detalii de donații.

Site-ul existent are mai multe pagini (Home, Despre, Implică-te, Contact, Parteneri). Noua versiune reduce la o singură pagină cu scroll continuu.

## Obiective

- **One-page** scroll continuu, mobile-friendly.
- **Ton cald și uman** — emoție autentică, nu retorică corporate.
- **Conexiune cu MPG** menționată explicit, cu link către mpg.com.ro.
- **Zero frecări tehnice** — fără formulare, fără CMS, fără integrări externe, fără analytics inițial.
- **Cost zero** — Vercel free tier, domeniu existent (sprinten.org).

## Non-obiective (out of scope)

- Formulare de orice fel (contact, newsletter, donații).
- Mențiuni de proiecte specifice (SPORTYA, RIDERS CLUB) sau alte branduri partenere.
- Traducere EN (doar RO inițial; dacă devine necesară, se adaugă ulterior).
- CMS / editare conținut fără deploy. Conținutul trăiește în cod.
- Blog, galerie, evenimente, hartă, donații, login.
- Analytics, cookie banner, tracking (pot fi adăugate ulterior dacă apar cerințe legale/de măsurare).

## Tech stack

| Strat | Alegere | Motiv |
|---|---|---|
| Framework | Next.js 16 (App Router) | Static generation, next/font, next/image, zero config pe Vercel |
| Styling | Tailwind CSS v4 (`@import "tailwindcss"`, `@theme inline`) | Minim, rapid, compatibil shadcn/ui |
| UI primitives | shadcn/ui (new-york, neutral) | Instalat la init; folosit doar dacă apar nevoi concrete (buton, dialog). Zero componente shadcn în MVP-ul static. |
| Fonts | `next/font/google` — Fraunces + Inter | Loading optimizat, zero layout shift |
| Language | Doar RO, fără next-intl | YAGNI — conținut static, ~300 cuvinte; dacă apare EN ulterior, refactor scurt |
| Animations | Fără (inițial) | Pagina trăiește prin copy + fotografie + ritm de culoare |
| Hosting | Vercel (free / Hobby) | Auto-deploy din GitHub, zero cost pentru trafic mic |
| Repo | `tudormocuta-mpg/sprinten-website` | GitHub cont MPG |
| Domeniu | sprinten.org (existent) | Se reconfigurează DNS către Vercel |

## Structura paginii

Ordine de sus în jos:

1. **Nav** — logo-1 (compact) stânga + 4 link-uri ancoră dreapta (Despre · Principii · MPG · Contact)
2. **Hero** — split 60/40: logo-2 (extins) + label + descriere scurtă + hint de scroll (stânga) / fotografia principală (dreapta)
3. **Despre** — text centrat, max-width ~760px, 2 paragrafe
4. **Principii** — 3 carduri cu cerc numerotat + titlu + descriere, fundal cream-warm
5. **MPG** — secțiune cu fundal teal, text centrat + link la mpg.com.ro
6. **Contact** — email `events@mpg.com.ro` afișat mare, Fraunces teracotă
7. **Footer** — fundal brown închis, copyright + link MPG

## Identitate vizuală

### Paletă (Tailwind v4 `@theme`)

```css
@theme inline {
  --color-cream: #FDF6EC;        /* background principal */
  --color-cream-warm: #F5EAD6;   /* background secțiune Principii */
  --color-terracotta: #C44536;   /* accent principal */
  --color-teal: #2D7A7B;         /* accent secundar */
  --color-brown: #2D1810;        /* text principal + footer bg */
  --color-brown-muted: #6B5D52;  /* text secundar */
  --color-peach: #FDB08A;        /* accent pe fundaluri închise */
}
```

### Typography

- **Fraunces** (serif): headlines (h1/h2/h3), email display, cifre numerotate, emphasis italic. Greutăți: 500, 600.
- **Inter** (sans-serif): body, label-uri, nav, UI. Greutăți: 400, 500, 600.
- Scale indicativ: h1 56px, h2 34px, h3 20px, body 16px, subtitle 15px, label 10px uppercase letter-spacing 2.5px.

### Logo și imagistică

- **Logo-1** (compact) — `/public/sprinten-logo.svg` (sau `.png`), folosit în nav la ~56px înălțime.
- **Logo-2** (extins) — `/public/sprinten-logo-expanded.svg`, folosit în hero ca element principal (aspect ratio ~16:9, max-width 440px). Nu există headline serif dublat — logo-ul conține deja tagline-ul „Sprinten tu... sprinteni și ei".
- **Hero photo** — `/public/hero.jpg`, fotografia furnizată de utilizator (copilă susținută de un adult, brațe întinse — moment de bucurie autentică). Aplicare: `object-fit: cover`, overlay subtil de gradient teracotă→teal (15% opacitate) pentru integrare cromatică.

### Ritm vizual (backgrounds pe scroll)

```
Nav         → cream
Hero        → cream (left) + photo (right)
Despre      → cream
Principii   → cream-warm (F5EAD6) — break subtil
MPG         → teal (2D7A7B) — break major, text cream
Contact     → cream (revenire la calm)
Footer      → brown (2D1810)
```

## Copy final (RO)

### Nav
- Logo-1 (stânga)
- Link-uri: Despre · Principii · MPG · Contact (Contact colorat teracotă)

### Hero
- Label: `UN PROIECT MPG`
- Vizual principal: logo-2 (conține tagline-ul „Sprinten tu... sprinteni și ei")
- Descriere: „Când alergi sau pedalezi — o faci și pentru copiii care nu pot încă. Sportul ca instrument de incluziune."
- Hint scroll: „scroll pentru poveste"

### Despre (`#despre`)
- Label: `01 · Despre`
- Titlu: „Un proiect care trăiește *prin mișcare*."
- Paragraf 1: „SPRINTEN este un proiect dedicat copiilor cu dizabilități locomotorii din medii defavorizate. Credem că sportul amator este o punte — între oameni, între lumi, între ce e și ce poate deveni."
- Paragraf 2: „Cei care alergăm sau pedalăm nu facem mișcare doar pentru noi. O facem cu gândul la copiii care, într-o zi, ar trebui să poată face la fel."

### Principii (`#principii`)
- Label: `02 · Principii`
- Titlu: „Trei idei care ne *țin în mișcare*."
- Card 01 (cerc teracotă) — **Incluziune**: „Sportul șterge diferențele. Oricine poate face parte dintr-o comunitate activă — indiferent de punctul de pornire."
- Card 02 (cerc teal) — **Comunitate**: „Mișcarea e mai puternică împreună. Fiecare cursă amatori e o ocazie să fim unii cu ceilalți."
- Card 03 (cerc brown) — **Bucurie**: „Fiecare pas contează. Nu distanța definește participarea, ci intenția din spatele ei."

### MPG (`#mpg`)
- Label: `03 · Legătura cu MPG`
- Titlu: „Un proiect născut din *evenimente sportive*."
- Paragraf: „SPRINTEN este un proiect conex al evenimentelor sportive organizate de echipa MPG. Credem în puterea sportului amator de a genera schimbare reală — și asta e felul nostru de a contribui."
- Link: `mpg.com.ro →` (cu border-bottom pe cream peach)

### Contact (`#contact`)
- Label: `04 · Contact`
- Titlu: „Ne *scrii*?"
- Paragraf: „Pentru orice întrebare legată de SPRINTEN sau de evenimentele noastre."
- Email: `events@mpg.com.ro` (mailto link, Fraunces 28px teracotă)

### Footer
- `© 2026 SPRINTEN` (stânga)
- `un proiect MPG` (dreapta, „MPG" link către mpg.com.ro)

## Breakdown componente

Organizare orientată pe citire: fiecare secțiune = fișier propriu, compozabile în `page.tsx`.

```
src/
  app/
    layout.tsx           # html shell + font providers + metadata
    page.tsx             # compune secțiunile
    globals.css          # @import tailwindcss + @theme inline
  components/
    nav.tsx
    hero.tsx
    section-despre.tsx
    section-principii.tsx
    principiu-card.tsx   # subcomponent pentru cele 3 carduri
    section-mpg.tsx
    section-contact.tsx
    footer.tsx
  lib/
    content.ts           # tot copy-ul într-un singur loc, tipat
public/
  sprinten-logo.svg
  sprinten-logo-expanded.svg
  hero.jpg
  favicon.ico
```

**Motivație pentru un `content.ts` centralizat:** copy-ul e singurul lucru care se va schimba des. Ținându-l într-un fișier tipat, edit-urile sunt simple, fără să navigăm prin JSX. Dacă apare nevoia de EN, structura e deja pregătită pentru extindere.

## Responsive

- **Desktop (≥1024px):** layout-ul din mockup (split hero 60/40, grid 3-col la Principii).
- **Tablet (640–1023px):** păstrăm split hero 60/40 dar cu padding mai mic; Principii rămâne 3-col cu gap redus.
- **Mobile (<640px):**
  - Nav: logo stânga + hamburger dreapta care deschide un drawer simplu (CSS-only cu `<details>` sau state React) cu cele 4 linkuri ancoră.
  - Hero: stack vertical — logo-2 sus, photo dedesubt (aspect ratio 4:3), descrierea sub.
  - Principii: 1 coloană.
  - Typography scale redus (h1 38px, h2 26px).

## Performance & SEO

- **SSG** — `page.tsx` fără `'use client'`, tot static.
- **Images** — `next/image` pentru hero; logo-urile SVG inline sau `<Image>` cu `priority` pentru logo-2 (above-the-fold).
- **Fonts** — `next/font/google`, `display: 'swap'`, subsetare `latin` + `latin-ext` (pentru diacritice).
- **Meta:**
  - `<title>`: „SPRINTEN — sportul ca instrument de incluziune"
  - `<meta description>`: „Un proiect conex al evenimentelor sportive MPG, dedicat copiilor cu dizabilități locomotorii."
  - Open Graph: titlu + descriere + imagine (hero.jpg la 1200×630 dacă se pretează, altfel un OG separat).
  - `<html lang="ro">`.
- **Accessibility:** alt text pe logo și foto; contrast verificat (toate combinațiile de mai sus trec AA); focus-visible pe linkuri; navigare cu tastatura.

## Infrastructură

1. Repo GitHub: `tudormocuta-mpg/sprinten-website` (creat manual sau cu `gh repo create`).
2. Proiect Vercel linked la repo, framework preset: Next.js, free tier.
3. Domeniu: `sprinten.org` mutat la Vercel (DNS CNAME/A records — instrucțiuni din dashboard).
4. Deploy automat din `main`; preview deployments pe PR-uri.
5. Fără env variables inițial. Dacă se adaugă analytics, intră în `.env.local` + Vercel env.

## Open items pentru implementare

- **Asset-uri de salvat:**
  - `public/sprinten-logo.svg` — utilizatorul furnizează fișierul logo-1 compact
  - `public/sprinten-logo-expanded.svg` — utilizatorul furnizează fișierul logo-2 extins
  - `public/hero.jpg` — utilizatorul furnizează fotografia principală (cea atașată în brainstorming)
  - `public/og-image.jpg` — opțional; dacă nu, folosim `hero.jpg`
- **Fotografie de rezervă:** găsirea unei fotografii permanente (cu drepturi clare) pentru hero; cea curentă e un placeholder tematic.
- **Favicon** — din logo-1 (shoe + cerc) la 32×32 și 180×180 (apple-touch-icon).
- **Verificare copy** de către utilizator înainte de implementare — toate textele din secțiunea „Copy final" sunt propuneri și pot fi rescrise.
