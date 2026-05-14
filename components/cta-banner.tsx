const LINE_URL = 'https://lin.ee/iweaTucb';

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
      <div className="overflow-hidden rounded-[2rem] bg-plum px-8 py-12 text-white shadow-soft md:px-12 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">別再為繼續單身找藉口！</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">追求脫單，先勇敢跨出你的第一步吧！</h2>
            <p className="mt-4 text-base leading-7 text-white/75 md:text-lg">
              建議以認識新朋友的心態，積極參與活動，才能真正為自己帶來戀愛的機會！
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={LINE_URL}
              className="rounded-full bg-white px-6 py-3 text-center text-sm font-semibold text-plum transition hover:bg-sand"
            >
              加 LINE 免費諮詢
            </a>
            <a
              href="/party"
              className="rounded-full border border-white/25 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/10"
            >
              參加單身聯誼
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
