
class YnfElementBase {
    constructor (options){
        
    };

    to_string(options){
        return this.constructor.name;
    };
};

module.exports = YnfElementBase;
