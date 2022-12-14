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
    module.export = クラス名
    ```
  - 使用する側で
    ```
    const クラス名 = require('./パス')
    ```


- [Assert | Node.js v19.3.0 Documentation](https://nodejs.org/api/assert.html)
  - Assertの公式ドキュメント


## テスト方法
- [Node.jsで標準ライブラリだけを使って単体テストを行う方法【動画版あり】](https://zenn.dev/tatsuyasusukida/articles/nodejs-test-unit)

