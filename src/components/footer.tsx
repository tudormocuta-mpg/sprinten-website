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
