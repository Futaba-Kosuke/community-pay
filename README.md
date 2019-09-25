# community-pay

## 環境構築手順

1. npmより高度なパッケージマネージャーを導入
```sh
npm install yarn
```

2. Vue-cliの導入
```sh
yarn global add @vue/cli
yarn global add @vue/cli-service-global
```

3. Vue-cliの確認
```sh
vue --version
```

4. 本リポジトリをクローン
```sh
git clone git@github.com:Futaba-Kosuke/community-pay.git
cd community-pay
yarn install
```

5. App.vueの起動
```sh
cd src
vue serve
# Control+Cで終了
```

## コミットメッセージの書き方
### 原則

1行目：変更内容の要約（タイトル、概要）  
2行目：空行  
3行目以降：変更した理由（内容、詳細）  

### 1行目
コミット種別と要約、関連するissueを書きます。フォーマットは以下とします。  

　*[コミット種別] 要約 #issue番号*

例) [fix] Hello Worldできないバグを修正しました #1

#### コミット種別
- fix：バグ修正
- add：新規（ファイル）機能追加
- update：機能修正（バグではない）
- remove：削除（ファイル）
- revert：変更取り消し

#### 要約
- 変更内容の概要を書きます。シンプルかつ分かりやすく。（難しい）

### 2行目

空行なので説明は特に無いです。

### 3行目

変更した理由を書いてください。  
1~2行程度、分かりにくいのはNGです。  
変更箇所は確認すればいいので書かなくていいです。  