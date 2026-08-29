'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export interface PodcastEpisode {
  img: string;
  youtubeId: string;
}

export function PodcastEpisodes({ episodes }: { episodes: PodcastEpisode[] }) {
  const [idx, setIdx] = useState(0);
  const [active, setActive] = useState<PodcastEpisode | null>(null);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setIdx((i) => (i + 1) % episodes.length), [episodes.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + episodes.length) % episodes.length), [episodes.length]);

  useEffect(() => {
    if (paused || active) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next, paused, active]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 40) prev();
    else if (delta < -40) next();
    touchStartX.current = null;
  };

  return (
    <>
      <div
        className="relative mt-10 select-none overflow-hidden rounded-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="relative aspect-video w-full bg-black">
          {episodes.map((ep, i) => (
            <button
              key={ep.youtubeId}
              type="button"
              onClick={() => setActive(ep)}
              className="group absolute inset-0 block transition-opacity duration-500"
              style={{ opacity: i === idx ? 1 : 0, pointerEvents: i === idx ? 'auto' : 'none' }}
            >
              <img
                src={ep.img}
                alt="戀愛會社節目"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90">
                  <svg viewBox="0 0 24 24" fill="#049089" width="24" height="24" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={prev}
          aria-label="上一集"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-gray-800 shadow-md transition hover:bg-white"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="下一集"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-xl text-gray-800 shadow-md transition hover:bg-white"
        >
          ›
        </button>
      </div>

      <div className="mt-4 flex gap-2 overflow-x-auto sm:gap-3" style={{ scrollSnapType: 'x mandatory' }}>
        {episodes.map((ep, i) => (
          <button
            key={ep.youtubeId}
            type="button"
            onClick={() => setIdx(i)}
            aria-label={`前往第 ${i + 1} 集`}
            className="relative block aspect-video shrink-0 overflow-hidden rounded-md"
            style={{
              width: 'calc((100% - 4 * 0.75rem) / 5)',
              scrollSnapAlign: 'start',
              outline: i === idx ? '3px solid #049089' : 'none',
              outlineOffset: 2,
              opacity: i === idx ? 1 : 0.6,
            }}
          >
            <img
              src={ep.img}
              alt="戀愛會社節目"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute -top-10 right-0 text-2xl font-bold text-white"
              aria-label="關閉"
            >
              ×
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${active.youtubeId}?autoplay=1&rel=0`}
                title="戀愛會社節目"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
