// 網站是純靜態檔案（next build 的 output: 'export'），由 Workers Static Assets 直接回應，
// 不會執行這支程式，也不計入 Worker 請求數。只有找不到對應檔案時才會進到這裡：
// - 子網域（Custom Domain）→ 轉址到主網域的 /dating
// - 其他找不到的網址 → 404 頁
const SUBDOMAIN_TO_APEX = {
  'dating.ek21.com.tw': 'ek21.com.tw',
  'dating.ek21.com': 'ek21.com',
  'dating.ek21.tw': 'ek21.tw',
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const apex = SUBDOMAIN_TO_APEX[url.hostname];
    if (apex) {
      return Response.redirect(`https://${apex}/dating${url.pathname === '/' ? '' : url.pathname}${url.search}`, 308);
    }
    const page = await env.ASSETS.fetch(new URL('/dating/404.html', url));
    return new Response(page.body, { status: 404, headers: page.headers });
  },
};
