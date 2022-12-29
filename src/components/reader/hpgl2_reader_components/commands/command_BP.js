'use strict'
/* HPGL2コマンド BP, Begin Plot
*/
require('date-utils')
const CommandBase = require('./command_base')
const const_value = require('./const')

class CommandBP extends CommandBase {
    constructor(options){
        super(options)
    }

    // 設定
    parse_options(options) {
        const date = new Date();
        let ret = {
            [const_value.HPGL2_OPT_PICTURE_NAME]: date.toFormat('YYYYMMDDHH24MISS'),
            [const_value.HPGL2_OPT_NUMBER_OF_COPIES]: 1,
            [const_value.HPGL2_OPT_FILE_DISPOSITION_CODE]: 0,
            [const_value.HPGL2_OPT_RENDER_LAST_PLOT]: 0,
            [const_value.HPGL2_OPT_AUTOROTATION]: 0,
        }

        if ( this.command_param.length===0 ) { return ret }

        // kind,value,kind,value...
        let pair_ary = this.command_param.split(',')
        if (pair_ary.length%2!=0) {
            const msg = 'ERROR: CommandBP: kind,valueがセットになっていない'
            console.error(msg)
            throw Error(msg);
        }

        // key-valueのセットをプロパティへ設定する
        for (let i=0; i<pair_ary.length%2; i++) {
            const kind = pair_ary[i*2]
            const value = pair_ary[i*2+1]
            console.assert([1,2,3,4,5].find(e => e===kind), `ERROR: CommandBP: kindが不正:${kind}`)

            if ( kind===1 ) { ret[HPGL2_OPT_PICTURE_NAME] = value }
            else if ( kind===2 ) { ret[HPGL2_OPT_NUMBER_OF_COPIES] = value }
            else if ( kind===3 ) { ret[HPGL2_OPT_FILE_DISPOSITION_CODE] = value }
            else if ( kind===4 ) { ret[HPGL2_OPT_RENDER_LAST_PLOT] = value }
            else if ( kind===5 ) { ret[HPGL2_OPT_AUTORTATION] = value }
        }

        return ret
    }

}

module.exports = CommandBP
