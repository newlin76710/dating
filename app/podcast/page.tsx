import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { PodcastEpisodes, type PodcastEpisode } from '@/components/podcast-episodes';

export const metadata: Metadata = {
  title: '戀愛會社',
  description: '戀愛小秘書娜米主持的「戀愛數字密碼諮詢」節目，用數據幫你找對象，解析你的戀愛藍圖。',
};

const LINE_URL = 'https://line.me/R/ti/p/@121teviv';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

const painPoints = [
  '缺乏感情經驗',
  '與異性相處，時常受挫卻找不到原因',
  '找不到信任、提供戀愛建議的討論對象',
  '不知道自己的優勢在哪裡',
  '不知道如何讓自己吸引異性',
  '覺得無法在感情上做出好的抉擇',
  '發現自己總是遇見不對的人',
];

const episodeCovers: PodcastEpisode[] = [
  { img: BASE + '2024/04/ep4-cover.jpg', youtubeId: 'Hgt2xCmHs-Y' },
  { img: BASE + '2024/04/ep14-cover.jpg', youtubeId: 'xpiGap5iXYc' },
  { img: BASE + '2024/04/ep8-cover.jpg', youtubeId: 'idknS7U_2Ms' },
  { img: BASE + '2024/04/ep18-cover.jpg', youtubeId: 'mAz5yLuF0Q4' },
  { img: BASE + '2024/04/ep10-cover.jpg', youtubeId: 'nfUpJhCfLns' },
  { img: BASE + '2024/04/ep17-cover.jpg', youtubeId: 'JktJP9oDKFU' },
  { img: BASE + '2024/04/ep15-cover.jpg', youtubeId: '6LYqUQ8YR7s' },
];

const steps = [
  { num: '01', title: '留言給娜米', desc: '於下方的表單填入：暱稱、生日、以及任何關於戀愛的疑難雜症！' },
  { num: '02', title: '娜米初步計算', desc: '拿到你的生日跟疑問後，計算你專屬的戀愛數字密碼，解析目前的問題。' },
  { num: '03', title: '收聽節目', desc: '收集許多網友的提問後，娜米和電獺大叔會在節目中一一為各位解析！' },
];

const testimonials = [
  {
    quote: '感謝娜米，我對自己有了更深的認識，發現了潛在的優勢，也學會了更有效地與人溝通。現在的我在人際關係中更加融洽，感謝娜米老師帶給我這股正向的力量，不僅是學到自我探索，更是獲得了寶貴的人生觀念。遇見娜米老師真的是一場奇妙的緣分，解開了我多年的疑惑。',
    img: BASE + '2023/03/1678493288998-875x1024.jpg',
    name: '何先生',
    detail: '位格9 流年+17/8',
  },
  {
    quote: '經歷娜米的諮詢，我的人生得到了翻天覆地的改變。我發現了自己內在的力量，學到了解決感情問題的方法，也更加自信地與他人交流。娜米老師的指導不僅讓我找到了合適的對象，還幫助我解決心結，讓我重拾人生的信心。',
    img: BASE + '2023/09/188280_0.jpg',
    name: '陳小姐',
    detail: '靈魂等級 1',
  },
  {
    quote: '這真的是一場啟發之旅。娜米的戀愛數字密碼，不僅讓我更加了解自己，還讓我在感情中更加得心應手。透過她的諮詢，我找到了適合我的對象，解答我的戀愛困擾。感謝娜米老師的專業指導，讓我在感情和人生中都有了更多的收獲。',
    img: BASE + '2023/03/1678493559809-773x1024.jpg',
    name: '楊先生',
    detail: '感情主修 6',
  },
];

const expertise = [
  '擅長以戀愛數字密碼來解讀兩性愛情的各種疑難雜症。',
  '錄製線上教學課程影片，透過簡易影片學習，你可以應對各種求愛難關！',
  '提供一對一線上諮詢，透過解析生日密碼，探討關於你的戀愛藍圖是什麼，找到你單身、總是遇不到對象的原因，以及如何才能追到喜歡的對象。',
];

const background = [
  '經營公司十多年期間，多次獲得創業競賽冠軍',
  '多次受邀擔任創業導師，到不同學術單位演講',
  '常有異業合作代言、活動主持等經驗',
  '擅長使用彩虹數字、花精療癒等方式為個案解惑',
];

const timeline = [
  { year: '2023年 8月', text: '開立〖戀愛密碼諮詢站〗節目' },
  { year: '2023年 5月', text: '成為〖電獺經紀〗網紅' },
  { year: '2023年 3月', text: '成為〖得意人生〗保健食品代言人' },
  { year: '2022年 10月', text: '成立〖週週趣〗並創立週週趣個人工作室孵化空間' },
  { year: '2021年 4月', text: '〖LiveME直播〗開立帶狀節目' },
  { year: '2021年 3月', text: '使用個人品牌形象，成立〖戀愛小秘書〗團隊' },
  { year: '2021年 10月', text: '取得〖花精情緒療癒〗證照' },
  { year: '2020年', text: '以秘書長身份協助發起〖彩虹數字學會〗，並成為諮詢師' },
  { year: '2018年', text: '運用內容SEO和流量優勢，創立〖尋夢新聞〗' },
  { year: '2014年', text: '帶領團隊加入 App Works 創業加速器，創立〖eros主題派對〗' },
  { year: '2013年', text: '留美攻讀MBA回台灣，接手經營〖尋夢園聊天室〗' },
];

const appearances = [
  '2023.1 DOMO HAIR 魅力無法擋節目來賓',
  '2021.5 代言Starr9女性服飾',
  '2019.6 世代談 交友進化論 講師',
  '2018.7 Facebook Developer Circles Taipei 活動主持人',
  '2018.6 中原大學 人文與科技與談會 演講',
  '2017.7 資策會 IDEAS 智慧生活駭客松 活動主持人',
  '2017.6 上海創業中國創業路演大賽 講師',
  '2017.4 經緯航太與日本NEC產品發表記者會 主持人',
  '2016.10 Facebook #SheMeansBusiness Program 講師',
  '2016.10 Girls in Tech-Mentorship Program業界導師',
  '2016.9 Girls in Tech-女人的新創約會演講',
  '2016.6 iiiNNO育成中心演講',
  '2016.5 台北商專創業比賽評審',
  '2016.5 Pitch Camp 決勝創投決賽團隊',
  '2016.3 數位時代社群行銷即戰力培訓營講師',
  '2016.3 廈門2016 Asia Beat台灣團隊代表參賽',
  '2016.1 簡報小聚講師',
  '2015.12 泛旅遊RTM- 大旅創時代 Pitch 冠軍',
  '2015.11 北京創客空間台灣之夜演講',
  '2015.10 資策會IDEAS Show 創業培訓講師',
  '2015.9 高雄青年職涯發展中心講師',
  '2015.9 中視節目-網路溫度計 專訪',
  '2015.7 AIESEC 青年影響力論壇講師',
  '2015.1 政大數位創世紀學術演討會講師',
  '2014.5 國立高雄科技大學演講',
  '2014.5 共創城市駭客松Sharable City，第一名',
  '2014.4 數位時代創業小聚專訪',
  '2014.3 EST女性創業家演講',
  '2014.2 創業脫口秀節目專訪',
  '2014.2 獲選入Appworks創業加速器 #8',
  '2013.10 Taipei Startup Weekend決賽團隊',
];

const recommendations = [
  { quote: '作為一個網路創業家，我對娜米的經營的用心和細心深表敬意。娜米不斷努力鑽研和優化自己的服務', name: '謝綸', title: '電獺執行長' },
  { quote: '娜米提供了許多有價值的服務，從活動媒合到專業教練顧問諮詢，過程感受到她的在乎與耐心，提供客戶在幸福路上全方位的指引。', name: 'Kevin Lin', title: 'Fandora 行銷總監' },
  { quote: '娜米不僅提供了許多優質的服務，而且也非常專業和用心。她不斷投入時間和精力來改進自己的技術和服務，以確保每一位用戶都能夠得到最好的體驗。', name: '曾少甫', title: '台灣好新聞 創始人' },
  { quote: '娜米是一個非常貼心的人，她親近人、不做作，她用專業的態度和專注的精神，為每一個人提供最好的服務。', name: '麗子老師', title: '彩虹數字學會 理事長' },
  { quote: '她不斷投入時間和精力來提高自己的服務水平，從行銷到技術，她都非常用心地進行優化和提升。', name: 'Dix Chen', title: 'UIUXCafe 執行長' },
  { quote: '娜米是一個非常有才華和用心的人，她不僅是一個平台，更是一個溫暖和有愛的家。', name: '林正立', title: '采童莊執行長' },
  { quote: '我真的被她的服務感動了。她非常用心地為每一個人提供最好的服務，細心地聆聽每個人的需求和願望。', name: '林昱廷', title: 'Mandarin Go 執行長' },
];

export default function PodcastPage() {
  return (
    <SiteShell>
      <main>
        {/* Top banner */}
        <a
          href="#form"
          className="relative block w-full overflow-hidden"
          style={{ height: 400, backgroundColor: '#833ca3' }}
        >
          <img
            src={BASE + '2024/03/podcast-hero-banner.png'}
            alt="戀愛會社節目"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </a>

        {/* Hero */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-sm font-semibold tracking-widest" style={{ color: '#D2E0DE' }}>
              戀愛數字密碼諮詢 × 用數據幫你找對象
            </p>
            <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">・♡ 適合對象 ♡・</h1>
            <ul className="mt-8 space-y-3 text-left max-w-xl mx-auto">
              {painPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/90 text-sm sm:text-base">
                  <span className="mt-0.5 shrink-0" style={{ color: '#07C3BA' }}>【</span>
                  <span>{p}</span>
                  <span className="shrink-0" style={{ color: '#07C3BA' }}>】</span>
                </li>
              ))}
            </ul>
            <a
              href={LINE_URL}
              className="mt-8 inline-block rounded-full px-10 py-4 text-sm font-bold text-white shadow-md hover:opacity-90 transition"
              style={{ background: '#FF93A6' }}
            >
              我要參加
            </a>
          </div>
        </section>

        {/* 戀愛數字密碼怎麼幫助你？ */}
        <section className="bg-white py-16">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-bold sm:text-3xl" style={{ color: '#049089' }}>
              戀愛數字密碼怎麼幫助你？
            </h2>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-gray-800">從生日就能分析戀愛訊息</h3>
              <img src={BASE + '2023/07/numerology-06.png'} alt="從生日就能分析戀愛訊息" className="mt-4 w-full rounded-xl" loading="lazy" />
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-gray-800">拿到你的生日後，娜米發現⋯⋯</h3>
              <p className="mt-2 text-gray-600">相信你一定會想知道⋯⋯</p>
              <img src={BASE + '2023/07/numerology-07.png'} alt="我到底什麼時候才能脫單" className="mt-4 w-full rounded-xl" loading="lazy" />
            </div>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-gray-800">「那我正在什麼年？」</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <img src={BASE + '2023/07/numerology-08.png'} alt="走在身心靈的心三年" className="w-full rounded-xl" loading="lazy" />
                <img src={BASE + '2023/07/numerology-09.png'} alt="他可以能轉角就遇到愛了" className="w-full rounded-xl" loading="lazy" />
                <img src={BASE + '2023/07/numerology-10.png'} alt="就是很多很多的機會會來" className="w-full rounded-xl" loading="lazy" />
              </div>
            </div>

            <p className="mt-8 text-center text-lg font-semibold" style={{ color: '#FF93A6' }}>太羨慕了吧！</p>

            <div className="mt-12">
              <h3 className="text-center text-xl font-bold text-gray-800">娜米最擔心的是⋯⋯</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <img src={BASE + '2023/07/numerology-12.png'} alt="你本來不知道就錯過了" className="w-full rounded-xl" loading="lazy" />
                <img src={BASE + '2023/07/numerology-11.png'} alt="結果你錯過就真的錯過" className="w-full rounded-xl" loading="lazy" />
              </div>
            </div>

            <div className="mt-12 rounded-2xl p-8 text-center" style={{ backgroundColor: '#D2E0DE' }}>
              <h3 className="text-lg font-bold" style={{ color: '#049089' }}>身為戀愛小秘書！娜米不希望你錯過</h3>
              <p className="mt-3 text-gray-700 leading-8">
                趕緊往下預約<br />【戀愛數字密碼諮詢】<br />再回來看影片吧
              </p>
            </div>
          </div>
        </section>

        {/* Podcast episode covers */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-bold sm:text-3xl" style={{ color: '#049089' }}>戀愛會社節目</h2>
            <PodcastEpisodes episodes={episodeCovers} />
          </div>
        </section>

        {/* 3-step process */}
        <section className="bg-white py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-base font-bold text-gray-800">只要 3 步驟</p>
            <h2 className="mt-1 text-xl font-bold text-gray-800 sm:text-2xl">參加戀愛諮詢</h2>
            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
              {steps.map((s) => (
                <div key={s.num} className="flex flex-col items-center">
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full text-xl font-bold text-white"
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

        {/* Testimonials */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-bold sm:text-3xl" style={{ color: '#049089' }}>戀愛密碼諮詢見證</h2>
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center gap-3">
                    <img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" loading="lazy" />
                    <div>
                      <p className="font-bold text-gray-800">{t.name}</p>
                      <p className="text-xs" style={{ color: '#049089' }}>{t.detail}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-gray-600">{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation form */}
        <section id="form" className="bg-white py-16">
          <div className="max-w-[700px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-bold sm:text-3xl" style={{ color: '#049089' }}>我要參加戀愛會社節目</h2>
            <p className="mt-2 text-center text-sm font-semibold text-gray-500">戀愛數字密碼諮詢服務</p>
            <p className="mt-4 text-center text-sm leading-7 text-gray-600">
              歡迎分享任何關於戀愛的疑難雜症，無論是約會、搭訕、把妹、穿搭⋯⋯等問題，都可以匿名留言給我，記得附上你的生日密碼，我和電獺大叔會在節目中為各位解惑喔！
            </p>
            <div className="mt-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700">怎麼稱呼您？（化名、綽號皆可）*</label>
                <p className="mt-1 text-xs text-gray-400">留言將在節目中被公開討論，請盡量使用化名</p>
                <input type="text" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">您的性別？</label>
                <input type="text" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">出生 年、月、日、時、分（時、分若無可只填生日）*</label>
                <input type="text" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">我想問娜米的問題 *</label>
                <textarea rows={4} className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700">方便的話請留下您的 Email，讓戀愛會社能聯繫您</label>
                <input type="email" className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm" />
              </div>
              <a
                href={LINE_URL}
                className="block w-full rounded-full py-3.5 text-center text-sm font-bold text-white shadow-md hover:opacity-90 transition"
                style={{ background: '#2DC861' }}
              >
                已填寫完整，提交給戀愛會社
              </a>
            </div>
          </div>
        </section>

        {/* About Nami */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-bold sm:text-3xl" style={{ color: '#049089' }}>關於娜米老師</h2>
            <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-[280px_1fr]">
              <img
                src={BASE + '2023/03/500x500_5.jpg'}
                alt="娜米老師"
                className="mx-auto w-full max-w-[280px] rounded-2xl object-cover"
              />
              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-gray-800">專長</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-600">
                    {expertise.map((e) => (
                      <li key={e} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0" style={{ color: '#07C3BA' }}>・</span>
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">使命</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    無論你遇到什麼戀愛難題，娜米會陪伴你瞭解現況、給予你在感情方向上最合適自己的建議。相信你能更加了解自己、更有勇氣與力量，找到屬於你的幸福愛情。
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">背景</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-7 text-gray-600">
                    {background.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0" style={{ color: '#07C3BA' }}>・</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="bg-white py-16">
          <div className="max-w-[800px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-bold sm:text-3xl" style={{ color: '#049089' }}>娜米創業歷程與活動經歷</h2>
            <ul className="mt-10 divide-y divide-gray-100">
              {timeline.map((t) => (
                <li key={t.year + t.text} className="flex flex-col gap-1 py-3 sm:flex-row sm:gap-6">
                  <span className="shrink-0 text-sm font-bold sm:w-28" style={{ color: '#049089' }}>{t.year}</span>
                  <span className="text-sm text-gray-700">{t.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Media appearances */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
              <img
                src={BASE + '2023/03/500x500_2.jpg'}
                alt="娜米老師 媒體與演講經歷"
                className="w-full max-w-[200px] shrink-0 rounded-2xl object-cover"
              />
              <div>
                <h2 className="text-lg font-bold" style={{ color: '#049089' }}>媒體採訪與演講經歷</h2>
                <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-1.5 text-xs leading-6 text-gray-600 sm:grid-cols-2">
                  {appearances.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="bg-white py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-center text-2xl font-bold sm:text-3xl" style={{ color: '#049089' }}>感謝各界人士推薦</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

        {/* Final CTA */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">想要立即脫單？</h2>
            <p className="mt-3 text-white/80">現在就預約<br />跟娜米諮詢吧</p>
            <a
              href={LINE_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
              style={{ color: '#049089' }}
            >
              <svg viewBox="0 0 24 24" fill="#2DC861" width="16" height="16" aria-hidden="true">
                <path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              立刻諮詢
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
