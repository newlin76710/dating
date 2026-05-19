import { SiteShell } from '@/components/site-shell';
import { TestimonialCarousel } from '@/components/testimonial-carousel';

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';
const IMG = 'https://ek21.com/dating/wp-content/uploads/';

// 3 most-recent events shown on homepage — linked to local article pages
const homeEvents = [
  {
    title: '單身聯誼活動：推理冒險｜身臨其境的角色扮演遊戲',
    img: IMG + '2025/02/劇本殺-scaled.jpg',
    desc: '「解謎 × 戀愛」沉浸式角色扮演遊戲，在謎題中認識彼此，建立獨特的感情連結！',
    url: '/party/mystery-adventure',
  },
  {
    title: '單身聯誼活動：酒精墨水畫｜藝術過程浪漫的節奏',
    img: IMG + '2025/02/酒精墨水娜米_男.png',
    desc: '藝術與愛情的邂逅：用酒精墨水畫創作屬於你們的獨特作品，在藝術中找到共鳴。',
    url: '/party/alcohol-ink-art',
  },
  {
    title: '單身聯誼活動：動感閃動格子｜未來科技派對遊戲',
    img: IMG + '2025/02/閃動格娜米_男.png',
    desc: '速度 × 戀愛 × 科技！動感科技派對，在互動遊戲中展現你的魅力，快速認識異性。',
    url: '/party/flash-grid-party',
  },
];

const steps = [
  {
    num: '01',
    title: '加入官方LINE',
    desc: '加入戀愛小秘書的官方LINE帳號，或是直接輸入LINE ID：@datenami',
  },
  {
    num: '02',
    title: '填寫個人資料',
    desc: '加入後，依照流程填寫個人資料。等候戀愛小秘書進行資料驗證，與配對數據分析。',
  },
  {
    num: '03',
    title: '參加單身聯誼活動',
    desc: '資料驗證完成，開始安排約會，參加各種有趣的單身聯誼活動，開始在真實生活中認識異性吧！',
  },
];


const consultServices = [
  {
    title: '1對1 形象風格打造',
    desc: '想談一場戀愛，第一印象是首要重要的！正視外表的重要性，我們提供1V1客製化的風格打造，讓你在約會前有一個優質完美的形象！',
    img: BASE + '2024/04/S__18202927_0.jpg',
  },
  {
    title: '社群形象照服務',
    desc: '一組好的交友軟體形象照，讓你的配對率立馬提升99.9%，同時擺脫照片總使被滑掉的窘境，快速遇到對的她！',
    img: BASE + '2024/04/image-photo-dalle.webp',
  },
  {
    title: '內在涵養提升課程',
    desc: '內在修養、氣質談吐、經濟能力等條件，也是吸引異性的重要元素。我們提供各類進修的課程，例如：品酒、咖啡、髮型等課程，讓你提升自我更能散發魅力！',
    img: BASE + '2024/04/image-course-dalle.webp',
  },
];

const consultTestimonials = [
  {
    name: '何先生',
    meta: '位格9 流年+17/8',
    photo: BASE + '2023/03/1678493288998-875x1024.jpg',
    graphic: BASE + '2023/10/numerology-1.png',
    quote: '感謝娜米，我對自己有了更深的認識，發現了潛在的優勢，也學會了更有效地與人溝通。現在的我在人際關係中更加融洽，感謝娜米老師帶給我這股正向的力量，不僅是學到自我探索，更是獲得了寶貴的人生觀念。遇見娜米老師真的是一場奇妙的緣分，解開了我多年的疑惑。',
  },
  {
    name: '陳小姐',
    meta: '戀愛靈魂等級 1',
    photo: BASE + '2023/09/188280_0.jpg',
    graphic: BASE + '2023/10/numerology-2.png',
    quote: '經歷娜米的諮詢，我的人生得到了翻天覆地的改變。我發現了自己內在的力量，學到了解決感情問題的方法，也更加自信地與他人交流。娜米老師的指導不僅讓我找到了合適的對象，還幫助我解決心結，讓我重拾人生的信心。',
  },
  {
    name: '楊先生',
    meta: '感情主修 6',
    photo: BASE + '2023/03/1678493559809-773x1024.jpg',
    graphic: BASE + '2023/10/numerology-3.png',
    quote: '這真的是一場啟發之旅。娜米的戀愛數字密碼，不僅讓我更加了解自己，還讓我在感情中更加得心應手。透過她的諮詢，我找到了適合我的對象，解答我的戀愛困擾。感謝娜米老師的專業指導，讓我在感情和人生中都有了更多的收獲。',
  },
];

const mediaLogos = [
  { name: 'Yahoo!奇摩新聞', img: BASE + '2023/03/yahoo.png' },
  { name: 'Money錢', img: BASE + '2023/03/money.png' },
  { name: '蕃薯藤', img: BASE + '2023/03/yam.png' },
  { name: 'PChome', img: BASE + '2023/03/pchome.jpeg' },
  { name: '報橘 BuzzOrange', img: BASE + '2023/08/match.png' },
  { name: 'beanfun!', img: BASE + '2023/03/beanfun.png' },
  { name: 'LINE TODAY', img: BASE + '2024/03/line.png' },
];

// 3 columns of endorsers (simulating 3 Swiper carousels)
const endorserCols = [
  [
    { name: '謝綸', role: '電獺執行長', quote: '作為一個網路創業家，我對娜米的經營交友網站的用心和細心深表敬意。娜米不斷努力鑽研和優化自己的服務，以便讓每個單身男女都能夠找到自己的另一半。' },
    { name: 'Kevin Lin', role: 'Fandora 行銷總監', quote: '娜米提供了許多有價值的服務，從活動媒合到專業教練顧問諮詢，過程感受到她的在乎與耐心，提供客戶在幸福路上全方位的指引。' },
    { name: '曾少甫', role: '台灣好新聞 創始人', quote: '娜米的交友網站不僅提供了許多優質的服務，而且也非常專業和用心。她不斷投入時間和精力來改進自己的技術和服務，以確保每一位用戶都能夠得到最好的體驗。' },
  ],
  [
    { name: '麗子老師', role: '彩虹數字學會 理事長', quote: '娜米是一個非常貼心的人，她親近人、不做作，她用專業的態度和專注的精神，為每一個人提供最好的服務。' },
    { name: 'Dix Chen', role: 'UIUXCafe 執行長', quote: '她不斷投入時間和精力來提高自己的服務水平，從行銷到技術，她都非常用心地進行優化和提升。我相信她的交友網站會幫助更多單身男女找到屬於自己的另一半。' },
    { name: '田麗雯', role: '尋夢園網路聊天室創始人', quote: '她不斷推出新的聯誼活動和約會安排，以確保每一位用戶都能夠找到自己的另一半。我相信，有了娜米的幫助，單身的朋友會找到真正屬於自己的另一半。' },
  ],
  [
    { name: '宋捷仁', role: 'Uspace 創辦人', quote: '娜米不斷推出新的聯誼活動和約會安排，她的專業精神和用心服務讓我非常佩服，她的交友網站將繼續發揮更大的影響力，幫助單身男女找到屬於自己的另一半。' },
    { name: '林正立', role: '采童莊執行長', quote: '娜米是一個非常有才華和用心的人，她的交友網站不僅是一個平台，更是一個溫暖和有愛的家。我相信她的交友網站會在未來繼續成為更多人找到真愛的平台。' },
    { name: '林昱廷', role: 'Mandarin Go 執行長', quote: '娜米非常用心地為每一個人提供最好的服務，細心地聆聽每個人的需求和願望。我相信她的交友網站將繼續幫助更多單身男女找到屬於自己的另一半。' },
  ],
];

const playfair: React.CSSProperties = { fontFamily: 'var(--font-playfair), "Playfair Display", serif' };
const roboto: React.CSSProperties = { fontFamily: 'var(--font-roboto), "Roboto", sans-serif' };
const poppins: React.CSSProperties = { fontFamily: 'var(--font-poppins), "Poppins", sans-serif' };

export default function HomePage() {
  return (
    <SiteShell>
      <main>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="overflow-hidden bg-white" style={{ position: 'relative' }}>
          {/* Photo: absolutely positioned, fills left ~40% so it bleeds into gradient zone */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0,
              width: '40%',
              backgroundImage: `url(${BASE}2023/03/0330home.jpg)`,
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          />
          {/* Gradient overlay: blends photo into white content area */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0,
              width: '65%',
              background: 'linear-gradient(to right, transparent 0%, transparent 28%, rgba(255,255,255,0.5) 40%, white 55%)',
              pointerEvents: 'none',
            }}
          />

          {/* Mobile: stacked image */}
          <div
            className="block md:hidden"
            style={{
              width: '100%',
              height: 240,
              backgroundImage: `url(${BASE}2023/03/0330home.jpg)`,
              backgroundPosition: 'top center',
              backgroundSize: 'cover',
            }}
          />

          {/* Content: max-width 1200px, with spacer matching left 33% */}
          <div
            style={{
              position: 'relative',
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              alignItems: 'stretch',
            }}
          >
            <div className="hidden md:block" style={{ width: '33.333%', flexShrink: 0, minHeight: 500 }} />
            <div style={{ flex: 1 }}>
              <div
                className="hero-content-col"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: 500,
                  padding: '0 22% 0 15%',
                }}
              >
                <div style={{ width: '100%' }}>
                  {/* Teal spacer */}
                  <div style={{ width: 128, height: 4, backgroundColor: '#07C3BA', marginBottom: 20 }} />

                  {/* Subtitle */}
                  <p
                    style={{
                      ...roboto,
                      fontSize: 30,
                      fontWeight: 400,
                      lineHeight: '34px',
                      color: '#000000',
                      margin: '0 0 12px 0',
                      padding: '2% 0',
                    }}
                  >
                    台灣最專業的紅娘
                  </p>

                  {/* H1 */}
                  <h1
                    style={{
                      ...playfair,
                      fontSize: 55,
                      fontWeight: 700,
                      lineHeight: '60px',
                      letterSpacing: '3.53px',
                      color: '#000000',
                      margin: 0,
                    }}
                  >
                    戀愛小秘書娜米
                  </h1>

                  {/* Description */}
                  <p
                    style={{
                      ...roboto,
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: '35px',
                      color: '#000000',
                      margin: '12px 0 0 0',
                      padding: '0 15% 0 0',
                    }}
                  >
                    協助超過 4,000 位未婚男女配對成功！
                  </p>
                  <p
                    style={{
                      ...roboto,
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: '35px',
                      color: '#000000',
                      margin: 0,
                      padding: '0 15% 0 0',
                    }}
                  >
                    陪你找到真愛、實現幸福
                  </p>
                  <p
                    style={{
                      ...roboto,
                      fontSize: 18,
                      fontWeight: 400,
                      lineHeight: '35px',
                      color: '#000000',
                      margin: 0,
                      padding: '0 0 2% 0',
                    }}
                  >
                    免費配對諮詢／聯誼活動推薦／戀愛密碼解析
                  </p>

                  {/* LINE button */}
                  <a
                    href={LINE_URL}
                    style={{
                      ...roboto,
                      display: 'inline-block',
                      backgroundColor: '#2DC861',
                      color: '#FFFFFF',
                      fontSize: 20,
                      fontWeight: 400,
                      textTransform: 'uppercase',
                      letterSpacing: '1.95px',
                      lineHeight: '26px',
                      borderRadius: 12,
                      padding: '18px 70px',
                      textDecoration: 'none',
                      marginTop: 16,
                    }}
                  >
                    加 line 免費諮詢
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile padding style */}
        <style>{`
          @media (max-width: 767px) {
            .hero-content-col {
              min-height: auto !important;
              padding: 5% 8% 8% 8% !important;
            }
            .steps-row {
              flex-wrap: wrap !important;
            }
            .steps-row > div {
              width: 100% !important;
              padding-left: 24px !important;
              padding-right: 24px !important;
              margin-bottom: 32px;
            }
            .numerology-3col {
              flex-direction: column !important;
            }
            .cta-split {
              flex-direction: column !important;
            }
            .cta-right {
              padding: 10% 8% !important;
            }
          }
        `}</style>

        {/* ── 3 Steps ─────────────────────────────────────────────────────── */}
        {/*
          4 equal columns (25% each), section bg white, padding 100px 0
          Left col: heading 只要3步驟 / 輕鬆認識異性 (Playfair 40px)
          Steps: number Playfair 45px #07C3BA, title Playfair 22px bold, desc Roboto 18px w300
        */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '100px 0' }}>
          <div className="steps-row" style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', padding: '0 24px' }}>

            {/* Left: heading col */}
            <div style={{ width: '25%', flexShrink: 0, paddingLeft: '10%' }}>
              <h2 style={{ ...playfair, fontSize: 40, fontWeight: 'normal', lineHeight: '58px', letterSpacing: '2.24px', color: '#000000', margin: 0 }}>
                只要 3 步驟
              </h2>
              <h2 style={{ ...playfair, fontSize: 40, fontWeight: 'normal', lineHeight: '58px', letterSpacing: '2.24px', color: '#000000', margin: 0 }}>
                輕鬆認識異性
              </h2>
            </div>

            {/* Step 1 */}
            <div style={{ width: '25%', flexShrink: 0, paddingLeft: 49, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ ...playfair, fontSize: 45, fontWeight: 'bold', lineHeight: '35px', letterSpacing: '1.87px', color: '#07C3BA', margin: '0 0 12px 0' }}>
                  01
                </p>
                <div style={{ marginTop: 12 }}>
                  <p style={{ ...playfair, fontSize: 22, fontWeight: 'bold', lineHeight: '32px', letterSpacing: '1.45px', color: '#1A1A1A', margin: 0 }}>
                    {steps[0].title}
                  </p>
                  <p style={{ ...roboto, fontSize: 18, fontWeight: 300, lineHeight: '25px', color: '#1A1A1A', margin: '8px 0 0 0' }}>
                    {steps[0].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ width: '25%', flexShrink: 0, paddingLeft: 35, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ ...playfair, fontSize: 45, fontWeight: 'bold', lineHeight: '35px', letterSpacing: '1.87px', color: '#07C3BA', margin: '0 0 12px 0' }}>
                  02
                </p>
                <div style={{ marginTop: 12 }}>
                  <p style={{ ...playfair, fontSize: 22, fontWeight: 'bold', lineHeight: '32px', letterSpacing: '1.45px', color: '#1A1A1A', margin: 0 }}>
                    {steps[1].title}
                  </p>
                  <p style={{ ...roboto, fontSize: 18, fontWeight: 300, lineHeight: '25px', color: '#1A1A1A', margin: '8px 0 0 0' }}>
                    {steps[1].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ width: '25%', flexShrink: 0, paddingLeft: 35, paddingRight: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ ...playfair, fontSize: 45, fontWeight: 'bold', lineHeight: '35px', letterSpacing: '1.87px', color: '#07C3BA', margin: '0 0 12px 0' }}>
                  03
                </p>
                <div style={{ marginTop: 12 }}>
                  <p style={{ ...playfair, fontSize: 22, fontWeight: 'bold', lineHeight: '32px', letterSpacing: '1.45px', color: '#1A1A1A', margin: 0 }}>
                    {steps[2].title}
                  </p>
                  <p style={{ ...roboto, fontSize: 18, fontWeight: 300, lineHeight: '25px', color: '#1A1A1A', margin: '8px 0 0 0' }}>
                    {steps[2].desc}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── Events ──────────────────────────────────────────────────────── */}
        {/* bg white + 0.5 overlay, padding 3% 10% 10% 10%, heading Playfair 40px #049089 */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '3% 10% 10%', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundColor: '#FFFFFF', opacity: 0.5 }} />
          <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ ...playfair, fontSize: 40, fontWeight: 400, lineHeight: '50px', letterSpacing: '2.24px', color: '#049089', textAlign: 'center', margin: '10px 0 0', padding: '10px 0 0' }}>
              多元有趣的單身聯誼活動
            </h2>
            <h2 style={{ ...playfair, fontSize: 40, fontWeight: 400, lineHeight: '50px', letterSpacing: '2.24px', color: '#049089', textAlign: 'center', margin: 0, padding: '10px 0' }}>
              豐富你的社交生活
            </h2>
            <p style={{ ...roboto, fontSize: 18, fontWeight: 300, lineHeight: '25px', color: '#000000', textAlign: 'center', padding: '0 15% 3%', margin: 0 }}>
              透過各種主題的實體活動，不僅能親眼真實見到異性，也能在活動進行中讓大家很輕鬆自然的認識彼此、聊天互動，能更快速的找到適合的對象。
            </p>

            {/* 3-col grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 35 }}>
              {homeEvents.map((ev) => (
                <a
                  key={ev.title}
                  href={ev.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', borderRadius: 4, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', backgroundColor: '#fff' }}
                >
                  <div style={{ position: 'relative', paddingBottom: '50%', overflow: 'hidden' }}>
                    <img
                      src={ev.img}
                      alt={ev.title}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    />
                  </div>
                  <div style={{ padding: '16px 20px 20px' }}>
                    <h3 style={{ ...roboto, fontSize: 15, fontWeight: 500, color: '#1a1a1a', margin: '0 0 8px', lineHeight: '1.4' }}>{ev.title}</h3>
                    <p style={{ ...roboto, fontSize: 14, color: '#666', margin: 0, lineHeight: '1.6' }}>{ev.desc}</p>
                    <p style={{ ...roboto, fontSize: 13, fontWeight: 500, color: '#049089', margin: '8px 0 0', textAlign: 'right' }}>
                      參加單身聯誼 »
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 形象顧問 ─────────────────────────────────────────────────────── */}
        {/* bg white, padding 0% 5% 0%, min-height 410px, heading Playfair 45px #049089 */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '50px 0 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 5%' }}>
            <h2 style={{ ...playfair, fontSize: 45, fontWeight: 400, lineHeight: '50px', letterSpacing: '2.24px', color: '#049089', textAlign: 'center', padding: '0 0 2%', margin: 0 }}>
              形象顧問提升你的吸引力
            </h2>
            <p style={{ ...roboto, fontSize: 18, fontWeight: 300, lineHeight: '25px', color: '#000000', textAlign: 'center', padding: '0 15% 3%', margin: 0 }}>
              戀愛小秘書團隊提供「約會魅力形象指導」及「形象改造計畫」。我們也提供形象風格穿搭、情感教育、投資理財等講座，讓你更能自我提升與學習！
            </p>

            {/* 3-col article cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 8 }}>
              {consultServices.map((s) => (
                <a
                  key={s.title}
                  href={LINE_URL}
                  style={{ textDecoration: 'none', color: 'inherit', display: 'block', borderRadius: 4, overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.12)', backgroundColor: '#fff' }}
                >
                  <div style={{ position: 'relative', paddingBottom: '65%', overflow: 'hidden' }}>
                    <img
                      src={s.img}
                      alt={s.title}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                    />
                  </div>
                  <div style={{ padding: '16px 20px 20px' }}>
                    <h3 style={{ ...playfair, fontSize: 18, fontWeight: 700, color: '#1a1a1a', margin: '0 0 8px', lineHeight: '1.4' }}>{s.title}</h3>
                    <p style={{ ...roboto, fontSize: 14, color: '#555', margin: 0, lineHeight: '1.6' }}>{s.desc}</p>
                    <p style={{ ...roboto, fontSize: 13, fontWeight: 500, color: '#049089', margin: '10px 0 0', textAlign: 'right' }}>形象改造 »</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 戀愛數字密碼 ──────────────────────────────────────────────────── */}
        {/*
          3-column flex, min-height 80vh, gap 0, overflow hidden
          Left col: transparent gradient + text (Roboto 18px)
          Middle col: Nami WechatIMG photo
          Right col: transparent gradient + text + #FF93A6 button
        */}
        <section style={{ marginTop: 30 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '10px 0 0' }}>
            <h2 style={{ ...playfair, fontSize: 40, fontWeight: 400, lineHeight: '50px', letterSpacing: '2.24px', color: '#049089', textAlign: 'center', margin: '10px 0 0', padding: '10px 0' }}>
              戀愛數字密碼諮詢
            </h2>
          </div>

          <div className="numerology-3col" style={{
            display: 'flex',
            minHeight: '80vh',
            overflow: 'hidden',
            gap: 0,
            alignItems: 'stretch',
            marginTop: 10,
            maxWidth: 1440,
            margin: '10px auto 0',
          }}>
            {/* Left col: worries */}
            <div style={{
              flex: '0 0 28%',
              maxWidth: 400,
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 100%, #FFFFFF 40%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '3% 4% 3% 6%',
            }}>
              <div style={{ ...roboto, fontSize: 18, fontWeight: 400, lineHeight: '35px', color: '#000000' }}>
                <p style={{ margin: '5px 5px 5px 5px' }}>・♡ 你正在為愛情煩惱嗎？ ♡・</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・缺乏感情經驗</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・與異性相處，時常受挫</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・不知道自己的優勢在哪裡</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・不知道如何吸引異性</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・無法在感情上做出好的抉擇</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・總是遇見不對的人</p>
              </div>
            </div>

            {/* Middle col: Nami photo */}
            <div style={{ flex: 1, overflow: 'hidden', position: 'relative', minWidth: 0 }}>
              <img
                src={BASE + '2023/10/nami-consulting.jpg'}
                alt="戀愛小秘書娜米諮詢"
                style={{ width: '106%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
              />
            </div>

            {/* Right col: helps */}
            <div style={{
              flex: '0 0 28%',
              maxWidth: 400,
              background: 'linear-gradient(90deg, rgba(255,255,255,0) 100%, #FFFFFF 40%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '3% 6% 3% 4%',
            }}>
              <div style={{ ...roboto, fontSize: 18, fontWeight: 400, lineHeight: '35px', color: '#000000' }}>
                <p style={{ margin: '5px 5px 5px 5px' }}>・♡ 娜米老師幫你 ♡・</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・展開戀愛藍圖</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・吸引戀愛秘訣</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・經營幸福方法</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・找到速配對象</p>
                <p style={{ margin: '5px 5px 5px 5px' }}>・創造幸福人生</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
                <a
                  href="/podcast"
                  style={{
                    ...roboto,
                    display: 'inline-block',
                    backgroundColor: '#FF93A6',
                    color: '#FFFFFF',
                    fontSize: 30,
                    fontWeight: 'normal',
                    textTransform: 'uppercase',
                    letterSpacing: '1.95px',
                    lineHeight: '30px',
                    borderRadius: 4,
                    padding: '20px 66px',
                    textDecoration: 'none',
                    marginTop: 10,
                  }}
                >
                  立刻諮詢
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 戀愛密碼諮詢見證 ──────────────────────────────────────────────── */}
        {/*
          White cards, box-shadow 0 0 25px rgba(0,0,0,0.15), border-radius 5px, padding 35px
          Quote: 16px w300, Photo: 55px circle, Name: 20px, Meta: #bfbfbf 15px w300
        */}
        <section style={{ padding: '35px 0 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
            <h2 style={{ ...playfair, fontSize: 40, fontWeight: 400, lineHeight: '50px', letterSpacing: '2.24px', color: '#049089', textAlign: 'center', margin: '10px 0 0', padding: '10px 0 0' }}>
              戀愛密碼諮詢見證
            </h2>

            <div style={{ display: 'flex', gap: 0, marginTop: 35 }}>
              {consultTestimonials.map((t, i) => (
                <div
                  key={t.name}
                  style={{
                    flex: 1,
                    background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%)',
                    borderRadius: 5,
                    boxShadow: '0px 0px 25px 0px rgba(0,0,0,0.15)',
                    padding: 35,
                    margin: i === 0 ? '0 16px 0 0' : i === 1 ? '0 8px 0 8px' : '0 0 0 16px',
                  }}
                >
                  <p style={{ ...roboto, fontSize: 16, fontWeight: 300, lineHeight: '1.8em', color: '#000000', margin: '0 0 16px' }}>
                    {t.quote}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
                    <img
                      src={t.photo}
                      alt={t.name}
                      style={{ width: 55, height: 55, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', flexShrink: 0 }}
                    />
                    <div>
                      <p style={{ fontSize: 20, color: '#000000', margin: 0 }}>{t.name}</p>
                      <p style={{ fontSize: 15, fontWeight: 300, color: '#bfbfbf', margin: 0 }}>{t.meta}</p>
                    </div>
                  </div>
                  {/* Numerology graphic */}
                  <div style={{ marginTop: 16 }}>
                    <img src={t.graphic} alt={`${t.name} 戀愛數字`} style={{ width: '100%', objectFit: 'contain', maxHeight: 80 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 媒體採訪報導 ──────────────────────────────────────────────────── */}
        {/* Poppins 45px uppercase #049089, bg white, padding 50px 10% 8% */}
        <section style={{ backgroundColor: '#FFFFFF', padding: '50px 0 0' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 10% 8%' }}>
            <h2 style={{ ...poppins, fontSize: 45, fontWeight: 400, textTransform: 'uppercase', lineHeight: '50px', letterSpacing: '1.18px', color: '#049089', textAlign: 'center', margin: 0, padding: 0 }}>
              媒體採訪報導
            </h2>
            <p style={{ ...roboto, fontSize: 16, fontWeight: 300, color: '#666666', textAlign: 'center', margin: '12px 0 0' }}>
              感謝媒體對戀愛小秘書及娜米的採訪報導
            </p>

            <div style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', alignItems: 'center', gap: 20, marginTop: 40 }}>
              {mediaLogos.map((m) => (
                <div key={m.name} style={{ flex: '1 1 0', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 50, maxWidth: 130 }}>
                  <img
                    src={m.img}
                    alt={m.name}
                    style={{ width: '100%', maxHeight: 48, objectFit: 'contain', filter: 'grayscale(30%)' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 感謝各界人士推薦 ──────────────────────────────────────────────── */}
        {/*
          bg #D2E0DE, Playfair 40px #049089
          3 columns of endorsers (simulating Swiper carousels)
          Each slide: bg #D2E0DE, border-radius 10px, padding 25px
          Text: 15px w300 | Name: #049089 15px italic
        */}
        <section style={{ backgroundColor: '#D2E0DE', padding: '0 0 50px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 10% 0 0' }}>
            <h2 style={{ ...playfair, fontSize: 40, fontWeight: 400, lineHeight: '50px', letterSpacing: '2.24px', color: '#049089', textAlign: 'center', margin: 0, padding: '10px 0 0 10%' }}>
              感謝各界人士推薦
            </h2>
          </div>

          <div style={{ maxWidth: 1200, margin: '2% auto 0', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0 28px' }}>
            {endorserCols.map((col, ci) => (
              <TestimonialCarousel key={ci} items={col} />
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        {/*
          bg #D2E0DE, split: left col = cta_bottom.jpg, right col = text
          Right col padding: 15% 30% 15% 20%
          Sub-heading: Poppins 22px #049089
          Main heading: Poppins 55px uppercase #090808
          Text: Poppins 16px w300
          Button: #2DC861, border-radius 12px, padding 20px 66px
        */}
        <section className="cta-split" style={{ backgroundColor: '#D2E0DE', display: 'flex', alignItems: 'stretch', overflow: 'hidden' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', width: '100%' }}>
            {/* Left: image */}
            <div
              className="hidden md:block"
              style={{
                width: '35%',
                flexShrink: 0,
                minHeight: 480,
                backgroundImage: `url(${BASE}2023/03/cta_bottom.jpg)`,
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            />

            {/* Right: content */}
            <div className="cta-right" style={{
              flex: 1,
              padding: '12% 22% 12% 8%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <h3 style={{ ...poppins, fontSize: 22, fontWeight: 400, lineHeight: '26px', letterSpacing: '1.6px', color: '#049089', margin: 0, textAlign: 'start' }}>
                別再為繼續單身找藉口！
              </h3>
              <h2 style={{ ...poppins, fontSize: 50, fontWeight: 500, lineHeight: '1.2em', letterSpacing: '1.18px', color: '#090808', margin: '12px 0 0', padding: 0 }}>
                追求脫單，先勇敢跨出你的第一步吧！
              </h2>
              <p style={{ ...poppins, fontSize: 16, fontWeight: 300, lineHeight: '20px', letterSpacing: '1px', color: '#000000', margin: '12px 0 0', maxWidth: 310 }}>
                建議以認識新朋友的心態，積極參與活動，才能真正為自己帶來戀愛的機會！
              </p>
              <div style={{ marginTop: 10 }}>
                <a
                  href={LINE_URL}
                  style={{
                    ...roboto,
                    display: 'inline-block',
                    backgroundColor: '#2DC861',
                    color: '#FFFFFF',
                    fontSize: 30,
                    fontWeight: 'normal',
                    textTransform: 'uppercase',
                    letterSpacing: '1.95px',
                    lineHeight: '30px',
                    borderRadius: 12,
                    padding: '20px 66px',
                    textDecoration: 'none',
                    marginTop: 10,
                  }}
                >
                  立刻諮詢
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
