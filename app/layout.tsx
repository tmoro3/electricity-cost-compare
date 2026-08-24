import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tmoro3.github.io/electricity-cost-compare/'),
  title: '電力契約の答え合わせ | 東京電力への乗り換え検証',
  description: '実際の東京電力の請求額と、エネパルを継続していた場合の推定額を毎月比較します。',
  openGraph: {
    title: '電力契約の答え合わせ',
    description: '東京電力に変えた判断は、正しかったか。実請求とエネパル継続時の推定額を比較します。',
    images: ['/electricity-cost-compare/social-preview.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Script
          id="cloudflare-web-analytics"
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"073a9f3899514e8fa87bae7785ddb1a0"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

