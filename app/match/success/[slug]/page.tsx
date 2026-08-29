import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { successStories, getSuccessStory } from '@/lib/match-success';

const LINE_URL = 'https://lin.ee/iweaTucb';
const LINE_ID = '@datenami';

export async function generateStaticParams() {
  return successStories.filter((s) => !s.externalHref).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getSuccessStory(slug);
  if (!story) return {};
  return {
    title: story.title,
    description: story.excerpt,
    openGraph: {
      title: story.title + ' — 戀愛小秘書娜米',
      description: story.excerpt,
      images: [{ url: story.img, alt: story.title }],
    },
  };
}

export default async function SuccessStoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getSuccessStory(slug);
  if (!story) notFound();
  if (story.externalHref) redirect(story.externalHref);

  const others = successStories.filter((s) => s.slug !== slug && !s.externalHref).slice(0, 3);

  return (
    <SiteShell>
      <main>
        {/* ── Hero image: contained, centered, never cropped ── */}
        <div className="mx-auto w-full max-w-[900px] px-6 pt-8 sm:px-8 lg:px-10">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={story.img}
              alt={story.title}
              className="block w-full h-auto"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.6) 100%)' }}
            />
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-6 sm:px-8">
              <span
                className="inline-block rounded-full px-4 py-1 text-xs font-semibold text-white mb-3"
                style={{ backgroundColor: '#FF93A6' }}
              >
                幸福見證
              </span>
              <h1
                className="text-white font-bold leading-tight"
                style={{ fontSize: 'clamp(20px, 3.5vw, 34px)', textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}
              >
                {story.title}
              </h1>
            </div>
          </div>
        </div>

        {/* ── Content wrapper ── */}
        <div className="mx-auto max-w-[900px] px-6 py-10 sm:px-8 lg:px-10">
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

          <article className="prose prose-lg max-w-none" style={{ fontFamily: 'var(--font-roboto), Roboto, sans-serif' }}>
            <p className="text-xl font-semibold leading-relaxed" style={{ color: '#049089' }}>
              {story.hook}
            </p>
            <p className="mt-4 leading-8 text-gray-800">{story.intro}</p>
          </article>

          <div className="mt-10 space-y-10">
            {story.sections.map((sec) => (
              <div key={sec.heading}>
                <h2
                  className="text-lg font-bold mb-4"
                  style={{ color: '#049089', fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
                >
                  {sec.heading}
                </h2>
                {sec.body && <p className="text-gray-700 leading-8 text-sm">{sec.body}</p>}
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-700 leading-8 text-sm">{story.closing}</p>

          <div className="mt-12 rounded-2xl p-8 text-center" style={{ backgroundColor: '#D2E0DE' }}>
            <p className="text-lg font-bold mb-1" style={{ color: '#049089' }}>
              你也可以成為下一個幸福見證！
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

        {/* ── Other success stories ── */}
        <section className="py-12" style={{ backgroundColor: '#f8fafc' }}>
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2
              className="mb-8 text-2xl font-bold"
              style={{ color: '#049089', fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              更多幸福見證
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s) => (
                <a
                  key={s.slug}
                  href={`/match/success/${s.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition hover:shadow-lg"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold leading-6 text-gray-900 line-clamp-2">
                      {s.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-2">{s.excerpt}</p>
                    <p className="mt-2 text-xs font-semibold text-right" style={{ color: '#FF93A6' }}>
                      閱讀更多 »
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
