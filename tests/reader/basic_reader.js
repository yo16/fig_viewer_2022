const assert = require('assert')
const YnfDoc = require('../../src/components/core/ynf_doc')
const BasicReader = require('../../src/components/reader/basic_reader')
const same_objects = require('../test_common')

if (require.main === module){
    basic_reader_main()
}


async function basic_reader_main(){
    try{
        const tests = [
            basic_reader_test1,
        ]

        for (const test of tests){
            try{
                await test()
                console.info(`OK ${test.name}`)
            } catch (err) {
                console.info(`NG ${test.name}`)
                console.log(`  actual  :${err.actual}`)
                console.log(`  expected:${err.expected}`)
                console.error(err)
            }
        }
    } catch (err) {
        console.error(err)
    }
}


// 空
async function basic_reader_test1(){
    let br = new BasicReader();
    let doc = br.get_ynfdoc();
    const actual = doc.to_json();

    const expected = {elements: []};

    assert.deepEqual(actual, expected);
}

module.exports = basic_reader_main
