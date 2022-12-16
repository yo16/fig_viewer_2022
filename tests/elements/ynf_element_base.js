const assert = require('assert')
const YnfElementBase = require('../../src/components/core/elements/ynf_element_base')
const same_objects = require('../test_common')

if (require.main === module){
    ynf_element_base_main()
}

async function ynf_element_base_main(){
    try{
        const tests = [
            elm_base_test1,
        ]

        for (const test of tests){
            try{
                await test()
                console.info(`OK ${test.name}`)
            } catch (err) {
                console.info(`NG ${test.name}`)
                console.error(err)
            }
        }
    } catch (err) {
        console.error(err)
    }
}

async function elm_base_test1(){
    let eb = new YnfElementBase()
    const actual = eb.to_json()
    const expected = {name:'YnfElementBase'}

    assert.ok(same_objects(actual, expected))
}



// export
module.exports = ynf_element_base_main;
