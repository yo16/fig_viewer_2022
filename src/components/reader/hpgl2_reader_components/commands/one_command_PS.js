'use strict'
/* HPGL2コマンド PS, Plot Size
*/

const OneCommandBase = require('./one_command_base')
const const_value = require('./const')

class OneCommandPS extends OneCommandBase{
    constructor(options){
        super(options)
    }
    
    // 設定
    parse_options(options) {
        let ret = {}
        if ( this.command_param.length===0 ) { return ret }

        let ary = this.command_param.split(',')
        if ( ary.length > 0 ) {
            ret[const_value.HPGL2_OPT_PLOTSIZE_WIDTH] = ary[0]
        }
        if ( ary.length > 1 ) {
            ret[const_value.HPGL2_OPT_PLOTSIZE_LENGTH] = ary[1]
        }

        return ret
    }
}

module.exports = OneCommandPS
