import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026年10月の所感 | 電力契約の答え合わせ',
  description: '東京電力の実請求とエネパル継続時の推定額に、なぜ約1万円の差が出たのかを整理します。',
};

export default function OctoberInsight(){
  return <main className="insight-page">
    <header className="site-header"><Link className="brand" href="/"><span className="brand-mark">E</span><span>電力契約の答え合わせ</span></Link><nav><Link href="/#compare">比較表</Link><Link href="/#events">出来事</Link><Link href="/#rates">料金データ</Link><Link href="/insights">所感</Link></nav><Link className="update-chip" href="/">比較表に戻る</Link></header>

    <article>
      <section className="insight-hero">
        <p className="eyebrow">OCTOBER 2026 REVIEW</p>
        <h1>初回比較で、なぜ<br/>約1万円の差が<br/>出たのか。</h1>
        <p className="insight-lead">東京電力への切り替え後、初めて1か月分がそろった2026年10月。料金差は会社の良し悪しを単純に示すものではなく、基本・従量料金と、その月の調整額を組み合わせた結果です。</p>
      </section>

      <section className="insight-result" aria-label="2026年10月の比較結果">
        <div><span>東京電力 実請求</span><strong>27,213円</strong></div>
        <div><span>エネパル 継続時推定</span><strong>37,375円</strong></div>
        <div className="insight-difference"><span>今回の差</span><strong>10,162円</strong><small>東京電力が安い</small></div>
      </section>

      <section className="insight-body">
        <div className="insight-heading"><span>01</span><div><p>WHAT HAPPENED</p><h2>通常料金では、エネパルの方が低かった</h2></div></div>
        <p>電灯398kWh・動力407kWhを同じ条件で計算すると、基本料金と電力量料金の部分だけでは、エネパルの方が約9,311円低い試算でした。今回の差は、基本料金や通常の従量単価だけで生じたものではありません。</p>

        <div className="insight-heading"><span>02</span><div><p>THE TURNING POINT</p><h2>月ごとの調整額が、結果を逆転させた</h2></div></div>
        <p>東京電力の請求書上の燃料費調整額約7,487円の値引きには、国の支援約2,818円が含まれています。対応する項目をそろえると、国の支援と再エネ賦課金は両社同額です。一方、東京電力では支援を除く燃料費調整が約4,669円の値引き、エネパルでは9月度の調達調整費が約13,715円の加算となり、この月次調整の違いが結果を逆転させました。</p>

        <div className="difference-table-wrap" style={{overflowX:'auto'}}>
          <table className="difference-table" style={{minWidth:'620px'}}>
            <caption style={{textAlign:'left',padding:'0 0 12px',fontWeight:800}}>従量電灯｜398kWh（両社60A）</caption>
            <thead><tr><th>対応する料金項目</th><th>東京電力</th><th>エネパル</th><th>差額</th></tr></thead>
            <tbody>
              <tr><td>基本料金・電力量料金</td><td>15,967円</td><td>11,759円</td><td className="enepal-advantage">−4,208円</td></tr>
              <tr><td>燃料費調整<br/><small>国の支援を除く</small></td><td>−2,308円</td><td>0円</td><td>＋2,308円</td></tr>
              <tr><td>調達調整費</td><td>0円</td><td>＋6,781円</td><td>＋6,781円</td></tr>
              <tr><td>国の支援</td><td>−1,393円</td><td>−1,393円</td><td>0円</td></tr>
              <tr><td>安定供給維持費</td><td>0円</td><td>＋726円</td><td>＋726円</td></tr>
              <tr><td>再エネ発電賦課金</td><td>＋1,663円</td><td>＋1,664円</td><td>＋1円</td></tr>
            </tbody>
            <tfoot><tr><th>電灯 小計</th><th>13,928円</th><th>19,536円</th><th>＋5,608円</th></tr></tfoot>
          </table>

          <table className="difference-table" style={{minWidth:'620px',marginTop:'36px'}}>
            <caption style={{textAlign:'left',padding:'0 0 12px',fontWeight:800}}>低圧電力・動力｜407kWh（東京電力4kW／エネパル3kW）</caption>
            <thead><tr><th>対応する料金項目</th><th>東京電力</th><th>エネパル</th><th>差額</th></tr></thead>
            <tbody>
              <tr><td>基本料金・電力量料金</td><td>15,369円</td><td>10,266円</td><td className="enepal-advantage">−5,103円</td></tr>
              <tr><td>燃料費調整<br/><small>国の支援を除く</small></td><td>−2,361円</td><td>0円</td><td>＋2,361円</td></tr>
              <tr><td>調達調整費</td><td>0円</td><td>＋6,934円</td><td>＋6,934円</td></tr>
              <tr><td>国の支援</td><td>−1,425円</td><td>−1,425円</td><td>0円</td></tr>
              <tr><td>安定供給維持費</td><td>0円</td><td>＋363円</td><td>＋363円</td></tr>
              <tr><td>再エネ発電賦課金</td><td>＋1,701円</td><td>＋1,701円</td><td>0円</td></tr>
            </tbody>
            <tfoot><tr><th>低圧・動力 小計</th><th>13,285円</th><th>17,839円</th><th>＋4,554円</th></tr></tfoot>
          </table>

          <table className="difference-table" style={{minWidth:'620px',marginTop:'36px'}}>
            <tfoot><tr><th>電灯＋動力 合計</th><th>27,213円</th><th>37,375円</th><th>＋10,162円</th></tr></tfoot>
          </table>
          <p>差額は「エネパル − 東京電力」。＋は東京電力が安く、−はエネパルが安いことを示します。東京電力は実請求、エネパルは公式単価による推定です。内訳は円単位へ丸めているため、行の単純合計と小計に1円程度の差が生じる場合があります。</p>
        </div>

        <aside className="insight-note">
          <span>比較の考え方</span>
          <p>エネパルには、市場価格が基準を超えた部分を3か月後へ繰り延べる制度があります。これは値引きではなく支払時期の変更なので、この比較では最終的に支払う費用を使用月に計上しています。</p>
        </aside>

        <div className="insight-heading"><span>03</span><div><p>WHAT THIS MEANS</p><h2>1か月だけでは、まだ結論にしない</h2></div></div>
        <p>今回の結果は、9月の市場価格と両社の調整方法が大きく影響しています。別の月には差が縮まったり、結果が逆転したりする可能性もあります。「エネパルは高い」「東京電力なら常に安い」と結論づけず、同じ方法で1年間積み上げ、累計額で切り替え判断を検証します。</p>
      </section>

      <section className="insight-method">
        <div><p>対象期間</p><strong>2026.09.03 — 10.04</strong><span>32日間</span></div>
        <div><p>使用量</p><strong>805 kWh</strong><span>電灯398＋動力407</span></div>
        <div><p>比較方法</p><strong>同一使用量</strong><span>実請求 対 継続時推定</span></div>
      </section>

      <section className="insight-sources">
        <div className="insight-heading"><span>04</span><div><p>SOURCES</p><h2>参照した公式資料</h2></div></div>
        <div className="insight-source-links">
          <a href="https://www4.tepco.co.jp/ep/private/fuelcost2/newlist/index-j.html" target="_blank" rel="noreferrer">東京電力｜燃料費調整制度 ↗</a>
          <a href="https://enepal.co.jp/palpower-energy/power-procurument/" target="_blank" rel="noreferrer">エネパル｜電源調達調整費の仕組み ↗</a>
          <a href="https://enepal.co.jp/wp/wp-content/uploads/2026/09/enepal_dengenchotatsuchousei_202609.pdf" target="_blank" rel="noreferrer">エネパル｜2026年9月度 電源調達調整費 ↗</a>
          <a href="https://enepal.co.jp/palpower-energy/flat-regulations/" target="_blank" rel="noreferrer">エネパル｜支払繰延規定 ↗</a>
        </div>
        <p className="insight-caption">東京電力の金額は実際の請求額、エネパルは公式単価を同じ使用量に当てはめた推定額です。端数処理や個別条件により、実際の請求とは差が生じる場合があります。</p>
      </section>

      <Link className="insight-back" href="/"><span>←</span><div><small>BACK TO COMPARISON</small><strong>比較表に戻る</strong></div></Link>
    </article>

    <footer><p>特定の事業者を評価するものではなく、契約変更を同一条件で振り返るための個人記録です。</p><span>2026年10月6日 記録</span></footer>
  </main>;
}
