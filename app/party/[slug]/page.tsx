import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { articles, getArticle, getRelatedArticles } from '@/lib/articles';

const LINE_URL = 'https://lin.ee/iweaTucb';
const LINE_ID = '@datenami';

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title + ' — 戀愛小秘書娜米',
      description: article.excerpt,
      images: [{ url: article.img, alt: article.title }],
    },
  };
}

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

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(slug, 6);
  const catColor = CAT_COLOR[article.cat] ?? '#049089';
  const [year, month] = article.date.split('/');

  return (
    <SiteShell>
      <main>
        {/* ── Hero image ── */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: 520 }}>
          <img
            src={article.img}
            alt={article.title}
            className="w-full object-cover"
            style={{ maxHeight: 520 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 sm:px-10 lg:px-16">
            <span
              className="inline-block rounded-full px-4 py-1 text-xs font-semibold text-white mb-3"
              style={{ backgroundColor: catColor }}
            >
              {article.cat}
            </span>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontSize: 'clamp(22px, 4vw, 38px)', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              {article.title}
            </h1>
            <p className="mt-2 text-white/75 text-sm">
              {year}年{month}月
            </p>
          </div>
        </div>

        {/* ── Content wrapper ── */}
        <div className="mx-auto max-w-[900px] px-6 py-10 sm:px-8 lg:px-10">

          {/* LINE CTA top */}
          <div className="mb-8 flex justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: '#2DC861' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" aria-hidden="true">
                <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              ❤ 加入戀愛小秘書娜米LINE：{LINE_ID} 免費戀愛諮詢 ❤
            </a>
          </div>

          {/* ── Body ── */}
          <article className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
            <p className="text-xl font-semibold leading-relaxed" style={{ color: '#049089' }}>
              {article.hook}
            </p>
            <p className="mt-4 leading-8 text-gray-800">{article.intro}</p>
            {article.body.map((para, i) => (
              <p key={i} className="mt-4 leading-8 text-gray-800">{para}</p>
            ))}
          </article>

          {/* ── Highlights ── */}
          <div className="mt-10 rounded-2xl p-6 sm:p-8" style={{ backgroundColor: '#D2E0DE' }}>
            <h2
              className="mb-5 text-lg font-bold"
              style={{ color: '#049089', fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              活動亮點
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {article.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white text-xs font-bold"
                    style={{ backgroundColor: '#07C3BA' }}
                  >
                    ✓
                  </span>
                  <span className="text-gray-800 text-sm leading-6">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── 活動詳情 ── */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="px-6 py-4 text-white text-base font-semibold" style={{ backgroundColor: '#049089' }}>
              活動詳情
            </div>
            <div className="divide-y divide-gray-100 bg-white">
              {[
                { label: '⏰ 時間', value: '洽戀愛小秘書 LINE ID：' + LINE_ID },
                { label: '📍 地點', value: '洽戀愛小秘書 LINE ID：' + LINE_ID },
                { label: '💳 費用', value: '實體VIP會員，詳洽戀愛小秘書' },
                { label: '🎯 邀請對象', value: article.audience },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 px-6 py-4">
                  <span className="w-32 shrink-0 text-sm font-semibold text-gray-500">{label}</span>
                  <span className="text-sm text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── LINE CTA middle ── */}
          <div className="mt-10 flex justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: '#FF93A6' }}
            >
              立刻報名參加 → 加 LINE 諮詢
            </a>
          </div>

          {/* ── Brand trust ── */}
          <div className="mt-14 space-y-8">
            {[
              {
                title: '配對成功的關鍵：參加實體交友活動',
                body: '在虛擬世界找對象已成過去式，真正有效的配對需要面對面的真實互動。戀愛小秘書設計的每場活動，都讓你在自然、輕鬆的環境中展現真實的自己，讓對的人一眼就能看見你的好。',
              },
              {
                title: '結合大數據用心篩選 × 客製化條件配對',
                body: '協助超過 4,000 位未婚男女配對成功！戀愛小秘書透過科學化的數據分析和人工篩選，確保每一場活動的參與者都是經過嚴格審核的優質單身男女，大幅提升你找到真愛的機率。',
              },
              {
                title: '實名認證防造假！隱私保護最安心！',
                body: '所有參與者皆須通過實名認證與背景審核，讓你在安全可靠的環境中認識對象。戀愛小秘書嚴格保護每位會員的個人隱私，讓你放心地踏出尋覓真愛的第一步。',
              },
            ].map((block) => (
              <div key={block.title}>
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: '#049089', fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {block.title}
                </h3>
                <p className="text-gray-700 leading-8 text-sm">{block.body}</p>
              </div>
            ))}
          </div>

          {/* ── LINE CTA bottom ── */}
          <div className="mt-12 rounded-2xl p-8 text-center" style={{ backgroundColor: '#D2E0DE' }}>
            <p className="text-lg font-bold mb-1" style={{ color: '#049089' }}>
              別再等了，現在就踏出第一步！
            </p>
            <p className="text-sm text-gray-600 mb-5">加入LINE，免費獲得專業配對諮詢</p>
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: '#2DC861' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20" aria-hidden="true">
                <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              加LINE免費諮詢 LINE ID：{LINE_ID}
            </a>
          </div>
        </div>

        {/* ── Related articles ── */}
        <section className="py-12" style={{ backgroundColor: '#f8fafа' }}>
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2
              className="mb-8 text-2xl font-bold"
              style={{ color: '#049089', fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              延伸閱讀
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/party/${rel.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={rel.img}
                      alt={rel.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span
                      className="inline-block rounded-full px-3 py-0.5 text-xs font-semibold text-white mb-2"
                      style={{ backgroundColor: CAT_COLOR[rel.cat] ?? '#049089' }}
                    >
                      {rel.cat}
                    </span>
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 line-clamp-2">
                      {rel.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">{rel.excerpt}</p>
                    <p className="mt-2 text-xs font-semibold text-right" style={{ color: '#FF93A6' }}>
                      參加單身聯誼 »
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
