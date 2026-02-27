"use client";

import { TocItem } from "@/app/lib/blog";

export function TableOfContents({ toc }: { toc: TocItem[] }) {
  if (toc.length === 0) return null;

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="blog-toc">
      <p className="blog-toc-title">table of contents</p>
      <ol className="blog-toc-list">
        {toc.map((item, i) => (
          <li key={item.id} className="blog-toc-item">
            <span className="blog-toc-number">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a
              href={`#${item.id}`}
              className="blog-toc-link"
              onClick={(e) => handleClick(e, item.id)}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
