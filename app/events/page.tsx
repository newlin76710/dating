import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { EventsGrid } from '@/components/events-grid';
import { events } from '@/lib/events';

export const metadata: Metadata = {
  title: '聯誼花絮',
  description: '戀愛小秘書娜米聯誼活動花絮照片與回顧，精彩記錄每場單身聯誼活動的美好時刻。',
  openGraph: {
    title: '聯誼花絮 — 戀愛小秘書娜米',
    description: '精彩活動回顧 × 美好相遇時刻，手作烘焙、調酒派對、電玩聯誼等多元主題活動記錄。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';

export default function EventsPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero Banner */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/5', minHeight: '200px' }}>
          <img
            src="/images/banners/banner-02.jpg"
            alt="聯誼花絮"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ background: 'rgba(4,144,137,0.58)' }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
              聯誼花絮
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">
              精彩活動回顧 × 美好相遇時刻
            </p>
            <a
              href={LINE_URL}
              className="mt-6 inline-block rounded-full px-8 py-3 text-sm font-bold text-white shadow-md hover:opacity-90 transition"
              style={{ background: '#FF93A6' }}
            >
              立刻諮詢報名
            </a>
          </div>
        </div>

        {/* Breadcrumb */}
        <div style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-3 text-xs text-gray-500 flex items-center gap-1.5">
            <a href="/" className="hover:underline" style={{ color: '#049089' }}>首頁</a>
            <span>›</span>
            <span className="text-gray-700 font-medium">聯誼花絮</span>
          </div>
        </div>

        {/* Grid with filter */}
        <EventsGrid events={events} />

        {/* CTA */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-sm font-semibold tracking-widest" style={{ color: '#D2E0DE' }}>
              精彩活動等你加入！
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              每月舉辦多場不同主題的單身聯誼
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
              加LINE了解詳情，一起找到心動的對象！
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={LINE_URL}
                className="inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
                style={{ color: '#049089' }}
              >
                加LINE了解活動
              </a>
              <a
                href="/party"
                className="inline-flex rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                查看所有聯誼活動
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
