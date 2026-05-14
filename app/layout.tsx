import type { Metadata } from 'next';
import { Playfair_Display, Roboto, Poppins } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: '戀愛小秘書娜米 | 台灣最專業的紅娘 用數據幫你找對象',
    template: '%s — 戀愛小秘書娜米',
  },
  description:
    '戀愛小秘書娜米協助超過 4,000 位未婚男女配對成功！提供單身聯誼活動、一對一配對諮詢、戀愛密碼解析，陪你找到真愛、實現幸福。',
  metadataBase: new URL('https://ek21.com/dating'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    siteName: '戀愛小秘書娜米',
    title: '戀愛小秘書娜米 | 台灣最專業的紅娘 用數據幫你找對象',
    description: '戀愛小秘書娜米協助超過 4,000 位未婚男女配對成功！提供單身聯誼活動、一對一配對諮詢、戀愛密碼解析。',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: '戀愛小秘書娜米 台灣最專業的紅娘',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '戀愛小秘書娜米 | 台灣最專業的紅娘',
    description: '戀愛小秘書娜米協助超過 4,000 位未婚男女配對成功！',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ek21.com/dating',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${playfair.variable} ${roboto.variable} ${poppins.variable}`}>
      <body>
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: '戀愛小秘書娜米',
              url: 'https://ek21.com/dating',
              logo: 'https://ek21.com/dating/wp-content/uploads/2023/04/logo-e1710929001707.png',
              description: '協助超過 4,000 位未婚男女配對成功！提供單身聯誼活動、一對一配對諮詢、戀愛密碼解析。',
              sameAs: [
                'https://lin.ee/iweaTucb',
                'https://www.facebook.com/datenami/',
                'https://www.instagram.com/datenami/',
                'https://www.youtube.com/@datenami',
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: '戀愛小秘書娜米',
              url: 'https://ek21.com/dating',
            }),
          }}
        />
      </body>
    </html>
  );
}
