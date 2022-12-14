const assert = require('assert')
const YnfElementBase = require('../src/components/core/elements/ynf_element_base')

if (require.main === module){
    ynf_element_base_main()
}

async function ynf_element_base_main(){
    try{
        console.log('YnfElementBase test -----')

        const tests = [
            test1,
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

async function test1(){
    let eb = new YnfElementBase()
    const actual = eb.to_string()
    const expected = 'YnfElementBase'

    assert.strictEqual(actual, expected)
}



// export
module.exports = ynf_element_base_main;
