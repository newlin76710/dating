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
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-10">
        <a href="/" className="relative block h-10 w-[140px] shrink-0 sm:h-12 sm:w-[168px]">
          <img
            src="/images/logo.png"
            alt="戀愛小秘書娜米"
            className="absolute inset-0 h-full w-full object-contain object-left"
            loading="eager"
          />
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="主導航">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={LINE_URL}
            className="hidden rounded-md bg-line-green px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:inline-flex"
          >
            加 LINE 免費諮詢
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
        <div id="mobile-menu" className="border-t border-gray-100 bg-white lg:hidden" role="navigation" aria-label="手機版導航">
          <nav className="mx-auto max-w-6xl px-6 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 text-sm font-medium text-gray-700 transition hover:text-teal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={LINE_URL}
              className="mt-3 block rounded-md bg-line-green px-5 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              onClick={() => setOpen(false)}
            >
              加 LINE 免費諮詢
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
