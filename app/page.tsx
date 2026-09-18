import { SiteShell } from '@/components/site-shell';
import { TestimonialCarousel } from '@/components/testimonial-carousel';
import { Section } from '@/components/ui/section';
import { SectionHeading } from '@/components/ui/section-heading';
import { LineButton } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { consultArticles } from '@/lib/consulting';

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/dating/images/original/ek21.com/dating/wp-content/uploads/';
const IMG = 'https://ek21.com/dating/wp-content/uploads/';

// 3 most-recent events shown on homepage — linked to local article pages
const homeEvents = [
  {
    title: '單身聯誼活動：推理冒險｜身臨其境的角色扮演遊戲',
    img: IMG + '2025/02/劇本殺-scaled.jpg',
    desc: '「解謎 × 戀愛」沉浸式角色扮演遊戲，在謎題中認識彼此，建立獨特的感情連結！',
    url: '/dating/party/mystery-adventure',
  },
  {
    title: '單身聯誼活動：酒精墨水畫｜藝術過程浪漫的節奏',
    img: IMG + '2025/02/酒精墨水娜米_男.png',
    desc: '藝術與愛情的邂逅：用酒精墨水畫創作屬於你們的獨特作品，在藝術中找到共鳴。',
    url: '/dating/party/alcohol-ink-art',
  },
  {
    title: '單身聯誼活動：動感閃動格子｜未來科技派對遊戲',
    img: IMG + '2025/02/閃動格娜米_男.png',
    desc: '速度 × 戀愛 × 科技！動感科技派對，在互動遊戲中展現你的魅力，快速認識異性。',
    url: '/dating/party/flash-grid-party',
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

const consultServices = consultArticles.map((a) => ({
  slug: a.slug,
  title: a.title,
  desc: a.excerpt,
  img: a.img,
}));

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

export default function HomePage() {
  return (
    <SiteShell>
      <main>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="overflow-hidden bg-white">
          <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 md:grid-cols-[1fr_1.4fr]">
            {/* Decorative accent blocks (desktop only) */}
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[15%] bg-[#EFB92A] md:block" />
            <div className="pointer-events-none absolute left-[calc(33.333%-1px)] top-0 hidden h-24 w-32 bg-[#07C3BA] md:block" />

            <div
              className="aspect-[4/3] bg-cover bg-top md:aspect-auto md:min-h-[500px]"
              style={{ backgroundImage: `url(${BASE}2023/03/0330home.jpg)` }}
            />

            <div className="relative flex items-center px-6 py-10 sm:px-10 md:px-14 md:py-16 lg:pr-24">
              <div>
                <p className="font-roboto text-lg text-gray-700 sm:text-xl md:text-2xl">
                  台灣最專業的紅娘
                </p>
                <h1 className="font-playfair mt-2 font-bold tracking-wide text-gray-900 text-hero">
                  戀愛小秘書娜米
                </h1>
                <p className="font-roboto mt-4 text-base leading-8 sm:text-lg" style={{ color: '#008080' }}>
                  協助超過 4,000 位未婚男女配對成功！
                  <br />
                  陪你找到真愛、實現幸福
                </p>
                <p className="font-roboto mt-2 text-sm leading-7 text-gray-800 sm:text-base">
                  免費配對諮詢／聯誼活動推薦／戀愛密碼解析
                </p>

                <LineButton href={LINE_URL} icon size="lg" className="mt-8">
                  加 line 免費諮詢
                </LineButton>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3 Steps ─────────────────────────────────────────────────────── */}
        <Section>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className="font-playfair text-display font-normal text-gray-900">
                只要 3 步驟
                <br />
                輕鬆認識異性
              </h2>
            </div>

            {steps.map((s) => (
              <div key={s.num}>
                <p className="font-playfair text-4xl font-bold" style={{ color: '#07C3BA' }}>
                  {s.num}
                </p>
                <h3 className="font-playfair mt-3 text-xl font-bold text-gray-900">{s.title}</h3>
                <p className="font-roboto mt-2 text-base leading-7 text-gray-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* ── Events ──────────────────────────────────────────────────────── */}
        <Section bg="#FFFFFF">
          <SectionHeading subtitle="透過各種主題的實體活動，不僅能親眼真實見到異性，也能在活動進行中讓大家很輕鬆自然的認識彼此、聊天互動，能更快速的找到適合的對象。">
            多元有趣的單身聯誼活動
            <br />
            豐富你的社交生活
          </SectionHeading>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {homeEvents.map((ev) => (
              <Card
                key={ev.title}
                href={ev.url}
                img={ev.img}
                imgAlt={ev.title}
                aspect="aspect-[2/1]"
                title={ev.title}
                desc={ev.desc}
                cta="參加單身聯誼 »"
              />
            ))}
          </div>
        </Section>

        {/* ── 形象顧問 ─────────────────────────────────────────────────────── */}
        <Section bg="#FFFFFF">
          <SectionHeading subtitle="戀愛小秘書團隊提供「約會魅力形象指導」及「形象改造計畫」。我們也提供形象風格穿搭、情感教育、投資理財等講座，讓你更能自我提升與學習！">
            形象顧問提升你的吸引力
          </SectionHeading>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultServices.map((s) => (
              <Card
                key={s.title}
                href={`/dating/consulting/${s.slug}`}
                img={s.img}
                imgAlt={s.title}
                aspect="aspect-[3/2]"
                title={s.title}
                desc={s.desc}
                cta="形象改造 »"
                titleFont="serif"
              />
            ))}
          </div>
        </Section>

        {/* ── 戀愛數字密碼 ──────────────────────────────────────────────────── */}
        <Section>
          <SectionHeading>戀愛數字密碼諮詢</SectionHeading>

          <div className="mt-10 grid grid-cols-1 items-center gap-10 md:grid-cols-3">
            <div className="font-roboto space-y-2 text-base leading-9 text-gray-900">
              <p>・♡ 你正在為愛情煩惱嗎？ ♡・</p>
              <p>・缺乏感情經驗</p>
              <p>・與異性相處，時常受挫</p>
              <p>・不知道自己的優勢在哪裡</p>
              <p>・不知道如何吸引異性</p>
              <p>・無法在感情上做出好的抉擇</p>
              <p>・總是遇見不對的人</p>
            </div>

            <img
              src={BASE + '2023/10/nami-consulting.jpg'}
              alt="戀愛小秘書娜米諮詢"
              className="mx-auto w-full max-w-xs rounded-2xl shadow-card"
              loading="lazy"
            />

            <div className="font-roboto space-y-2 text-base leading-9 text-gray-900">
              <p>・♡ 娜米老師幫你 ♡・</p>
              <p>・展開戀愛藍圖</p>
              <p>・吸引戀愛秘訣</p>
              <p>・經營幸福方法</p>
              <p>・找到速配對象</p>
              <p>・創造幸福人生</p>
              <div className="mt-6 flex justify-center md:justify-start">
                <LineButton href="/dating/podcast" variant="rose" size="lg">
                  » 立刻諮詢
                </LineButton>
              </div>
            </div>
          </div>
        </Section>

        {/* ── 戀愛密碼諮詢見證 ──────────────────────────────────────────────── */}
        <Section>
          <SectionHeading>戀愛密碼諮詢見證</SectionHeading>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {consultTestimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white p-8 shadow-card">
                <p className="font-roboto text-sm leading-7 text-gray-800">{t.quote}</p>
                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-14 w-14 shrink-0 rounded-full object-cover object-top"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-base text-gray-900">{t.name}</p>
                    <p className="text-sm font-light text-gray-400">{t.meta}</p>
                  </div>
                </div>
                <img
                  src={t.graphic}
                  alt={`${t.name} 戀愛數字`}
                  className="mt-4 max-h-20 w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Section>

        {/* ── 媒體採訪報導 ──────────────────────────────────────────────────── */}
        <Section bg="#FFFFFF">
          <h2 className="font-poppins text-center text-2xl font-normal uppercase tracking-wide" style={{ color: '#049089' }}>
            媒體採訪報導
          </h2>
          <p className="font-roboto mt-3 text-center text-base font-light text-gray-500">
            感謝媒體對戀愛小秘書及娜米的採訪報導
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {mediaLogos.map((m) => (
              <img
                key={m.name}
                src={m.img}
                alt={m.name}
                className="h-12 w-auto max-w-[130px] object-contain grayscale-[30%]"
                loading="lazy"
              />
            ))}
          </div>
        </Section>

        {/* ── 感謝各界人士推薦 ──────────────────────────────────────────────── */}
        <Section bg="#D2E0DE">
          <SectionHeading>感謝各界人士推薦</SectionHeading>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {endorserCols.map((col, ci) => (
              <TestimonialCarousel key={ci} items={col} />
            ))}
          </div>
        </Section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: '#D2E0DE' }}>
          <div className="mx-auto flex max-w-[1200px] flex-col md:flex-row">
            <div
              className="hidden bg-cover bg-top md:block md:w-[35%]"
              style={{ backgroundImage: `url(${BASE}2023/03/cta_bottom.jpg)` }}
            />

            <div className="flex flex-1 flex-col justify-center px-6 py-14 sm:px-10 md:px-16">
              <h3 className="font-poppins text-lg tracking-wide" style={{ color: '#049089' }}>
                別再為繼續單身找藉口！
              </h3>
              <h2 className="font-poppins mt-3 font-medium leading-tight text-gray-900 text-display">
                追求脫單，先勇敢跨出你的第一步吧！
              </h2>
              <p className="font-poppins mt-4 max-w-md text-base leading-7 text-gray-800">
                建議以認識新朋友的心態，積極參與活動，才能真正為自己帶來戀愛的機會！
              </p>
              <LineButton href={LINE_URL} icon size="lg" className="mt-8 w-fit">
                立刻諮詢
              </LineButton>
            </div>
          </div>
        </section>

      </main>
    </SiteShell>
  );
}
