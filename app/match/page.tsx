import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '找對象',
  description: '戀愛小秘書娜米提供真實會員配對，以數據驅動的智慧配對系統，協助未婚男女找到理想對象。',
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const IMG = 'https://ek21.com/dating/wp-content/uploads/';

interface Member {
  name: string;
  img: string;
  meta: string;
  desc: string;
  url: string;
}

const members: Member[] = [
  { name: '周小姐', img: IMG+'2024/07/圖片_20240705165748.jpg', meta: '血型 O型 ｜ 身高 160cm', desc: '甜甜的微笑能融化人心。性格開朗活潑，喜歡戶外活動和美食探索，希望找到一個體貼溫柔的另一半。', url: 'https://ek21.com/dating/72324/' },
  { name: '李小姐', img: IMG+'2024/07/圖片_20240705164903.jpg', meta: '血型 A型 ｜ 身高 160cm', desc: '從事會計工作，個性文靜嫻雅，做事細心有條理。平時喜歡閱讀和看電影，希望找到一個成熟穩重的對象。', url: 'https://ek21.com/dating/72317/' },
  { name: '吳小姐', img: IMG+'2024/07/圖片_20240705161359.jpg', meta: '血型 A型 ｜ 身高 158cm', desc: '會說話的眼睛靈巧動人，個性溫柔體貼。工作認真負責，業餘喜歡烹飪和旅行，希望找到有責任感的男性。', url: 'https://ek21.com/dating/72311/' },
  { name: '章小姐', img: IMG+'2024/07/圖片_20240705153950.jpg', meta: '血型 AB型 ｜ 身高 157cm', desc: '美術編輯，富有創意和藝術氣息。喜歡烹飪和唱歌，性格活潑開朗，希望找到一個懂得欣賞藝術的伴侶。', url: 'https://ek21.com/dating/72304/' },
  { name: '王小姐', img: IMG+'2024/07/圖片_20240705150950.jpg', meta: '血型 A型 ｜ 身高 156cm', desc: '從事行政助理工作，個性溫和有禮。愛看電視劇和品嚐美食，生活品味高，希望找到一個有共同話題的男性。', url: 'https://ek21.com/dating/72297/' },
];

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

const features: Feature[] = [
  { icon: '🔒', title: '實名認證保護', desc: '所有會員均通過身份驗證，確保配對品質與安全性。' },
  { icon: '📊', title: '數據驅動配對', desc: '透過個人資料分析與配對數據，精準推薦最適合的對象。' },
  { icon: '💬', title: '專業顧問陪伴', desc: '戀愛小秘書全程陪伴，從認識到交往，給你最專業的感情建議。' },
];

export default function MatchPage() {
  return (
    <SiteShell>
      <main>
        {/* Banner */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h1 className="text-4xl font-bold text-white">找對象</h1>
            <p className="mt-4 text-lg text-white/80">真實會員 × 數據配對 × 專業陪伴</p>
          </div>
        </section>

        {/* Members Grid */}
        <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member) => (
              <div
                key={member.url}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-bold" style={{ color: '#049089' }}>{member.name}</h2>
                  <p className="mt-1 text-sm text-gray-500">{member.meta}</p>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-3">{member.desc}</p>
                  <a
                    href={member.url}
                    className="mt-4 inline-block rounded-full px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                    style={{ background: '#049089' }}
                  >
                    了解更多
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 pb-12 lg:pb-16">
          <h2 className="text-2xl font-bold text-center" style={{ color: '#049089' }}>
            如何找到你的理想對象？
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] p-6 flex flex-col items-center text-center"
              >
                <span className="text-4xl">{feature.icon}</span>
                <h3 className="mt-4 text-base font-semibold text-[#1a1a1a]">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-6">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">準備好開始找對象了嗎？</h2>
            <p className="mt-3 text-white/70">
              加入官方LINE，開始你的配對流程，讓娜米為你安排最合適的對象！
            </p>
            <a
              href={LINE_URL}
              className="mt-6 inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: '#06C755' }}
            >
              加LINE開始配對
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
