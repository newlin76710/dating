import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { events, getEvent } from '@/lib/events';

export async function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) return {};
  return {
    title: event.title,
    description: event.excerpt,
    openGraph: {
      title: event.title + ' — 戀愛小秘書娜米',
      description: event.excerpt,
      images: [{ url: event.img, alt: event.title }],
    },
  };
}

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

const LINE_URL = 'https://lin.ee/iweaTucb';
const LINE_ID = '@datenami';

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = getEvent(slug);
  if (!event) notFound();

  const catColor = CAT_COLOR[event.cat] ?? '#049089';
  const [year, month] = event.date.split('/');

  const related = events.filter((e) => e.slug !== slug && e.cat === event.cat).slice(0, 3);
  const fill = events.filter((e) => e.slug !== slug && !related.includes(e)).slice(0, 3 - related.length);
  const relatedItems = [...related, ...fill];

  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <div className="relative w-full overflow-hidden" style={{ maxHeight: 480 }}>
          <img
            src={event.img}
            alt={event.title}
            className="w-full object-cover"
            style={{ maxHeight: 480 }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.60) 100%)' }}
          />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 sm:px-10 lg:px-16">
            <span
              className="inline-block rounded-full px-4 py-1 text-xs font-semibold text-white mb-3"
              style={{ backgroundColor: catColor }}
            >
              {event.cat}
            </span>
            <h1
              className="text-white font-bold leading-tight"
              style={{ fontSize: 'clamp(22px, 4vw, 38px)', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
            >
              {event.title}
            </h1>
            <p className="mt-2 text-white/75 text-sm">
              {year}年{month}月
            </p>
          </div>
        </div>

        {/* Breadcrumb */}
        <div style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-3 text-xs text-gray-500 flex items-center gap-1.5">
            <a href="/" className="hover:underline" style={{ color: '#049089' }}>首頁</a>
            <span>›</span>
            <a href="/events" className="hover:underline" style={{ color: '#049089' }}>聯誼花絮</a>
            <span>›</span>
            <span className="text-gray-700 font-medium line-clamp-1">{event.title}</span>
          </div>
        </div>

        {/* Content */}
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
              ❤ 加入戀愛小秘書娜米LINE：{LINE_ID} 免費諮詢 ❤
            </a>
          </div>

          {/* Body */}
          <article className="prose prose-lg max-w-none">
            <p className="text-xl font-semibold leading-relaxed" style={{ color: '#049089' }}>
              {event.hook}
            </p>
            <p className="mt-4 leading-8 text-gray-800">{event.intro}</p>
            {event.body.map((para, i) => (
              <p key={i} className="mt-4 leading-8 text-gray-800">{para}</p>
            ))}
          </article>

          {/* Highlights */}
          <div className="mt-10 rounded-2xl p-6 sm:p-8" style={{ backgroundColor: '#D2E0DE' }}>
            <h2 className="mb-5 text-lg font-bold" style={{ color: '#049089' }}>
              活動亮點
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {event.highlights.map((h) => (
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

          {/* Event Info */}
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="px-6 py-4 text-white text-base font-semibold" style={{ backgroundColor: '#049089' }}>
              活動詳情
            </div>
            <div className="divide-y divide-gray-100 bg-white">
              {[
                { label: '⏰ 時間', value: '洽戀愛小秘書 LINE ID：' + LINE_ID },
                { label: '📍 地點', value: '洽戀愛小秘書 LINE ID：' + LINE_ID },
                { label: '💳 費用', value: '實體VIP會員，詳洽戀愛小秘書' },
                { label: '🎯 邀請對象', value: event.audience },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 px-6 py-4">
                  <span className="w-32 shrink-0 text-sm font-semibold text-gray-500">{label}</span>
                  <span className="text-sm text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* LINE CTA bottom */}
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

          {/* CTA block */}
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

        {/* Related */}
        {relatedItems.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
              <h2 className="mb-8 text-2xl font-bold" style={{ color: '#049089' }}>
                更多花絮
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedItems.map((rel) => (
                  <a
                    key={rel.slug}
                    href={`/events/${rel.slug}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={rel.img}
                        alt={rel.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span
                        className="absolute top-3 left-3 rounded-full px-3 py-0.5 text-xs font-semibold text-white"
                        style={{ backgroundColor: CAT_COLOR[rel.cat] ?? '#049089' }}
                      >
                        {rel.cat}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold leading-6 text-gray-900 line-clamp-2">
                        {rel.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500 line-clamp-2">{rel.excerpt}</p>
                      <p className="mt-2 text-xs font-semibold text-right" style={{ color: '#FF93A6' }}>
                        閱讀花絮 »
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
