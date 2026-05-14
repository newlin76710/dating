import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '聯誼花絮',
  description: '戀愛小秘書娜米聯誼活動花絮照片與回顧，精彩記錄每場單身聯誼活動的美好時刻。',
  openGraph: {
    title: '聯誼花絮 — 戀愛小秘書娜米',
    description: '精彩活動回顧 × 美好相遇時刻，手作烘焙、調酒派對、電玩聯誼等多元主題活動記錄。',
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
    title: '單身聯誼推薦花絮: 手作玫瑰蘋果塔｜與護理師之約',
    img: IMG + '2023/09/帶按鷲圖-情境圖-烘烙-01.jpg',
    excerpt: '一起玩手作、揮灑甜蜜，一直都是我們男女學員的最愛，護理師主題聯誼帶來難忘體驗！',
    date: '2024/03',
    cat: '活動花絮',
    url: 'https://ek21.com/dating/71789/',
  },
  {
    title: '單身聯誼活動花絮：愛情調酒派對-微醺午後時光',
    img: IMG + '2024/03/wine2_副本.jpg',
    excerpt: '在酒香四溢的午後，娜米和戀愛小秘書為大家開拍了「愛情調酒派對」，微醺中輕鬆互動。',
    date: '2024/03',
    cat: '活動花絮',
    url: 'https://ek21.com/dating/71542/',
  },
  {
    title: '單身聯誼活動【Game START 派對花絮】電動激情降低了社交尷尬感',
    img: IMG + '2024/01/享樂21200x1200.png',
    excerpt: '在這個充滿歡笑聲和遊戲音效的夜晚，娜米與戀愛小秘書帶你用電玩打破社交距離！',
    date: '2024/01',
    cat: '活動花絮',
    url: 'https://ek21.com/dating/71333/',
  },
  {
    title: '單身聯誼活動：浪漫探戈派對｜阿根廷之夜',
    img: IMG + '2023/07/MTXX_MR20230715_180309740-scaled.jpg',
    excerpt: '阿根廷探戈是起源於阿根廷的傳統雙人舞，在探戈中感受心的靠近！',
    date: '2024/05',
    cat: '舞蹈音樂',
    url: 'https://ek21.com/dating/66339/',
  },
  {
    title: '單身聯誼活動：攝影聯誼｜鏡頭下的愛情曝光',
    img: IMG + '2024/09/攝影聯誼_m.jpg',
    excerpt: '首創攝影聯誼，拒當攝影白癡，快來參加我們的攝影聯誼活動！',
    date: '2024/09',
    cat: '藝術創作',
    url: 'https://ek21.com/dating/72406/',
  },
  {
    title: '單身聯誼活動：彩繪馬卡龍｜玩美巴黎風',
    img: IMG + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg',
    excerpt: '微風輕輕拂過，在這浪漫的馬卡龍彩繪時光中與你共度。',
    date: '2024/01',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/66276/',
  },
  {
    title: '單身聯誼活動：Game START 派對｜電玩對對碰',
    img: IMG + '2023/12/5428FC8C-F122-41da-9737-D5FA3F69EA5A.png',
    excerpt: '挑戰感十足的電玩積分賽狂歡派對就要登場了！戀愛小秘書帶你在電玩中找到心動對象！',
    date: '2024/01',
    cat: '娛樂遊戲',
    url: 'https://ek21.com/dating/71168/',
  },
  {
    title: '單身聯誼活動【與護理師聯誼】｜手作玫瑰蘋果塔',
    img: IMG + '2023/09/20231014手作蘋果塔.jpg',
    excerpt: '一起玩手作、揮灑甜蜜，一直都是我們男女學員的最愛。',
    date: '2024/05',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/70407/',
  },
  {
    title: '單身聯誼活動：浪漫咖啡香｜咖啡不可',
    img: IMG + '2024/09/咖啡聯誼.jpg',
    excerpt: '你所不知的咖啡秘密，手沖咖啡體驗，靜謐午後的愉悅時光。',
    date: '2024/09',
    cat: '微醺派對',
    url: 'https://ek21.com/dating/72398/',
  },
  {
    title: '單身聯誼活動：療癒的浪漫小物｜浮遊花手作趣',
    img: IMG + '2023/07/195087_副本.jpg',
    excerpt: '永恆不朽的小花永遠為你盛開，浮遊花手作趣讓你的約會更加難忘。',
    date: '2024/01',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/66689/',
  },
  {
    title: '單身聯誼活動：夏日創意芬芳｜手作乾涸花香蠟燭',
    img: IMG + '2024/08/香氛盲測.jpg',
    excerpt: '愛上手作的美好，一起來參加我們的「手作乾涸花香蠟燭」聯誼活動。',
    date: '2024/08',
    cat: '手作體驗',
    url: 'https://ek21.com/dating/72382/',
  },
  {
    title: '單身聯誼活動：浪漫Swing Dance｜讓我們舞在一起',
    img: IMG + '2023/07/ev_f567e1223d_1521796535.jpg',
    excerpt: '一起擁抱浪漫的Swing Dance，讓我們在舞池中共舞，綻造美妙的時刻！',
    date: '2024/01',
    cat: '舞蹈音樂',
    url: 'https://ek21.com/dating/66319/',
  },
];

export default function EventsPage() {
  return (
    <SiteShell>
      <main>
        {/* Banner */}
        <section style={{ background: '#049089' }} className="py-14 text-center">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h1 className="text-4xl font-bold text-white">聯誼花絮</h1>
            <p className="mt-3 text-lg text-white/85">精彩活動回顧 × 美好相遇時刻</p>
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
            <h2 className="text-2xl font-bold text-white sm:text-3xl">精彩活動等你加入！</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-white/80">
              每月舉辦多場不同主題的單身聯誼活動，加LINE了解詳情，一起找到心動的對象！
            </p>
            <a
              href={LINE_URL}
              className="mt-8 inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
              style={{ color: '#049089' }}
            >
              加LINE了解活動
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
