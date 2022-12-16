/* 線関係
*/
const YnfElementBase = require('./ynf_element_base')

/* Ynf線分要素クラス

必須prop
    p1(list): １点目の座標値
    p2(list): ２点目の座標値
任意prop
    border-color(str): 線の色 #ffffff or #fff形式
    border-width(int): 線の幅
*/
class YnfElementLine extends YnfElementBase {
    constructor(options){
        super(options)

        if (
            !('p1' in options) ||
            !('p2' in options)
        ){
            throw Error('YnfElementLine Error. p1 and p2 is required options');
        }

        this.p1 = options['p1']
        this.p2 = options['p2']
        if ('border-color' in options) {
            this.border_color = options['border-color']
        }
        if ('border-width' in options) {
            this.border_width = options['border-width']
        }
    }
    
    // パラメータをjson化(オブジェクト化)する
    to_json(options){
        let ret = super.to_json(options);

        ret['p1'] = [this.p1[0], this.p1[1]]
        ret['p2'] = [this.p2[0], this.p2[1]]
        ret['border-color'] = this.border_color
        ret['border-width'] = this.border_width
        
        return ret
    }
}

module.exports = YnfElementLine
