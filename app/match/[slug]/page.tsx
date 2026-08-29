import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SiteShell } from '@/components/site-shell';
import { members, getMember } from '@/lib/match-members';

const LINE_URL = 'https://lin.ee/iweaTucb';
const LINE_ID = '@datenami';

export async function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) return {};
  return {
    title: `${member.name}｜找對象會員`,
    description: member.desc,
    openGraph: {
      title: `${member.name} — 戀愛小秘書娜米`,
      description: member.desc,
      images: [{ url: member.img, alt: member.name }],
    },
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getMember(slug);
  if (!member) notFound();

  const genderLabel = member.gender === 'F' ? '女性會員' : '男性會員';
  const others = members
    .filter((m) => m.gender === member.gender && m.slug !== slug)
    .slice(0, 6);

  return (
    <SiteShell>
      <main>
        {/* ── Hero image: contained, centered, never cropped ── */}
        <div className="mx-auto w-full max-w-[900px] px-6 pt-8 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[420px]">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={member.img}
                alt={member.name}
                className="block w-full h-auto"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6) 100%)' }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                <span
                  className="inline-block rounded-full px-4 py-1 text-xs font-semibold text-white mb-2"
                  style={{ backgroundColor: member.gender === 'F' ? '#FF93A6' : '#07C3BA' }}
                >
                  {genderLabel}
                </span>
                <h1 className="text-white font-bold text-2xl leading-tight" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
                  {member.name}
                </h1>
                <p className="mt-1 text-white/85 text-sm">{member.meta}</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Content wrapper ── */}
        <div className="mx-auto max-w-[700px] px-6 py-10 sm:px-8 lg:px-10">
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
            <h2 className="text-lg font-bold mb-4" style={{ color: '#049089', fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}>
              關於 {member.name}
            </h2>
            <p className="leading-8 text-gray-800">{member.desc}</p>
          </article>

          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
            <div className="px-6 py-4 text-white text-base font-semibold" style={{ backgroundColor: '#049089' }}>
              會員資料
            </div>
            <div className="divide-y divide-gray-100 bg-white">
              {[
                { label: '👤 性別', value: genderLabel },
                { label: '🩸 血型／身高', value: member.meta },
                { label: '✅ 認證狀態', value: '實名認證通過' },
                { label: '💬 認識方式', value: '洽戀愛小秘書 LINE ID：' + LINE_ID },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 px-6 py-4">
                  <span className="w-32 shrink-0 text-sm font-semibold text-gray-500">{label}</span>
                  <span className="text-sm text-gray-800">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: '#FF93A6' }}
            >
              想認識{member.name}？→ 加 LINE 洽詢
            </a>
          </div>

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

        {/* ── Other members of the same gender ── */}
        <section className="py-12" style={{ backgroundColor: '#f8fafc' }}>
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2
              className="mb-8 text-2xl font-bold"
              style={{ color: '#049089', fontFamily: 'var(--font-playfair), "Playfair Display", serif' }}
            >
              其他{genderLabel}
            </h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {others.map((m) => (
                <a
                  key={m.slug}
                  href={`/match/${m.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition hover:shadow-lg"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="text-sm font-semibold text-gray-900">{m.name}</h3>
                    <p className="mt-1 text-xs text-gray-500 line-clamp-1">{m.meta}</p>
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
