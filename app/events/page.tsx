import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '聯誼花絮',
  description: '戀愛小秘書娜米聯誼活動花絮照片與回顧，精彩記錄每場單身聯誼活動的美好時刻。',
  openGraph: {
    title: '聯誼花絮 — 戀愛小秘書娜米',
    description: '精彩聯誼活動花絮回顧，手作烘焙、調酒派對、電玩聯誼等多元主題活動記錄。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const articles = [
  {
    title: '單身聯誼推薦花絮：手作玫瑰蘋果塔｜與護理師之約',
    img: BASE + '2023/09/baking-01.jpg',
    excerpt: '一起玩手作、揮灑甜蜜，一直都是我們男女學員的最愛，護理師主題聯誼帶來難忘體驗！',
    date: '2024/03',
  },
  {
    title: '單身聯誼活動花絮：愛情調酒派對｜微醺午後時光',
    img: BASE + '2024/03/wine2.jpg',
    excerpt: '在酒香四溢的午後，娜米和戀愛小秘書為大家開拍了「愛情調酒派對」，微醺中輕鬆互動。',
    date: '2024/03',
  },
  {
    title: '單身聯誼活動【Game START 派對花絮】電動激情降低社交尷尬感',
    img: BASE + '2024/01/gamestart.png',
    excerpt: '在這個充滿歡笑聲和遊戲音效的夜晚，娜米與戀愛小秘書帶你用電玩打破社交距離！',
    date: '2024/01',
  },
  {
    title: '單身聯誼推薦：濃情蜜意巧克力蛋糕',
    img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg',
    excerpt: '你也喜歡做蛋糕嗎？美食結合聯誼交友，在料理大廚領導下，甜蜜時光讓感情升溫！',
    date: '2023/07',
  },
  {
    title: '未婚單身聯誼活動「七夕の園遊祭」圓滿句點',
    img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg',
    excerpt: '盛夏的夜晚，娜米和戀愛小秘書們在內湖美題碼頭，舉辦了一場浪漫的七夕聯誼活動！',
    date: '2023/08',
  },
  {
    title: '單身聯誼推薦：密室逃脫聯誼，燒腦刺激的遊戲',
    img: BASE + '2023/09/baking-01.jpg',
    excerpt: '炎炎夏天，戀愛小秘書娜米帶大家進入密室逃脫，在腦力激盪中培養默契！',
    date: '2023/08',
  },
  {
    title: '單身聯誼推薦：水上騎馬打仗 清涼刺激的泳池Party',
    img: BASE + '2024/04/S__18202927_0.jpg',
    excerpt: '清涼消暑的夏日泳池派對，水上騎馬打仗讓大家笑聲不斷，歡樂互動！',
    date: '2023/08',
  },
  {
    title: '單身聯誼推薦：喵星人派對｜貓咪咖啡廳聯誼',
    img: BASE + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg',
    excerpt: '在這個特別的喵星人單身聯誼活動中，浪漫與愛交織成一段美麗的相遇！',
    date: '2023/07',
  },
  {
    title: '單身聯誼推薦：阿根廷探戈派對｜浪漫舞動之夜',
    img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg',
    excerpt: '阿根廷探戈是起源於阿根廷的傳統雙人舞，在探戈中感受心的靠近！',
    date: '2023/07',
  },
  {
    title: 'K歌派對｜情聲綿綿',
    img: BASE + '2023/12/5428FC8C-F122-41da-9737-D5FA3F69EA5A.png',
    excerpt: '愛，讓我們用歌聲串起陌生的彼此！相遇和相愛只在一瞬間！',
    date: '2019/10',
  },
  {
    title: '單身聯誼推薦：多肉植物｜愛在蔓延時',
    img: BASE + '2023/09/baking-01.jpg',
    excerpt: '療癒性的植栽，另一半都不懂？想與曖昧的人培養感情？一起來多肉植物聯誼！',
    date: '2019/10',
  },
  {
    title: '單身聯誼推薦：非誠勿擾｜好評加開場',
    img: BASE + '2024/04/S__18202927_0.jpg',
    excerpt: '在千呼萬喚之下，非誠勿擾之好評加開場順利舉行，歡迎單身男女勇敢出發！',
    date: '2018/10',
  },
];

export default function EventsPage() {
  return (
    <SiteShell>
      <main>
        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h1 className="text-4xl font-bold text-white">聯誼花絮</h1>
            <p className="mt-4 text-lg text-white/80">精彩活動回顧，記錄每一個美好的相遇時刻</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {articles.map((article) => (
              <a key={article.title} href={LINE_URL} className="group overflow-hidden rounded-2xl bg-white shadow-soft transition hover:shadow-lg">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src={article.img}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-plum/40">{article.date}</p>
                  <h2 className="mt-1 text-sm font-semibold leading-5 text-plum line-clamp-2">{article.title}</h2>
                  <p className="mt-2 text-xs leading-5 text-plum/60 line-clamp-2">{article.excerpt}</p>
                  <p className="mt-3 text-xs font-semibold text-rose">查看花絮 »</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={LINE_URL} className="inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
              加LINE參加下一場活動
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
