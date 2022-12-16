
class YnfElementBase {
    constructor (options){
        
    };

    to_json(options){
        let ret = {
            name: this.constructor.name
        }
        return ret
    }
};

module.exports = YnfElementBase;
