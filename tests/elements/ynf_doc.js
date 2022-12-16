const assert = require('assert')
const YnfDoc = require('../../src/components/core/ynf_doc')
const same_objects = require('../test_common')

if (require.main === module){
    ynf_doc_main()
}

async function ynf_doc_main(){
    try{
        const tests = [
            doc_test1,
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

async function doc_test1(){
    let doc = new YnfDoc()

    const actual = doc.to_json()
    const expected = {
        elements: []
    }

    assert.deepEqual()
}

module.exports = ynf_doc_main
