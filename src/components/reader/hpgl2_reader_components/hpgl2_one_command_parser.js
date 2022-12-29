'use strict'
/* HPGL2"１"コマンドパーサー関数
    文字列の先頭から、１コマンド分を解釈して返す
*/
const core = require('../../core')
const hpgl2_commands = require('./commands')

const re_command = new RegExp('([A-Za-z]{2})([^A-Za-z]*)')


const Hpgl2OneCommandParser = function(hpgl2_params){
    const cur = hpgl2_params.current_cursor
    let cur_skip_bytes = 2

    // アルファベット２文字で始まるコマンドを探す
    const match_result = hpgl2_params.text.slice(cur).match(re_command)

    // コマンドとパラメータを取得
    const cur_command = match_result[1]
    const cur_command_param = match_result[2]

    cur_skip_bytes += cur_command_param.length

    // コマンドに処理を渡す
    if ( Object.keys(hpgl2_commands).some(x => x===cur_command) ) {
        // コマンドを生成
        let cmd = new hpgl2_commands[cur_command]
        
    } else {
        const msg = `HPGL2:Unknown command! [${cur_command}]`
        console.log(msg);
        //throw Error(msg);
    }

    return {
        skip_bytes: cur_skip_bytes,
        added_elements: [],
        change_options: {},
    }
}

module.exports = Hpgl2OneCommandParser;
