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
    }
}

module.exports = YnfElementLine
