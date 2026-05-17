'use client';

import { useState } from 'react';
import type { Article } from '@/lib/articles';

const CAT_COLOR: Record<string, string> = {
  室內活動: '#07C3BA',
  藝術創作: '#FF93A6',
  娛樂遊戲: '#049089',
  手作體驗: '#FF93A6',
  微醺派對: '#7B68EE',
  舞蹈音樂: '#049089',
  戶外郊遊: '#2DC861',
  美食廚藝: '#F4A020',
  文化體驗: '#049089',
  運動健身: '#2DC861',
};

const CATS = ['全部', '室內活動', '戶外郊遊', '藝術創作', '手作體驗', '美食廚藝', '娛樂遊戲', '微醺派對', '舞蹈音樂', '運動健身', '文化體驗'];

export function PartyGrid({ articles }: { articles: Article[] }) {
  const [active, setActive] = useState('全部');

  const filtered = active === '全部' ? articles : articles.filter((a) => a.cat === active);

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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <a
              key={article.slug}
              href={`/party/${article.slug}`}
              className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] transition hover:shadow-xl hover:-translate-y-0.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.img}
                  alt={article.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className="absolute top-3 left-3 rounded-full px-3 py-0.5 text-xs font-semibold text-white shadow"
                  style={{ background: CAT_COLOR[article.cat] ?? '#07C3BA' }}
                >
                  {article.cat}
                </span>
              </div>
              <div className="p-5">
                <h2 className="text-sm font-semibold leading-6 text-gray-900 line-clamp-2">
                  {article.title}
                </h2>
                <p className="mt-1.5 text-xs leading-5 text-gray-500 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{article.date.slice(0, 7)}</span>
                  <span className="text-xs font-semibold" style={{ color: '#FF93A6' }}>
                    閱讀更多 »
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-16">該分類暫無活動，請選擇其他類別</p>
        )}
      </div>
    </section>
  );
}
