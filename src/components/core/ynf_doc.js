/* Ynf要素群からなるドキュメント */

class YnfDoc{
    constructor(options){
        this.elements_stack = [];
    };

    // 要素を追加
    add_element(ynf_element){
        this.elements_stack.push(ynf_element);
    };

    // to_string
    to_string(options){
        let ret = '';
        for(let i=0; i<this.elements_stack.length; i++){
            ret += '' + i + ':' + this.elements_stack[i].to_string(options) + '\r\n';
        }
        return ret;
    };

    // to_json
    to_json(options){
        return {
            elements: [...this.elements_stack],
        }
    }
};

export { YnfDoc };
