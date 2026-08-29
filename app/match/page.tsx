import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import { MemberGrid } from '@/components/member-grid';
import type { Member } from '@/components/member-grid';
import { HeroSlides } from '@/components/hero-slides';

export const metadata: Metadata = {
  title: '找對象',
  description: '戀愛小秘書娜米提供真實會員配對，以數據驅動的智慧配對系統，協助未婚男女找到理想對象。',
  openGraph: {
    title: '找對象 — 戀愛小秘書娜米',
    description: '真實會員配對，數據驅動智慧配對系統，讓你快速找到理想對象。',
  },
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';
const IMG = 'https://ek21.com/dating/wp-content/uploads/';

const members: Member[] = [
  // ── Female ──
  {
    name: '林小姐', gender: 'F',
    img: BASE + '2023/03/MTXX_MH20230305_165246124.jpg',
    meta: '血型 B型 ｜ 身高 162cm',
    desc: '護理師，個性溫柔善良，關懷他人是她的天性。喜歡烹飪、健身和旅行，希望找到成熟穩重、懂得珍惜的伴侶。',
  },
  {
    name: '陳小姐', gender: 'F',
    img: BASE + '2024/07/圖片_20240705164903-1536x1536.jpg',
    meta: '血型 A型 ｜ 身高 160cm',
    desc: '從事會計工作，個性文靜細心。平時喜歡閱讀和看電影，希望找到有責任感、溝通能力好的對象。',
  },
  {
    name: '張小姐', gender: 'F',
    img: BASE + '2023/07/1363-1330x1536.jpg',
    meta: '血型 O型 ｜ 身高 163cm',
    desc: '行銷專員，個性開朗外向，善於溝通。喜歡攝影、品嚐美食，希望找到一位有趣幽默、生活積極的男性。',
  },
  {
    name: '黃小姐', gender: 'F',
    img: BASE + '2023/03/1678010686348-1134x1536.jpg',
    meta: '血型 A型 ｜ 身高 158cm',
    desc: '教師，個性溫和有耐心，待人真誠。業餘喜歡瑜伽和手作，希望找到體貼溫柔、有上進心的另一半。',
  },
  {
    name: '吳小姐', gender: 'F',
    img: BASE + '2023/03/1677928834481-1-1152x1536.jpg',
    meta: '血型 AB型 ｜ 身高 165cm',
    desc: '設計師，富有創意和藝術氣息，個性獨立自主。喜歡看展覽、聽音樂，希望遇到有深度、懂得欣賞藝術的伴侶。',
  },
  {
    name: '章小姐', gender: 'F',
    img: BASE + '2024/07/圖片_20240705153950-1202x1536.jpg',
    meta: '血型 AB型 ｜ 身高 157cm',
    desc: '美術編輯，富有創意和藝術氣息。喜歡烹飪和唱歌，性格活潑開朗，希望找到一個懂得欣賞藝術的伴侶。',
  },
  {
    name: '劉小姐', gender: 'F',
    img: BASE + '2021/05/DEHJ0WDWY_UF5UZXFTXAF.png',
    meta: '血型 B型 ｜ 身高 161cm',
    desc: '金融業，個性積極進取，做事有條理。喜歡登山和閱讀，希望找到有共同理想、願意一起成長的對象。',
  },
  {
    name: '蔡小姐', gender: 'F',
    img: BASE + '2024/07/圖片_20240705161359.jpg',
    meta: '血型 A型 ｜ 身高 158cm',
    desc: '會說話的眼睛靈巧動人，個性溫柔體貼。工作認真負責，業餘喜歡烹飪和旅行，希望找到有責任感的男性。',
  },
  {
    name: '鄭小姐', gender: 'F',
    img: BASE + '2023/03/MTXX_MR20230303_160024687-1-1250x1536.jpg',
    meta: '血型 O型 ｜ 身高 164cm',
    desc: '醫療行政，個性親切熱情，擅長照顧他人。喜歡戶外活動和寵物，希望找到善良、有家庭觀念的男性。',
  },
  {
    name: '謝小姐', gender: 'F',
    img: BASE + '2023/09/188283_0-1014x1536.jpg',
    meta: '血型 B型 ｜ 身高 159cm',
    desc: '電商從業者，思維敏捷、適應力強。喜歡逛街、咖啡廳打卡，希望找到陽光開朗、有安全感的另一半。',
  },
  {
    name: '王小姐', gender: 'F',
    img: BASE + '2024/07/圖片_20240705150950-1536x1536.jpg',
    meta: '血型 A型 ｜ 身高 156cm',
    desc: '從事行政助理工作，個性溫和有禮。愛看電視劇和品嚐美食，生活品味高，希望找到一個有共同話題的男性。',
  },
  {
    name: '朱小姐', gender: 'F',
    img: BASE + '2023/03/MTXX_MR20230305_222100113-1152x1536.jpg',
    meta: '血型 O型 ｜ 身高 162cm',
    desc: '公關行業，外向健談，人際關係好。喜歡旅遊和美食探索，希望找到一個有趣、能一起探索世界的伴侶。',
  },
  {
    name: '徐小姐', gender: 'F',
    img: BASE + '2023/03/1678318628454-1536x1265.jpg',
    meta: '血型 A型 ｜ 身高 157cm',
    desc: '藥師，個性認真負責、細心謹慎。下班喜歡畫畫和聽音樂放鬆，希望找到穩定踏實、懂得生活的對象。',
  },
  {
    name: '楊小姐', gender: 'F',
    img: BASE + '2023/06/162386-1536x1533.jpg',
    meta: '血型 B型 ｜ 身高 163cm',
    desc: '服裝設計師，時尚品味獨到，個性活潑有活力。喜歡舞蹈和健身，希望找到有個人魅力、積極向上的男性。',
  },
  {
    name: '許小姐', gender: 'F',
    img: BASE + '2023/07/164854-1331x1536.jpg',
    meta: '血型 AB型 ｜ 身高 160cm',
    desc: '軟體公司工程師，聰明理性，邏輯清晰。業餘喜歡彈鋼琴和看書，希望找到尊重彼此、有共同成長意願的伴侶。',
  },
  {
    name: '何小姐', gender: 'F',
    img: BASE + '2023/08/1690276881459-1260x1536.jpg',
    meta: '血型 O型 ｜ 身高 165cm',
    desc: '品牌行銷，個性陽光積極，充滿正能量。喜歡慢跑和瑜伽，希望找到健康生活態度相近的伴侶。',
  },
  {
    name: '江小姐', gender: 'F',
    img: BASE + '2023/07/1688703912170-1536x1536.jpg',
    meta: '血型 A型 ｜ 身高 161cm',
    desc: '人資主管，個性細膩貼心，善於傾聽。喜歡烘焙和下廚，希望找到溫暖體貼、有責任感的另一半。',
  },
  {
    name: '高小姐', gender: 'F',
    img: BASE + '2023/09/188280_0-1140x1536.jpg',
    meta: '血型 B型 ｜ 身高 158cm',
    desc: '餐飲業主管，個性活潑開朗，充滿熱情。喜歡做料理和戶外郊遊，希望找到喜歡生活、懂得浪漫的男性。',
  },
  {
    name: '余小姐', gender: 'F',
    img: BASE + '2023/05/20230304_191810-1048x1536.jpg',
    meta: '血型 O型 ｜ 身高 162cm',
    desc: '空服員，見識廣博，氣質優雅。喜歡旅行和攝影，希望找到有見識、懂得欣賞生活美好的伴侶。',
  },
  {
    name: '沈小姐', gender: 'F',
    img: BASE + '2023/09/1863-1152x1536.jpg',
    meta: '血型 A型 ｜ 身高 159cm',
    desc: '室內設計師，美感佳，生活精緻。喜歡逛博物館和藝廊，希望找到有品味、共同欣賞美好事物的對象。',
  },
  {
    name: '賴小姐', gender: 'F',
    img: BASE + '2023/09/188281_0.jpg',
    meta: '血型 B型 ｜ 身高 164cm',
    desc: '廣告創意，思維跳躍、充滿靈感。喜歡電影和音樂，希望找到一個有創意、能互相啟發成長的伴侶。',
  },
  {
    name: '范小姐', gender: 'F',
    img: BASE + '2023/03/1678015240756-1152x1536.jpg',
    meta: '血型 O型 ｜ 身高 160cm',
    desc: '社工師，善良熱心，富有愛心。喜歡閱讀和義工服務，希望找到有愛心、懂得關懷他人的男性。',
  },
  {
    name: '蕭小姐', gender: 'F',
    img: BASE + '2021/02/4219-1536x1491.jpg',
    meta: '血型 A型 ｜ 身高 161cm',
    desc: '律師助理，思維縝密，做事有原則。喜歡爬山和看書，希望找到有理想、能互相尊重的穩定對象。',
  },
  {
    name: '周小姐', gender: 'F',
    img: BASE + '2024/07/圖片_20240705165748.jpg',
    meta: '血型 O型 ｜ 身高 160cm',
    desc: '甜甜的微笑能融化人心。性格開朗活潑，喜歡戶外活動和美食探索，希望找到一個體貼溫柔的另一半。',
  },
  // ── Male ──
  {
    name: '王先生', gender: 'M',
    img: BASE + '2023/03/1678493559809-1160x1536.jpg',
    meta: '血型 A型 ｜ 身高 178cm',
    desc: '科技業工程師，個性穩重踏實，做事認真。喜歡健身和騎單車，希望找到溫柔體貼、有共同生活目標的女性。',
  },
  {
    name: '李先生', gender: 'M',
    img: BASE + '2023/08/172213.jpg',
    meta: '血型 O型 ｜ 身高 180cm',
    desc: '醫師，工作忙碌但重視生活品質。喜歡打高爾夫和旅行，希望找到獨立自主、個性溫和的伴侶。',
  },
  {
    name: '張先生', gender: 'M',
    img: BASE + '2023/03/1678493290592-1536x1536.jpg',
    meta: '血型 B型 ｜ 身高 175cm',
    desc: '金融業主管，個性外向健談，有幽默感。喜歡籃球和看電影，希望找到開朗活潑、有想法的女性。',
  },
  {
    name: '陳先生', gender: 'M',
    img: BASE + '2023/03/1678493288703-1533x1536.jpg',
    meta: '血型 A型 ｜ 身高 177cm',
    desc: '建築師，富有創造力，生活品味佳。喜歡攝影和品嚐美食，希望找到有藝術氣息、懂得欣賞生活的伴侶。',
  },
  {
    name: '劉先生', gender: 'M',
    img: BASE + '2023/03/1678493291885.jpg',
    meta: '血型 O型 ｜ 身高 182cm',
    desc: '創業家，思維活躍、積極進取。喜歡登山和閱讀，希望找到獨立有想法、能一起成長的女性。',
  },
  {
    name: '黃先生', gender: 'M',
    img: BASE + '2023/03/1678493288998-1313x1536.jpg',
    meta: '血型 AB型 ｜ 身高 176cm',
    desc: '律師，個性沉穩理性，待人真誠。喜歡馬拉松和紅酒品鑑，希望找到知性溫柔、有自己想法的對象。',
  },
  {
    name: '吳先生', gender: 'M',
    img: BASE + '2023/03/1678493289263-1263x1536.jpg',
    meta: '血型 A型 ｜ 身高 174cm',
    desc: '教師，個性溫和有耐心，重視家庭。喜歡下廚和旅遊，希望找到善良溫暖、有家庭觀念的女性。',
  },
  {
    name: '周先生', gender: 'M',
    img: BASE + '2023/03/1678493559454-1152x1536.jpg',
    meta: '血型 B型 ｜ 身高 179cm',
    desc: '行銷總監，個性開朗自信，人緣好。喜歡爵士樂和電影，希望找到有品味、能一起享受生活的伴侶。',
  },
  {
    name: '徐先生', gender: 'M',
    img: BASE + '2023/03/1678493291604-1024x1536.jpg',
    meta: '血型 O型 ｜ 身高 181cm',
    desc: '外科醫師，有責任心，情感成熟穩定。喜歡爬山和游泳，希望找到溫柔善良、願意共同建立家庭的女性。',
  },
  {
    name: '孫先生', gender: 'M',
    img: BASE + '2023/03/1678493290792-1228x1536.jpg',
    meta: '血型 A型 ｜ 身高 175cm',
    desc: '電商創業者，思維靈活，充滿活力。喜歡打網球和看展覽，希望找到有創意、積極向上的生活夥伴。',
  },
  {
    name: '胡先生', gender: 'M',
    img: BASE + '2023/03/MTXX_MR20230311_071813243-1536x1536.jpg',
    meta: '血型 B型 ｜ 身高 178cm',
    desc: '建設公司主管，個性穩重大方，重視承諾。喜歡高爾夫和慢跑，希望找到溫柔體貼、有家庭責任感的女性。',
  },
  {
    name: '郭先生', gender: 'M',
    img: BASE + '2023/03/1678493289528-1121x1536.jpg',
    meta: '血型 O型 ｜ 身高 176cm',
    desc: '軟體公司CEO，有遠見、重視平衡。喜歡單車旅行和咖啡，希望找到獨立自信、能一起探索世界的伴侶。',
  },
];

const features = [
  { icon: '🔒', title: '實名認證保護', desc: '所有會員均通過身份驗證，確保配對品質與安全性。' },
  { icon: '📊', title: '數據驅動配對', desc: '透過個人資料分析與配對數據，精準推薦最適合的對象。' },
  { icon: '💬', title: '專業顧問陪伴', desc: '戀愛小秘書全程陪伴，從認識到交往，給你最專業的感情建議。' },
];

const successCases = [
  {
    male: { name: '何先生', job: '科技業工程師', img: BASE + '2023/02/male-portrait-glasses.jpg' },
    female: { name: '陳小姐', job: '護理師', img: IMG + '2023/09/188280_0.jpg' },
    days: 45,
    quote: '真的很感謝娜米，我原本不相信這種配對服務，但在第三次活動認識了她之後，才發現原來遇到對的人真的有一種說不出的自然。現在我們已經交往半年了，每天都很幸福。',
    tag: '透過單身聯誼相識',
  },
  {
    male: { name: '楊先生', job: '金融業主管', img: IMG + '2023/03/1678493559809-773x1024.jpg' },
    female: { name: '林小姐', job: '教師', img: IMG + '2023/09/188281_0.jpg' },
    days: 30,
    quote: '娜米幫我配對了好幾位，但是第一次見到她的時候，我就知道這個人不一樣。那種感覺很奇妙，就是莫名覺得很安心、很舒服。感謝娜米的用心安排，讓我遇到了生命中的另一半。',
    tag: '透過1對1配對相識',
  },
  {
    male: { name: '李先生', job: '醫師', img: IMG + '2023/08/172213.jpg' },
    female: { name: '張小姐', job: '設計師', img: IMG + '2023/09/1863-1152x1536.jpg' },
    days: 60,
    quote: '工作忙碌的我一直覺得找不到時間談戀愛。娜米幫我篩選了很多候選人，讓整個過程省力很多。遇見她之後，我們有很多共同話題，約會過程超級自然，現在已經計畫結婚了！',
    tag: '透過1對1配對相識',
  },
  {
    male: { name: '陳先生', job: '建築師', img: IMG + '2023/03/1678493288703-1533x1536.jpg' },
    female: { name: '余小姐', job: '空服員', img: IMG + '2023/05/20230304_191810-1048x1536.jpg' },
    days: 21,
    quote: '參加了酒精墨水畫聯誼，坐我旁邊的她一直讚美我的作品，後來發現她也是畫畫愛好者。活動後我們去喝咖啡聊了三個小時，就這樣開始了。謝謝娜米創造了這麼棒的相遇環境！',
    tag: '透過單身聯誼相識',
  },
  {
    male: { name: '吳先生', job: '教師', img: IMG + '2023/03/1678493289263-1263x1536.jpg' },
    female: { name: '江小姐', job: '人資主管', img: IMG + '2023/07/1688703912170-1536x1536.jpg' },
    days: 90,
    quote: '我參加了好幾次活動都沒有特別心儀的對象，正在考慮放棄。娜米鼓勵我再試一次，說她覺得下一場一定會遇到適合我的人。結果真的就在那場手作蠟燭活動遇到了她，現在我們都很感激。',
    tag: '透過單身聯誼相識',
  },
  {
    male: { name: '黃先生', job: '律師', img: IMG + '2023/03/1678493288998-1313x1536.jpg' },
    female: { name: '許小姐', job: '軟體工程師', img: IMG + '2023/07/164854-1331x1536.jpg' },
    days: 14,
    quote: '娜米配對的時候說我們兩個個性上互補，但我一開始不太相信。見面之後才發現她說得一點都沒錯——她理性，我感性；她細心，我大方，真的像是天生一對。交往一年了，感謝娜米！',
    tag: '透過1對1配對相識',
  },
];

const stats = [
  { num: '4,000+', label: '成功配對人數' },
  { num: '92%', label: '會員滿意度' },
  { num: '8年', label: '服務經驗' },
  { num: '500+', label: '幸福見證' },
];

export default function MatchPage() {
  return (
    <SiteShell>
      <main>
        {/* Hero Banner */}
        <HeroSlides
          slides={[
            { img: BASE + '2023/12/找對象－女生會員徵婚02.png', href: LINE_URL },
            { img: BASE + '2023/08/0809a.jpg', href: LINE_URL, buttonLabel: '給他一個交友機會' },
            { img: BASE + '2023/08/0809c.jpg', href: LINE_URL, buttonLabel: '交友成功' },
            { img: BASE + '2023/12/輪播封面版二01.png', href: LINE_URL },
          ]}
        />

        {/* Breadcrumb */}
        <div style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-3 text-xs text-gray-500 flex items-center gap-1.5">
            <a href="/" className="hover:underline" style={{ color: '#049089' }}>首頁</a>
            <span>›</span>
            <span className="text-gray-700 font-medium">找對象</span>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ background: '#049089' }} className="py-6">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl sm:text-3xl font-bold text-white">{s.num}</p>
                  <p className="mt-1 text-xs text-white/75">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Members Grid */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold" style={{ color: '#049089' }}>精選優質會員</h2>
              <p className="mt-2 text-sm text-gray-500">全部通過實名認證，保障你的配對安全</p>
            </div>
            <MemberGrid members={members} />
          </div>
        </section>

        {/* How it works */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="text-2xl font-bold text-center mb-10" style={{ color: '#049089' }}>
              如何找到你的理想對象？
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.10)] p-6 flex flex-col items-center text-center"
                >
                  <span className="text-4xl">{feature.icon}</span>
                  <h3 className="mt-4 text-base font-semibold text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 leading-6">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Success Cases ── */}
        <section className="py-14 lg:py-20" style={{ background: '#D2E0DE' }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#049089' }}>
                Success Stories
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold" style={{ color: '#049089' }}>
                幸福成功案例
              </h2>
              <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
                超過 500 對佳偶透過戀愛小秘書娜米找到幸福，以下是部分真實故事分享
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {successCases.map((c, i) => (
                <div key={i} className="rounded-2xl bg-white shadow-[0_4px_24px_rgba(0,0,0,0.10)] overflow-hidden flex flex-col">
                  {/* Couple photos */}
                  <div className="flex">
                    <div className="relative w-1/2 aspect-[3/4] overflow-hidden">
                      <img
                        src={c.male.img}
                        alt={c.male.name}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    <div className="relative w-1/2 aspect-[3/4] overflow-hidden">
                      <img
                        src={c.female.img}
                        alt={c.female.name}
                        className="absolute inset-0 h-full w-full object-cover object-top"
                        loading="lazy"
                      />
                    </div>
                    {/* Heart badge */}
                    <div
                      className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full shadow-lg"
                      style={{
                        top: 'calc(50% - 16px)',
                        width: 36, height: 36,
                        background: '#FF93A6',
                        position: 'absolute',
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Names */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-center">
                        <p className="text-sm font-bold" style={{ color: '#049089' }}>{c.male.name}</p>
                        <p className="text-xs text-gray-400">{c.male.job}</p>
                      </div>
                      <div
                        className="text-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ background: '#07C3BA' }}
                      >
                        {c.days} 天後交往
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-bold" style={{ color: '#FF93A6' }}>{c.female.name}</p>
                        <p className="text-xs text-gray-400">{c.female.job}</p>
                      </div>
                    </div>

                    {/* Tag */}
                    <span
                      className="self-start rounded-full px-3 py-0.5 text-xs font-semibold mb-3"
                      style={{ background: '#D2E0DE', color: '#049089' }}
                    >
                      {c.tag}
                    </span>

                    {/* Quote */}
                    <blockquote className="text-xs text-gray-600 leading-6 line-clamp-4 flex-1">
                      「{c.quote}」
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA under cases */}
            <div className="mt-12 text-center">
              <p className="text-base font-semibold text-gray-700 mb-4">你也可以成為下一個成功案例</p>
              <a
                href={LINE_URL}
                className="inline-flex rounded-full px-10 py-4 text-sm font-bold text-white shadow-md hover:opacity-90 transition"
                style={{ background: '#049089' }}
              >
                加LINE免費諮詢配對
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: '#049089' }} className="py-14">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-sm font-semibold tracking-widest" style={{ color: '#D2E0DE' }}>
              幸福就在這裡等你
            </p>
            <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              準備好開始找對象了嗎？
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-base leading-7 text-white/80">
              加入官方LINE，開始你的配對流程，讓娜米為你安排最合適的對象！
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={LINE_URL}
                className="inline-flex rounded-full bg-white px-10 py-4 text-sm font-semibold transition hover:opacity-90"
                style={{ color: '#049089' }}
              >
                加LINE開始配對
              </a>
              <a
                href="/party"
                className="inline-flex rounded-full border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                參加單身聯誼活動
              </a>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
