import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '找對象',
  description: '戀愛小秘書娜米提供真實會員配對，以數據驅動的智慧配對系統，協助未婚男女找到理想對象。',
  openGraph: {
    title: '找對象 — 戀愛小秘書娜米',
    description: '真實會員徵婚，找女友找男友找對象，優質男女配對交友。超過100,000名驗證會員資料庫。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const features = [
  {
    icon: '🔒',
    title: '實名認證保護',
    desc: '所有會員均通過身份驗證，確保配對品質與安全性，讓你放心認識真實的對象。',
  },
  {
    icon: '📊',
    title: '數據驅動配對',
    desc: '透過個人資料分析與配對數據，精準推薦最適合的對象，提高成功率。',
  },
  {
    icon: '💬',
    title: '專業顧問陪伴',
    desc: '戀愛小秘書娜米全程陪伴，從認識到交往，給你最專業的感情建議。',
  },
  {
    icon: '🎯',
    title: '客製化配對服務',
    desc: '根據你的條件、個性與喜好，量身打造專屬配對方案，找到真正合適的另一半。',
  },
];

const memberTypes = [
  { type: '男性會員', desc: '25-45歲，工作穩定，認真交往', count: '50,000+' },
  { type: '女性會員', desc: '22-40歲，各行各業，個性獨特', count: '50,000+' },
];

export default function MatchPage() {
  return (
    <SiteShell>
      <main>
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h1 className="text-4xl font-bold text-white">找對象</h1>
            <p className="mt-4 text-lg text-white/80">真實會員 × 數據配對 × 專業陪伴</p>
            <p className="mt-2 text-white/60">超過 100,000 名驗證會員 × 4,000+ 成功配對</p>
            <a
              href={LINE_URL}
              className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
            >
              立刻加LINE諮詢
            </a>
          </div>
        </section>

        {/* 配對特色 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">為什麼選擇娜米幫你找對象？</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <article key={f.title} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft">
                <span className="text-4xl">{f.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-plum">{f.title}</h3>
                <p className="mt-3 text-sm leading-6 text-plum/70">{f.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* 無法找到心儀對象？ */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-plum md:text-4xl">無法找到心儀的那個她/他？</h2>
                <p className="mt-4 text-lg text-plum/70">娜米會根據您的喜好和理想條件，幫您安排一對一/聯誼/交友。</p>
                <ul className="mt-6 space-y-3 text-base text-plum/75">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-rose">✓</span>
                    <span>透過彩虹數字分析你的戀愛密碼與速配對象</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-rose">✓</span>
                    <span>根據個人特質與生活習慣精準配對</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-rose">✓</span>
                    <span>安排自然輕鬆的見面環境，降低相親壓力</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-rose">✓</span>
                    <span>提供戀愛顧問服務，陪伴你走過每個感情階段</span>
                  </li>
                </ul>
                <a href={LINE_URL} className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                  免費配對諮詢
                </a>
              </div>
              <div className="relative aspect-square max-w-md mx-auto overflow-hidden rounded-[2rem] shadow-soft">
                <img
                  src={BASE + '2023/10/nami-main.jpg'}
                  alt="戀愛小秘書娜米配對服務"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 會員規模 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">優質會員等你來認識</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {memberTypes.map((m) => (
              <article key={m.type} className="rounded-2xl bg-white p-8 text-center shadow-soft">
                <p className="text-5xl font-bold text-rose">{m.count}</p>
                <h3 className="mt-3 text-xl font-bold text-plum">{m.type}</h3>
                <p className="mt-2 text-sm text-plum/60">{m.desc}</p>
                <a href={LINE_URL} className="mt-6 inline-flex rounded-full border border-rose px-6 py-2.5 text-sm font-semibold text-rose transition hover:bg-rose hover:text-white">
                  加入認識
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h2 className="text-3xl font-bold text-white">準備好開始找對象了嗎？</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
              加入官方LINE，開始你的配對流程、查看活動，或直接預約戀愛諮詢。
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a href={LINE_URL} className="rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                加 LINE 開始配對
              </a>
              <a href="/party" className="rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10">
                參加聯誼活動
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
