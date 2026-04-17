# SPRINTEN Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construiește un website one-page de prezentare pentru SPRINTEN, conform spec-ului aprobat în `docs/superpowers/specs/2026-04-17-sprinten-website-design.md`, și deploy pe Vercel la domeniul sprinten.org.

**Architecture:** Next.js 16 App Router cu Static Site Generation (SSG). O singură pagină compusă din componente pure pentru fiecare secțiune. Conținutul trăiește într-un fișier `content.ts` tipat. Fără CMS, fără formulare, fără API routes.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, shadcn/ui (instalat, neutilizat în MVP), next/font (Fraunces + Inter), Vercel free tier.

**Notă despre testare:** Acesta e un site de prezentare static, fără logică aplicativă. Gate-urile de corectitudine sunt: (1) TypeScript, (2) `next build` fără erori, (3) verificare vizuală manuală în browser după fiecare secțiune. Testele unitare pentru JSX static ar adăuga overhead fără a prinde bug-uri reale. Dacă apar logică/CMS/form-uri ulterior, se introduc teste atunci.

---

## Prerequisites (înainte de start)

- Node.js 20+ instalat (`node --version`)
- npm 10+ (`npm --version`)
- Git instalat (`git --version`)
- Cont GitHub cu acces la organizația/userul `tudormocuta-mpg`
- Cont Vercel linked la GitHub
- GitHub CLI instalat și autentificat (`gh auth status`)
- Vercel CLI va fi instalat în Task 21

Directorul curent: `C:\Users\tudor\Projects\sprinten`. Conține deja:
- `docs/superpowers/specs/2026-04-17-sprinten-website-design.md` (spec-ul)
- `.superpowers/brainstorm/...` (date efemere — vor fi gitignore-uite)

---

## Task 1: Scaffold Next.js 16 project în directorul curent

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `public/*`, `.gitignore`, `README.md` (toate generate de `create-next-app`)

- [ ] **Step 1.1: Verifică directorul curent**

```bash
pwd
ls -la
```

Expected: Output arată directorul `sprinten` cu `docs/` și `.superpowers/` prezente, fără `package.json`.

- [ ] **Step 1.2: Rulează create-next-app în directorul curent**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --no-git --yes
```

Expected: Scaffold complet. Dacă există conflicte cu fișiere existente (`docs/`, `.superpowers/`), CLI-ul le ignoră (nu sunt fișiere rezervate).

- [ ] **Step 1.3: Verifică versiunea Next.js**

```bash
grep '"next"' package.json
```

Expected: `"next": "^16.x.x"` (sau similar). Dacă major e <16, rulează:
```bash
npm install next@latest react@latest react-dom@latest
```

- [ ] **Step 1.4: Pornește dev server și verifică**

```bash
npm run dev
```

Expected: Server pornește la http://localhost:3000 fără erori. Deschide manual în browser — ar trebui să vezi pagina default Next.js.

Oprește serverul cu Ctrl+C.

- [ ] **Step 1.5: Curăță boilerplate-ul default**

Read `src/app/page.tsx` și `src/app/layout.tsx` pentru a vedea conținutul generat.

Write `src/app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-brown">
      <p className="p-8">SPRINTEN — în construcție.</p>
    </main>
  );
}
```

Write `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPRINTEN",
  description: "În construcție.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
```

---

## Task 2: Configurează Tailwind v4 cu paleta SPRINTEN

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 2.1: Write `src/app/globals.css`**

```css
@import "tailwindcss";

@theme inline {
  --color-cream: #FDF6EC;
  --color-cream-warm: #F5EAD6;
  --color-terracotta: #C44536;
  --color-teal: #2D7A7B;
  --color-brown: #2D1810;
  --color-brown-muted: #6B5D52;
  --color-peach: #FDB08A;

  --font-sans: var(--font-inter), system-ui, -apple-system, sans-serif;
  --font-serif: var(--font-fraunces), Georgia, serif;
}

html, body {
  background: var(--color-cream);
  color: var(--color-brown);
}

body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a { color: inherit; text-decoration: none; }
```

- [ ] **Step 2.2: Verifică că stylingul se aplică**

```bash
npm run dev
```

Expected: http://localhost:3000 afișează fundal cream (#FDF6EC) cu text brown. Oprește cu Ctrl+C.

- [ ] **Step 2.3: Commit**

```bash
git init
echo ".superpowers/" >> .gitignore
echo ".vercel/" >> .gitignore
git add .
git commit -m "chore: scaffold Next.js 16 + Tailwind v4 with SPRINTEN palette"
```

---

## Task 3: Configurează fonturile (Fraunces + Inter) prin next/font

**Files:**
- Modify: `src/app/layout.tsx`

- [ ] **Step 3.1: Write `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "SPRINTEN — sportul ca instrument de incluziune",
  description:
    "Un proiect conex al evenimentelor sportive MPG, dedicat copiilor cu dizabilități locomotorii.",
  metadataBase: new URL("https://sprinten.org"),
  openGraph: {
    title: "SPRINTEN — sportul ca instrument de incluziune",
    description:
      "Un proiect conex al evenimentelor sportive MPG, dedicat copiilor cu dizabilități locomotorii.",
    url: "https://sprinten.org",
    siteName: "SPRINTEN",
    locale: "ro_RO",
    type: "website",
    images: [{ url: "/hero.jpg", width: 1200, height: 630, alt: "SPRINTEN" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3.2: Testează aplicarea fonturilor**

Modifică temporar `src/app/page.tsx` pentru a testa fonturile:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-brown p-8 space-y-4">
      <p className="font-sans text-2xl">Inter (sans) — Salut Sprinten!</p>
      <p className="font-serif text-2xl italic">Fraunces (serif) — <em>Salut Sprinten!</em></p>
    </main>
  );
}
```

```bash
npm run dev
```

Expected: Vizual, cele două fonturi diferă clar. Oprește serverul.

- [ ] **Step 3.3: Commit**

```bash
git add src/app/layout.tsx src/app/page.tsx
git commit -m "feat: configure Fraunces + Inter via next/font with metadata"
```

---

## Task 4: Instalează shadcn/ui (pentru helper `cn` și consistență viitoare)

**Files:**
- Create: `components.json`, `src/lib/utils.ts`

- [ ] **Step 4.1: Rulează shadcn init**

```bash
npx shadcn@latest init
```

Când cere input:
- Style: **new-york**
- Base color: **neutral**
- CSS variables: **yes**

Expected: Se generează `components.json` și `src/lib/utils.ts` cu funcția `cn`. Se pot adăuga importuri noi în `globals.css` pentru shadcn — păstrează ambele (shadcn + @theme al nostru).

- [ ] **Step 4.2: Verifică `src/lib/utils.ts`**

Read `src/lib/utils.ts`. Expected content:

```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

- [ ] **Step 4.3: Verifică că paleta noastră supraviețuiește**

Read `src/app/globals.css`. Dacă shadcn a suprascris `@theme`, merge manual:
- Păstrează `@import "tailwindcss";` la top
- Asigură-te că **toate** variabilele SPRINTEN (`--color-cream`, `--color-terracotta`, etc.) sunt prezente în blocul `@theme inline`
- shadcn poate adăuga variabile CSS în `:root` și `.dark` — OK, le ignorăm (nu folosim shadcn components în MVP)

- [ ] **Step 4.4: Rulează dev server și verifică**

```bash
npm run dev
```

Expected: Paleta cream/brown aplicată în continuare. Oprește.

- [ ] **Step 4.5: Commit**

```bash
git add .
git commit -m "chore: install shadcn/ui (new-york, neutral) for cn helper"
```

---

## Task 5: Creează asset-uri placeholder

**Files:**
- Create: `public/sprinten-logo.svg`
- Create: `public/sprinten-logo-expanded.svg`
- Create: `public/hero.jpg` (download placeholder)

**Context:** Utilizatorul va înlocui ulterior aceste placeholder-uri cu asset-urile reale (logo-1 compact, logo-2 extins, fotografia hero). Placeholder-urile au aspect ratio-uri corecte ca layout-ul să se valideze vizual.

- [ ] **Step 5.1: Creează `public/sprinten-logo.svg` (placeholder compact)**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56" width="56" height="56">
  <circle cx="28" cy="28" r="25" fill="none" stroke="#C44536" stroke-width="2" stroke-dasharray="3,2"/>
  <text x="28" y="34" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-size="20" fill="#C44536">S</text>
  <text x="28" y="48" text-anchor="middle" font-family="sans-serif" font-size="5" fill="#C44536" opacity="0.6">PLACEHOLDER</text>
</svg>
```

- [ ] **Step 5.2: Creează `public/sprinten-logo-expanded.svg` (placeholder extins)**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 248" width="440" height="248">
  <rect x="2" y="2" width="436" height="244" rx="16" fill="none" stroke="#C44536" stroke-width="2" stroke-dasharray="4,3" opacity="0.4"/>
  <text x="220" y="110" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-style="italic" font-size="36" fill="#C44536">Sprinten tu...</text>
  <text x="220" y="155" text-anchor="middle" font-family="Georgia, serif" font-weight="700" font-style="italic" font-size="36" fill="#C44536">sprinteni și ei</text>
  <text x="220" y="195" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#C44536" opacity="0.5" letter-spacing="2">LOGO-2 PLACEHOLDER · ÎNLOCUIEȘTE CU SVG REAL</text>
</svg>
```

- [ ] **Step 5.3: Descarcă un placeholder pentru `public/hero.jpg`**

```bash
curl -L "https://images.unsplash.com/photo-1526676037777-05a232554f77?w=1200&q=80" -o public/hero.jpg
```

Expected: Fișier descărcat (~100-200KB). Verifică cu `ls -la public/hero.jpg`.

> **Notă pentru user:** Fotografia atașată în brainstorming (copilă susținută de adult, brațe întinse) trebuie salvată manual peste `public/hero.jpg` înainte de deploy. Acest placeholder Unsplash e doar temporar pentru dezvoltare locală.

- [ ] **Step 5.4: Creează `public/favicon.ico` (provizoriu)**

Next.js generează un favicon default. Îl păstrăm până utilizatorul furnizează unul bazat pe logo-1.

- [ ] **Step 5.5: Commit**

```bash
git add public/
git commit -m "chore: add placeholder assets (logo SVGs + hero photo)"
```

---

## Task 6: Creează `content.ts` cu tot copy-ul

**Files:**
- Create: `src/lib/content.ts`

- [ ] **Step 6.1: Write `src/lib/content.ts`**

```typescript
export const content = {
  brand: {
    name: "SPRINTEN",
    tagline: "Sprinten tu... sprinteni și ei",
    mpgTag: "UN PROIECT MPG",
  },
  nav: {
    items: [
      { label: "Despre", href: "#despre" },
      { label: "Principii", href: "#principii" },
      { label: "MPG", href: "#mpg" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    description:
      "Când alergi sau pedalezi — o faci și pentru copiii care nu pot încă. Sportul ca instrument de incluziune.",
    scrollHint: "scroll pentru poveste",
    photoAlt: "Moment de bucurie prin mișcare — copil susținut cu brațele întinse",
  },
  despre: {
    number: "01",
    label: "Despre",
    titlePrefix: "Un proiect care trăiește ",
    titleEmphasis: "prin mișcare",
    titleSuffix: ".",
    paragraphs: [
      "SPRINTEN este un proiect dedicat copiilor cu dizabilități locomotorii din medii defavorizate. Credem că sportul amator este o punte — între oameni, între lumi, între ce e și ce poate deveni.",
      "Cei care alergăm sau pedalăm nu facem mișcare doar pentru noi. O facem cu gândul la copiii care, într-o zi, ar trebui să poată face la fel.",
    ],
  },
  principii: {
    number: "02",
    label: "Principii",
    titlePrefix: "Trei idei care ne ",
    titleEmphasis: "țin în mișcare",
    titleSuffix: ".",
    items: [
      {
        number: "01",
        accent: "terracotta" as const,
        title: "Incluziune",
        description:
          "Sportul șterge diferențele. Oricine poate face parte dintr-o comunitate activă — indiferent de punctul de pornire.",
      },
      {
        number: "02",
        accent: "teal" as const,
        title: "Comunitate",
        description:
          "Mișcarea e mai puternică împreună. Fiecare cursă amatori e o ocazie să fim unii cu ceilalți.",
      },
      {
        number: "03",
        accent: "brown" as const,
        title: "Bucurie",
        description:
          "Fiecare pas contează. Nu distanța definește participarea, ci intenția din spatele ei.",
      },
    ],
  },
  mpg: {
    number: "03",
    label: "Legătura cu MPG",
    titlePrefix: "Un proiect născut din ",
    titleEmphasis: "evenimente sportive",
    titleSuffix: ".",
    paragraph:
      "SPRINTEN este un proiect conex al evenimentelor sportive organizate de echipa MPG. Credem în puterea sportului amator de a genera schimbare reală — și asta e felul nostru de a contribui.",
    linkText: "mpg.com.ro",
    linkHref: "https://mpg.com.ro",
  },
  contact: {
    number: "04",
    label: "Contact",
    titlePrefix: "Ne ",
    titleEmphasis: "scrii",
    titleSuffix: "?",
    paragraph:
      "Pentru orice întrebare legată de SPRINTEN sau de evenimentele noastre.",
    email: "events@mpg.com.ro",
  },
  footer: {
    copyright: "© 2026 SPRINTEN",
    attributionPrefix: "un proiect ",
    attributionLinkText: "MPG",
    attributionLinkHref: "https://mpg.com.ro",
  },
} as const;

export type PrincipiuAccent = (typeof content.principii.items)[number]["accent"];
```

- [ ] **Step 6.2: Verifică tipizarea**

```bash
npx tsc --noEmit
```

Expected: Fără erori.

- [ ] **Step 6.3: Commit**

```bash
git add src/lib/content.ts
git commit -m "feat(content): add typed content module with all copy"
```

---

## Task 7: Creează componenta `Footer`

**Files:**
- Create: `src/components/footer.tsx`

- [ ] **Step 7.1: Write `src/components/footer.tsx`**

```tsx
import { content } from "@/lib/content";

export function Footer() {
  const { copyright, attributionPrefix, attributionLinkText, attributionLinkHref } =
    content.footer;
  return (
    <footer className="flex items-center justify-between bg-brown px-10 py-7 text-[12px] text-cream/60">
      <div>{copyright}</div>
      <div>
        {attributionPrefix}
        <a
          href={attributionLinkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-peach hover:underline"
        >
          {attributionLinkText}
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 7.2: Testează integrarea — modifică temporar `src/app/page.tsx`**

```tsx
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-brown">
      <div className="p-8">Secțiuni în construcție...</div>
      <Footer />
    </main>
  );
}
```

- [ ] **Step 7.3: Rulează dev și verifică vizual**

```bash
npm run dev
```

Expected: Footer apare jos, fundal brown închis, text cream cu opacity, link „MPG" portocaliu deschis (peach). Oprește.

- [ ] **Step 7.4: Commit**

```bash
git add src/components/footer.tsx src/app/page.tsx
git commit -m "feat(footer): add footer component"
```

---

## Task 8: Creează componenta `Nav` (desktop only inițial)

**Files:**
- Create: `src/components/nav.tsx`

- [ ] **Step 8.1: Write `src/components/nav.tsx`**

```tsx
import Image from "next/image";
import { content } from "@/lib/content";

export function Nav() {
  return (
    <nav className="flex items-center justify-between border-b border-brown/10 px-10 py-4">
      <a href="#top" className="flex items-center" aria-label={content.brand.name}>
        <Image
          src="/sprinten-logo.svg"
          alt={content.brand.name}
          width={56}
          height={56}
          priority
        />
      </a>
      <div className="hidden md:flex items-center gap-7 text-[13px] font-medium">
        {content.nav.items.map((item) => {
          const isContact = item.href === "#contact";
          return (
            <a
              key={item.href}
              href={item.href}
              className={isContact ? "text-terracotta" : "text-brown"}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
```

- [ ] **Step 8.2: Testează — actualizează `src/app/page.tsx`**

```tsx
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-cream text-brown">
      <Nav />
      <div className="p-8 min-h-[600px]">Secțiuni în construcție...</div>
      <Footer />
    </main>
  );
}
```

- [ ] **Step 8.3: Verifică vizual**

```bash
npm run dev
```

Expected: Nav vizibil pe desktop cu logo placeholder + 4 linkuri; „Contact" colorat teracotă. Pe mobile, linkurile sunt ascunse (vor fi adăugate în Task 17). Oprește.

- [ ] **Step 8.4: Commit**

```bash
git add src/components/nav.tsx src/app/page.tsx
git commit -m "feat(nav): add desktop navigation"
```

---

## Task 9: Creează componenta `Hero`

**Files:**
- Create: `src/components/hero.tsx`

- [ ] **Step 9.1: Write `src/components/hero.tsx`**

```tsx
import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="grid min-h-[440px] md:grid-cols-[1.25fr_1fr]">
      <div className="flex flex-col justify-between px-8 py-10 md:px-12 md:py-14">
        <div>
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
            {content.brand.mpgTag}
          </div>

          <div className="w-full max-w-[440px]">
            <Image
              src="/sprinten-logo-expanded.svg"
              alt={content.brand.tagline}
              width={440}
              height={248}
              priority
              className="w-full h-auto"
            />
          </div>

          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-brown-muted">
            {content.hero.description}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2.5 text-[11px] text-brown-muted">
          <div className="h-px w-7 bg-brown" />
          <span>{content.hero.scrollHint}</span>
        </div>
      </div>

      <div className="relative min-h-[320px] bg-cream-warm">
        <Image
          src="/hero.jpg"
          alt={content.hero.photoAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/15 to-teal/10" />
      </div>
    </section>
  );
}
```

- [ ] **Step 9.2: Integrează în `src/app/page.tsx`**

```tsx
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-cream text-brown">
      <Nav />
      <Hero />
      <div className="p-8 min-h-[400px]">Restul secțiunilor în construcție...</div>
      <Footer />
    </main>
  );
}
```

- [ ] **Step 9.3: Verifică vizual**

```bash
npm run dev
```

Expected: Hero split 60/40 pe desktop. Stânga: label teal + logo extins placeholder + descriere + hint scroll. Dreapta: fotografia hero cu overlay gradient. Oprește.

- [ ] **Step 9.4: Commit**

```bash
git add src/components/hero.tsx src/app/page.tsx
git commit -m "feat(hero): add hero section with logo + photo"
```

---

## Task 10: Creează componenta `SectionDespre`

**Files:**
- Create: `src/components/section-despre.tsx`

- [ ] **Step 10.1: Write `src/components/section-despre.tsx`**

```tsx
import { content } from "@/lib/content";

export function SectionDespre() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, paragraphs } =
    content.despre;

  return (
    <section id="despre" className="mx-auto max-w-[760px] px-8 py-20 md:px-12">
      <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
        {number} · {label}
      </div>
      <h2 className="mb-6 font-serif text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-brown">
        {titlePrefix}
        <em className="italic text-terracotta">{titleEmphasis}</em>
        {titleSuffix}
      </h2>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="mb-3.5 text-[16px] leading-[1.7] text-brown last:mb-0"
        >
          {p}
        </p>
      ))}
    </section>
  );
}
```

- [ ] **Step 10.2: Integrează în page și testează**

Update `src/app/page.tsx` — adaugă `<SectionDespre />` între `<Hero />` și placeholder-ul celorlalte secțiuni.

```bash
npm run dev
```

Expected: Secțiunea Despre vizibilă, centrată, cu label teal + titlu serif + italic teracotă + 2 paragrafe. Oprește.

- [ ] **Step 10.3: Commit**

```bash
git add src/components/section-despre.tsx src/app/page.tsx
git commit -m "feat(despre): add 'Despre' section"
```

---

## Task 11: Creează componenta `PrincipiuCard`

**Files:**
- Create: `src/components/principiu-card.tsx`

- [ ] **Step 11.1: Write `src/components/principiu-card.tsx`**

```tsx
import type { PrincipiuAccent } from "@/lib/content";

const accentBg: Record<PrincipiuAccent, string> = {
  terracotta: "bg-terracotta",
  teal: "bg-teal",
  brown: "bg-brown",
};

interface PrincipiuCardProps {
  number: string;
  accent: PrincipiuAccent;
  title: string;
  description: string;
}

export function PrincipiuCard({ number, accent, title, description }: PrincipiuCardProps) {
  return (
    <div>
      <div
        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full font-serif text-[18px] font-semibold text-cream ${accentBg[accent]}`}
      >
        {number}
      </div>
      <h3 className="mb-2.5 font-serif text-[20px] font-semibold text-brown">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] text-brown">{description}</p>
    </div>
  );
}
```

- [ ] **Step 11.2: Verifică tipizarea**

```bash
npx tsc --noEmit
```

Expected: Fără erori.

- [ ] **Step 11.3: Commit**

```bash
git add src/components/principiu-card.tsx
git commit -m "feat(principii): add PrincipiuCard subcomponent"
```

---

## Task 12: Creează componenta `SectionPrincipii`

**Files:**
- Create: `src/components/section-principii.tsx`

- [ ] **Step 12.1: Write `src/components/section-principii.tsx`**

```tsx
import { content } from "@/lib/content";
import { PrincipiuCard } from "./principiu-card";

export function SectionPrincipii() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, items } =
    content.principii;

  return (
    <section id="principii" className="bg-cream-warm px-8 py-20 md:px-12">
      <div className="mx-auto max-w-[860px]">
        <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mb-12 max-w-[560px] font-serif text-[34px] font-medium leading-[1.15] tracking-[-0.02em] text-brown">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <PrincipiuCard
              key={item.number}
              number={item.number}
              accent={item.accent}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 12.2: Integrează și testează**

Adaugă `<SectionPrincipii />` după `<SectionDespre />` în `src/app/page.tsx`.

```bash
npm run dev
```

Expected: Fundal cream-warm, titlu + 3 carduri pe desktop (1 coloană pe mobile). Cercurile au culori diferite (teracotă, teal, brown). Oprește.

- [ ] **Step 12.3: Commit**

```bash
git add src/components/section-principii.tsx src/app/page.tsx
git commit -m "feat(principii): add 'Principii' section with 3 cards"
```

---

## Task 13: Creează componenta `SectionMPG`

**Files:**
- Create: `src/components/section-mpg.tsx`

- [ ] **Step 13.1: Write `src/components/section-mpg.tsx`**

```tsx
import { content } from "@/lib/content";

export function SectionMPG() {
  const {
    number,
    label,
    titlePrefix,
    titleEmphasis,
    titleSuffix,
    paragraph,
    linkText,
    linkHref,
  } = content.mpg;

  return (
    <section id="mpg" className="bg-teal px-8 py-[90px] text-cream md:px-12">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-peach">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[30px] font-medium leading-[1.25] tracking-[-0.01em]">
          {titlePrefix}
          <em className="italic text-peach">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-7 text-[15px] leading-[1.7] text-cream/85">{paragraph}</p>
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 border-b border-cream/50 pb-1 text-[13px] font-semibold tracking-[0.02em] text-cream hover:border-cream"
        >
          {linkText} <span className="text-[16px]">→</span>
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 13.2: Integrează și testează**

Adaugă `<SectionMPG />` după `<SectionPrincipii />` în `src/app/page.tsx`.

```bash
npm run dev
```

Expected: Secțiune fundal teal, text cream, link cu border bottom. Oprește.

- [ ] **Step 13.3: Commit**

```bash
git add src/components/section-mpg.tsx src/app/page.tsx
git commit -m "feat(mpg): add MPG section with teal background"
```

---

## Task 14: Creează componenta `SectionContact`

**Files:**
- Create: `src/components/section-contact.tsx`

- [ ] **Step 14.1: Write `src/components/section-contact.tsx`**

```tsx
import { content } from "@/lib/content";

export function SectionContact() {
  const {
    number,
    label,
    titlePrefix,
    titleEmphasis,
    titleSuffix,
    paragraph,
    email,
  } = content.contact;

  return (
    <section id="contact" className="px-8 py-[90px] md:px-12">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[32px] font-medium leading-[1.2] tracking-[-0.01em] text-brown">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-8 text-[15px] leading-[1.7] text-brown-muted">{paragraph}</p>
        <a
          href={`mailto:${email}`}
          className="inline-block font-serif text-[28px] font-medium tracking-[-0.01em] text-terracotta hover:underline"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 14.2: Integrează și testează**

Adaugă `<SectionContact />` după `<SectionMPG />` în `src/app/page.tsx`.

```bash
npm run dev
```

Expected: Fundal cream, email mare Fraunces teracotă, link mailto funcțional. Oprește.

- [ ] **Step 14.3: Commit**

```bash
git add src/components/section-contact.tsx src/app/page.tsx
git commit -m "feat(contact): add contact section with mailto link"
```

---

## Task 15: Compune `page.tsx` final

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 15.1: Write `src/app/page.tsx`**

```tsx
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { SectionDespre } from "@/components/section-despre";
import { SectionPrincipii } from "@/components/section-principii";
import { SectionMPG } from "@/components/section-mpg";
import { SectionContact } from "@/components/section-contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-cream text-brown">
      <Nav />
      <Hero />
      <SectionDespre />
      <SectionPrincipii />
      <SectionMPG />
      <SectionContact />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 15.2: Verifică întreaga pagină**

```bash
npm run dev
```

Expected: Toate cele 7 elemente într-un scroll continuu. Ritm de culoare: cream → cream-warm (Principii) → teal (MPG) → cream (Contact) → brown (Footer). Oprește.

- [ ] **Step 15.3: Verifică navigation anchors**

În browser, click pe linkurile din Nav: „Despre", „Principii", „MPG", „Contact". Fiecare trebuie să scroll-eze la secțiunea corespunzătoare.

Expected: Toate funcționează.

- [ ] **Step 15.4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat(page): compose final one-page layout"
```

---

## Task 16: Adaugă smooth scroll behavior

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 16.1: Adaugă smooth scroll în globals.css**

Edit `src/app/globals.css`, adaugă după `html, body { ... }`:

```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
}
```

Reason: `scroll-behavior` dă tranziție smooth când se dau click pe anchor links. `scroll-padding-top` compensează înălțimea nav-ului fixed (dacă-l facem sticky ulterior).

- [ ] **Step 16.2: Testează**

```bash
npm run dev
```

Expected: Click pe „Despre" în nav — pagina scroll-ează smooth, nu instant. Oprește.

- [ ] **Step 16.3: Commit**

```bash
git add src/app/globals.css
git commit -m "polish: add smooth scroll behavior for anchor navigation"
```

---

## Task 17: Adaugă Nav mobile cu hamburger

**Files:**
- Modify: `src/components/nav.tsx`

**Context:** Pe mobile (<768px), linkurile din nav sunt ascunse în Task 8 (`hidden md:flex`). Acum adăugăm un drawer hamburger simplu, CSS-only prin `<details>`.

- [ ] **Step 17.1: Write `src/components/nav.tsx`**

```tsx
import Image from "next/image";
import { content } from "@/lib/content";

export function Nav() {
  return (
    <nav className="relative flex items-center justify-between border-b border-brown/10 px-6 py-4 md:px-10">
      <a href="#top" className="flex items-center" aria-label={content.brand.name}>
        <Image
          src="/sprinten-logo.svg"
          alt={content.brand.name}
          width={56}
          height={56}
          priority
        />
      </a>

      <div className="hidden md:flex items-center gap-7 text-[13px] font-medium">
        {content.nav.items.map((item) => {
          const isContact = item.href === "#contact";
          return (
            <a
              key={item.href}
              href={item.href}
              className={isContact ? "text-terracotta" : "text-brown"}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      <details className="group md:hidden relative">
        <summary
          className="list-none cursor-pointer rounded-md p-2 hover:bg-brown/5"
          aria-label="Meniu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-brown group-open:hidden"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-brown hidden group-open:block"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </summary>
        <div className="absolute right-0 top-full mt-2 flex w-56 flex-col gap-1 rounded-lg border border-brown/10 bg-cream p-3 shadow-lg z-10">
          {content.nav.items.map((item) => {
            const isContact = item.href === "#contact";
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-[15px] font-medium hover:bg-cream-warm ${
                  isContact ? "text-terracotta" : "text-brown"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </details>
    </nav>
  );
}
```

- [ ] **Step 17.2: Testează pe mobile**

```bash
npm run dev
```

Deschide http://localhost:3000, apasă F12, comută la mobile view (iPhone SE, 375px).

Expected: Hamburger icon vizibil în dreapta. Click deschide drawer cu 4 linkuri. Iconul se transformă în X. Click pe un link navighează la ancora. Oprește.

- [ ] **Step 17.3: Commit**

```bash
git add src/components/nav.tsx
git commit -m "feat(nav): add mobile hamburger menu with CSS-only drawer"
```

---

## Task 18: Mobile responsive pentru Hero

**Files:**
- Modify: `src/components/hero.tsx`

**Context:** Pe mobile, hero-ul trebuie să stack-eze vertical: logo sus, foto dedesubt.

- [ ] **Step 18.1: Write `src/components/hero.tsx`**

```tsx
import Image from "next/image";
import { content } from "@/lib/content";

export function Hero() {
  return (
    <section className="grid min-h-[440px] grid-cols-1 md:grid-cols-[1.25fr_1fr]">
      <div className="order-2 flex flex-col justify-between px-6 py-10 md:order-1 md:px-12 md:py-14">
        <div>
          <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
            {content.brand.mpgTag}
          </div>

          <div className="w-full max-w-[440px]">
            <Image
              src="/sprinten-logo-expanded.svg"
              alt={content.brand.tagline}
              width={440}
              height={248}
              priority
              className="h-auto w-full"
            />
          </div>

          <p className="mt-6 max-w-[440px] text-[15px] leading-[1.6] text-brown-muted">
            {content.hero.description}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2.5 text-[11px] text-brown-muted">
          <div className="h-px w-7 bg-brown" />
          <span>{content.hero.scrollHint}</span>
        </div>
      </div>

      <div className="relative order-1 aspect-[4/3] bg-cream-warm md:order-2 md:aspect-auto md:min-h-[320px]">
        <Image
          src="/hero.jpg"
          alt={content.hero.photoAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-terracotta/15 to-teal/10" />
      </div>
    </section>
  );
}
```

**Modificări față de versiunea anterioară:**
- `grid-cols-1` pe mobile, `md:grid-cols-[1.25fr_1fr]` pe desktop
- `order-1` și `order-2` pentru a inversa ordinea: pe mobile, foto e sus (order-1), text jos (order-2); pe desktop, text stânga (order-1), foto dreapta (order-2)
- `aspect-[4/3] md:aspect-auto` pentru foto pe mobile — aspect ratio fix
- Padding redus pe mobile (`px-6 py-10` vs `md:px-12 md:py-14`)

- [ ] **Step 18.2: Testează pe mobile**

```bash
npm run dev
```

F12 → mobile view (375px).

Expected: Hero stack vertical — foto sus cu aspect 4:3, text dedesubt. Logo-ul extins rămâne lizibil. Oprește.

- [ ] **Step 18.3: Commit**

```bash
git add src/components/hero.tsx
git commit -m "feat(hero): responsive mobile layout (photo above, text below)"
```

---

## Task 19: Mobile responsive pentru secțiunile rămase

**Files:**
- Modify: `src/components/section-despre.tsx`
- Modify: `src/components/section-principii.tsx`
- Modify: `src/components/section-mpg.tsx`
- Modify: `src/components/section-contact.tsx`
- Modify: `src/components/footer.tsx`

**Context:** Ajustări de padding și typography pentru mobile. Principii grid-ul devine deja 1-col pe mobile (`md:grid-cols-3` → 1-col under 768px), deci rămâne doar typography scale.

- [ ] **Step 19.1: Update `src/components/section-despre.tsx`**

Schimbă `py-20` în `py-16 md:py-20` și titlul din `text-[34px]` în `text-[26px] md:text-[34px]`. Versiune completă:

```tsx
import { content } from "@/lib/content";

export function SectionDespre() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, paragraphs } =
    content.despre;

  return (
    <section id="despre" className="mx-auto max-w-[760px] px-6 py-16 md:px-12 md:py-20">
      <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
        {number} · {label}
      </div>
      <h2 className="mb-6 font-serif text-[26px] font-medium leading-[1.15] tracking-[-0.02em] text-brown md:text-[34px]">
        {titlePrefix}
        <em className="italic text-terracotta">{titleEmphasis}</em>
        {titleSuffix}
      </h2>
      {paragraphs.map((p, i) => (
        <p key={i} className="mb-3.5 text-[16px] leading-[1.7] text-brown last:mb-0">
          {p}
        </p>
      ))}
    </section>
  );
}
```

- [ ] **Step 19.2: Update `src/components/section-principii.tsx`**

```tsx
import { content } from "@/lib/content";
import { PrincipiuCard } from "./principiu-card";

export function SectionPrincipii() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, items } =
    content.principii;

  return (
    <section id="principii" className="bg-cream-warm px-6 py-16 md:px-12 md:py-20">
      <div className="mx-auto max-w-[860px]">
        <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mb-10 max-w-[560px] font-serif text-[26px] font-medium leading-[1.15] tracking-[-0.02em] text-brown md:mb-12 md:text-[34px]">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item) => (
            <PrincipiuCard
              key={item.number}
              number={item.number}
              accent={item.accent}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 19.3: Update `src/components/section-mpg.tsx`**

```tsx
import { content } from "@/lib/content";

export function SectionMPG() {
  const {
    number, label, titlePrefix, titleEmphasis, titleSuffix, paragraph, linkText, linkHref,
  } = content.mpg;

  return (
    <section id="mpg" className="bg-teal px-6 py-[70px] text-cream md:px-12 md:py-[90px]">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-peach">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[24px] font-medium leading-[1.25] tracking-[-0.01em] md:text-[30px]">
          {titlePrefix}
          <em className="italic text-peach">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-7 text-[15px] leading-[1.7] text-cream/85">{paragraph}</p>
        <a
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 border-b border-cream/50 pb-1 text-[13px] font-semibold tracking-[0.02em] text-cream hover:border-cream"
        >
          {linkText} <span className="text-[16px]">→</span>
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 19.4: Update `src/components/section-contact.tsx`**

```tsx
import { content } from "@/lib/content";

export function SectionContact() {
  const {
    number, label, titlePrefix, titleEmphasis, titleSuffix, paragraph, email,
  } = content.contact;

  return (
    <section id="contact" className="px-6 py-[70px] md:px-12 md:py-[90px]">
      <div className="mx-auto max-w-[680px] text-center">
        <div className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mb-6 font-serif text-[26px] font-medium leading-[1.2] tracking-[-0.01em] text-brown md:text-[32px]">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <p className="mb-8 text-[15px] leading-[1.7] text-brown-muted">{paragraph}</p>
        <a
          href={`mailto:${email}`}
          className="inline-block break-all font-serif text-[22px] font-medium tracking-[-0.01em] text-terracotta hover:underline md:text-[28px]"
        >
          {email}
        </a>
      </div>
    </section>
  );
}
```

- [ ] **Step 19.5: Update `src/components/footer.tsx`**

```tsx
import { content } from "@/lib/content";

export function Footer() {
  const { copyright, attributionPrefix, attributionLinkText, attributionLinkHref } =
    content.footer;
  return (
    <footer className="flex flex-col items-center gap-2 bg-brown px-6 py-6 text-[12px] text-cream/60 md:flex-row md:justify-between md:px-10 md:py-7">
      <div>{copyright}</div>
      <div>
        {attributionPrefix}
        <a
          href={attributionLinkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-peach hover:underline"
        >
          {attributionLinkText}
        </a>
      </div>
    </footer>
  );
}
```

- [ ] **Step 19.6: Testează pe mobile și desktop**

```bash
npm run dev
```

Verifică:
- Mobile (375px): Padding redus, typography scalat, Principii 1-col, Footer stacked
- Desktop (1280px): Layout neschimbat față de Task 15

Oprește.

- [ ] **Step 19.7: Commit**

```bash
git add src/components/
git commit -m "feat(responsive): mobile styles for all sections and footer"
```

---

## Task 20: Verifică build de producție + Lighthouse

**Files:** Niciunul (doar verificare)

- [ ] **Step 20.1: Rulează production build**

```bash
npm run build
```

Expected: Build success. Ieșirea arată:
- `/` marcat ca **Static** (○ simbol)
- Total size <200KB (First Load JS)
- Nici un warning critic

Dacă apar erori TypeScript, rezolvă-le înainte de a continua.

- [ ] **Step 20.2: Rulează production server**

```bash
npm run start
```

Expected: http://localhost:3000 afișează pagina completă. Oprește.

- [ ] **Step 20.3: Verificare manuală — checklist**

Deschide `npm run dev` în browser și verifică:

- [ ] Toate cele 7 elemente sunt vizibile (Nav, Hero, Despre, Principii, MPG, Contact, Footer)
- [ ] Ritm de culoare corect (cream → cream-warm → teal → cream → brown)
- [ ] Linkurile din Nav scroll smooth la secțiuni
- [ ] Link MPG deschide mpg.com.ro în tab nou
- [ ] Link email deschide clientul de mail
- [ ] Pe mobile (375px): hamburger funcționează, hero stack-uit, typography OK
- [ ] Logo-urile placeholder (cu text „PLACEHOLDER") sunt vizibile — de înlocuit înainte de deploy
- [ ] Hero photo se încarcă (placeholder Unsplash)

Oprește.

- [ ] **Step 20.4: Lighthouse audit (opțional dar recomandat)**

În Chrome DevTools, tab „Lighthouse", mode „Navigation", categoriile „Performance", „Accessibility", „Best Practices", „SEO". Rulează pe http://localhost:3000.

Target scores:
- Performance: ≥90
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

Dacă scorurile sunt sub target, notează ce trebuie îmbunătățit pentru iterații viitoare. Nu blocăm deploy-ul pe Lighthouse.

---

## Task 21: Setup GitHub repo

**Files:** Niciunul (doar operații git / gh)

- [ ] **Step 21.1: Verifică autentificarea gh**

```bash
gh auth status
```

Expected: Afișează username-ul curent logat. Dacă nu e `tudormocuta-mpg`, rulează `gh auth login` și alege cont-ul corect.

- [ ] **Step 21.2: Creează repo-ul pe GitHub**

```bash
gh repo create tudormocuta-mpg/sprinten-website --public --source=. --remote=origin --description "Website de prezentare SPRINTEN — proiect conex MPG"
```

Expected: Repo creat la https://github.com/tudormocuta-mpg/sprinten-website. Remote `origin` adăugat local.

- [ ] **Step 21.3: Push codul**

```bash
git push -u origin main
```

Expected: Toate commit-urile (~19) urcă pe GitHub. Istoricul e clean.

Dacă branch-ul local se numește `master`, rulează:
```bash
git branch -M main
git push -u origin main
```

---

## Task 22: Deploy pe Vercel

**Files:** Niciunul (configurare Vercel)

- [ ] **Step 22.1: Instalează Vercel CLI**

```bash
npm i -g vercel
```

- [ ] **Step 22.2: Login**

```bash
vercel login
```

Expected: Browser flow de autentificare. Alege „Continue with GitHub" și selectează contul corect.

- [ ] **Step 22.3: Link proiectul la Vercel**

```bash
vercel link
```

Input:
- Set up and deploy? **Yes**
- Which scope? **Contul personal / tudormocuta-mpg (dacă e disponibil)**
- Link to existing project? **No**
- Project name? `sprinten-website`
- Directory? `./` (default)

Expected: Fișierul `.vercel/project.json` creat (deja gitignore-uit în Task 2).

- [ ] **Step 22.4: Deploy preview**

```bash
vercel
```

Expected: Deploy preview la URL de tip `sprinten-website-xxx.vercel.app`. Deschide-l în browser și verifică că site-ul se încarcă complet.

- [ ] **Step 22.5: Deploy production**

```bash
vercel --prod
```

Expected: Deploy la URL production `sprinten-website.vercel.app`. Site-ul e live.

- [ ] **Step 22.6: Configurează auto-deploy din GitHub**

Mergi la dashboard Vercel → proiectul `sprinten-website` → Settings → Git.

Expected: Branch-ul `main` e conectat automat (prin `vercel link`). Fiecare push pe `main` va face deploy production; PR-urile vor crea preview deployments.

---

## Task 23: Configurează domeniul sprinten.org

**Files:** Niciunul (configurare DNS + Vercel)

**Context:** Domeniul e deja înregistrat și activ pe https://www.sprinten.org. Trebuie mutat DNS-ul la Vercel fără downtime.

- [ ] **Step 23.1: Adaugă domeniul în Vercel**

Dashboard Vercel → `sprinten-website` → Settings → Domains → Add Domain.

Input: `sprinten.org` și `www.sprinten.org`.

Vercel va afișa DNS records necesare:
- Pentru `sprinten.org` (root): `A` record → `76.76.21.21`
- Pentru `www.sprinten.org`: `CNAME` → `cname.vercel-dns.com`

Notează valorile exacte afișate (se pot schimba în timp).

- [ ] **Step 23.2: Actualizează DNS-ul la registrarul domeniului**

Login la panelul de administrare al registrarului sprinten.org (e.g., Namecheap, GoDaddy, domeniu.ro). Găsește zona DNS și aplică:

- **A record** pentru `@`: valoarea din Vercel (`76.76.21.21`)
- **CNAME** pentru `www`: `cname.vercel-dns.com`
- Șterge sau comentează A records / CNAMEs existente care pointează la gazda veche.

TTL: 3600 (1h) sau mai mic.

- [ ] **Step 23.3: Așteaptă propagarea DNS (10-60 min)**

```bash
nslookup sprinten.org
nslookup www.sprinten.org
```

Expected: A record-ul returnează `76.76.21.21`; CNAME returnează `cname.vercel-dns.com`.

- [ ] **Step 23.4: Verifică SSL în Vercel**

Dashboard Vercel → Domains → `sprinten.org` ar trebui să afișeze **Valid Configuration** cu certificat SSL automat.

- [ ] **Step 23.5: Verifică live**

Deschide https://sprinten.org și https://www.sprinten.org. Expected: Site-ul nou e live. Ambele URL-uri funcționează (cu redirect automat de la www la non-www sau invers, după preferință — se setează din Vercel).

---

## Task 24 (post-launch): Înlocuiește asset-urile placeholder

**Context:** Înainte de a anunța public, utilizatorul trebuie să înlocuiască asset-urile placeholder cu cele finale.

- [ ] **Step 24.1: Primește asset-urile de la user**
  - `logo-1` compact → va fi salvat ca `public/sprinten-logo.svg`
  - `logo-2` extins → va fi salvat ca `public/sprinten-logo-expanded.svg`
  - Hero photo (copila susținută de adult) → va fi salvat ca `public/hero.jpg`
  - Favicon generat din logo-1 → `src/app/icon.png` (Next.js generează automat favicon-ul)

- [ ] **Step 24.2: Înlocuiește fișierele**

Șterge placeholder-ele și pune fișierele reale cu aceleași nume și path-uri.

- [ ] **Step 24.3: Verifică local**

```bash
npm run dev
```

Expected: Logo-urile reale apar în nav (compact) și hero (extins). Fotografia reală apare în hero. Oprește.

- [ ] **Step 24.4: Commit și deploy**

```bash
git add public/
git commit -m "chore: replace placeholder assets with final logos and hero photo"
git push origin main
```

Expected: Vercel face auto-deploy pe production. Verifică https://sprinten.org după ~1 minut.

---

## Resume checklist (final)

După toate task-urile:

- [ ] Site-ul rulează la https://sprinten.org
- [ ] Toate 7 elementele vizibile și corecte vizual
- [ ] Responsive funcțional pe mobile + desktop
- [ ] Lighthouse scores ≥90 pe toate categoriile
- [ ] Asset-urile reale înlocuiesc placeholder-urile
- [ ] Repo GitHub public la tudormocuta-mpg/sprinten-website
- [ ] Auto-deploy Vercel configurat din main

## Self-Review

**Spec coverage:**
- ✅ One-page, scroll continuu → Task 15
- ✅ Nav cu logo + 4 linkuri → Task 8 (desktop), Task 17 (mobile)
- ✅ Hero cu logo extins + foto + copy → Task 9, Task 18 (mobile)
- ✅ Despre (2 paragrafe) → Task 10
- ✅ Principii (3 carduri) → Task 12, 11
- ✅ MPG (teal + link) → Task 13
- ✅ Contact (email mailto) → Task 14
- ✅ Footer → Task 7
- ✅ Paletă Tailwind v4 `@theme` → Task 2
- ✅ Fraunces + Inter via next/font → Task 3
- ✅ Content.ts centralizat → Task 6
- ✅ Metadata + OG → Task 3
- ✅ SSG → implicit (no 'use client', no dynamic APIs)
- ✅ Smooth scroll → Task 16
- ✅ Responsive → Task 17, 18, 19
- ✅ Infrastructură (GitHub + Vercel + domeniu) → Task 21, 22, 23
- ✅ Asset-uri reale → Task 24

**Type consistency:** `PrincipiuAccent` tipul exportat din `content.ts` (Task 6) e folosit în `PrincipiuCard` (Task 11) și satisface valorile din `content.principii.items` (`"terracotta" | "teal" | "brown"`).

**Placeholder scan:** Nicio referință TBD/TODO/"implementează mai târziu" în tasks. Asset-urile placeholder sunt explicit marcate ca atare și înlocuite în Task 24.
