import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '單身聯誼',
  description: '戀愛小秘書娜米提供台北、新竹、台中、台南、高雄各地單身聯誼活動，多元主題讓單身男女自然互動，輕鬆脫單！',
  openGraph: {
    title: '單身聯誼 — 戀愛小秘書娜米',
    description: '多元有趣的單身聯誼活動，涵蓋手作體驗、美食廚藝、戶外郊遊等主題，讓單身男女在輕鬆氛圍中相識。',
  },
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
  {
    title: '單身聯誼活動：推理冒險｜身臨其境的角色扮演遊戲',
    img: IMG + '2025/02/劇本殺-scaled.jpg',
    excerpt: '「解謎 × 戀愛」沉浸式角色扮演遊戲，在謎題中認識彼此，建立獨特的感情連結！',
    date: '2025/02',
    cat: '室內活動',
    url: 'https://ek21.com/dating/72511/',
  },
  {
    title: '單身聯誼活動：酒精墨水畫｜藝術過程浪漫的節奏',
    img: IMG + '2025/02/酒精墨水娜米_男.png',
    excerpt: '藝術與愛情的邂逅：用酒精墨水畫創作屬於你們的獨特作品，在藝術中找到共鳴。',
    date: '2025/02',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/72505/',
  },
  {
    title: '單身聯誼活動：動感閃動格子｜未來科技派對遊戲',
    img: IMG + '2025/02/閃動格娜米_男.png',
    excerpt: '速度 × 戀愛 × 科技！動感科技派對，在互動遊戲中展現你的魅力，快速認識異性。',
    date: '2025/02',
    cat: '娛樂遊戲',
    url: 'https://ek21.com/dating/72502/',
  },
  {
    title: '單身聯誼活動：攝影聯誼｜鏡頭下的愛情曝光',
    img: IMG + '2024/09/攝影聯誼_m.jpg',
    excerpt: '首創攝影聯誼，拒當攝影白癡，快來參加我們的攝影聯誼活動，用鏡頭記錄愛情。',
    date: '2024/09',
    cat: '藝術創作',
    url: 'https://ek21.com/dating/72406/',
  },
  {
    title: '單身聯誼活動：浪漫咖啡香｜咖啡不可',
    img: IMG + '2024/09/咖啡聯誼.jpg',
    excerpt: '你所不知的咖啡秘密，手沖咖啡體驗，靜謐午後的愉悅時光，在咖啡香中相遇。',
    date: '2024/09',
    cat: '微醺派對',
    url: 'https://ek21.com/dating/72398/',
  },
  {
    title: '單身聯誼活動：夏日創意芬芳｜手作乾涸花香蠟燭',
    img: IMG + '2024/08/香氛盲測.jpg',
    excerpt: '愛上手作的美好，一起來參加我們的「手作乾涸花香蠟燭」聯誼活動，在香氛中創造浪漫。',
    date: '2024/08',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/72382/',
  },
  {
    title: '單身聯誼活動：浪漫探戈派對｜阿根廷之夜',
    img: IMG + '2023/07/MTXX_MR20230715_180309740-scaled.jpg',
    excerpt: '女孩們穿上美麗洋裝，男生們西裝筆挺，在這歡樂的氛圍中共舞探戈，感受浪漫！',
    date: '2024/05',
    cat: '舞蹈音樂',
    url: 'https://ek21.com/dating/66339/',
  },
  {
    title: '單身聯誼活動【與護理師聯誼】｜手作玫瑰蘋果塔',
    img: IMG + '2023/09/20231014手作蘋果塔.jpg',
    excerpt: '一起玩手作、揮灑甜蜜，與護理師們共度美好時光，在甜蜜中認識另一半。',
    date: '2024/05',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/70407/',
  },
  {
    title: '單身聯誼活動：彩繪馬卡龍｜玩美巴黎風',
    img: IMG + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg',
    excerpt: '微風輕輕拂過，在這浪漫的馬卡龍彩繪時光中，共度甜蜜的巴黎風情。',
    date: '2024/01',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/66276/',
  },
  {
    title: '單身聯誼活動：浪漫Swing Dance｜讓我們舞在一起',
    img: IMG + '2023/07/ev_f567e1223d_1521796535.jpg',
    excerpt: '想要尋找浪漫與愛情的邂逅？加入我們的Swing Dance，讓我們在舞池中共舞！',
    date: '2024/01',
    cat: '舞蹈音樂',
    url: 'https://ek21.com/dating/66319/',
  },
  {
    title: '單身聯誼活動：Game START 派對｜電玩對對碰',
    img: IMG + '2023/12/5428FC8C-F122-41da-9737-D5FA3F69EA5A.png',
    excerpt: '挑戰感十足的電玩積分賽狂歡派對！在電玩中找到心動對象，輕鬆脫單！',
    date: '2024/01',
    cat: '娛樂遊戲',
    url: 'https://ek21.com/dating/71168/',
  },
  {
    title: '單身聯誼活動：療癒的浪漫小物｜浮遊花手作趣',
    img: IMG + '2023/07/195087_副本.jpg',
    excerpt: '療癒的浪漫小物，永恆不朽的小花永遠為你盛開，手作DIY樂趣無窮。',
    date: '2024/01',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/66689/',
  },
  {
    title: '單身聯誼活動：愛情調酒派對-微醺午後時光',
    img: IMG + '2023/07/1.webp',
    excerpt: 'Cocktail Time！品酒交友，在微醺的午後時光中輕鬆相識，找到心中那個他。',
    date: '2024/01',
    cat: '微醺派對',
    url: 'https://ek21.com/dating/66690/',
  },
  {
    title: "單身聯誼活動：KTV 情歌對唱 – Let's Sing 愛情點唱機",
    img: IMG + '2023/07/222225-scaled.jpg',
    excerpt: '你愛唱歌，她愛聽，想要找個和你一樣愛唱歌的另一半？來KTV情歌對唱！',
    date: '2024/01',
    cat: '舞蹈音樂',
    url: 'https://ek21.com/dating/66428/',
  },
];

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
                  key={article.url}
                  href={article.url}
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
                      style={{ background: '#07C3BA' }}
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
                      <span className="text-xs text-gray-400">{article.date}</span>
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
