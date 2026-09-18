'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LineButton } from './ui/button';

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
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-30 bg-[#f0f0f5]/95 backdrop-blur-sm shadow-sm">
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
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`relative py-1 text-sm font-semibold transition after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:bg-[#049089] after:transition-all ${
                isActive(item.href)
                  ? 'text-[#049089] after:w-full'
                  : 'text-[#7a7a7a] hover:text-[#049089] after:w-0 hover:after:w-full'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LineButton href={LINE_URL} icon size="md" className="hidden sm:inline-flex">
            加 line 免費諮詢
          </LineButton>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="relative flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100 lg:hidden"
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

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-gray-200 bg-[#f0f0f5] transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="navigation"
        aria-label="手機版導航"
      >
        <nav className="mx-auto max-w-[1200px] px-6 py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={`block py-3 text-sm font-semibold transition ${
                isActive(item.href) ? 'text-[#049089]' : 'text-[#7a7a7a] hover:text-[#049089]'
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <LineButton href={LINE_URL} icon size="md" className="mt-3 flex w-full" onClick={() => setOpen(false)}>
            加 line 免費諮詢
          </LineButton>
        </nav>
      </div>
    </header>
  );
}
