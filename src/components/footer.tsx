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
