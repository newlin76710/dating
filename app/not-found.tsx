import { SiteShell } from '@/components/site-shell';

export default function NotFound() {
  return (
    <SiteShell>
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-6xl font-bold text-rose">404</p>
        <h1 className="mt-4 text-2xl font-bold text-plum">頁面不存在</h1>
        <p className="mt-3 text-plum/60">這個頁面已移除或網址有誤</p>
        <div className="mt-8 flex gap-4">
          <a href="/" className="rounded-full bg-rose px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90">
            回到首頁
          </a>
          <a href="https://lin.ee/iweaTucb" className="rounded-full border border-plum/20 px-6 py-3 text-sm font-semibold text-plum transition hover:border-rose hover:text-rose">
            加LINE諮詢
          </a>
        </div>
      </main>
    </SiteShell>
  );
}
