import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
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

export default function PartyPage() {
  return (
    <SiteShell>
      <main>
        {/* Banner */}
        <section style={{ background: '#049089' }} className="py-14 text-center">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h1 className="text-4xl font-bold text-white">單身聯誼</h1>
            <p className="mt-3 text-lg text-white/85">多元主題 × 精彩有趣 × 輕鬆脫單</p>
          </div>
        </section>

        {/* Article Grid */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <a
                  key={article.slug}
                  href={`/party/${article.slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <span
                      className="inline-block rounded-full px-3 py-0.5 text-xs font-semibold text-white"
                      style={{ background: CAT_COLOR[article.cat] ?? '#07C3BA' }}
                    >
                      {article.cat}
                    </span>
                    <h2 className="mt-2 text-sm font-semibold leading-6 text-gray-900 line-clamp-2">
                      {article.title}
                    </h2>
                    <p className="mt-1.5 text-xs leading-5 text-gray-500 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-gray-400">{article.date.slice(0, 7)}</span>
                      <span className="text-xs font-semibold" style={{ color: '#FF93A6' }}>
                        閱讀更多 »
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">想參加單身聯誼活動？</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
              加入官方LINE，了解最新活動資訊，戀愛小秘書為你安排最適合的聯誼活動！
            </p>
            <a
              href={LINE_URL}
              className="mt-8 inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
              style={{ color: '#049089' }}
            >
              加LINE諮詢活動
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
