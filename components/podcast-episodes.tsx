'use client';

import { useState } from 'react';

export interface PodcastEpisode {
  img: string;
  youtubeId: string;
}

export function PodcastEpisodes({ episodes }: { episodes: PodcastEpisode[] }) {
  const [active, setActive] = useState<PodcastEpisode | null>(null);

  return (
    <>
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {episodes.map((ep) => (
          <button
            key={ep.youtubeId}
            type="button"
            onClick={() => setActive(ep)}
            className="group relative block overflow-hidden rounded-xl"
          >
            <img
              src={ep.img}
              alt="戀愛會社節目"
              className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                <svg viewBox="0 0 24 24" fill="#049089" width="20" height="20" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
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
