// 把 next build 的靜態輸出（out/）放到 dist/dating/，對應網址的 /dating 路徑（basePath）
import { cpSync, rmSync, writeFileSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
cpSync('out', 'dist/dating', { recursive: true });
// 靜態資源長期快取（原本寫在 vercel.json）
writeFileSync(
  'dist/_headers',
  ['/dating/_next/static/*', '  Cache-Control: public, max-age=31536000, immutable', '/dating/images/*', '  Cache-Control: public, max-age=31536000, immutable', ''].join('\n'),
);
