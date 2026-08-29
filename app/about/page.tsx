import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { VideoCarousel } from '@/components/video-carousel';

export const metadata: Metadata = {
  title: '關於娜米｜戀愛小秘書娜米｜用數據幫你找對象',
  description: '最專業的紅娘 / 兩性議題分析專家 / 留美MBA企管碩士 / 彩虹數字諮詢師',
  openGraph: {
    title: '關於娜米 — 戀愛小秘書娜米',
    description: '最專業的紅娘 / 兩性議題分析專家 / 留美MBA企管碩士 / 彩虹數字諮詢師',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const PARTNER_LINE_URL = 'https://line.me/R/ti/p/@121teviv';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

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
    logo: BASE + '2023/09/20230714_娜米logo（無背景）.png',
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

const recommendations = [
  { quote: '作為一個網路創業家，我對娜米的經營的用心和細心深表敬意。娜米不斷努力鑽研和優化自己的服務', name: '謝綸', title: '電獺執行長' },
  { quote: '娜米提供了許多有價值的服務，從活動媒合到專業教練顧問諮詢，過程感受到她的在乎與耐心，提供客戶在幸福路上全方位的指引。', name: 'Kevin Lin', title: 'Fandora 行銷總監' },
  { quote: '娜米的網站不僅提供了許多優質的服務，而且也非常專業和用心。她不斷投入時間和精力來改進自己的技術和服務，以確保每一位用戶都能夠得到最好的體驗。', name: '曾少甫', title: '台灣好新聞 創始人' },
  { quote: '娜米是一個非常貼心的人，她親近人、不做作，她用專業的態度和專注的精神，為每一個人提供最好的服務。', name: '麗子老師', title: '彩虹數字學會 理事長' },
  { quote: '她不斷投入時間和精力來提高自己的服務水平，從行銷到技術，她都非常用心地進行優化和提升。', name: 'Dix Chen', title: 'UIUXCafe 執行長' },
  { quote: '娜米是一個非常有才華和用心的人，她不僅是一個平台，更是一個溫暖和有愛的家。', name: '林正立', title: '采童莊執行長' },
  { quote: '我真的被她的服務感動了。她非常用心地為每一個人提供最好的服務，細心地聆聽每個人的需求和願望。', name: '林昱廷', title: 'Mandarin Go 執行長' },
];

const playbookVideos = [
  { img: BASE + '2023/03/15-2.jpg', youtubeId: 'ARfYxw-dKdU' },
  { img: BASE + '2022/10/15-768x432.jpg', youtubeId: '_Pnx7ugkRNY' },
  { img: BASE + '2023/03/15-1-768x432.jpg', youtubeId: 'KpfWwRtExxU' },
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

        {/* ── 感謝各界人士推薦 ── */}
        <section className="py-14 bg-gray-50">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              感謝各界人士推薦
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {recommendations.map((r) => (
                <div key={r.name} className="rounded-2xl p-6" style={{ backgroundColor: '#D2E0DE' }}>
                  <p className="text-sm leading-7 text-gray-700">「{r.quote}」</p>
                  <p className="mt-4 text-sm font-bold text-gray-800">{r.name}</p>
                  <p className="text-xs text-gray-500">{r.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 娜米 X 戀愛教戰守則 ── */}
        <section className="py-14 bg-white">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-4 text-center text-2xl font-bold" style={{ color: '#049089' }}>
              娜米 X 戀愛教戰守則
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-sm leading-7 text-gray-500">
              娜米深刻了解單身朋友的情感困境，並親自錄製了許多線上教學影片，教大家應對各種愛情疑難雜症，如善待自己、建立良好的關係、維持長久的戀愛、解決感情危機等等。這些課程影片將幫助你找到愛情的關鍵，讓你在感情生活中更加自信，達到幸福美滿的人生。
            </p>
            <VideoCarousel slides={playbookVideos} />
          </div>
        </section>

        {/* ── Final CTA (品牌異業合作) ── */}
        <section className="flex flex-col items-stretch overflow-hidden sm:flex-row" style={{ backgroundColor: '#D2E0DE' }}>
          <div
            className="hidden sm:block sm:w-1/3"
            style={{
              backgroundImage: `url(${BASE}2023/03/QQ20230325-121403@2x.png)`,
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          <div className="flex w-full flex-col justify-center px-6 py-16 sm:w-2/3 sm:px-16 lg:px-24">
            <p className="text-sm font-semibold" style={{ color: '#049089' }}>現在就私訊娜米！</p>
            <h2 className="mt-3 text-3xl font-bold leading-snug text-gray-900 sm:text-4xl">
              讓脫單男女<br />看見好物
            </h2>
            <a
              href={PARTNER_LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: '#1A1A1A', padding: '18px 70px' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              加速曝光
            </a>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
