'use client';

import { useState, useEffect, useCallback } from 'react';

interface Endorser {
  name: string;
  role: string;
  quote: string;
}

export function TestimonialCarousel({ items }: { items: Endorser[] }) {
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx(i => (i + 1) % items.length), [items.length]);
  const prev = useCallback(() => setIdx(i => (i - 1 + items.length) % items.length), [items.length]);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const item = items[idx];

  return (
    <div style={{ backgroundColor: '#D2E0DE', borderRadius: 10, padding: '28px 36px', position: 'relative', minHeight: 280 }}>
      <button
        onClick={prev}
        aria-label="上一個"
        style={{ position: 'absolute', left: 6, top: '45%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 32, color: '#049089', lineHeight: 1, padding: '0 4px' }}
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="下一個"
        style={{ position: 'absolute', right: 6, top: '45%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 32, color: '#049089', lineHeight: 1, padding: '0 4px' }}
      >
        ›
      </button>

      <p style={{ fontSize: 15, fontWeight: 300, color: '#000000', margin: '0 0 20px', lineHeight: '1.8', minHeight: 155 }}>
        {item.quote}
      </p>
      <p style={{ fontSize: 15, fontWeight: 400, fontStyle: 'italic', color: '#049089', margin: 0 }}>
        {item.name}
      </p>
      <p style={{ fontSize: 15, fontWeight: 400, fontStyle: 'italic', color: '#049089', margin: 0 }}>
        {item.role}
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 16 }}>
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`前往第 ${i + 1} 個推薦`}
            style={{
              width: 8, height: 8, borderRadius: '50%', border: 'none', cursor: 'pointer', padding: 0,
              backgroundColor: i === idx ? '#049089' : 'rgba(4,144,137,0.35)',
            }}
          />
        ))}
      </div>
    </div>
  );
}
