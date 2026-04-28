# LIFE ARTS LIVE Web Museum

LIFE ARTS LIVE のWeb博物館 / アーカイブサイト初期版です。

## 初期構成

- `/` トップページ
- `/archive` 過去回一覧
- `/archive/8` 第8回詳細
- `/archive/9` 第9回詳細

## 起動方法

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000` を開いてください。

## ビルド確認

```bash
npm run build
```

## 差し替える主なファイル

### 共通情報

`src/data/site.ts`

- トップコピー
- 補足コピー
- 主催メッセージ
- Instagram URL
- ヒーロー画像
- About画像

### 過去回情報

`src/data/events.ts`

- 第8回 / 第9回の開催日
- 会場名
- 短いひとこと
- テーマ文
- 写真ギャラリー
- 出演者ID
- 関連リンク

### 出演者情報

`src/data/performers.ts`

- 出演者名
- 写真
- ジャンル
- ひとこと紹介
- SNSリンク
- 出演回

### 次回開催情報

`src/data/nextLive.ts`

- 次回タイトル
- 開催日
- 会場
- OPEN / START
- 料金
- 問い合わせ先
- 次回出演者

## 画像の置き場所

```text
public/images/hero/
public/images/archive/08/
public/images/archive/09/
public/images/performers/
```

最初はSVGの仮画像を入れています。実写真に差し替える場合は、データファイル内の画像パスも合わせて変更してください。

## Wix並行検討用の対応

- `site.ts` → SiteSettings
- `events.ts` → Events Collection
- `performers.ts` → Performers Collection
- `nextLive.ts` → NextLive Collection

同じ項目名を使うと、将来的にWix Studio / CMSへ移す場合も整理しやすくなります。
