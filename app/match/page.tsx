import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { MemberGrid } from '@/components/member-grid';
import { members } from '@/lib/match-members';
import { successStories } from '@/lib/match-success';
import { HeroSlides } from '@/components/hero-slides';

export const metadata: Metadata = {
  title: '找對象',
  description: '戀愛小秘書娜米提供真實會員配對，以數據驅動的智慧配對系統，協助未婚男女找到理想對象。',
  openGraph: {
    title: '找對象 — 戀愛小秘書娜米',
    description: '真實會員配對，數據驅動智慧配對系統，讓你快速找到理想對象。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const features = [
  { icon: '🔒', title: '實名認證保護', desc: '所有會員均通過身份驗證，確保配對品質與安全性。' },
  { icon: '📊', title: '數據驅動配對', desc: '透過個人資料分析與配對數據，精準推薦最適合的對象。' },
  { icon: '💬', title: '專業顧問陪伴', desc: '戀愛小秘書全程陪伴，從認識到交往，給你最專業的感情建議。' },
];

const stats = [
  { num: '4,000+', label: '成功配對人數' },
  { num: '92%', label: '會員滿意度' },
  { num: '8年', label: '服務經驗' },
  { num: '500+', label: '幸福見證' },
];

export default function MatchPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero Banner */}
        <HeroSlides
          slides={[
            { img: BASE + '2023/12/找對象－女生會員徵婚02.png', href: LINE_URL },
            { img: BASE + '2023/08/0809a.jpg', href: LINE_URL, buttonLabel: '給他一個交友機會' },
            { img: BASE + '2023/08/0809c.jpg', href: LINE_URL, buttonLabel: '交友成功' },
            { img: BASE + '2023/12/輪播封面版二01.png', href: LINE_URL },
          ]}
        />

        {/* Breadcrumb */}
        <div style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-3 text-xs text-gray-500 flex items-center gap-1.5">
            <a href="/" className="hover:underline" style={{ color: '#049089' }}>首頁</a>
            <span>›</span>
            <span className="text-gray-700 font-medium">找對象</span>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ background: '#049089' }} className="py-6">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{s.num}</p>
                  <p className="mt-1 text-xs text-white/75">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold" style={{ color: '#049089' }}>精選優質會員</h2>
              <p className="mt-2 text-sm text-gray-500">全部通過實名認證，保障你的配對安全</p>
            </div>
            <MemberGrid members={members} />
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#049089' }}>
              如何找到你的理想對象？
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-6 flex flex-col items-center text-center"
                >
                  <span className="text-4xl">{feature.icon}</span>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-6">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Success Cases ── */}
        <section className="py-14 lg:py-20" style={{ background: '#D2E0DE' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#049089' }}>
                Success Stories
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold" style={{ color: '#049089' }}>
                幸福見證 ❤️ 交友聯誼成功
              </h2>
              <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
                真實會員的交友故事分享，點進去看看他們如何找到屬於自己的幸福
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {successStories.map((s) => (
                <a
                  key={s.slug}
                  href={s.externalHref ?? `/match/success/${s.slug}`}
                  className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] transition hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-sm font-bold leading-6" style={{ color: '#049089' }}>{s.title}</h3>
                    <p className="mt-2 text-xs text-gray-500 leading-5 line-clamp-3">{s.excerpt}</p>
                    <p className="mt-3 text-xs font-semibold" style={{ color: '#FF93A6' }}>成功交友 »</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA under cases */}
            <div className="mt-12 text-center">
              <p className="text-base font-semibold text-gray-700 mb-4">你也可以成為下一個成功案例</p>
              <a
                href={LINE_URL}
                className="inline-flex rounded-full px-10 py-4 text-sm font-bold text-white shadow-md hover:opacity-90 transition"
                style={{ background: '#049089' }}
              >
                加LINE免費諮詢配對
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-sm font-semibold tracking-widest" style={{ color: '#D2E0DE' }}>
              幸福就在這裡等你
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              準備好開始找對象了嗎？
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-white/80">
              加入官方LINE，開始你的配對流程，讓娜米為你安排最合適的對象！
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={LINE_URL}
                className="inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
                style={{ color: '#049089' }}
              >
                加LINE開始配對
              </a>
              <a
                href="/party"
                className="inline-flex rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                參加單身聯誼活動
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
