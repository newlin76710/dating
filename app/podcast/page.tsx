import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '戀愛會社',
  description: '戀愛小秘書娜米主持的「戀愛密碼諮詢節目」，以彩虹數字分析生命藍圖，解答你的戀愛困惑。',
};

const LINE_URL = 'https://lin.ee/iweaTucb';
const IMG = 'https://ek21.com/dating/wp-content/uploads/';

interface Episode {
  title: string;
  img: string;
  excerpt: string;
  date: string;
  ep: string;
  url: string;
}

const episodes: Episode[] = [
  { title: '大谷翔平連愛情也全壘打⚾️怎麼跟工作狂戀愛', img: IMG+'2024/09/戀愛會社34：cover.jpg', excerpt: '戀愛會社娜米致力於解決兩性愛情疑難雜症，大谷翔平連愛情也全壘打，怎麼跟工作狂談戀愛？', date: '2024/09', ep: 'S1 EP34', url: 'https://ek21.com/dating/72472/' },
  { title: '黃仁勳和麥可喬丹都擁有的事業密碼是「X」！', img: IMG+'2024/09/戀愛會社33：cover.jpg', excerpt: '戀愛會社娜米分析黃仁勳和麥可喬丹的數字密碼，找出成功人士背後的事業密碼！', date: '2024/09', ep: 'S1 EP33', url: 'https://ek21.com/dating/72459/' },
  { title: '大S具俊燁是「命運之戀」偷偷藏不住🤫', img: IMG+'2024/09/32：cover.jpg', excerpt: '戀愛會社娜米分析大S與具俊燁的戀愛密碼，命運之戀到底藏著什麼秘密？', date: '2024/09', ep: 'S1 EP32', url: 'https://ek21.com/dating/72442/' },
  { title: '大S是天生的獵人🤫與汪小菲離婚的原因是「OOO」', img: IMG+'2024/09/戀愛會社31：cover.jpg', excerpt: '戀愛會社娜米深度分析大S與汪小菲離婚的真實原因，數字密碼揭露感情走向！', date: '2024/09', ep: 'S1 EP31', url: 'https://ek21.com/dating/72425/' },
  { title: '「天生公主」新垣結衣與星野源的💥第三者危機💥', img: IMG+'2024/09/30：cover.jpg', excerpt: '戀愛會社娜米分析新垣結衣與星野源的感情危機，第三者問題到底如何解決？', date: '2024/09', ep: 'S1 EP30', url: 'https://ek21.com/dating/72414/' },
  { title: '星野源外遇🤫其實是OOO的考驗⚠️', img: IMG+'2024/06/戀愛會社29：感情劇本.png', excerpt: '戀愛會社娜米解析星野源的感情事件，透過數字密碼找出背後的真正意義！', date: '2024/06', ep: 'S1 EP29', url: 'https://ek21.com/dating/72239/' },
  { title: '宅宅的愛情時刻來臨⚠️我愛的老實人到底在哪', img: IMG+'2024/06/ep26-cover.jpg', excerpt: '宅男也有愛情的春天！戀愛會社娜米告訴你如何吸引老實人，脫單不是夢！', date: '2024/06', ep: 'S1 EP26', url: 'https://ek21.com/dating/72269/' },
  { title: 'Toyz篠崎泫的戀愛劇本🤫因「這三點」破局', img: IMG+'2024/06/戀愛會社27：名人介紹.jpeg', excerpt: '戀愛會社娜米分析Toyz篠崎泫的感情故事，找出感情破局的三個關鍵原因！', date: '2024/06', ep: 'S1 EP27', url: 'https://ek21.com/dating/72254/' },
  { title: '女神林襄的感情危機？一次性分析給你聽⚠️', img: IMG+'2024/06/ep28-YT-封面.jpg', excerpt: '戀愛會社娜米一次性分析女神林襄的感情危機，感情路上的波折與轉機！', date: '2024/06', ep: 'S1 EP28', url: 'https://ek21.com/dating/72242/' },
  { title: '撩不住的女強人？真的是我對伴侶太苛刻了嗎！', img: IMG+'2024/06/ep25-YT-封面.jpg', excerpt: '戀愛會社娜米告訴你，女強人也有感情困擾！對伴侶的要求到底是標準高還是找錯方向？', date: '2024/06', ep: 'S1 EP25', url: 'https://ek21.com/dating/72220/' },
  { title: '有「這個」特質，總是被當工具人？', img: IMG+'2024/05/ep24-YT-封面.jpg', excerpt: '哪些特質容易讓你被當工具人？戀愛會社娜米教你改變這些特質，從今天開始！', date: '2024/05', ep: 'S1 EP24', url: 'https://ek21.com/dating/72144/' },
  { title: '失婚男的心聲💔不敢再愛怎麼辦？', img: IMG+'2024/04/ep2-cover.jpg', excerpt: '戀愛會社娜米幫助失婚男性找回愛的勇氣，從傷痛中走出，重新迎接幸福！', date: '2024/05', ep: 'S1 EP23', url: 'https://ek21.com/dating/72074/' },
  { title: '直男的天堂來啦~~用表格也能找對象？', img: IMG+'2024/05/ep23-YT-封面.jpg', excerpt: '戀愛會社娜米介紹最新的配對方式，直男也能輕鬆找到對象！', date: '2024/05', ep: 'S1 EP22', url: 'https://ek21.com/dating/72056/' },
  { title: '愛情來得太快就像龍捲風🤫正妹的愛情煩惱一次說給你聽', img: IMG+'2024/03/戀愛會社：節目截圖.jpg', excerpt: '戀愛會社娜米一次性解析正妹的感情煩惱，愛情來得快，去得也快，如何把握？', date: '2024/05', ep: 'S1 EP21', url: 'https://ek21.com/dating/72033/' },
  { title: '沒有愛情難道就是魯蛇🤫曠夫怨女大集合！', img: IMG+'2024/03/戀愛會社：節目截圖.jpg', excerpt: '沒有愛情不代表你是魯蛇！戀愛會社娜米告訴你找到問題所在，今年穩脫單！', date: '2024/05', ep: 'S1 EP20', url: 'https://ek21.com/dating/71991/' },
  { title: '💔跟女生聊天好難！女生話題我都不會😭', img: IMG+'2024/03/做自己.png', excerpt: '戀愛會社娜米教你如何突破聊天障礙，讓你輕鬆與女生對話，不再被句點！', date: '2024/03', ep: 'S1 EP19', url: 'https://ek21.com/dating/71598/' },
  { title: '必看⚠️2024下半年流年運勢｜開運指南｜', img: IMG+'2024/03/流年運勢：九年循環表.jpg', excerpt: '戀愛會社娜米帶來2024下半年的流年運勢分析，把握機會開運，感情財運雙豐收！', date: '2024/03', ep: 'S1 EP18', url: 'https://ek21.com/dating/71694/' },
];

export default function PodcastPage() {
  return (
    <SiteShell>
      <main>
        {/* Banner */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h1 className="text-4xl font-bold text-white">戀愛會社</h1>
            <p className="mt-4 text-lg text-white/80">戀愛密碼諮詢節目 × 彩虹數字 × 生命藍圖</p>
          </div>
        </section>

        {/* Episodes Grid */}
        <section className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((episode) => (
              <a
                key={episode.url}
                href={episode.url}
                className="group overflow-hidden rounded-xl bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)] transition hover:shadow-lg"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={episode.img}
                    alt={episode.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                  <span
                    className="absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-bold text-white"
                    style={{ background: 'rgba(4,144,137,0.90)' }}
                  >
                    {episode.ep}
                  </span>
                </div>
                <div className="p-4">
                  <span
                    className="inline-block rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                    style={{ background: '#07C3BA' }}
                  >
                    節目
                  </span>
                  <h2 className="mt-2 text-sm font-semibold leading-5 text-[#1a1a1a] line-clamp-2">
                    {episode.title}
                  </h2>
                  <p className="mt-1.5 text-xs text-gray-500 leading-5 line-clamp-2">{episode.excerpt}</p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{episode.date}</span>
                    <span className="text-xs font-medium" style={{ color: '#FF93A6' }}>閱讀更多 »</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: '#049089' }} className="py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">想讓娜米幫你解析戀愛密碼？</h2>
            <p className="mt-3 text-white/70">
              加入官方LINE，提交你的生日與感情問題，娜米將在節目中為你解答！
            </p>
            <a
              href={LINE_URL}
              className="mt-6 inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: '#06C755' }}
            >
              加LINE免費諮詢
            </a>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
