/* Ynfを出力するベースクラス */

class BasicWriter{
    constructor(ynf_doc, options){
        this.ynf_doc = ynf_doc;
    };

    to_string(optoins){
        return JSON.stringify(this.ynf_doc.to_json());
    }
};

module.exports = BasicWriter;
