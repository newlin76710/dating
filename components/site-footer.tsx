const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

export function SiteFooter() {
  return (
    <footer className="text-white" style={{ background: '#049089' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr_0.6fr]">
          {/* Logo + description */}
          <div>
            <a href="/" className="inline-block mb-4">
              <img
                src={BASE + '2023/04/logo-e1710929001707.png'}
                alt="戀愛小秘書娜米"
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </a>
            <p className="mt-2 max-w-xs text-sm leading-7 text-white/70">
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
              className="mt-5 inline-flex rounded-md px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: '#2DC861' }}
            >
              加 line 免費諮詢
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">服務項目</h3>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="/party" className="transition hover:text-white">單身聯誼</a>
              <a href="/events" className="transition hover:text-white">聯誼花絮</a>
              <a href="/match" className="transition hover:text-white">找對象</a>
              <a href="/love" className="transition hover:text-white">脫單指南</a>
              <a href="/podcast" className="transition hover:text-white">戀愛會社</a>
              <a href="/about" className="transition hover:text-white">與娜米合作</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/80">聯絡我們</h3>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              <p>mkt@ek21.com</p>
              <p>LINE ID：@datenami</p>
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © 昱科網路股份有限公司 2023. All rights reserved. ／ 統編：70525697 ／{' '}
          <a href="/policy" className="hover:text-white/70">隱私權條款</a>
        </p>
      </div>
    </footer>
  );
}
