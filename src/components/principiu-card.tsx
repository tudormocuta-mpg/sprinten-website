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
