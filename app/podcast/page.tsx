import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '戀愛會社',
  description: '戀愛小秘書娜米主持的「戀愛密碼諮詢節目」，以彩虹數字分析生命藍圖，解答你的戀愛困惑。',
  openGraph: {
    title: '戀愛會社 — 戀愛小秘書娜米',
    description: '戀愛密碼諮詢節目：彩虹數字、生命密碼、生命藍圖、生命靈數，娜米為你解析戀愛疑惑。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const episodes = [
  {
    title: '「天生公主」新垣結衣與星野源的💥第三者危機💥到底怎解❓【戀愛會社 S1EP30】',
    img: BASE + '2024/09/ep30-cover.jpg',
    excerpt: '戀愛會社💼 娜米致力於解決兩性愛情疑難雜症已經有十年以上的經驗，讓我們一起來看看第三者危機怎麼解！',
    ep: 'S1 EP30',
    date: '2024/09',
  },
  {
    title: '愛情裡的「界線感」｜為何你總被渣男吸引？【戀愛會社 S1EP29】',
    img: BASE + '2023/10/nami-main.jpg',
    excerpt: '為什麼總是遇到不對的人？娜米從數字密碼分析你的感情模式，教你建立健康的愛情界線！',
    ep: 'S1 EP29',
    date: '2024/08',
  },
  {
    title: '長期單身的真相！你不知道自己有這個問題嗎？【戀愛會社 S1EP28】',
    img: BASE + '2023/03/nami-consult.jpg',
    excerpt: '長期單身不是你的錯，但你需要了解自己的感情模式！娜米幫你找出潛在原因。',
    ep: 'S1 EP28',
    date: '2024/07',
  },
  {
    title: '如何讓暗戀的人主動找你？吸引力法則戀愛實戰！【戀愛會社 S1EP27】',
    img: BASE + '2023/09/baking-01.jpg',
    excerpt: '想讓喜歡的人主動靠近？戀愛吸引力法則加上數字密碼，讓你散發獨特魅力！',
    ep: 'S1 EP27',
    date: '2024/06',
  },
  {
    title: '「命中注定的另一半」真的存在嗎？【戀愛會社 S1EP26】',
    img: BASE + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg',
    excerpt: '每個人都有命中注定的另一半嗎？娜米從生命密碼角度深度解析緣分的奧秘！',
    ep: 'S1 EP26',
    date: '2024/05',
  },
  {
    title: '交往前必看！如何判斷對方真心還是玩玩？【戀愛會社 S1EP25】',
    img: BASE + '2024/04/S__18202927_0.jpg',
    excerpt: '如何判斷對方是真心還是只是玩玩？娜米教你從行為細節識破真假感情！',
    ep: 'S1 EP25',
    date: '2024/04',
  },
];

const targetAudience = [
  '缺乏感情經驗',
  '與異性相處時常受挫',
  '不知道自己的優勢在哪裡',
  '不知道如何吸引異性',
  '無法在感情上做出好的抉擇',
  '總是遇見不對的人',
];

const namiHelps = [
  '展開戀愛藍圖',
  '吸引戀愛秘訣',
  '經營幸福方法',
  '找到速配對象',
  '創造幸福人生',
];

export default function PodcastPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h1 className="text-4xl font-bold text-white">戀愛會社</h1>
            <p className="mt-4 text-lg text-white/80">戀愛密碼諮詢節目 × 彩虹數字 × 生命藍圖</p>
          </div>
        </section>

        {/* 節目介紹 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-plum">戀愛會社是什麼？</h2>
              <p className="mt-4 text-base leading-8 text-plum/75">
                「戀愛會社」是由戀愛小秘書娜米主持的戀愛諮詢節目。娜米運用彩虹數字學，透過分析你的生日，解讀你的生命密碼與戀愛藍圖，幫你找到感情方向。
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-6 shadow-soft">
                  <h3 className="font-bold text-plum">你正在為以下問題煩惱嗎？</h3>
                  <ul className="mt-3 space-y-2">
                    {targetAudience.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-plum/70">
                        <span className="mt-0.5 text-rose">・</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl bg-rose/5 p-6">
                  <h3 className="font-bold text-plum">娜米老師幫你：</h3>
                  <ul className="mt-3 space-y-2">
                    {namiHelps.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-plum/70">
                        <span className="mt-0.5 text-rose">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a href={LINE_URL} className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                免費提交你的問題
              </a>
            </div>

            <div className="relative aspect-[3/4] max-w-sm mx-auto overflow-hidden rounded-[2rem] shadow-soft">
              <img
                src={BASE + '2023/10/nami-main.jpg'}
                alt="戀愛小秘書娜米"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 如何參加 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">如何參加戀愛諮詢節目？</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { num: '01', title: '提交生日與問題', desc: '加入官方LINE，提交你的生日日期與想諮詢的感情問題。' },
                { num: '02', title: '娜米計算分析', desc: '娜米根據彩虹數字學，計算你的個人化戀愛密碼並進行深度分析。' },
                { num: '03', title: '節目公開解析', desc: '你的問題將在「戀愛會社」節目中被娜米公開解答，幫助更多同類型的人！' },
              ].map((s) => (
                <article key={s.num} className="rounded-3xl bg-white p-8 shadow-soft">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-rose">{s.num}</p>
                  <h3 className="mt-4 text-xl font-bold text-plum">{s.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-plum/75">{s.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a href={LINE_URL} className="inline-flex rounded-full bg-[#24B053] px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                立刻提交問題
              </a>
            </div>
          </div>
        </section>

        {/* 節目列表 */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">最新節目</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {episodes.map((ep) => (
              <a key={ep.title} href={LINE_URL} className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={ep.img}
                    alt={ep.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-plum/90 px-3 py-1 text-xs font-bold text-white">
                    {ep.ep}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center bg-plum/30 opacity-0 transition group-hover:opacity-100">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90">
                      <svg className="ml-1 h-5 w-5 text-plum" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.841z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-plum/40">{ep.date}</p>
                  <h2 className="mt-1 text-sm font-bold leading-5 text-plum line-clamp-2">{ep.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-plum/60 line-clamp-2">{ep.excerpt}</p>
                  <p className="mt-3 text-xs font-semibold text-rose">觀看節目 »</p>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href={LINE_URL} className="text-sm font-medium text-rose hover:underline">查看更多節目 »</a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h2 className="text-3xl font-bold text-white">想讓娜米幫你解析戀愛密碼？</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
              加入官方LINE，提交你的生日與感情問題，娜米將在節目中為你解答！
            </p>
            <a href={LINE_URL} className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
              加LINE免費諮詢
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
