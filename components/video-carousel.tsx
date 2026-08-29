'use client';

import { useState } from 'react';

export interface VideoSlide {
  img: string;
  youtubeId: string;
}

export function VideoCarousel({ slides }: { slides: VideoSlide[] }) {
  const [start, setStart] = useState(0);
  const [active, setActive] = useState<string | null>(null);
  const visible = 3;

  const next = () => setStart((s) => (s + 1) % slides.length);
  const prev = () => setStart((s) => (s - 1 + slides.length) % slides.length);

  const shown = Array.from({ length: Math.min(visible, slides.length) }, (_, i) => slides[(start + i) % slides.length]);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {shown.map((s, i) => (
          <button
            key={s.youtubeId + i}
            onClick={() => setActive(s.youtubeId)}
            className="group relative block aspect-video overflow-hidden rounded-sm bg-gray-200"
          >
            <img
              src={s.img}
              alt="娜米 單身聯誼活動介紹影片"
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition group-hover:bg-black/25">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/90">
                <svg viewBox="0 0 24 24" fill="white" width="20" height="20" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={prev}
        aria-label="上一部影片"
        className="absolute -left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-gray-700 shadow-md transition hover:bg-gray-100 sm:-left-5"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="下一部影片"
        className="absolute -right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-lg text-gray-700 shadow-md transition hover:bg-gray-100 sm:-right-5"
      >
        ›
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            aria-label={`前往第 ${i + 1} 部影片`}
            className="h-2 w-2 rounded-full p-0"
            style={{ backgroundColor: i === start ? '#049089' : 'rgba(4,144,137,0.3)' }}
          />
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setActive(null)}
        >
          <div className="relative w-full max-w-3xl" style={{ aspectRatio: '16/9' }} onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${active}?autoplay=1&rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full rounded"
            />
            <button
              onClick={() => setActive(null)}
              aria-label="關閉影片"
              className="absolute -top-10 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xl text-white hover:bg-white/30"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
