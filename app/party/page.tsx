import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { events, getEvent } from '@/lib/events';
import { getArticle } from '@/lib/articles';
import { HeroSlides } from '@/components/hero-slides';
import { VideoCarousel } from '@/components/video-carousel';

export const metadata: Metadata = {
  title: '單身聯誼 — 戀愛小秘書推薦的聯誼活動 台北聯誼 高雄聯誼',
  description: '戀愛小秘書娜米提供台北、新竹、台中、台南、高雄各地單身聯誼活動，多元主題讓單身男女自然互動，輕鬆脫單！',
  openGraph: {
    title: '單身聯誼 — 戀愛小秘書娜米',
    description: '多元有趣的單身聯誼活動，涵蓋手作體驗、美食廚藝、戶外郊遊等主題，讓單身男女在輕鬆氛圍中相識。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

/** Cards whose theme matches one of our 20 real 聯誼花絮 posts link straight into it;
 *  everything else (activity types we haven't built a dedicated page for) falls back
 *  to the /events listing, same as the real site's own long-tail activity pages would. */
function eventHref(slug: string | null) {
  if (!slug) return '/events';
  if (getArticle(slug)) return `/party/${slug}`;
  if (getEvent(slug)) return `/events/${slug}`;
  return '/events';
}

interface Card {
  title: string;
  img: string;
  slug: string | null;
}

function ActivityCard({ card }: { card: Card }) {
  return (
    <a href={eventHref(card.slug)} className="block group">
      <div className="overflow-hidden rounded">
        <img
          src={card.img}
          alt={card.title}
          className="w-full aspect-video object-cover transition duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 text-[13px] font-medium leading-5 text-gray-800 line-clamp-2 group-hover:text-[#049089] transition-colors">
        {card.title}
      </h3>
      <p className="mt-1 text-xs font-medium" style={{ color: '#FF93A6' }}>
        參加單身聯誼 »
      </p>
    </a>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold text-gray-800">{children}</h2>
      <div className="mt-1.5 h-0.5 w-14 rounded" style={{ background: '#049089' }} />
    </div>
  );
}

const INDOOR: Card[] = [
  { title: '推理冒險｜身臨其境的角色扮演遊戲', img: BASE + '2025/02/mystery-adventure.jpg', slug: 'mystery-adventure' },
  { title: '酒精墨水畫｜藝術過程浪漫的節奏', img: BASE + '2025/02/alcohol-ink-art.png', slug: 'alcohol-ink-art' },
  { title: '動感閃動格子｜未來科技派對遊戲', img: BASE + '2025/02/flash-grid-party.png', slug: 'flash-grid-party' },
  { title: '攝影聯誼｜鏡頭下的愛情曝光', img: BASE + '2024/09/photography-dating.jpg', slug: 'photography-dating' },
  { title: '浪漫咖啡香｜啡嚐不可', img: BASE + '2024/09/coffee-workshop.jpg', slug: 'coffee-workshop' },
  { title: '夏日創意芬芳｜手作乾燥花香蠟燭', img: BASE + '2024/08/fragrant-candle.jpg', slug: 'fragrant-candle' },
];

const OUTDOOR: Card[] = [
  { title: '愜意情調｜滿天星花賞夜趣', img: BASE + '2023/08/stargazing-night.png', slug: 'stargazing-night' },
  { title: '轉動幸福｜鶯歌窯城手拉胚', img: BASE + '2023/07/pottery-workshop.webp', slug: 'pottery-workshop' },
  { title: '夕陽情懷｜淡水河畔騎車趣', img: BASE + '2023/07/cycling-date.jpg', slug: 'cycling-date' },
];

const KAOHSIUNG: Card[] = [
  { title: '濃情蜜意巧克力蛋糕', img: BASE + '2023/07/chocolate-cake.jpg', slug: 'chocolate-cake-baking' },
  { title: '遊艇派對｜海上的浪漫', img: BASE + '2019/04/yacht-party.jpg', slug: 'yacht-party' },
  { title: '愛意盎然｜多肉植物DIY', img: BASE + '2023/07/succulent-diy-khh.png', slug: 'succulent-planting' },
  { title: 'K歌派對-歌聲傳情', img: BASE + '2024/07/karaoke-khh.png', slug: 'k-song-party' },
  { title: '水上騎馬打仗 清涼刺激的泳池Party', img: BASE + '2023/08/pool-party-battle.jpg', slug: 'pool-party-water-battle' },
  { title: '一對一精緻客製化專屬約會', img: BASE + '2023/07/custom-1on1-date.jpg', slug: 'custom-1on1-date' },
];

const REGIONAL: Card[] = [
  { title: '新竹聯誼活動｜萬聖節變裝派對', img: BASE + '2023/10/hsinchu-halloween.jpg', slug: 'hsinchu-halloween' },
  { title: '台南聯誼｜密室逃脫聯誼', img: BASE + '2023/08/escape-room-challenge.jpg', slug: 'escape-room-brain-challenge' },
  { title: '台中聯誼活動｜平價優質的台中未婚聯誼', img: BASE + '2023/09/taichung-party.png', slug: null },
];

const ACTIVITY_LIST: Card[] = [
  { title: '夏日創意芬芳｜手作乾燥花香蠟燭', img: BASE + '2024/08/fragrant-candle.jpg', slug: 'fragrant-candle' },
  { title: '一對一精緻客製化專屬約會', img: BASE + '2023/07/custom-1on1-date.jpg', slug: 'custom-1on1-date' },
  { title: 'Game START 派對｜電玩對對碰', img: BASE + '2023/12/game-start-2.png', slug: 'game-start-party-highlight' },
  { title: '彩繪馬卡龍｜玩美巴黎風', img: BASE + '2023/11/macaron-painting.jpg', slug: 'macaron-painting' },
  { title: '排約或約會，高手會怎麼做？', img: BASE + '2023/07/dating-lecture.jpg', slug: null },
  { title: '浪漫探戈派對｜阿根廷之夜', img: BASE + '2018/06/tango-argentina.jpg', slug: 'tango-party' },
  { title: '手作玫瑰蘋果塔｜與護理師之約', img: BASE + '2023/09/apple-tart-nurse.jpg', slug: 'apple-tart-nurse' },
  { title: '愛情調酒派對-微醺午後時光', img: BASE + '2024/03/wine2.jpg', slug: 'cocktail-party' },
  { title: 'FUEGO巧克力傳情', img: BASE + '2023/07/chocolate-cake.jpg', slug: 'chocolate-cake-baking' },
  { title: '派對遊戲 桌遊 聯誼 愛的冒險邂逅', img: BASE + '2024/07/board-games.png', slug: 'perfect-match-boardgame' },
  { title: '推理冒險｜身臨其境的角色扮演遊戲', img: BASE + '2025/02/mystery-adventure.jpg', slug: 'mystery-adventure' },
  { title: '浪漫Swing Dance｜讓我們舞在一起', img: BASE + '2018/06/tango-argentina.jpg', slug: 'swing-dance' },
];

const WORKSHOPS: Card[] = [
  { title: '「一秒看懂誰喜歡你」關乎男女的戀愛講堂', img: BASE + '2023/07/workshop-attraction.jpg', slug: null },
  { title: '川字肌開啟新戀情？增肌減脂 板橋健身房推薦', img: BASE + '2024/05/workshop-fitness.jpg', slug: null },
  { title: '跟女生聊天好難❓六個「情境對話法」學起來', img: BASE + '2024/03/workshop-conversation.jpeg', slug: null },
];

// 聯誼活動報導：真實文章中，我們已建好詳細內容的部分
const REPORT_FEATURED = ['apple-tart-nurse', 'cocktail-party', 'game-start-party-highlight', 'chocolate-cake-baking', 'succulent-planting', 'k-song-party']
  .map((slug) => events.find((e) => e.slug === slug)!);

// 報導列表：真實文章標題，部分已有詳細頁、部分尚未建立（連回 /events 總覽）
const REPORT_LIST: { title: string; slug: string | null }[] = [
  { title: '密室逃脫聯誼，燒腦刺激的遊戲', slug: 'escape-room-brain-challenge' },
  { title: '精彩花絮｜愛情星座聯誼', slug: null },
  { title: '萬聖節翻糖 Party，不給糖就搗蛋', slug: null },
  { title: '當咖啡碰上文青，愛情的魔法棒', slug: null },
  { title: '烹然心動｜回鮭愛的原點', slug: 'salmon-origin-of-love' },
  { title: '鏢準情人｜命中愛情紅心', slug: 'dart-love-target' },
  { title: '外型關鍵的黃金三秒', slug: null },
  { title: '蜜糖吐司手作趣', slug: 'honey-toast-workshop' },
  { title: '初春浪漫海芋季，戀情開花好時機', slug: null },
  { title: '陽明春天｜與幸福有約', slug: null },
  { title: '鮭魚料理｜吃心絕對', slug: 'salmon-cuisine-heart' },
  { title: '美味料理｜幸福好味道', slug: 'salmon-happy-flavor' },
];

const VIDEO_SLIDES = [
  { img: BASE + '2023/03/01.jpeg', youtubeId: 'ZMhXI9SFmK0' },
  { img: BASE + '2023/03/02.jpeg', youtubeId: '_Pnx7ugkRNY' },
  { img: BASE + '2023/03/03.jpeg', youtubeId: 'KpfWwRtExxU' },
  { img: BASE + '2023/03/04.jpeg', youtubeId: 'zA4Dq-0WTns' },
  { img: BASE + '2023/03/06.jpeg', youtubeId: 'GMen8wIEA3Q' },
];

export default function PartyPage() {
  return (
    <SiteShell>
      <main>
        {/* ── 1. TOP HERO SLIDER ── */}
        <HeroSlides
          slides={[
            {
              img: BASE + '2023/07/ev_f567e1223d_1521796535.jpg',
              title: '【單身聯誼】一起搖擺吧',
              desc: '微醺的氛圍下，自在與異性互動。不會跳也沒關係，表現真誠的你看起來更有吸引力。不須跳舞基礎、不須帶舞伴，不用怕沒人理。',
              href: LINE_URL,
            },
            {
              img: BASE + '2023/07/ev_e9c0cf47c6_1501489826.jpg',
              title: '【單身聯誼】Speed Dating',
              desc: '根據您的喜好和篩選條件，幫您精心安排一對一約會對象。透過近距離互動，一邊享用下午茶，一邊輕鬆聊天，找到心靈契合的另一半。',
              href: LINE_URL,
            },
            {
              img: BASE + '2023/07/ev_ecbfd5e3b9_1546591688.jpg',
              title: '【單身聯誼】共享自然風光的輕鬆時光',
              desc: '騎著自行車，感受輕鬆自在的時刻。享受自然的氛圍，放鬆心情，遠離日常的壓力，尋找內心的寧靜。',
              href: LINE_URL,
            },
            {
              img: BASE + '2023/09/主題式聯誼直式.jpg',
              title: '多元有趣的單身聯誼活動',
              href: LINE_URL,
            },
          ]}
        />

        {/* ── 2. HERO HEADING ── */}
        <div className="bg-white py-10 text-center">
          <h1 className="text-xl font-bold text-gray-800 sm:text-2xl lg:text-3xl">
            多元有趣的單身聯誼活動
          </h1>
          <p className="mx-auto mt-3 max-w-2xl px-4 text-sm leading-6 text-gray-500">
            豐富您的社交生活，涵蓋室內、戶外、手作、美食、舞蹈等多元主題，讓單身男女在輕鬆有趣的氛圍中自然相識，輕鬆脫單！
          </p>
        </div>

        {/* ── 3. 室內聯誼活動 ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】室內聯誼活動</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {INDOOR.map((c) => <ActivityCard key={c.title} card={c} />)}
            </div>
          </div>
        </section>

        {/* ── 4. 戶外聯誼活動 ── */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】戶外聯誼活動</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {OUTDOOR.map((c) => <ActivityCard key={c.title} card={c} />)}
            </div>
          </div>
        </section>

        {/* ── 5. 高雄聯誼活動 ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】高雄聯誼活動</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {KAOHSIUNG.map((c) => <ActivityCard key={c.title} card={c} />)}
            </div>
          </div>
        </section>

        {/* ── 6. 各地聯誼活動 (新竹／台南／台中) ── */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
              {REGIONAL.map((c, i) => (
                <div key={c.title}>
                  <SectionHeading>
                    【單身聯誼】{i === 0 ? '新竹聯誼活動' : i === 1 ? '台南聯誼' : '台中聯誼活動'}
                  </SectionHeading>
                  <ActivityCard card={c} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7. 聯誼活動列表 ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼】聯誼活動列表</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {ACTIVITY_LIST.map((c, i) => <ActivityCard key={c.title + i} card={c} />)}
            </div>
          </div>
        </section>

        {/* ── 8. 工作坊 ── */}
        <section className="bg-white py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼工作坊】形象改造、時尚顧問</SectionHeading>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {WORKSHOPS.map((c) => (
                <a key={c.title} href={LINE_URL} className="block group">
                  <div className="overflow-hidden rounded">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="w-full aspect-video object-cover transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="mt-2 text-[13px] font-medium leading-5 text-gray-800 line-clamp-2 group-hover:text-[#049089] transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium" style={{ color: '#FF93A6' }}>
                    加LINE免費諮詢 »
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. 聯誼活動報導 ── */}
        <section className="bg-gray-50 py-8">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <SectionHeading>【單身聯誼推薦】聯誼活動報導</SectionHeading>
            <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {REPORT_FEATURED.map((e) => (
                <ActivityCard key={e.slug} card={{ title: e.title, img: e.img, slug: e.slug }} />
              ))}
            </div>
            <div className="divide-y divide-gray-200">
              {REPORT_LIST.map((r) => (
                <a
                  key={r.title}
                  href={eventHref(r.slug)}
                  className="flex items-center gap-2 py-2.5 text-sm text-gray-700 transition-colors hover:text-[#049089]"
                >
                  <span className="text-gray-400">›</span>
                  {r.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. 3-STEP PROCESS ── */}
        <section className="bg-white py-14">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base font-bold text-gray-800">只要 3 步驟</p>
            <h2 className="mt-1 text-xl font-bold text-gray-800 sm:text-2xl">輕鬆認識異性</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {[
                {
                  num: '1',
                  title: '加入官方LINE',
                  desc: '加入 LINE ID：@datenami 或掃 QR Code，即可免費諮詢',
                },
                {
                  num: '2',
                  title: '填寫個人資料',
                  desc: '完成實名認證、填寫詳細個人資料及配對條件，大數據分析最適合你的對象',
                },
                {
                  num: '3',
                  title: '參加單身聯誼活動',
                  desc: '依照你的喜好與時間，戀愛小秘書為你安排最合適的聯誼活動',
                },
              ].map((s) => (
                <div key={s.num} className="flex flex-col items-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white"
                    style={{ background: '#049089' }}
                  >
                    {s.num}
                  </div>
                  <h3 className="mt-4 font-bold text-gray-800">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-500">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. VIDEO SECTION ── */}
        <section className="bg-gray-50 py-10">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-xl font-bold text-gray-800">娜米 X 單身聯誼活動介紹</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500">
                娜米透過影片跟大家介紹我們的交友服務是怎麼進行，單身聯誼有哪些注意事項，及交友小技巧！
              </p>
            </div>
            <VideoCarousel slides={VIDEO_SLIDES} />
          </div>
        </section>

        {/* ── 12. TRUST & CREDENTIALS ── */}
        <section className="bg-white pt-12">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
              <h2 className="text-2xl font-bold leading-snug sm:text-3xl" style={{ color: '#7fbcc4' }}>
                戀愛小秘書的專業團隊<br />嚴選單身聯誼活動<br />值得信任，讓你放心
              </h2>
              <p className="text-sm leading-7" style={{ color: '#049089' }}>
                Hi！我是戀愛小秘書，娜米，我知道找對象從來就不是一件簡單的事，我們的專業團隊會透過
                <strong>一對一的諮詢診斷</strong>，為你<strong>量身訂制</strong>一套戀愛攻略，並以朋友的角度提供約會建議，協助你發展
                <strong>長期且穩定的伴侶關係</strong>。
              </p>
            </div>
          </div>

          <div className="relative mx-auto mt-10 max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <img
              src={BASE + '2023/03/500x500_2.jpg'}
              alt="戀愛小秘書娜米"
              className="absolute -left-2 bottom-0 hidden h-40 w-40 rounded-full border-4 border-white object-cover shadow-lg sm:block lg:h-48 lg:w-48"
              loading="lazy"
            />
            <img
              src={BASE + '2023/03/500x500_1.jpg'}
              alt="戀愛小秘書娜米"
              className="absolute -right-2 bottom-0 hidden h-40 w-40 rounded-full border-4 border-white object-cover shadow-lg sm:block lg:h-48 lg:w-48"
              loading="lazy"
            />
            <div
              className="rounded-2xl px-6 py-10 sm:px-28 lg:px-44"
              style={{ backgroundColor: '#D2E0DE' }}
            >
              <div className="grid grid-cols-1 gap-x-10 gap-y-3 text-sm leading-6 text-gray-700 sm:grid-cols-2">
                {[
                  '戀愛小秘書的專業團隊擁有超過30年的業界經驗',
                  '所有會員都經過嚴格審查、實名認證、精心篩選',
                  '已認證的會員資料庫超過10萬筆，數據量充足',
                  '運用大數據人格分析系統，做最精準的媒合配對',
                  '安排一對一約會，舉辦豐富多元的主題聯誼活動',
                  '高度客製化約會安排，從「契合度」提高速配率',
                  '傳授與異性聊天的技巧，讓你在聯誼活動中累積自信',
                  '針對每位會員給予個人形象改造建議，輕鬆吸引異性目光',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="mt-0.5 shrink-0 text-base" style={{ color: '#049089' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. CTA BANNER ── */}
        <section className="flex flex-col items-stretch overflow-hidden sm:flex-row" style={{ backgroundColor: '#D2E0DE' }}>
          <div
            className="hidden sm:block sm:w-1/3"
            style={{
              backgroundImage: `url(${BASE}2023/07/LINE_ALBUM_230320_81.jpg)`,
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          <div className="w-full px-6 py-14 sm:w-2/3 sm:px-12 lg:px-16">
            <p className="text-sm font-semibold" style={{ color: '#049089' }}>戀愛的事更要讓專業的來！</p>
            <h2 className="mt-3 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
              戀愛小秘書推薦的<br />🌹【單身聯誼】🌹<br />讓你佛系交友也脫單
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-gray-700">
              積極參加活動，輕鬆突破單身圈！小秘書幫您策劃活動，人來就好免煩惱～讓您專注在深度交流，獲得高品質互動經驗。馬上聯絡戀愛小秘書娜米，今年穩交不是夢！
            </p>
            <a
              href={LINE_URL}
              className="mt-6 inline-block text-sm font-semibold uppercase tracking-widest text-white transition hover:opacity-90"
              style={{ backgroundColor: '#1A1A1A', padding: '16px 70px' }}
            >
              加LINE洽詢單身聯誼活動
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
