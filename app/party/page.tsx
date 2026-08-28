import type { Metadata } from 'next';
import type { Article } from '@/lib/articles';
import { SiteShell } from '@/components/site-shell';
import { articles } from '@/lib/articles';

export const metadata: Metadata = {
  title: '單身聯誼 — 戀愛小秘書推薦的聯誼活動 台北聯誼 高雄聯誼',
  description: '戀愛小秘書娜米提供台北、新竹、台中、台南、高雄各地單身聯誼活動，多元主題讓單身男女自然互動，輕鬆脫單！',
  openGraph: {
    title: '單身聯誼 — 戀愛小秘書娜米',
    description: '多元有趣的單身聯誼活動，涵蓋手作體驗、美食廚藝、戶外郊遊等主題，讓單身男女在輕鬆氛圍中相識。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

function Card({ article }: { article: Article }) {
  return (
    <a href={`/party/${article.slug}`} className="block group">
      <div className="overflow-hidden rounded">
        <img
          src={article.img}
          alt={article.title}
          className="w-full aspect-video object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 text-[13px] font-medium leading-5 text-gray-800 line-clamp-2 group-hover:text-[#049089] transition-colors">
        {article.title}
      </h3>
      <p className="mt-1 text-xs font-medium" style={{ color: '#FF93A6' }}>
        參加單身聯誼 »
      </p>
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800">{children}</h2>
      <div className="mt-1.5 h-0.5 w-14 rounded" style={{ background: '#049089' }} />
    </div>
  );
}

// Exact article selections matching ek21.com/dating/party structure
const INDOOR_SLUGS  = ['mystery-adventure', 'alcohol-ink-art', 'flash-grid-party', 'photography-dating', 'coffee-workshop', 'fragrant-candle'];
const OUTDOOR_SLUGS = ['stargazing-night', 'mountain-hiking', 'cycling-date'];
const CRAFT_SLUGS   = ['nurse-dating-apple-tart', 'macaron-painting', 'pottery-workshop', 'floating-flower', 'flower-arrangement', 'ikebana-workshop'];
const WSHOP_SLUGS   = ['tainan-culture-trip', 'matcha-ceremony', 'calligraphy-workshop'];
const REP4_SLUGS    = ['tango-party', 'cocktail-party', 'game-start-party', 'nurse-dating-apple-tart'];

const pick = (slugs: string[]) => slugs.map(s => articles.find(a => a.slug === s)!).filter(Boolean);

const indoor  = pick(INDOOR_SLUGS);
const outdoor = pick(OUTDOOR_SLUGS);
const craft   = pick(CRAFT_SLUGS);
const feat1   = articles.find(a => a.slug === 'cocktail-party')!;
const feat2   = articles.find(a => a.slug === 'french-cooking')!;
const feat3   = articles.find(a => a.slug === 'teppanyaki-dinner')!;
const wshop   = pick(WSHOP_SLUGS);
const rep4    = pick(REP4_SLUGS);
const repList = articles.filter(a => ['舞蹈音樂', '美食廚藝'].includes(a.cat));

const VIDEO_THUMBS = [
  { img: BASE + '2023/07/MTXX_MR20230715_180309740-300x200.jpg', label: '單身聯誼活動介紹' },
  { img: BASE + '2024/03/wine2_副本-300x300.jpg',               label: '微醺派對活動報導' },
  { img: BASE + '2024/07/桌遊-300x157.png',                     label: '娛樂遊戲聯誼花絮' },
  { img: BASE + '2023/07/BHWQOX46V746ZQS-300x200.png',          label: '戶外郊遊聯誼介紹' },
  { img: BASE + '2023/10/nami-consulting.jpg',                   label: '娜米顧問諮詢服務' },
  { img: BASE + '2025/02/劇本殺-300x169.jpg',                   label: '推理冒險聯誼花絮' },
];

export default function PartyPage() {
  return (
    <SiteShell>
      <main>

        {/* ── 1. TOP 3 FEATURED BANNER CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {([
            {
              href: '/party/tango-party',
              img:  BASE + '2023/07/MTXX_MR20230715_180309740-300x200.jpg',
              title: '【單身聯誼】一起搖擺吧',
              desc:  '探戈派對聯誼，浪漫共舞，在音樂節奏中找到心動的人！',
            },
            {
              href: '/party/mystery-adventure',
              img:  BASE + '2025/02/劇本殺-300x169.jpg',
              title: '【單身聯誼】Speed Dating',
              desc:  '一對一精緻速配，深度認識最合拍的靈魂伴侶！',
            },
            {
              href: '/party/cycling-date',
              img:  BASE + '2023/07/BHWQOX46V746ZQS-300x200.png',
              title: '【單身聯誼】共享自然風光的輕鬆時光',
              desc:  '河岸單車並肩前行，感受最輕鬆浪漫的單身聯誼！',
            },
          ] as const).map((item) => (
            <a key={item.href} href={item.href} className="relative block overflow-hidden group" style={{ aspectRatio: '4/3' }}>
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center" style={{ background: 'rgba(0,0,0,0.42)' }}>
                <h2 className="text-sm font-bold text-white drop-shadow sm:text-base">{item.title}</h2>
                <p className="text-xs text-white/80 leading-5">{item.desc}</p>
                <span
                  className="mt-1 rounded px-4 py-1.5 text-xs font-semibold text-white"
                  style={{ background: '#2DC861' }}
                >
                  加LINE參加活動
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ── 2. HERO HEADING ── */}
        <div className="bg-white py-10 text-center">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl">
            多元有趣的單身聯誼活動 豐富您的社交生活
          </h1>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-sm leading-6 text-gray-500">
            戀愛小秘書推薦單身聯誼活動，涵蓋室內、戶外、手作、美食、舞蹈等多元主題，讓單身男女在輕鬆有趣的氛圍中自然相識，輕鬆脫單！
          </p>
        </div>

        {/* ── 3. 室內聯誼活動 ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】室內聯誼活動</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {indoor.map(a => <Card key={a.slug} article={a} />)}
            </div>
          </div>
        </section>

        {/* ── 4. 戶外聯誼活動 ── */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】戶外聯誼活動</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {outdoor.map(a => <Card key={a.slug} article={a} />)}
            </div>
          </div>
        </section>

        {/* ── 5. 手作體驗活動 ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】手作體驗活動</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {craft.map(a => <Card key={a.slug} article={a} />)}
            </div>
          </div>
        </section>

        {/* ── 6. THREE FEATURED SINGLE-CARD SECTIONS ── */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {[feat1, feat2, feat3].map(a => (
                <div key={a.slug}>
                  <SectionHeading>【單身聯誼】{a.cat === '微醺派對' ? '新竹聯誼活動' : a.cat === '美食廚藝' ? '台南聯誼' : '台中聯誼活動'}</SectionHeading>
                  <Card article={a} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. 聯誼活動列表 (ALL 50) ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】聯誼活動列表</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {articles.map(a => <Card key={a.slug} article={a} />)}
            </div>
          </div>
        </section>

        {/* ── 8. 工作坊 ── */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼工作坊】形象改造、時尚顧問</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {wshop.map(a => <Card key={a.slug} article={a} />)}
            </div>
          </div>
        </section>

        {/* ── 9. 聯誼活動報導 ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼推薦】聯誼活動報導</SectionHeading>
            <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
              {rep4.map(a => <Card key={a.slug} article={a} />)}
            </div>
            <div className="divide-y divide-gray-200">
              {repList.map(a => (
                <a
                  key={a.slug}
                  href={`/party/${a.slug}`}
                  className="flex items-center gap-2 py-2.5 text-sm text-gray-700 transition-colors hover:text-[#049089]"
                >
                  <span className="text-gray-400">›</span>
                  {a.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. 3-STEP PROCESS ── */}
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
              ].map(s => (
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

        {/* ── 11. VIDEO SECTION ── */}
        <section className="bg-gray-50 py-10">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-bold text-gray-800">娜米 X 單身聯誼活動介紹</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
              {VIDEO_THUMBS.map((v, i) => (
                <a
                  key={i}
                  href={LINE_URL}
                  className="relative block overflow-hidden rounded-sm aspect-video bg-gray-200 group"
                >
                  <img
                    src={v.img}
                    alt={v.label}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600/90">
                      <svg viewBox="0 0 24 24" fill="white" width="18" height="18" aria-hidden="true">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 px-2 py-1">
                    <p className="truncate text-xs text-white">{v.label}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. TRUST & CREDENTIALS ── */}
        <section className="bg-white py-12">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold" style={{ color: '#049089' }}>值得信任，讓你放心</p>
                <h2 className="mt-2 text-xl font-bold text-gray-800 sm:text-2xl">
                  戀愛小秘書的專業團隊<br />嚴選單身聯誼活動
                </h2>
                <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600">
                  {[
                    '累積超過 10 萬名會員，持續成長中',
                    '所有會員皆經過實名認證，安全可靠',
                    '大數據智能配對系統，精準找到你的另一半',
                    '一對一專業諮詢，量身打造最適合的配對方案',
                    '豐富媒合經驗，成功案例不斷',
                    '多元活動主題，每月持續更新',
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 shrink-0 text-base" style={{ color: '#049089' }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={LINE_URL}
                  className="mt-6 inline-block rounded-full px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: '#2DC861' }}
                >
                  加LINE免費諮詢
                </a>
              </div>
              <div>
                <img
                  src={BASE + '2023/10/nami-consulting.jpg'}
                  alt="戀愛小秘書娜米"
                  className="w-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. CTA BANNER ── */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm font-semibold tracking-widest" style={{ color: '#D2E0DE' }}>
              別再為繼續單身找藉口！
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              戀愛小秘書推薦的 🌹【單身聯誼】🌹<br />讓你佛系交友也脫單
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
              加入官方LINE，了解最新活動資訊，戀愛小秘書為你安排最適合的聯誼活動！
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={LINE_URL}
                className="inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
                style={{ color: '#049089' }}
              >
                <svg viewBox="0 0 24 24" fill="#2DC861" width="16" height="16" aria-hidden="true">
                  <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
                加LINE洽詢單身聯誼活動
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
