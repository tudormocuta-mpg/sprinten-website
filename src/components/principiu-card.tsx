import type { PrincipiuAccent } from "@/lib/content";
import type { ReactNode } from "react";

const accentRing: Record<PrincipiuAccent, string> = {
  terracotta: "bg-terracotta/10 text-terracotta",
  teal: "bg-teal/10 text-teal",
  brown: "bg-forest/10 text-forest",
};

interface PrincipiuCardProps {
  icon: ReactNode;
  accent: PrincipiuAccent;
  title: string;
  description: string;
}

export function PrincipiuCard({ icon, accent, title, description }: PrincipiuCardProps) {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div
        className={`mb-5 flex h-14 w-14 items-center justify-center rounded-full ${accentRing[accent]}`}
      >
        {icon}
      </div>
      <h3 className="mb-2.5 font-serif text-[20px] font-semibold text-brown">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.6] text-brown-muted">{description}</p>
    </div>
  );
}
