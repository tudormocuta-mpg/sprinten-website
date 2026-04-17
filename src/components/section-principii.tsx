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
