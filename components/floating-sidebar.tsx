'use client';

const LINE_URL = 'https://lin.ee/iweaTucb';

export function FloatingSidebar() {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed right-0 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-0" role="complementary" aria-label="快速連結">
      <a
        href={LINE_URL}
        onClick={handleClick}
        className="flex items-center justify-center rounded-l-lg px-2 py-4 shadow-lg transition hover:opacity-90"
        style={{ writingMode: 'vertical-rl', backgroundColor: '#2DC861' }}
      >
        <span className="text-sm font-bold tracking-[0.15em] text-white">加LINE諮詢</span>
      </a>
      <a
        href="/podcast"
        onClick={handleClick}
        className="flex items-center justify-center rounded-l-lg px-2 py-4 shadow-lg transition hover:opacity-90"
        style={{ writingMode: 'vertical-rl', backgroundColor: '#FF93A6' }}
      >
        <span className="text-sm font-bold tracking-[0.15em] text-white">戀愛會社</span>
      </a>
    </div>
  );
}
