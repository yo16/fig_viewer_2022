/* HPGL2"１"コマンドパーサー関数
    文字列の先頭から、１コマンド分を解釈して返す
*/
const core = require('../../core');

const Hpgl2Cmnd_BP = require('./hpgl2_one_commands');


const Hpgl2OneCommandParser = function(hpgl2_params){
    const cur = hpgl2_params.current_cursor

    // 2文字のコマンドを取得
    const cur_command = hpgl2_params.text.slice(cur, cur+2)

    // コマンドに処理を渡す
    if (cur_command=='BP') {

    } else {
        const msg = `Unknown command! [${cur_command}]`
        console.log(msg);
        throw Error(msg);
    }

    return {
        skip_bytes: 2,
        add_elements: [],
        change_options: {},
    }
}

module.exports = Hpgl2OneCommandParser;
