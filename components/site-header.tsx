'use client';

import { useState } from 'react';

const LINE_URL = 'https://lin.ee/iweaTucb';

const navItems = [
  { href: '/party', label: '單身聯誼' },
  { href: '/events', label: '聯誼花絮' },
  { href: '/match', label: '找對象' },
  { href: '/love', label: '脫單指南' },
  { href: '/podcast', label: '戀愛會社' },
  { href: '/about', label: '與娜米合作' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-[#f0f0f5]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <a href="/" className="relative block h-[49px] w-[82px] shrink-0 md:h-[89px] md:w-[150px] lg:h-[98px] lg:w-[165px]">
          <img
            src="/images/logo.png"
            alt="戀愛小秘書娜米"
            className="absolute inset-0 h-full w-full object-contain object-left"
            loading="eager"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="主導航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-[#7a7a7a] transition hover:text-[#049089]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINE_URL}
            className="hidden items-center gap-2 rounded-md bg-line-green px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
            加 line 免費諮詢
          </a>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 lg:hidden"
            aria-label={open ? '關閉選單' : '開啟選單'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-gray-200 bg-[#f0f0f5] lg:hidden" role="navigation" aria-label="手機版導航">
          <nav className="mx-auto max-w-[1200px] px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-semibold text-[#7a7a7a] transition hover:text-[#049089]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINE_URL}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-line-green px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true"><path d="M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/></svg>
              加 line 免費諮詢
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
