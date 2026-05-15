'use client';

import { useEffect, useState } from 'react';

const LINE_URL = 'https://lin.ee/iweaTucb';

const slides = [
  { src: '/images/banners/banner-01.jpg', alt: '單身聯誼活動', href: '/party' },
  { src: '/images/banners/banner-02.jpg', alt: '找對象配對', href: '/match' },
  { src: '/images/banners/banner-03.jpg', alt: '戀愛數字密碼諮詢', href: LINE_URL },
  { src: '/images/banners/banner-04.jpg', alt: '戀愛會社節目', href: '/podcast' },
  { src: '/images/banners/banner-05.jpg', alt: '加LINE免費諮詢', href: LINE_URL },
];

export function BannerSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full overflow-hidden aspect-[16/6]" role="region" aria-roledescription="輪播" aria-label="首頁橫幅輪播">
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        第 {current + 1} 張，共 {slides.length} 張：{slides[current].alt}
      </div>
      {slides.map((slide, i) => (
        <a
          key={slide.src}
          href={slide.href}
          aria-hidden={i !== current}
          tabIndex={i === current ? 0 : -1}
          className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </a>
      ))}

      <button onClick={prev} aria-label="上一張" className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow transition hover:bg-white">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12 15l-5-5 5-5" stroke="#049089" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button onClick={next} aria-label="下一張" className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow transition hover:bg-white">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="#049089" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} aria-label={`第 ${i + 1} 張`} className={`h-2 rounded-full transition-all ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/50'}`} />
        ))}
      </div>
    </div>
  );
}
