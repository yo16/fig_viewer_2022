
class YnfElementBase {
    constructor (options){
        
    };

    to_string(options){
        return JSON.stringify(this.to_json(options))
    };

    to_json(options){
        let ret = {
            name: this.constructor.name
        }
        return ret
    }
};

module.exports = YnfElementBase;
