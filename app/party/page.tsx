import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { EventsGrid } from '@/components/events-grid';
import { events } from '@/lib/events';

export const metadata: Metadata = {
  title: '單身聯誼 — 戀愛小秘書推薦的聯誼活動 台北聯誼 高雄聯誼',
  description: '戀愛小秘書娜米提供台北、新竹、台中、台南、高雄各地單身聯誼活動，多元主題讓單身男女自然互動，輕鬆脫單！',
  openGraph: {
    title: '單身聯誼 — 戀愛小秘書娜米',
    description: '多元有趣的單身聯誼活動，涵蓋手作體驗、美食廚藝、戶外郊遊等主題，讓單身男女在輕鬆氛圍中相識。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';

export default function PartyPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero Banner */}
        <div className="relative w-full overflow-hidden" style={{ aspectRatio: '16/5', minHeight: '200px' }}>
          <img
            src="/images/banners/banner-01.jpg"
            alt="單身聯誼"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ background: 'rgba(4,144,137,0.58)' }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
              單身聯誼
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">
              多元有趣的單身聯誼活動，讓你輕鬆自然認識異性
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
            <span className="text-gray-700 font-medium">單身聯誼</span>
          </div>
        </div>

        {/* Grid with filter — same 20 activities as 聯誼花絮 */}
        <EventsGrid events={events} />

        {/* 3-STEP PROCESS */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base font-bold text-gray-800">只要 3 步驟</p>
            <h2 className="mt-1 text-xl font-bold text-gray-800 sm:text-2xl">輕鬆認識異性</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {[
                {
                  num: '1',
                  title: '加入官方LINE',
                  desc: '加入 LINE ID：@datenami 或掃 QR Code，即可免費諮詢',
                },
                {
                  num: '2',
                  title: '填寫個人資料',
                  desc: '完成實名認證、填寫詳細個人資料及配對條件，大數據分析最適合你的對象',
                },
                {
                  num: '3',
                  title: '參加單身聯誼活動',
                  desc: '依照你的喜好與時間，戀愛小秘書為你安排最合適的聯誼活動',
                },
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white"
                    style={{ background: '#049089' }}
                  >
                    {s.num}
                  </div>
                  <h3 className="mt-4 font-bold text-gray-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-sm font-semibold tracking-widest" style={{ color: '#D2E0DE' }}>
              別再為繼續單身找藉口！
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              戀愛小秘書推薦的單身聯誼，讓你佛系交友也脫單
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
                href="/events"
                className="inline-flex rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                查看聯誼花絮
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
