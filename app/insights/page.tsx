import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '所感一覧 | 電力契約の答え合わせ',
  description: '料金差や制度変更など、記録しておきたい動きがあった月を料金内訳とともに振り返ります。',
};

const reviews = [
  {
    month: '2026年10月',
    period: '2026.09.03 — 10.04',
    tepco: '27,213円',
    enepal: '37,375円',
    difference: '10,162円',
    verdict: '東京電力が安い',
    summary: '通常料金ではエネパルが低かった一方、月ごとの調整額が結果を逆転させた初回比較。',
    href: '/insights/2026-10',
  },
];

export default function InsightsIndex(){
  return <main className="insight-page insights-index">
    <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">E</span><span>電力契約の答え合わせ</span></Link><nav><Link href="/#compare">比較表</Link><Link href="/#events">出来事</Link><Link href="/#rates">料金データ</Link><Link href="/insights">所感</Link></nav><Link className="update-chip" href="/">比較表に戻る</Link></header>

    <article>
      <section className="insight-hero">
        <p className="eyebrow">REVIEWS</p>
        <h1>料金差に動きがあった月を、<br/>内訳から振り返る。</h1>
        <p className="insight-lead">年間ページでは電灯と動力を合算したトータルコストを比較します。所感は毎月ではなく、差が大きく動いた月や制度変更があった月など、記録する意味があるときに追加します。</p>
      </section>

      <section className="review-list" aria-label="所感一覧">
        {reviews.map(review=><Link className="review-card" href={review.href} key={review.month}>
          <div className="review-month"><span>REVIEW</span><strong>{review.month}</strong><small>{review.period}</small></div>
          <div className="review-copy"><p>{review.summary}</p><dl><div><dt>東京電力</dt><dd>{review.tepco}</dd></div><div><dt>エネパル推定</dt><dd>{review.enepal}</dd></div></dl></div>
          <div className="review-verdict"><span>{review.verdict}</span><strong>{review.difference}</strong><small>詳細を見る ↗</small></div>
        </Link>)}
      </section>

      <Link className="insight-back" href="/"><span>←</span><div><small>BACK TO COMPARISON</small><strong>年間比較に戻る</strong></div></Link>
    </article>

    <footer><p>所感を作成した月のみ掲載します。</p><span>電灯＋動力の合算比較</span></footer>
  </main>;
}
