import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '脫單指南',
  description: '戀愛小秘書娜米分享脫單技巧、戀愛攻略、聊天技術等實用指南，幫助單身男女快速脫單。',
  openGraph: {
    title: '脫單指南 — 戀愛小秘書娜米',
    description: '戀愛秘書娜米分享的戀愛技巧、脫單攻略與兩性關係分析，讓你在感情路上更有方向。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const articles = [
  {
    title: '😖跟女生聊天好難❓六個「情境對話法」學起來此生不踩雷！',
    img: BASE + '2024/03/chat.jpeg',
    excerpt: '你也常常跟女生聊天被句點嗎？學會這六個情境對話法，讓你聊天不再尷尬！',
    category: '聊天技巧',
    date: '2024/03',
  },
  {
    title: '戀愛小秘書給你最強脫單攻略！快速脫單的技巧學起來！',
    img: BASE + '2023/03/singles-guide.jpg',
    excerpt: '我是「戀愛小秘書-娜米」。很多男生想快速脫單，擺脫單身，今天教你最有效的脫單方法！',
    category: '脫單攻略',
    date: '2023/02',
  },
  {
    title: '免費領取專屬你的2024 戀愛密碼報告書，娜米幫你分析脫單機會',
    img: BASE + '2024/01/love-report.jpg',
    excerpt: '娜米的戀愛數字密碼，大家好，我是娜米，你的戀愛秘書，免費送你戀愛密碼報告書！',
    category: '戀愛密碼',
    date: '2024/01',
  },
  {
    title: '2023年末脫單招術，如何約喜歡的人跨年？戀愛小秘書給你懶人包',
    img: BASE + '2023/03/new-year.jpg',
    excerpt: '年末最佳脫單時機！教你如何自然邀約喜歡的人一起跨年，讓愛情在新年展開。',
    category: '戀愛技巧',
    date: '2023/12',
  },
  {
    title: '過年了，交友軟體詐騙多，交友app騙到你了？戀愛小秘書告訴你正確交友姿態',
    img: BASE + '2023/03/dating-app.jpg',
    excerpt: '新媒體時代，各種功能的APP層出不窮，如何辨別真實與詐騙？娜米教你正確交友！',
    category: '交友安全',
    date: '2023/02',
  },
  {
    title: '想脫單嗎？戀愛小秘書告訴你，必須做對這4件事',
    img: BASE + '2023/03/four-tips.jpg',
    excerpt: '大部分的人還是希望這輩子能談幾場戀愛，結個婚。但要脫單，這4件事你必須做對！',
    category: '脫單攻略',
    date: '2023/01',
  },
  {
    title: '宅男不會聊天！聽聽「戀愛小秘書-娜米」怎麼分析',
    img: BASE + '2023/03/shy-guy.jpg',
    excerpt: 'Hi，我是「戀愛小秘書-娜米」，作為一個婚戀交友平台的第二代，我來分析宅男的聊天困境！',
    category: '聊天技巧',
    date: '2023/01',
  },
  {
    title: '【婚友社評價】出爐：交友app跟實體排約，哪個可靠？',
    img: BASE + '2023/03/dating-compare.jpeg',
    excerpt: '經過疫情的肆虐，很多人覺得不方便實體社交，改去網路交友。但哪種方式更可靠？',
    category: '交友分析',
    date: '2023/03',
  },
  {
    title: '脫單技巧：把喜歡的男人聊成了朋友，你會聊天嗎？',
    img: BASE + '2023/01/chat-tips.jpg',
    excerpt: '有多少女生在認識初期，明明要到了對方的Line，卻不知道怎麼繼續聊？娜米教你！',
    category: '聊天技巧',
    date: '2023/01',
  },
  {
    title: '台南相親或台南人找對象？台南人的交友管道大解析',
    img: BASE + '2023/10/tainan.jpg',
    excerpt: '台南人如何找對象？台南相親的人多嗎？戀愛小秘書幫你分析台南交友最佳管道！',
    category: '地區指南',
    date: '2023/10',
  },
  {
    title: '台中相親 台中婚友社推薦，台中人如何找對象脫單？',
    img: BASE + '2023/09/taichung.jpg',
    excerpt: '今天戀愛小秘書-娜米要來談談台中人的婚友戀愛觀，婚友社vs聯誼活動哪個適合你？',
    category: '地區指南',
    date: '2023/09',
  },
  {
    title: '2023年桃園婚友社推薦，桃園人如何找對象脫單？',
    img: BASE + '2023/07/taoyuan.jpg',
    excerpt: '娜米帶你了解2023年的桃園婚友社，以及在桃園找對象的最佳方式！',
    category: '地區指南',
    date: '2023/07',
  },
];

const categories = ['全部', '脫單攻略', '聊天技巧', '戀愛技巧', '交友分析', '地區指南', '戀愛密碼'];

export default function LovePage() {
  return (
    <SiteShell>
      <main>
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h1 className="text-4xl font-bold text-white">脫單指南</h1>
            <p className="mt-4 text-lg text-white/80">戀愛攻略 × 聊天技巧 × 兩性分析</p>
          </div>
        </section>

        {/* 分類標籤 */}
        <section className="border-b border-plum/10 bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-2 px-6 py-4 sm:px-8 lg:px-10">
            {categories.map((cat) => (
              <span key={cat} className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition ${cat === '全部' ? 'bg-rose text-white' : 'border border-plum/15 text-plum/70 hover:border-rose hover:text-rose'}`}>
                {cat}
              </span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <a key={article.title} href={LINE_URL} className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:shadow-lg">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-rose/90 px-3 py-1 text-xs font-semibold text-white">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-plum/40">{article.date}</p>
                  <h2 className="mt-1 text-sm font-bold leading-6 text-plum line-clamp-2">{article.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-plum/60 line-clamp-2">{article.excerpt}</p>
                  <p className="mt-3 text-xs font-semibold text-rose">閱讀更多 »</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={LINE_URL} className="inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
              加LINE取得更多脫單建議
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h2 className="text-3xl font-bold text-white">準備好脫單了嗎？</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
              閱讀再多攻略不如實際行動！加入LINE，讓娜米為你量身規劃脫單計畫。
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
