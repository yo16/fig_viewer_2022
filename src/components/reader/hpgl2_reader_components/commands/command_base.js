'use strict'
/* １コマンドの基礎クラス
*/

class CommandBase {
    // コマンド実行前の、HPGL2のオプション
    initial_hpgl2_option = null
    // コマンドパラメータ
    command_param = ''

    constructor(options) {
        //console.log(this.constructor.name)
        //console.log(options.command_param)
        this.original_hpgl2_option = { ...options.hpgl2_option }
        this.command_param = options.command_param
    }

    // 設定して、変更されるオプションを返す（パラメータのオプションは変更しない）
    parse_options(options) {}
}

module.exports = CommandBase
