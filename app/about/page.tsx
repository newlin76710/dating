import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '與娜米合作｜戀愛小秘書娜米',
  description: '認識戀愛小秘書娜米：留美MBA企管碩士、彩虹數字諮詢師、交友聊天室第二代，10年以上兩性議題分析專家。',
  openGraph: {
    title: '與娜米合作 — 戀愛小秘書娜米',
    description: '最專業的紅娘 / 兩性議題分析專家 / 留美MBA企管碩士 / 彩虹數字諮詢師',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const IMG = 'https://ek21.com/dating/wp-content/uploads/';

const brands = [
  {
    img: IMG + '2023/04/256px.png',
    name: '尋夢園聊天室',
    stat: '200 萬名會員',
    desc: '台灣最大匿名聊天社群，100+ 個主題聊天室',
  },
  {
    img: IMG + '2023/04/尋夢新聞.001.png',
    name: '尋夢新聞',
    stat: '月均 300 萬瀏覽',
    desc: '娛樂、科技、遊戲、美食新聞平台',
  },
  {
    img: IMG + '2023/04/eros主題派對跨年版-02-1024x1024.png',
    name: 'eros 主題派對',
    stat: '10 萬名驗證會員',
    desc: '主題派對活動平台，線下交友聯誼',
  },
  {
    img: IMG + '2023/04/QQ20230411-123409@2x.png',
    name: '戀愛小秘書',
    stat: '專業配對諮詢',
    desc: '顧問諮詢、形象改造、內容創作',
  },
];

const socials = [
  {
    logo: IMG + '2023/09/Facebook-logo-500x313-1-300x188.png',
    name: 'Facebook',
    handle: 'datenami',
    desc: '戀愛語錄、時事話題',
    url: 'https://www.facebook.com/datenami/',
  },
  {
    logo: IMG + '2023/09/Line-Logo-500x281-1.png',
    name: 'LINE@',
    handle: '@datenami',
    desc: '一對一諮詢、會員活動',
    url: LINE_URL,
  },
  {
    logo: IMG + '2023/09/youtube-logo-2431-e1694234593807-80x60.png',
    name: 'YouTube',
    handle: '@datenami',
    desc: '戀愛教學影片',
    url: 'https://www.youtube.com/@datenami',
  },
  {
    logo: IMG + '2023/09/Instagram-Logo-500x281-1.png',
    name: 'Instagram',
    handle: 'datenami',
    desc: '精選活動花絮',
    url: 'https://www.instagram.com/datenami/',
  },
];

const stats = [
  { value: '100,000+', label: '驗證會員' },
  { value: '50,000+', label: '月均頁面瀏覽' },
  { value: '10 年+', label: '兩性議題研究' },
  { value: '4,000+', label: '成功配對案例' },
];

const timeline = [
  { year: '2013', event: '留美取得MBA，回台接手尋夢園聊天室，打造台灣最大匿名聊天社群（200萬會員）' },
  { year: '2014', event: '入選 AppWorks 加速器，創立 eros 主題派對交友平台，累積 100,000 驗證會員' },
  { year: '2018', event: '創辦尋夢新聞，月均 300 萬瀏覽量的新聞平台' },
  { year: '2020', event: '共同創辦彩虹數字學會，將數字學與兩性諮詢結合' },
  { year: '2021', event: '正式創立「戀愛小秘書」品牌，提供系統化戀愛配對與諮詢服務' },
  { year: '2023', event: '推出「戀愛會社」節目，用彩虹數字幫助更多人解析戀愛密碼' },
];

const endorsements = [
  {
    name: '謝綸',
    title: 'eDuo 執行長',
    quote: '娜米對服務品質的堅持與優化令人欽佩，是真正用心經營的創業者。',
    img: IMG + '2023/05/pexels-karolina-grabowska-7680143-1024x683.jpg',
  },
  {
    name: 'Kevin Lin',
    title: 'Fandora 行銷總監',
    quote: '娜米提供有溫度、有耐心的服務，是業界難得的專業紅娘。',
    img: IMG + '2023/05/pexels-samson-katt-5225483-1024x683.jpg',
  },
  {
    name: '曾少甫',
    title: '台灣好新聞創始人',
    quote: '以使用者為核心的專業精神，讓戀愛小秘書脫穎而出。',
    img: IMG + '2023/05/pexels-budgeron-bach-6532988-1024x683.jpg',
  },
  {
    name: '麗子老師',
    title: '彩虹數字學會理事長',
    quote: '娜米親切又專業，是數字學與兩性諮詢完美結合的典範。',
    img: IMG + '2023/05/pexels-inzmam-khan-1134204-1024x705.jpg',
  },
];

const collaborations = [
  { icon: '📺', type: '媒體合作', desc: '邀請娜米接受媒體採訪、節目訪談，分享兩性關係與戀愛諮詢專業見解。' },
  { icon: '🤝', type: '品牌合作', desc: '與品牌合作推廣，包含健身、美妝、健康、生活風格等相關領域。' },
  { icon: '🎊', type: '活動合辦', desc: '與企業或品牌聯合舉辦單身聯誼活動、戀愛講座等主題活動。' },
  { icon: '📣', type: '廣告投放', desc: '在戀愛小秘書平台及社群媒體上投放廣告，觸及精準的單身男女受眾。' },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero Banner */}
        <section style={{ background: '#049089' }} className="py-14 text-center">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <img
              src={IMG + '2023/09/20230714_娜米logo（無背景）.png'}
              alt="戀愛小秘書娜米"
              className="mx-auto mb-5 h-20 w-auto object-contain brightness-0 invert"
            />
            <h1 className="text-3xl font-bold text-white sm:text-4xl">戀愛小秘書 娜米</h1>
            <p className="mt-3 text-lg text-white/85">用數據幫你找對象</p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {['留美MBA企管碩士', '交友聊天室第二代', '彩虹數字諮詢師', '花精療癒師'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-medium text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl font-bold" style={{ color: '#07C3BA' }}>{s.value}</p>
                  <p className="mt-1 text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Portfolio */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>娜米的事業版圖</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {brands.map((b) => (
                <div key={b.name} className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-lg">
                    <img src={b.img} alt={b.name} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-gray-900">{b.name}</h3>
                  <p className="mt-1 text-sm font-semibold" style={{ color: '#07C3BA' }}>{b.stat}</p>
                  <p className="mt-2 text-xs leading-5 text-gray-500">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>社群媒體</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition hover:shadow-md"
                >
                  <div className="flex h-12 w-20 items-center justify-center overflow-hidden">
                    <img src={s.logo} alt={s.name} className="h-full w-full object-contain" />
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-gray-900">{s.name}</h3>
                  <p className="text-xs text-gray-400">{s.handle}</p>
                  <p className="mt-2 text-xs text-gray-500">{s.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>娜米的創業歷程</h2>
            <div className="mx-auto max-w-2xl space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                      style={{ background: '#07C3BA' }}
                    >
                      {item.year.slice(2)}
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="mt-1 h-10 w-px" style={{ background: '#D2E0DE' }} />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-bold" style={{ color: '#049089' }}>{item.year}</p>
                    <p className="mt-1 text-sm leading-7 text-gray-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Endorsements */}
        <section style={{ background: '#D2E0DE' }} className="py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-10 text-center text-2xl font-bold" style={{ color: '#049089' }}>業界推薦</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {endorsements.map((e) => (
                <div key={e.name} className="overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.name}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm leading-6 text-gray-600">「{e.quote}」</p>
                    <div className="mt-3 border-t border-gray-100 pt-3">
                      <p className="text-sm font-bold text-gray-900">{e.name}</p>
                      <p className="text-xs text-gray-400">{e.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Collaboration Types */}
        <section className="bg-white py-12 lg:py-16">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <h2 className="mb-4 text-center text-2xl font-bold" style={{ color: '#049089' }}>與娜米合作</h2>
            <p className="mx-auto mb-10 max-w-xl text-center text-sm text-gray-500">
              戀愛小秘書娜米擁有精準的單身男女受眾，歡迎各類品牌與企業洽談合作機會。
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {collaborations.map((c) => (
                <div key={c.type} className="rounded-xl bg-gray-50 p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.icon}</span>
                    <h3 className="text-base font-bold text-gray-900">{c.type}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{c.desc}</p>
                  <a
                    href="mailto:mkt@ek21.com"
                    className="mt-4 inline-block text-sm font-semibold transition hover:opacity-80"
                    style={{ color: '#FF93A6' }}
                  >
                    立即洽談 »
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">聯絡娜米</h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
              商業合作請寄信至 mkt@ek21.com，或直接加官方 LINE 諮詢。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={LINE_URL}
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
