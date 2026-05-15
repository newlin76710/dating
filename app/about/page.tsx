import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '關於娜米｜戀愛小秘書娜米｜用數據幫你找對象',
  description: '最專業的紅娘 / 兩性議題分析專家 / 留美MBA企管碩士 / 彩虹數字諮詢師',
  openGraph: {
    title: '關於娜米 — 戀愛小秘書娜米',
    description: '最專業的紅娘 / 兩性議題分析專家 / 留美MBA企管碩士 / 彩虹數字諮詢師',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = 'https://ek21.com/dating/wp-content/uploads/';

const brands = [
  {
    img: BASE + '2023/04/256px.png',
    name: '尋夢園聊天室',
    desc: '全台最大匿名聊天室，擁有200萬會員和上百間主題聊天室，唱歌競賽、匿名交友',
  },
  {
    img: BASE + '2023/04/尋夢新聞.001.png',
    name: '尋夢新聞',
    desc: '最新最熱門的新聞 - 時尚、娛樂、科技、動漫、遊戲、健康、美食，每月瀏覽：300萬人次',
  },
  {
    img: BASE + '2023/04/eros主題派對跨年版-02-1024x1024.png',
    name: 'eros主題派對',
    desc: '交友聯誼線下活動，10萬個實名認證會員，各種不同的主題活動，讓上班族輕鬆交友',
  },
  {
    img: BASE + '2023/04/QQ20230411-123409@2x.png',
    name: '戀愛小秘書',
    desc: '戀愛疑難雜症諮詢，聯誼約會形象改造，自媒體、影音分享，異業合作代言',
  },
];

const socials = [
  {
    logo: BASE + '2023/09/20230714_娜米logo（無背景）.jpg',
    name: '官方網站',
    items: ['脫單秘笈', '戀愛數字', '男女會員'],
    url: 'https://ek21.com/dating/',
  },
  {
    logo: BASE + '2023/09/Facebook-logo-500x313-1-300x188.png',
    name: 'Facebook',
    items: ['戀愛金句', '時事觀察', '生活圖文'],
    url: 'https://www.facebook.com/datenami/',
  },
  {
    logo: BASE + '2023/09/Line-Logo-500x281-1.png',
    name: 'LINE@',
    items: ['諮詢服務', '會員活動', '活動分享'],
    url: LINE_URL,
  },
  {
    logo: BASE + '2023/09/youtube-logo-2431-e1694234593807-80x60.png',
    name: 'YouTube',
    items: ['教學影片', '服務介紹', '留言導流'],
    url: 'https://www.youtube.com/@datenami',
  },
  {
    logo: BASE + '2023/09/Instagram-Logo-500x281-1.png',
    name: 'Instagram',
    items: ['教學影片', '生活圖文', '訊息導流'],
    url: 'https://www.instagram.com/datenami/',
  },
  {
    logo: BASE + '2023/09/627bb8132bc3a3762a1d0b98-1024x438.png',
    name: 'TikTok',
    items: ['教學影片', '服務介紹', '訊息導流'],
    url: 'https://www.tiktok.com/@datnami',
  },
];

const services = [
  { value: '實名會員超過10萬人' },
  { value: '每月瀏覽數5萬人次' },
  { value: '聯誼、約會、形象改造 撰寫專欄、拍攝影片' },
  { value: '解決戀愛各式疑難雜症' },
];

const experienceImgs = [
  BASE + '2023/04/截圖-2023-04-20-上午11.46.22-326x245.png',
  BASE + '2023/04/50170532_10156997355297451_7520191897948651520_n-326x245.jpeg',
  BASE + '2023/04/49840178_10156997355262451_8620086400584253440_n.jpeg',
  BASE + '2023/04/QQ20230413-152348@2x.png',
  BASE + '2023/04/QQ20230413-152207@2x.png',
  BASE + '2023/04/QQ20230413-152321@2x.png',
  BASE + '2023/04/IMG_1230-scaled.jpg',
  BASE + '2023/04/IMG_9750-scaled.jpg',
  BASE + '2023/04/2.jpg',
];

const products = [
  { img: BASE + '2023/04/LINE_ALBUM_230411-852x1024.jpg', name: '男性馬卡' },
  { img: BASE + '2023/04/IMG_7396.jpg', name: '蹦薏仁' },
  { img: BASE + '2023/04/335834930_915559006252207_1753421793600142753_n.jpeg', name: '私密清潔' },
  { img: BASE + '2023/04/IMG_7405.jpg', name: '鮮魷脆片' },
  { img: BASE + '2023/04/IMG_7912.jpg', name: '男性洗面乳' },
  { img: BASE + '2023/04/LINE_ALBUM_230320_67.jpg', name: '女性服飾' },
  { img: BASE + '2023/04/nnnn.jpg', name: '運動內衣' },
  { img: BASE + '2023/04/1.jpeg', name: '聊天機器人' },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>

        {/* ── Hero ── */}
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src={BASE + '2023/03/500x500_4.jpg'}
                  alt="戀愛小秘書娜米"
                  className="h-64 w-64 rounded-full object-cover shadow-lg lg:h-80 lg:w-80"
                />
              </div>
              {/* Text */}
              <div className="text-center lg:text-left">
                <p className="text-lg font-semibold" style={{ color: '#FF93A6' }}>最專業的紅娘</p>
                <h1 className="mt-1 text-4xl font-bold lg:text-5xl" style={{ color: '#049089' }}>
                  戀愛小秘書 娜米
                </h1>
                <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
                  {['兩性議題分析專家', '留美MBA企管碩士', '交友聊天室第二代', '彩虹數字諮詢師', '花精療癒師'].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full px-4 py-1.5 text-sm font-medium text-white"
                      style={{ background: '#049089' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="mt-6 space-y-2 text-sm leading-7 text-gray-600 text-left">
                  <li>● 善於觀察，對於感性的情緒、感受很敏銳</li>
                  <li>● 具有理性的管理、創新、數據分析能力</li>
                  <li>● 喜歡分享生活中關於戀愛的小發現</li>
                </ul>
                <a
                  href={LINE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: '#2DC861' }}
                >
                  加 LINE 免費諮詢
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 尋夢園品牌 ── */}
        <section className="py-14 bg-gray-50">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              尋夢園品牌
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {brands.map((b) => (
                <div key={b.name} className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <div className="flex h-20 w-20 items-center justify-center overflow-hidden">
                    <img src={b.img} alt={b.name} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{b.name}</h3>
                  <p className="mt-2 text-xs leading-5 text-gray-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 社群平台 ── */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              戀愛小秘書 社群平台
            </h2>
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-5 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition hover:shadow-md"
                >
                  <div className="flex h-10 w-full items-center justify-center overflow-hidden">
                    <img src={s.logo} alt={s.name} className="h-full w-auto max-w-full object-contain" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-gray-900">{s.name}</h3>
                  <ul className="mt-2 space-y-0.5">
                    {s.items.map((item) => (
                      <li key={item} className="text-xs text-gray-500">{item}</li>
                    ))}
                  </ul>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 團隊服務 ── */}
        <section className="py-14" style={{ background: '#D2E0DE' }}>
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              戀愛小秘書團隊服務
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div
                  key={s.value}
                  className="rounded-xl bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                >
                  <p className="text-base font-bold leading-7" style={{ color: '#049089' }}>{s.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 娜米的經歷 ── */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              娜米的經歷
            </h2>
            <div className="grid grid-cols-3 gap-3">
              {experienceImgs.map((src, i) => (
                <div key={i} className="overflow-hidden rounded-lg aspect-[4/3]">
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 代言經歷 ── */}
        <section className="py-14 bg-gray-50">
          <div className="mx-auto max-w-[900px] px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="mb-6 text-2xl font-bold" style={{ color: '#049089' }}>代言經歷</h2>
            <p className="text-sm leading-8 text-gray-600">
              娜米擔任共享電動機車代言人，身兼廣告模特兒，拍攝精彩的形象影片廣告、靜態看板廣告，以及參與記者發表會。
            </p>
          </div>
        </section>

        {/* ── 戀愛密碼生活館 ── */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-4 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              戀愛密碼生活館
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-gray-500">
              娜米專注於提升個人魅力和愛情運勢，精選出一系列適合單身男女的商品，以異業合作的方式呈現給大家。省下尋找商品的時間，一起打造個人魅力，成就愛情！
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {products.map((p) => (
                <div key={p.name} className="overflow-hidden rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <div className="aspect-square overflow-hidden">
                    <img src={p.img} alt={p.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3 text-center">
                    <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 主持經歷 ── */}
        <section className="py-14 bg-gray-50">
          <div className="mx-auto max-w-[900px] px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="mb-6 text-2xl font-bold" style={{ color: '#049089' }}>主持經歷</h2>
            <p className="text-sm leading-8 text-gray-600">
              娜米擁有豐富的主持經驗，曾主持過多場活動。其中包括 Facebook 在台灣舉辦的大型 Developer Circle 活動、資策會舉辦的 Ideas Show 競賽，以及無人機、機器人、智慧音箱等大小型產品發佈記者會等。
            </p>
          </div>
        </section>

        {/* ── 關於創辦人娜米 ── */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-[900px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-8 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              關於創辦人娜米
            </h2>
            <div className="prose prose-sm max-w-none text-gray-600 leading-8">
              <p>
                Hi！我是娜米，A型雙子座，美國丹佛大學MBA碩士，是「戀愛小秘書」與「eros主題派對」的創辦人。
              </p>
              <p className="mt-4">
                在海外留學期間，我發現外國人真的熱愛交友，社交生活豐富，不管是跟人攀談、搭訕都很自然，很容易就散發自信跟魅力。相比之下，台灣上班族的生活圈比較小，私人社交活動也較少，較難認識新朋友與異性。
              </p>
              <p className="mt-4">
                所以我決定創辦「戀愛小秘書」與「eros主題派對」，幫助大家更認識自己，找到自我魅力，透過真實的互動找到對的另一半。
              </p>
            </div>
          </div>
        </section>

        {/* ── Contact CTA ── */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">與娜米合作</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              商業合作請寄信至 mkt@ek21.com，或直接加官方 LINE 諮詢。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ color: '#049089' }}
              >
                加 LINE 免費諮詢
              </a>
              <a
                href="mailto:mkt@ek21.com"
                className="rounded-full border border-white/30 px-8 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                寄信聯絡
              </a>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
