/* Ynfを出力するベースクラス */

class BasicWriter{
    constructor(ynf_doc, options){
        this.ynf_doc = ynf_doc;
    };

    to_string(options){
        this.ynf_doc.to_string();
    };
};

export { BasicWriter };
