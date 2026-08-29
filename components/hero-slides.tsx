'use client';

import { useState, useEffect, useCallback } from 'react';

export interface HeroSlide {
  img: string;
  title?: string;
  desc?: string;
  href: string;
  buttonLabel?: string;
}

export function HeroSlides({ slides }: { slides: HeroSlide[] }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), [slides.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + slides.length) % slides.length), [slides.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, paused]);

  const slide = slides[idx];

  return (
    <div
      className="relative overflow-hidden"
      style={{ aspectRatio: '21/9' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((s, i) => (
        <a
          key={s.title ?? s.img}
          href={s.href}
          className="absolute inset-0 block transition-opacity duration-500"
          style={{ opacity: i === idx ? 1 : 0, pointerEvents: i === idx ? 'auto' : 'none' }}
        >
          <img
            src={s.img}
            alt={s.title ?? ''}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {(s.title || s.buttonLabel) && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center"
            style={{ background: s.title ? 'rgba(0,0,0,0.42)' : 'transparent' }}
          >
            {s.title && <h2 className="text-lg font-bold text-white drop-shadow sm:text-2xl">{s.title}</h2>}
            {s.desc && <p className="max-w-xl text-xs text-white/80 leading-5 sm:text-sm">{s.desc}</p>}
            {(s.buttonLabel || s.title) && (
              <span
                className="mt-1 rounded px-5 py-2 text-xs font-semibold text-white sm:text-sm"
                style={{ background: '#2DC861' }}
              >
                {s.buttonLabel ?? '加LINE參加活動'}
              </span>
            )}
          </div>
          )}
        </a>
      ))}

      <button
        onClick={(e) => { e.preventDefault(); prev(); }}
        aria-label="上一張"
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-xl text-white transition hover:bg-black/50"
      >
        ‹
      </button>
      <button
        onClick={(e) => { e.preventDefault(); next(); }}
        aria-label="下一張"
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-xl text-white transition hover:bg-black/50"
      >
        ›
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setIdx(i); }}
            aria-label={`前往第 ${i + 1} 張`}
            className="h-2 w-2 rounded-full p-0"
            style={{ backgroundColor: i === idx ? '#FFFFFF' : 'rgba(255,255,255,0.5)' }}
          />
        ))}
      </div>
    </div>
  );
}
