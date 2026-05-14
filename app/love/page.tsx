import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '脫單指南',
  description: '戀愛小秘書娜米分享脫單技巧、戀愛攻略、聊天術等實用指南，幫助單身男女快速脫單。',
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const IMG = 'https://ek21.com/dating/wp-content/uploads/';

interface Article {
  title: string;
  img: string;
  excerpt: string;
  date: string;
  cat: string;
  url: string;
}

const articles: Article[] = [
  { title: '「天生公主」新垣結衣與星野源的💥第三者危機💥到底怎解❓', img: IMG+'2024/09/30：cover.jpg', excerpt: '戀愛會社娜米致力於解決兩性愛情疑難雜症，第三者問題到底要怎麼解決？一起來探討！', date: '2024/09', cat: '戀愛分析', url: 'https://ek21.com/dating/72414/' },
  { title: '😖跟女生聊天好難嗎🤫六個「情境對話法」學起來此生不踩雷！', img: IMG+'2024/03/跟女生聊天對比.jpeg', excerpt: '你也常常跟女生聊天被句點嗎？娜米常常聽到男生會員的困擾，學起這六個情境對話法！', date: '2024/03', cat: '聊天技巧', url: 'https://ek21.com/dating/71502/' },
  { title: '戀愛小秘書給你最強脫單攻略！快速脫單的技巧學起來！', img: IMG+'2023/02/smart-attractive-asian-glasses-male-smile-happiness-while-using-smartphone-communication-home-background-technology-ideas-concept.jpg', excerpt: '我是「戀愛小秘書-娜米」。很多男生想快速脫單，今天教你最有效的脫單方法！', date: '2024/01', cat: '脫單攻略', url: 'https://ek21.com/dating/34928/' },
  { title: '2024 男士約會 3種必勝穿搭攻略 穿對了讓女生暈到不行', img: IMG+'2024/04/DALL·E-2024-04-02-11.47.47-Create-a-full-body-portrait-of-a-Taiwanese-man-dressed-in-a-clean-simple-style-that-embodies-the-winning-formula-for-a-date-outfit_-monochrome-mono.png', excerpt: '在2024年，男士的約會穿搭依然扮演著重要的角色，穿對了讓你在約會中完全加分！', date: '2024/04', cat: '形象穿搭', url: 'https://ek21.com/dating/71851/' },
  { title: '板橋健身房對蛙練收費大拚比！玩美體態完勝', img: IMG+'2024/05/1p2_pic1.png', excerpt: '板橋健身房收費問題大比較，如何找到最適合你的健身方案，打造完美體態吸引異性！', date: '2024/06', cat: '脫單攻略', url: 'https://ek21.com/dating/72201/' },
  { title: '川字肌開啟新戀情？增肌減脂 板橋健身房推薦! 讓我們幫你！', img: IMG+'2024/05/037af94b-c361-4a7e-ad43-870c4828cddc_副本.jpg', excerpt: '板橋健身房推薦就是他了！五星評價背後的秘密，讓你增肌減脂同時提升吸引力。', date: '2024/05', cat: '形象穿搭', url: 'https://ek21.com/dating/72162/' },
  { title: '一秒上頭！最夯的越式洗髮你跟上了嗎？｜最完整越式洗髮開箱', img: IMG+'2024/03/2813_0_副本.jpg', excerpt: '越式洗髮的體驗讓你煥然一新，魅力大增！娜米帶你完整體驗這股潮流。', date: '2024/03', cat: '形象穿搭', url: 'https://ek21.com/dating/71373/' },
  { title: '「越」來「越」好玩：越式洗髮到底夯什麼？', img: IMG+'2024/03/2813_0_副本.jpg', excerpt: '娜米推薦｜越式洗髮 讓忙碌的現代人放鬆身心，同時提升個人魅力的絕佳選擇。', date: '2024/03', cat: '形象穿搭', url: 'https://ek21.com/dating/71364/' },
  { title: '板橋女性健身房為什麼選這家「玩美體態」？帥哥教練多嗎？', img: IMG+'2024/05/1p1_pic1_副本.jpg', excerpt: '健身房不是男性專屬的場所，板橋女性健身房的需求越來越高！帥哥教練親切又專業。', date: '2024/05', cat: '脫單攻略', url: 'https://ek21.com/dating/72188/' },
];

export default function LovePage() {
  return (
    <SiteShell>
      <main>
        {/* Banner */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h1 className="text-4xl font-bold text-white">脫單指南</h1>
            <p className="mt-4 text-lg text-white/80">戀愛攻略 × 聊天技巧 × 兩性分析</p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <a
                key={article.url}
                href={article.url}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                    style={{ background: '#07C3BA' }}
                  >
                    {article.cat}
                  </span>
                  <h2 className="mt-2 text-sm font-semibold leading-5 text-[#1a1a1a] line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-gray-500 leading-5 line-clamp-2">{article.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{article.date}</span>
                    <span className="text-xs font-medium" style={{ color: '#FF93A6' }}>閱讀更多 »</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">準備好脫單了嗎？</h2>
            <p className="mt-3 text-white/70">
              閱讀再多攻略不如實際行動！加入LINE，讓娜米為你量身規劃脫單計畫。
            </p>
            <a
              href={LINE_URL}
              className="mt-6 inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: '#06C755' }}
            >
              加LINE免費諮詢
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
