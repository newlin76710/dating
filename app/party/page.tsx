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
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const categories = [
  {
    id: '手作體驗',
    icon: '✂️',
    activities: [
      { title: '彩繪馬卡龍｜玩美巴黎風', img: BASE + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg' },
      { title: '手作玫瑰蘋果塔｜護理師之約', img: BASE + '2023/09/baking-01.jpg' },
      { title: '浮游花手作趣｜療癒的浪漫小物', img: BASE + '2023/09/baking-01.jpg' },
    ],
  },
  {
    id: '娛樂遊戲',
    icon: '🎮',
    activities: [
      { title: 'Game START 派對｜電玩對對碰', img: BASE + '2024/01/gamestart.png' },
      { title: '桌遊派對｜天生絕配', img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg' },
      { title: '密室逃脫聯誼｜燒腦刺激', img: BASE + '2023/09/baking-01.jpg' },
    ],
  },
  {
    id: '廚藝美食',
    icon: '🍳',
    activities: [
      { title: '濃情蜜意巧克力蛋糕', img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg' },
      { title: '鮭魚料理｜吃心絕對', img: BASE + '2024/03/wine2.jpg' },
      { title: '壽司DIY｜和風創意', img: BASE + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg' },
    ],
  },
  {
    id: '微醺派對',
    icon: '🍷',
    activities: [
      { title: '愛情調酒派對｜微醺午後時光', img: BASE + '2024/03/wine2.jpg' },
      { title: '品酒交流派對', img: BASE + '2024/03/wine2.jpg' },
      { title: '咖啡拉花體驗', img: BASE + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg' },
    ],
  },
  {
    id: '舞蹈音樂',
    icon: '💃',
    activities: [
      { title: '浪漫探戈派對｜阿根廷之夜', img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg' },
      { title: 'K歌派對｜情聲綿綿', img: BASE + '2023/12/5428FC8C-F122-41da-9737-D5FA3F69EA5A.png' },
      { title: '非誠勿擾｜Speed Dating', img: BASE + '2024/04/S__18202927_0.jpg' },
    ],
  },
  {
    id: '戶外郊遊',
    icon: '⛰️',
    activities: [
      { title: '淡水河畔騎車趣', img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg' },
      { title: '水上騎馬打仗｜泳池Party', img: BASE + '2023/09/baking-01.jpg' },
      { title: '七夕の園遊祭', img: BASE + '2024/04/S__18202927_0.jpg' },
    ],
  },
  {
    id: '寵物主題',
    icon: '🐱',
    activities: [
      { title: '喵星人派對｜貓咪咖啡廳', img: BASE + '2023/07/MTXX_MR20230715_180309740.jpg' },
      { title: '多肉植物｜愛在蔓延時', img: BASE + '2023/09/baking-01.jpg' },
      { title: '花藝體驗｜玫瑰情人', img: BASE + '2023/11/pngtree-the-french-eiffel-tower-and-macarons-on-table-top-image_13161076.jpg' },
    ],
  },
  {
    id: '形象提升',
    icon: '👑',
    activities: [
      { title: '1對1 形象風格打造', img: BASE + '2024/04/image-consult-1v1.jpg' },
      { title: '社群形象照服務', img: BASE + '2024/04/image-photo.webp' },
      { title: '內在涵養提升課程', img: BASE + '2024/04/image-course.webp' },
    ],
  },
];

const regions = ['台北', '新竹', '台中', '台南', '高雄'];

const steps = [
  { num: '01', title: '加入官方LINE', desc: '加入戀愛小秘書的官方LINE帳號\nLINE ID：@datenami' },
  { num: '02', title: '填寫個人資料', desc: '依照流程填寫個人資料，等候戀愛小秘書進行資料驗證與配對數據分析' },
  { num: '03', title: '參加單身聯誼活動', desc: '資料驗證完成，開始安排約會，參加各種有趣的單身聯誼活動！' },
];

export default function PartyPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero */}
        <section>
          <a href={LINE_URL} className="relative block w-full overflow-hidden aspect-[16/6]">
            <img
              src={BASE + '2023/09/baking-01.jpg'}
              alt="單身聯誼活動"
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading="eager"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-plum/50">
              <h1 className="text-4xl font-bold text-white md:text-5xl">單身聯誼活動</h1>
              <p className="mt-3 text-lg text-white/90">多元主題 × 精彩有趣 × 輕鬆脫單</p>
            </div>
          </a>

          <div className="sticky top-[57px] z-20 border-b border-plum/10 bg-white/95 backdrop-blur sm:top-[65px]">
            <div className="mx-auto grid max-w-6xl grid-cols-4 gap-2 px-3 py-2.5 sm:flex sm:justify-center sm:gap-2 sm:px-6 sm:py-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex flex-col items-center gap-0.5 rounded-xl border border-plum/10 bg-white/60 px-1 py-2 text-center text-plum/70 transition hover:border-rose hover:bg-rose/5 hover:text-rose sm:flex-row sm:gap-1.5 sm:rounded-full sm:px-4 sm:py-2"
                >
                  <span className="text-lg leading-none sm:text-base">{cat.icon}</span>
                  <span className="text-[10px] font-semibold leading-tight sm:text-sm">{cat.id}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 活動類別 */}
        <section className="mx-auto max-w-6xl px-4 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
          <div className="space-y-10 sm:space-y-14">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-28 sm:scroll-mt-32">
                <div className="flex items-center gap-2 border-b border-plum/10 pb-3">
                  <span className="text-lg">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-plum sm:text-2xl">{cat.id}</h2>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-5">
                  {cat.activities.map((act) => (
                    <a key={act.title} href={LINE_URL} className="group overflow-hidden rounded-xl bg-white shadow-soft transition hover:shadow-lg sm:rounded-2xl">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={act.img} alt={act.title} className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                      </div>
                      <div className="p-3 sm:p-4">
                        <p className="text-xs font-semibold leading-5 text-plum sm:text-sm">{act.title}</p>
                        <p className="mt-1 text-[10px] font-medium text-rose sm:mt-2 sm:text-xs">查看活動詳情 »</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 地區選擇 */}
        <section className="bg-white/70 py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum md:text-4xl">現在就預約參加活動吧！</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {regions.map((r) => (
                <a key={r} href={LINE_URL} className="rounded-full border border-plum/20 bg-white px-8 py-2.5 text-sm font-semibold text-plum transition hover:border-rose hover:text-rose">
                  {r}
                </a>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href={LINE_URL} className="inline-flex rounded-full bg-rose px-10 py-4 text-sm font-semibold text-white transition hover:opacity-90">
                我要參加
              </a>
            </div>
          </div>
        </section>

        {/* 3步驟 */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-3xl font-bold tracking-tight text-plum">只要 3 步驟 輕鬆認識異性</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <article key={s.num} className="rounded-3xl bg-white p-8 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-rose">{s.num}</p>
                  <h3 className="mt-4 text-xl font-semibold text-plum">{s.title}</h3>
                  <p className="mt-4 whitespace-pre-line text-sm leading-7 text-plum/75">{s.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-plum py-16">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-8 lg:px-10">
            <h2 className="text-3xl font-bold text-white">戀愛的事更要讓專業的來！</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/75">
              積極參加活動，輕鬆突破單身圈！小秘書幫您策劃活動，人來就好免煩惱～讓您專注在深度交流，獲得高品質互動經驗。馬上聯絡戀愛小秘書娜米，今年穩交不是夢！
            </p>
            <a href={LINE_URL} className="mt-8 inline-flex rounded-full bg-rose px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90">
              加LINE洽詢單身聯誼活動
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
