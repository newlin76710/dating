'use client';

import { useState } from 'react';

const LINE_URL = 'https://lin.ee/iweaTucb';

export interface Member {
  name: string;
  gender: 'F' | 'M';
  img: string;
  meta: string;
  desc: string;
}

export function MemberGrid({ members }: { members: Member[] }) {
  const [tab, setTab] = useState<'all' | 'F' | 'M'>('all');

  const filtered = tab === 'all' ? members : members.filter((m) => m.gender === tab);

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10">
        {(['all', 'F', 'M'] as const).map((t) => {
          const label = t === 'all' ? '全部會員' : t === 'F' ? '女生' : '男生';
          const active = tab === t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="rounded-full px-7 py-2.5 text-sm font-semibold transition"
              style={{
                background: active ? '#049089' : '#fff',
                color: active ? '#fff' : '#049089',
                border: `2px solid #049089`,
              }}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((member, i) => (
          <div
            key={i}
            className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition hover:shadow-lg"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h2 className="text-base font-bold" style={{ color: '#049089' }}>{member.name}</h2>
              <p className="mt-1 text-xs text-gray-500">{member.meta}</p>
              <p className="mt-2 text-xs text-gray-600 leading-5 line-clamp-3">{member.desc}</p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block rounded-full px-5 py-1.5 text-xs font-semibold text-white transition hover:opacity-90"
                style={{ background: '#049089' }}
              >
                了解更多
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
