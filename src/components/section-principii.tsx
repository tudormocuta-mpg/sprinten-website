import { HeartHandshake, Users2, Sparkle } from "lucide-react";
import { content } from "@/lib/content";
import { PrincipiuCard } from "./principiu-card";

const iconMap = [
  <HeartHandshake key="incluziune" size={34} />,
  <Users2 key="comunitate" size={34} />,
  <Sparkle key="bucurie" size={34} />,
];

export function SectionPrincipii() {
  const { number, label, titlePrefix, titleEmphasis, titleSuffix, items } =
    content.principii;

  return (
    <section id="principii" className="bg-white/40 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-[12px] font-bold uppercase tracking-[0.3em] text-teal">
            {number} . {label.toUpperCase()}
          </h2>
          <h3 className="font-sans text-[36px] font-extrabold tracking-tight text-forest md:text-[48px]">
            {titlePrefix}
            <span className="italic text-terracotta">{titleEmphasis}</span>
            {titleSuffix}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
