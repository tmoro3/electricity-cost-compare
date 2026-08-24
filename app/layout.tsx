import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tmoro3.github.io/electricity-cost-compare/'),
  title: '電気料金比較 | TEPCO vs エネパル',
  description: '東京電力の実請求額と、同じ使用量でのエネパル推定額を比較します。',
  openGraph: {
    title: '電気料金比較 | TEPCO vs エネパル',
    description: '実際に払った金額と、選べたはずの金額を月ごとに比較。',
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
      <body>{children}</body>
    </html>
  );
}

