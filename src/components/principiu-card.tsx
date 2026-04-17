import type { PrincipiuAccent } from "@/lib/content";
import type { ReactNode } from "react";

const cardBg: Record<PrincipiuAccent, string> = {
  terracotta: "bg-white border border-terracotta/15",
  teal: "bg-teal/5",
  brown: "bg-forest text-cream",
};

const iconColor: Record<PrincipiuAccent, string> = {
  terracotta: "text-terracotta",
  teal: "text-teal",
  brown: "text-peach",
};

const titleColor: Record<PrincipiuAccent, string> = {
  terracotta: "text-forest",
  teal: "text-forest",
  brown: "text-cream",
};

const descColor: Record<PrincipiuAccent, string> = {
  terracotta: "text-brown-muted",
  teal: "text-brown-muted",
  brown: "text-cream/70",
};

interface PrincipiuCardProps {
  icon: ReactNode;
  accent: PrincipiuAccent;
  title: string;
  description: string;
}

export function PrincipiuCard({ icon, accent, title, description }: PrincipiuCardProps) {
  return (
    <div
      className={`organic-card group p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${cardBg[accent]}`}
    >
      <div className={`mb-7 text-[34px] opacity-70 transition-opacity group-hover:opacity-100 ${iconColor[accent]}`}>
        {icon}
      </div>
      <h4 className={`mb-3 text-[20px] font-bold ${titleColor[accent]}`}>{title}</h4>
      <p className={`text-[14px] leading-relaxed ${descColor[accent]}`}>{description}</p>
    </div>
  );
}
