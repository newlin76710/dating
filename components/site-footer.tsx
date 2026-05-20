const LINE_URL = 'https://lin.ee/iweaTucb';
const BASE = '/images/original/ek21.com/dating/wp-content/uploads/';

export function SiteFooter() {
  return (
    <footer className="text-white" style={{ background: '#049089' }}>
      <div className="mx-auto max-w-[1200px] px-6 py-7 sm:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_0.8fr_0.6fr]">
          {/* Logo + description */}
          <div>
            <p className="mt-2 max-w-xs text-sm leading-7 text-white/70">
              單身聯誼活動、交友平台、相親認識異性、找對象的交友網站、婚友社、脫單
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a href="https://www.facebook.com/datenami/" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.youtube.com/@datenami" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
              </a>
              <a href="https://www.instagram.com/datenami/" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://www.tiktok.com/@datnami" target="_blank" rel="noopener noreferrer" className="text-white/60 transition hover:text-white" aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a href="mailto:mkt@ek21.com" className="text-white/60 transition hover:text-white" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/></svg>
              </a>
            </div>
            <a
              href={LINE_URL}
              className="mt-5 inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: '#2DC861' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              加 line 免費諮詢
            </a>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">服務項目</h3>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-sm text-white/70">
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
              <a href="mailto:mkt@ek21.com" className="transition hover:text-white">mkt@ek21.com</a>
              <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LINE ID：@datenami</a>
            </div>
          </div>
        </div>

        <p className="mt-6 border-t border-white/10 pt-4 text-xs text-white/40">
          © 昱科網路股份有限公司 2023. All rights reserved. ／ 統編：70525697 ／{' '}
          <a href="/policy" className="hover:text-white/70">隱私權條款</a>
        </p>
      </div>
    </footer>
  );
}
