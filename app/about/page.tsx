import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '關於娜米｜與娜米合作',
  description: '認識戀愛小秘書娜米：留美MBA企管碩士、彩虹數字諮詢師、交友聊天室第二代，10年以上兩性議題分析專家。',
  openGraph: {
    title: '關於娜米 — 戀愛小秘書娜米',
    description: '最專業的紅娘 / 兩性議題分析專家 / 留美MBA企管碩士 / 彩虹數字諮詢師',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const timeline = [
  { year: '2013', event: '留美取得MBA，回台接手尋夢園聊天室，將其打造為台灣最大匿名聊天社群（200萬會員）' },
  { year: '2014', event: '入選 AppWorks 加速器，創立 eros 主題派對交友平台，累積 100,000 驗證會員' },
  { year: '2018', event: '創辦尋夢新聞，月均 300 萬瀏覽量的新聞平台' },
  { year: '2020', event: '共同創辦彩虹數字學會，將數字學與兩性諮詢結合' },
  { year: '2021', event: '正式創立「戀愛小秘書」品牌，提供系統化戀愛配對與諮詢服務' },
  { year: '2023', event: '推出「戀愛會社」節目，用彩虹數字幫助更多人解析戀愛密碼' },
];

const ventures = [
  { name: '尋夢園聊天室', desc: '台灣最大匿名聊天社群，200萬名會員', icon: '💬' },
  { name: '尋夢新聞', desc: '月均300萬瀏覽量的新聞平台', icon: '📰' },
  { name: 'eros 主題派對', desc: '100,000名驗證會員的交友活動平台', icon: '🎉' },
  { name: '戀愛小秘書', desc: '專業戀愛配對與諮詢服務', icon: '💌' },
];

const expertise = [
  '最專業的紅娘',
  '兩性議題分析專家',
  '留美MBA企管碩士',
  '交友聊天室第二代',
  '彩虹數字諮詢師',
  '花精療癒師',
];

const collaborations = [
  {
    type: '媒體合作',
    icon: '📺',
    desc: '邀請娜米接受媒體採訪、節目訪談，分享兩性關係與戀愛諮詢專業見解。',
  },
  {
    type: '品牌合作',
    icon: '🤝',
    desc: '與品牌合作推廣，包含健身、美妝、健康、生活風格等相關領域。',
  },
  {
    type: '活動合辦',
    icon: '🎊',
    desc: '與企業或品牌聯合舉辦單身聯誼活動、戀愛講座等主題活動。',
  },
  {
    type: '廣告投放',
    icon: '📣',
    desc: '在戀愛小秘書平台及社群媒體上投放廣告，觸及精準的單身男女受眾。',
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h1 className="text-4xl font-bold text-white">關於娜米</h1>
            <p className="mt-4 text-lg text-white/80">最專業的紅娘 × 兩性議題分析專家</p>
          </div>
        </section>

        {/* 娜米介紹 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={BASE + '2023/10/nami-main.jpg'}
                alt="戀愛小秘書娜米"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-plum">戀愛小秘書娜米</h2>
              <p className="mt-2 text-plum/60">A型雙子座 × 留美MBA × 彩虹數字諮詢師</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {expertise.map((e) => (
                  <span key={e} className="rounded-full border border-rose/30 bg-rose/5 px-4 py-1.5 text-sm font-medium text-plum">
                    {e}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-base leading-8 text-plum/75">
                娜米是台灣最專業的紅娘之一，擁有留美MBA學歷與10年以上的兩性議題分析經驗。她結合數據分析與彩虹數字學，協助超過 4,000 位未婚男女成功配對，是台灣婚戀市場最具影響力的意見領袖。
              </p>
              <p className="mt-4 text-base leading-8 text-plum/75">
                娜米不僅是交友聊天室第二代，更是成功的連續創業者，旗下包含尋夢園聊天室（200萬會員）、尋夢新聞（300萬月瀏覽）、eros主題派對等多個知名平台。
              </p>

              <a href={LINE_URL} className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                加LINE聯絡娜米
              </a>
            </div>
          </div>
        </section>

        {/* 事業版圖 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">娜米的事業版圖</h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ventures.map((v) => (
                <article key={v.name} className="flex flex-col items-center rounded-2xl bg-white p-6 text-center shadow-soft">
                  <span className="text-4xl">{v.icon}</span>
                  <h3 className="mt-4 text-lg font-bold text-plum">{v.name}</h3>
                  <p className="mt-2 text-sm text-plum/60">{v.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 時間軸 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">娜米的創業歷程</h2>
          <div className="mt-12 space-y-6">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && <div className="mt-2 flex-1 w-px bg-plum/15" />}
                </div>
                <div className="pb-6">
                  <p className="text-sm font-bold text-rose">{item.year}</p>
                  <p className="mt-1 text-base leading-7 text-plum/80">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 與娜米合作 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">與娜米合作</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base text-plum/70">
              戀愛小秘書娜米擁有精準的單身男女受眾，歡迎各類品牌與企業洽談合作機會。
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {collaborations.map((c) => (
                <article key={c.type} className="rounded-2xl bg-white p-6 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.icon}</span>
                    <h3 className="text-xl font-bold text-plum">{c.type}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-plum/70">{c.desc}</p>
                  <a href={`mailto:mkt@ek21.com`} className="mt-4 inline-block text-sm font-semibold text-rose hover:underline">
                    立即洽談 »
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-[2rem] bg-plum p-8 text-center text-white md:p-12">
              <h3 className="text-2xl font-bold">聯絡我們</h3>
              <p className="mt-3 text-white/75">商業合作請聯絡：mkt@ek21.com</p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a href="https://www.facebook.com/datenami/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">Facebook</a>
                <a href="https://www.instagram.com/datenami/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">Instagram</a>
                <a href="https://www.youtube.com/@datenami" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-white/10">YouTube</a>
                <a href={LINE_URL} className="rounded-full bg-[#24B053] px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">官方 LINE</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
