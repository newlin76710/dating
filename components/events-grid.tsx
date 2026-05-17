'use client';

import { useState } from 'react';
import type { EventArticle } from '@/lib/events';

const CAT_COLOR: Record<string, string> = {
  活動花絮: '#07C3BA',
  手作體驗: '#FF93A6',
  藝術創作: '#FF93A6',
  娛樂遊戲: '#049089',
  舞蹈音樂: '#049089',
  微醺派對: '#7B68EE',
  戶外郊遊: '#2DC861',
  美食廚藝: '#F4A020',
  文化體驗: '#049089',
  運動健身: '#2DC861',
};

const CATS = ['全部', '活動花絮', '手作體驗', '藝術創作', '娛樂遊戲', '舞蹈音樂', '微醺派對', '戶外郊遊', '美食廚藝', '文化體驗', '運動健身'];

export function EventsGrid({ events }: { events: EventArticle[] }) {
  const [active, setActive] = useState('全部');

  const filtered = active === '全部' ? events : events.filter((e) => e.cat === active);

  return (
    <section className="py-10 lg:py-14 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="rounded-full px-4 py-1.5 text-sm font-semibold transition-all"
              style={
                active === cat
                  ? { background: CAT_COLOR[cat] ?? '#049089', color: '#fff' }
                  : { background: '#fff', color: '#555', border: '1px solid #ddd' }
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-xs text-gray-400 mb-6">共 {filtered.length} 篇花絮</p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event) => (
            <a
              key={event.slug}
              href={`/events/${event.slug}`}
              className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={event.img}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-0.5 text-xs font-semibold text-white shadow"
                  style={{ background: CAT_COLOR[event.cat] ?? '#07C3BA' }}
                >
                  {event.cat}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-sm font-semibold leading-6 text-gray-900 line-clamp-2">
                  {event.title}
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-gray-500 line-clamp-2">
                  {event.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{event.date}</span>
                  <span className="text-xs font-semibold" style={{ color: '#FF93A6' }}>
                    閱讀花絮 »
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16">該分類暫無花絮，請選擇其他類別</p>
        )}
      </div>
    </section>
  );
}
