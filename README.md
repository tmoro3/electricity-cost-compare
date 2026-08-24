# electricity-cost-compare

東京電力（従量電灯B 60A・低圧電力4kW）の実請求額と、同じ使用量でエネパル（パルプレミアムS B 60A・パル動力プレミアムS 3kW）を契約していた場合の推定額を比較するWebアプリです。

- 使用量と請求額はブラウザの端末内だけに保存
- CSVによるバックアップと復元
- 基本料金・従量単価は適用開始月ごとに履歴管理
- GitHub Actionsが毎月公式ページを確認し、要確認事項をIssue化
- GitHub Pagesへ自動公開

## 開発

```bash
npm install
npm run dev
```

料金データは `public/data/rates.json` で管理します。変更後は `npm run rates:validate` で検証してください。

