import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { PartyGrid } from '@/components/party-grid';
import { articles } from '@/lib/articles';

export const metadata: Metadata = {
  title: '單身聯誼',
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
            alt="單身聯誼活動"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
          />
          <div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            style={{ background: 'rgba(4,144,137,0.58)' }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white drop-shadow-md">
              單身聯誼活動
            </h1>
            <p className="mt-3 text-base sm:text-lg text-white/90">
              多元主題 × 精彩有趣 × 輕鬆脫單
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
            <span className="text-gray-700 font-medium">單身聯誼活動</span>
          </div>
        </div>

        {/* Article Grid with Category Filter */}
        <PartyGrid articles={articles} />

        {/* CTA Banner */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-sm font-semibold tracking-widest" style={{ color: '#D2E0DE' }}>
              別再為繼續單身找藉口！
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              想參加單身聯誼活動？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
              加入官方LINE，了解最新活動資訊，戀愛小秘書為你安排最適合的聯誼活動！
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={LINE_URL}
                className="inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
                style={{ color: '#049089' }}
              >
                加LINE諮詢活動
              </a>
              <a
                href="/match"
                className="inline-flex rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                了解找對象服務
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
