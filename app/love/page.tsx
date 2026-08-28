import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '脫單指南',
  description: '戀愛小秘書娜米分享脫單技巧、戀愛攻略、聊天術等實用指南，幫助單身男女快速脫單。',
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

interface Article {
  title: string;
  img: string;
  excerpt: string;
  date: string;
  cat: string;
  url: string;
}

const articles: Article[] = [
  { title: '「天生公主」新垣結衣與星野源的💥第三者危機💥到底怎解❓', img: BASE + '2024/09/guide-third-party.jpg', excerpt: '娜米致力於解決兩性愛情疑難雜症已經有十年經驗，第三者問題到底要怎麼解？一起來探討！', date: '2024/09', cat: '戀愛分析', url: 'https://ek21.com/dating/72414/' },
  { title: '板橋健身房收費大拚比！玩美體態大完勝', img: BASE + '2024/05/guide-gym-price.png', excerpt: '板橋健身房收費問題所在：不透明的費用結構讓人卻步，帶你了解如何挑選最划算的方案。', date: '2024/05', cat: '形象穿搭', url: 'https://ek21.com/dating/72201/' },
  { title: '川字肌開啟新戀情？增肌減脂 板橋健身房推薦! 讓我們幫你！', img: BASE + '2024/05/workshop-fitness.jpg', excerpt: '板橋健身房推薦就是他了～「玩美體態」！五星評價背後的秘密，讓你增肌減脂同時提升吸引力。', date: '2024/05', cat: '形象穿搭', url: 'https://ek21.com/dating/72162/' },
  { title: '😖跟女生聊天好難❓六個「情境對話法」學起來此生不踩雷！', img: BASE + '2024/03/workshop-conversation.jpeg', excerpt: '你也常常跟女生聊天被句點嗎？娜米常常聽到男生會員的困擾，學起這六個情境對話法！', date: '2024/03', cat: '聊天技巧', url: 'https://ek21.com/dating/71502/' },
  { title: '單身聯誼活動【Game START 派對花絮】電動激情降低社交尷尬感', img: BASE + '2024/01/game-start-cover.png', excerpt: '在這個充滿歡笑聲和遊戲音效的夜晚，娜米與戀愛小秘書團隊透過電玩積分賽降低社交尷尬感。', date: '2024/01', cat: '脫單攻略', url: '/events/game-start-party-highlight' },
  { title: '戀愛小秘書給你最強脫單攻略！快速脫單的技巧學起來！', img: BASE + '2023/02/male-portrait-glasses.jpg', excerpt: '我是「戀愛小秘書-娜米」。很多男生想快速脫單，擺脫單身，今天教你最有效的脫單方法！', date: '2024/01', cat: '脫單攻略', url: 'https://ek21.com/dating/34928/' },
  { title: '免費領取專屬你的2024 戀愛密碼報告書 戀愛小秘書娜米 幫你分析脫單機會', img: BASE + '2024/01/guide-love-report.jpg', excerpt: '娜米的戀愛數字密碼，大家好，我是娜米，你的戀愛秘書，帶你分析今年的脫單機會！', date: '2024/01', cat: '戀愛分析', url: 'https://ek21.com/dating/71276/' },
  { title: '2023年末脫單招術，如何約喜歡的人跨年？戀愛小秘書給你懶人包', img: BASE + '2023/03/guide-new-year-eve.jpg', excerpt: '都已經2023年的最後幾天了，你還沒有約會對象嗎？年末脫單招術懶人包看這篇！', date: '2023/12', cat: '脫單攻略', url: 'https://ek21.com/dating/34043/' },
  { title: '過年了，交友軟體詐騙多，交友app騙到你了？戀愛小秘書告訴你正確交友姿態', img: BASE + '2023/03/guide-dating-app-scam.jpg', excerpt: '交友app的騙人招術，新媒體時代，各種功能的APP讓人防不勝防，正確交友姿態學起來！', date: '2023/03', cat: '戀愛分析', url: 'https://ek21.com/dating/60959/' },
  { title: '2024年了~~戀愛小秘書-娜米給你：節日脫單指南 – 夜場的搭訕', img: BASE + '2023/03/guide-nightclub-pickup.jpg', excerpt: '新的一年到來了，一堆耶誕、跨年、新年、情人節活動接連而來，夜場搭訕技巧不可不知！', date: '2023/03', cat: '聊天技巧', url: 'https://ek21.com/dating/13477/' },
  { title: '2023年桃園婚友社 推薦 或桃園單身聯誼相親或桃園未婚聯誼推薦？ 桃園人如何找對象脫單？', img: BASE + '2023/07/guide-taoyuan.jpg', excerpt: '娜米帶你了解2023年的【桃園婚友社】，桃園雖說是重工業區，但單身聯誼需求同樣旺盛。', date: '2023/07', cat: '脫單攻略', url: 'https://ek21.com/dating/70264/' },
  { title: '台南相親或台南人找對象？台南人的交友管道？', img: BASE + '2023/10/guide-tainan.jpg', excerpt: '台南人如何找對象？台南相親的人多嗎？帶你了解台南在地的交友管道與眉角。', date: '2023/10', cat: '脫單攻略', url: 'https://ek21.com/dating/70855/' },
  { title: '想脫單嗎？戀愛小秘書告訴你，必須做對這4件事', img: BASE + '2023/03/guide-4-things.jpg', excerpt: '大部分的人還是希望這輩子能談幾場戀愛、結個婚，在脫單之前，必須先做對這4件事！', date: '2023/03', cat: '脫單攻略', url: 'https://ek21.com/dating/65211/' },
  { title: '戀愛小秘書給妳好面子！買一送五：買「膠原蛋白」送「膠原蛋白左旋C」、「唯美香水」、「浪漫約會券」5張、「好男人配對專案」、「飲品券」', img: BASE + '2023/09/guide-promo-collagen.png', excerpt: '今天戀愛小秘書-娜米要給妳好面子：買780元膠原蛋白，直接送妳五份超值好禮！', date: '2023/09', cat: '形象穿搭', url: 'https://ek21.com/dating/70570/' },
  { title: '戀愛小秘書娜米 免費送提升魅力、吸引異性小禮物', img: BASE + '2023/04/guide-free-gift.png', excerpt: '我是「戀愛小秘書-娜米」，作為一個婚戀交友平台的顧問，免費送你提升魅力的小禮物！', date: '2023/04', cat: '形象穿搭', url: 'https://ek21.com/dating/65618/' },
  { title: '【婚友社評價】出爐：交友app跟實體排約，哪個可靠？', img: BASE + '2023/03/guide-review.jpeg', excerpt: '經過疫情的肆虐，很多人覺得不方便實體社交，改去網路交友，但到底哪個比較可靠？', date: '2023/03', cat: '戀愛分析', url: 'https://ek21.com/dating/38426/' },
  { title: '台中相親 台中婚友社 推薦 或台中單身聯誼 或台中未婚聯誼推薦？ 台中人如何找對象脫單？', img: BASE + '2023/09/guide-taichung.jpg', excerpt: '今天戀愛小秘書-娜米要來談談台中人的婚友戀愛觀，婚友社怎麼選、怎麼避雷一次告訴你。', date: '2023/09', cat: '脫單攻略', url: 'https://ek21.com/dating/70352/' },
  { title: '宅男不會聊天! 聽聽「戀愛小秘書-娜米」怎麼分析', img: BASE + '2023/03/guide-otaku-chat.jpg', excerpt: 'Hi, 我是「戀愛小秘書-娜米」，作為一個婚戀交友顧問，來分析宅男不會聊天的真正原因。', date: '2023/03', cat: '聊天技巧', url: 'https://ek21.com/dating/65245/' },
  { title: '【電話交友】是詐騙！【正經交友】不正經！如何避陷阱?', img: BASE + '2023/09/guide-phone-dating.jpg', excerpt: '戀愛小秘書-娜米發現【電話交友】十之八九是詐騙！標榜正經交友的平台又不正經，該如何避開陷阱？', date: '2023/09', cat: '戀愛分析', url: 'https://ek21.com/dating/70358/' },
  { title: '脫單技巧：把喜歡的男人聊成了朋友，你會聊天嗎？', img: BASE + '2023/01/guide-chat-friend.jpg', excerpt: '有多少女生在認識初期，明明要到了對方的Line，想更進一步，卻不小心把他聊成了朋友？', date: '2023/01', cat: '聊天技巧', url: 'https://ek21.com/dating/28703/' },
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
