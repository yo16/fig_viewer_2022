'use strict'
/* HPGL2コマンドパーサー関数
    文字列の先頭から、１コマンド分を解釈して返す
*/
const hpgl2_commands = require('./commands')

const re_command = new RegExp('([A-Za-z]{2})([^A-Za-z]*)')


const Hpgl2CommandParser = function(hpgl2_params){
    const cur = hpgl2_params.current_cursor
    let cur_skip_bytes = 2

    // アルファベット２文字で始まるコマンドを探す
    const match_result = hpgl2_params.text.slice(cur).match(re_command)

    // コマンドとパラメータを取得
    const cur_command = match_result[1]
    const cur_command_param = match_result[2]

    cur_skip_bytes += cur_command_param.length

    // コマンドに処理を渡す
    let added_elements = []
    let changed_options = {}
    if ( Object.keys(hpgl2_commands).some(x => x===cur_command) ) {
        try {
            // コマンドを生成
            let cmd = new hpgl2_commands[cur_command]({
                hpgl2_option: hpgl2_params.current_option,
                command_param: cur_command_param,
            })
            // オプションの変更点を得る
            changed_options = cmd.parse_options()

        } catch (err) {
            // 何かのエラー
            console.info(`ERROR: HPGL2 Parse:${err}`)
            console.log(`  command  : ${cur_command}`)
            console.log(`  parameter: ${cur_command_param}`)
            console.error(err)
            throw Error()
        }
    } else {
        const msg = `WARN: HPGL2: Unknown command! [${cur_command}]`
        console.log(msg)
        //throw Error(msg);
    }

    return {
        skip_bytes: cur_skip_bytes,
        added_elements: added_elements,
        change_options: changed_options,
    }
}

module.exports = Hpgl2CommandParser
