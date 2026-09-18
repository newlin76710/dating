'use client';

import { useState, useEffect, useCallback } from 'react';

interface Endorser {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCarousel({ items }: { items: Endorser[] }) {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIdx((i) => (i - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const item = items[idx];

  return (
    <div className="relative flex min-h-[240px] flex-col rounded-2xl bg-[#D2E0DE] p-7 sm:p-9">
      <button
        onClick={prev}
        aria-label="上一個"
        className="absolute left-1.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-2xl leading-none text-[#049089] transition hover:bg-white/40"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="下一個"
        className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-2xl leading-none text-[#049089] transition hover:bg-white/40"
      >
        ›
      </button>

      <p className="flex-1 px-4 text-sm font-light leading-8 text-gray-900 sm:text-[15px]">{item.quote}</p>

      <div className="mt-5 px-4">
        <p className="text-sm font-medium italic" style={{ color: '#049089' }}>{item.name}</p>
        <p className="text-sm font-medium italic" style={{ color: '#049089' }}>{item.role}</p>
      </div>

      <div className="mt-4 flex justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`前往第 ${i + 1} 個推薦`}
            className="h-2 w-2 rounded-full p-0 transition"
            style={{ backgroundColor: i === idx ? '#049089' : 'rgba(4,144,137,0.35)' }}
          />
        ))}
      </div>
    </div>
  );
}
