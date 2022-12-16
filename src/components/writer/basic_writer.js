/* Ynfを出力するベースクラス */

class BasicWriter{
    constructor(ynf_doc, options){
        this.ynf_doc = ynf_doc;
    };

    to_string(options){
        this.ynf_doc.to_string();
    };

    to_json(optoins){
        this.ynf_doc.to_json();
    }
};

export { BasicWriter };
