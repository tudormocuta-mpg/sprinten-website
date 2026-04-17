import { content } from "@/lib/content";
import { PrincipiuCard } from "./principiu-card";

const icons = {
  incluziune: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15 18c0-2.5 2-4.5 4.5-4.5S24 15.5 24 18" />
    </svg>
  ),
  comunitate: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />
    </svg>
  ),
  bucurie: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 14c1 1.5 2.2 2.2 3.5 2.2s2.5-.7 3.5-2.2" />
      <line x1="9" y1="9.5" x2="9" y2="9.5" />
      <line x1="15" y1="9.5" x2="15" y2="9.5" />
    </svg>
  ),
} as const;

const iconMap = [icons.incluziune, icons.comunitate, icons.bucurie];

export function SectionPrincipii() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, items } =
    content.principii;

  return (
    <section id="principii" className="bg-cream-warm px-6 py-20 md:px-12 md:py-24">
      <div className="mx-auto max-w-[960px] text-center">
        <div className="mb-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-teal">
          {number} · {label}
        </div>
        <h2 className="mx-auto mb-14 max-w-[580px] font-serif text-[28px] font-semibold leading-[1.15] tracking-[-0.02em] text-brown md:text-[36px]">
          {titlePrefix}
          <em className="italic text-terracotta">{titleEmphasis}</em>
          {titleSuffix}
        </h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {items.map((item, i) => (
            <PrincipiuCard
              key={item.number}
              icon={iconMap[i]}
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
