const LINE_URL = 'https://lin.ee/iweaTucb';

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 text-white" style={{ background: '#049089' }}>
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-xl font-semibold">戀愛小秘書娜米 | 用數據幫你找對象</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              單身聯誼活動、交友平台、相親認識異性、找對象的交友網站、婚友社、脫單
            </p>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/60">
              <a href="https://www.facebook.com/datenami/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Facebook</a>
              <a href="https://www.youtube.com/@datenami" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">YouTube</a>
              <a href="https://www.instagram.com/datenami/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">Instagram</a>
              <a href="https://www.tiktok.com/@datnami" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">TikTok</a>
            </div>
            <a
              href={LINE_URL}
              className="mt-6 inline-flex rounded-md px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: '#2DC861' }}
            >
              加 LINE 免費諮詢
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-white/70">
            <a href="/party" className="transition hover:text-white">單身聯誼</a>
            <a href="/events" className="transition hover:text-white">聯誼花絮</a>
            <a href="/match" className="transition hover:text-white">找對象</a>
            <a href="/love" className="transition hover:text-white">脫單指南</a>
            <a href="/podcast" className="transition hover:text-white">戀愛會社</a>
            <a href="/about" className="transition hover:text-white">與娜米合作</a>
          </div>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © 昱科網路股份有限公司 2023. All rights reserved. ／ 統編：70525697 ／{' '}
          <a href="/policy" className="hover:text-white/70">隱私權條款</a> ／ 聯絡我們：mkt@ek21.com
        </p>
      </div>
    </footer>
  );
}
