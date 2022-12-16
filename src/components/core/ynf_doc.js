/* Ynf要素群からなるドキュメント */

const _ = require('lodash');

class YnfDoc{
    constructor(options){
        this.elements_stack = [];
    };

    // 要素を追加
    add_element(ynf_element){
        this.elements_stack.push(ynf_element);
    };

    // to_json
    to_json(options){
        return {
            elements: _.cloneDeep(this.elements_stack),
        }
    }
};

module.exports = YnfDoc;
