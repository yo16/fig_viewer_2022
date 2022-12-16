/* Ynfを入力するベースクラス */

const YnfDoc = require("../core/ynf_doc");

class BasicReader{
    // 継承されたクラスでは、ここでファイルパスか、そのものを渡す
    constructor(options){
    };

    get_ynfdoc(optoins){
        // 継承されたクラスでは、読み込んで作成されたYnfDocを返す
        return new YnfDoc();
    }
};

module.exports = BasicReader;
