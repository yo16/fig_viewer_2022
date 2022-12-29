# fig_viewer_2022
A viewer for almost HPGL file for now.

# memo
- webpack.config
  - libraryの名前を指定しないことで使用するときにそのまま使える

# 参考
## npm
- [本当にやさしいnpmライブラリ開発入門](https://qiita.com/saltyshiomix/items/0306e17cde8f2475f193)
  - npmライブラリは２つある。
    1. コマンドラインツール
    2. スクリプト系ライブラリ
      - このリポジトリではこちら
  - package.jsonのmainに起動時のファイルを指定する。

- [Node.js の exports と module.exports](https://www.webdesignleaves.com/pr/jquery/node-js-module-exports.html)
  - Node.jsでクラスを使うときの説明。
  - エクスポートとインポート。

- [【Node.js】定義したクラスを別のファイルで使用する - Qiita](https://qiita.com/OsakaKaiyukan/items/1a72520dd1b55c619b24)
  - 参照される側で
    ```
    module.exports = クラス名
    ```
  - 使用する側で
    ```
    const クラス名 = require('./パス')
    ```

- [Node.js – exportsとmodule.exportsで関数を公開する – KeruuWeb](https://keruuweb.com/node-js-exports%E3%81%A8module-exports%E3%81%A7%E9%96%A2%E6%95%B0%E3%82%92%E5%85%AC%E9%96%8B%E3%81%99%E3%82%8B/)
  - exports、module.exportsの話

- [node.jsでファイルの入出力操作 - Qiita](https://qiita.com/shirokuman/items/509b159bf4b8dd1c41ef)
  - ファイルを読む
    ```
    const fs = require('fs');
    let text = fs.readFileSync("sample.txt");
    console.log(text);
    ```

- [Assert | Node.js v19.3.0 Documentation](https://nodejs.org/api/assert.html)
  - Assertの公式ドキュメント


## JavaScript

- [JavaScript/Node.jsでのバイナリデータ処理 - Qiita](https://qiita.com/Yuki_Oshima/items/6346231d93ca342899f0)
  - バイナリファイルを読んだ後の変数の型は、Node.jsの場合は`Buffer`、ブラウザの場合は`ArrayBuffer`になっている。
    - [Buffer | Node.js v19.3.0 Documentation](https://nodejs.org/api/buffer.html)
    - [ArrayBuffer - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)


## テスト方法
- [Node.jsで標準ライブラリだけを使って単体テストを行う方法【動画版あり】](https://zenn.dev/tatsuyasusukida/articles/nodejs-test-unit)

