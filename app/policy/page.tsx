import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';

export const metadata: Metadata = {
  title: '隱私權條款',
  robots: { index: false, follow: false },
};

export default function PolicyPage() {
  return (
    <SiteShell>
      <main className="mx-auto max-w-3xl px-6 py-16 sm:px-8 lg:px-10">
        <h1 className="text-3xl font-bold text-plum">隱私權條款</h1>
        <div className="prose prose-plum mt-8 text-plum/80 [&>h2]:mt-8 [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-plum [&>p]:mt-4 [&>p]:leading-7">
          <h2>資料收集與使用</h2>
          <p>本網站（以下簡稱「本站」）由昱科網路股份有限公司（統編：70525697）營運。我們重視您的隱私權，並依據本隱私權條款處理您的個人資料。</p>
          <h2>收集的資料類型</h2>
          <p>我們可能收集您主動提供的個人資料，包括姓名、聯絡方式、出生日期等，以及您使用本網站時的瀏覽記錄、裝置資訊等技術性資料。</p>
          <h2>資料使用目的</h2>
          <p>所收集的資料僅用於提供配對服務、活動通知、客戶服務及改善網站體驗等目的。我們不會將您的個人資料出售給第三方。</p>
          <h2>資料安全</h2>
          <p>本站採取合理的技術與管理措施保護您的個人資料，防止未授權的存取、使用或洩露。</p>
          <h2>聯絡我們</h2>
          <p>如有任何關於隱私權的疑問，請聯繫我們：mkt@ek21.com</p>
        </div>
      </main>
    </SiteShell>
  );
}
