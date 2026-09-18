'use client';

const LINE_URL = 'https://lin.ee/iweaTucb';

export function FloatingSidebar() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Desktop: vertical side tabs */}
      <div
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-0 md:flex"
        role="complementary"
        aria-label="快速連結"
      >
        <a
          href={LINE_URL}
          onClick={handleClick}
          className="flex items-center justify-center rounded-l-lg px-2 py-4 shadow-lg transition hover:opacity-90 hover:px-3"
          style={{ writingMode: 'vertical-rl', backgroundColor: '#2DC861' }}
        >
          <span className="text-sm font-bold tracking-[0.15em] text-white">加LINE諮詢</span>
        </a>
        <a
          href="/dating/podcast"
          onClick={handleClick}
          className="flex items-center justify-center rounded-l-lg px-2 py-4 shadow-lg transition hover:opacity-90 hover:px-3"
          style={{ writingMode: 'vertical-rl', backgroundColor: '#FF93A6' }}
        >
          <span className="text-sm font-bold tracking-[0.15em] text-white">戀愛會社</span>
        </a>
      </div>

      {/* Mobile: fixed bottom action bar */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 flex md:hidden"
        role="complementary"
        aria-label="快速連結"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <a
          href={LINE_URL}
          onClick={handleClick}
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-white shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor: '#2DC861' }}
        >
          加LINE諮詢
        </a>
        <a
          href="/dating/podcast"
          onClick={handleClick}
          className="flex flex-1 items-center justify-center gap-2 py-3.5 text-sm font-bold text-white shadow-[0_-4px_16px_rgba(0,0,0,0.12)]"
          style={{ backgroundColor: '#FF93A6' }}
        >
          戀愛會社
        </a>
      </div>
    </>
  );
}
