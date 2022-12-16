/* Ynfを入力するベースクラス */

const YnfDoc = require("../core/ynf_doc");

class BasicReader{
    // 継承されたクラスでは、ここでファイルパスか、そのものを渡す
    constructor(options){
        // parseして、ここでdocインスタンスを作成
        this.doc = new YnfDoc();
    };

    get_ynfdoc(optoins){
        return this.doc;
    }
};

module.exports = BasicReader;
