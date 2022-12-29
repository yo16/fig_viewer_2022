/* HPGL2 reader
*/
const BasicReader = require('./basic_reader')
const core = require('../core');
const hpgl2_one_command_parser = require('./hpgl2_reader_components/hpgl2_one_command_parser')

/* HPGL2読み込みクラス

必須prop
    file_text(str): ファイルそのもの
任意prop
    (いまのところなし)
*/
class Hpgl2Reader extends BasicReader {
    constructor(options){
        super(options)

        if (!('file_text' in options)){
            throw Error('Hpgl2Reader Error. file_text is required options');
        }

        // パース
        this.doc = this.parse(options['file_text']);
    }


    // パースしてYnfDocを返す
    parse(hpgl2_bin){
        // ヘッダのチェック
        // 1バイト目はESC(1b)、2～5バイトは"%-1B" になっているはず
        if (
            (hpgl2_bin[0].toString(16) != '1b') ||
            (new TextDecoder().decode(new Uint8Array(hpgl2_bin.slice(1,5))) != '%-1B')
        ){
            throw Error('Illigal HPGL2 format(Illigal byte order mark.)');
        }

        // 文字列化
        const hpgl2_text = new TextDecoder().decode(new Uint8Array(hpgl2_bin.slice(5)));
        // console.log(hpgl2_text);

        // 戻り値のDoc
        let doc = new core.YnfDoc();
        
        // オブジェクトにしておく（関数への引き渡しを参照渡しにしたいため）
        let hpgl2_param = {
            text: hpgl2_text,
            current_cursor: 0,
            current_option: {},
        }
        
        // １コマンドごとに解釈して、docを作成する
        while ( hpgl2_param.current_cursor < hpgl2_text.length ) {
            // parse
            let ret = hpgl2_one_command_parser( hpgl2_param );

            // 次のコマンドの開始位置を設定
            hpgl2_param.current_cursor += ret.skip_bytes;
            // Docに追加
            ret.added_elements.forEach( elm => {
                doc.add_element(elm);   // deep copyじゃなくていいのか疑問.トラブルが起こるかも(★)
            });
            // optionを変更
            // to be implement ! (if necessary !)
        }

        return doc;
    }
}


module.exports = Hpgl2Reader
