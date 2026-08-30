"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Artwork } from "@/app/data/artwork";

const FADE_MS = 190;
const SWIPE_THRESHOLD = 40;

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

interface Props {
  pieces: Artwork[];
}

export default function ArtworkGallery({ pieces }: Props) {
  const count = pieces.length;

  // `active` is what the strip, the counter and the hash reflect — it moves
  // immediately. `shown` is the committed piece and lags by one fade.
  const [active, setActive] = useState(0);
  const [shown, setShown] = useState(0);
  const [fading, setFading] = useState(false);
  const [dir, setDir] = useState(1);
  const [loadedIndex, setLoadedIndex] = useState<number | null>(null);

  const activeRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const stripRef = useRef<HTMLDivElement | null>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  /** Move to `next`, stepping from the pending target rather than the committed piece. */
  const select = useCallback(
    (next: number, travel?: number) => {
      const from = activeRef.current;
      if (next === from || next < 0 || next >= count) return;

      activeRef.current = next;
      setDir(travel ?? (next > from ? 1 : -1));
      setActive(next);
      setFading(true);

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(
        () => {
          setShown(activeRef.current);
          setFading(false);
        },
        prefersReducedMotion() ? 0 : FADE_MS
      );

      window.history.replaceState(null, "", `#${pad(next + 1)}`);
    },
    [count]
  );

  const step = useCallback(
    (delta: number) => {
      const next = (activeRef.current + delta + count) % count;
      select(next, delta > 0 ? 1 : -1);
    },
    [count, select]
  );

  // Deep link: /artwork#03 selects a piece on load (and on back/forward),
  // without a fade. Runs post-mount so SSR and hydration agree.
  useEffect(() => {
    function applyHash() {
      const match = /^#(\d{1,2})$/.exec(window.location.hash);
      if (!match) return;
      const i = parseInt(match[1], 10) - 1;
      if (i < 0 || i >= count || i === activeRef.current) return;
      activeRef.current = i;
      setActive(i);
      setShown(i);
    }
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [count]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  // Arrow keys step sequentially and wrap at both ends.
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const el = e.target as HTMLElement | null;
      if (
        el &&
        (el.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(el.tagName))
      ) {
        return;
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [step]);

  // Roving focus: once focus is inside the strip, it follows the active number
  // so the focus ring never strands itself on the previously clicked tab.
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip || !strip.contains(document.activeElement)) return;
    tabRefs.current[active]?.focus({ preventScroll: true });
  }, [active]);

  // Keep the active number centred in the strip.
  useEffect(() => {
    const strip = stripRef.current;
    const tab = tabRefs.current[active];
    if (!strip || !tab) return;

    const desired = tab.offsetLeft - (strip.clientWidth - tab.offsetWidth) / 2;
    const max = Math.max(0, strip.scrollWidth - strip.clientWidth);
    const left = Math.max(0, Math.min(desired, max));
    if (Math.abs(left - strip.scrollLeft) > 4) {
      strip.scrollTo({
        left,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    }
  }, [active]);

  // Prefetch only the immediate neighbours of the committed piece.
  useEffect(() => {
    for (const offset of [-1, 1]) {
      const piece = pieces[(shown + offset + count) % count];
      if (piece?.image) {
        const img = new window.Image();
        img.src = piece.image;
      }
    }
  }, [shown, pieces, count]);

  function onTouchStart(e: React.TouchEvent) {
    const t = e.changedTouches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    // Never fight a vertical scroll.
    if (Math.abs(dx) < SWIPE_THRESHOLD || Math.abs(dx) <= Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  }

  if (count === 0) return null;

  const piece = pieces[shown];
  const offset = fading ? (dir > 0 ? -2 : 2) : 0;
  const caption = [piece.title, piece.medium, piece.year]
    .filter(Boolean)
    .join(" · ");

  return (
    <section className="art-gallery">
      <header className="art-header">
        <h1 className="art-title">artwork</h1>
        <p className="art-subtitle">
          a sketchbook, one page at a time.
        </p>
        <p className="art-hint">← → to step, or pick a plate</p>
      </header>

      <div
        className="art-strip"
        ref={stripRef}
        role="tablist"
        aria-label="artwork plates"
      >
        {pieces.map((p, i) => (
          <button
            key={p.index}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`art-tab-${pad(p.index)}`}
            aria-selected={i === active}
            aria-controls="art-stage"
            tabIndex={i === active ? 0 : -1}
            className={`art-num${i === active ? " active" : ""}`}
            onClick={() => select(i)}
          >
            {pad(p.index)}
          </button>
        ))}
      </div>

      <div className="art-stage-row">
        <div
          className="art-stage"
          id="art-stage"
          role="tabpanel"
          aria-labelledby={`art-tab-${pad(pieces[active].index)}`}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          style={{ opacity: fading ? 0 : 1, transform: `translateX(${offset}px)` }}
        >
          {piece.image ? (
            // Plain <img>: the gallery does its own srcset, lazy loading and
            // blur-up fade, and prefetches only the neighbouring plates.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={piece.index}
              ref={(el) => {
                if (el?.complete) setLoadedIndex(shown);
              }}
              src={piece.image}
              srcSet={
                piece.imageSmall
                  ? `${piece.imageSmall} 800w, ${piece.image} 1600w`
                  : undefined
              }
              sizes="(max-width: 640px) 100vw, 750px"
              alt={
                piece.alt ??
                [piece.title, piece.medium].filter(Boolean).join(" · ")
              }
              width={1600}
              height={1200}
              loading="lazy"
              decoding="async"
              className="art-image"
              style={{ opacity: loadedIndex === shown ? 1 : 0 }}
              onLoad={() => setLoadedIndex(shown)}
            />
          ) : (
            <span className="art-placeholder" aria-hidden="true">
              {pad(piece.index)}
            </span>
          )}
        </div>
      </div>

      <div className="art-caption-row" aria-live="polite">
        <span className="art-caption" style={{ opacity: fading ? 0 : 1 }}>
          {caption}
        </span>
      </div>
    </section>
  );
}
