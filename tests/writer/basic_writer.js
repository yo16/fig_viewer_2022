const assert = require('assert')
const YnfDoc = require('../../src/components/core/ynf_doc')
const BasicWriter = require('../../src/components/writer/basic_writer')
const same_objects = require('../test_common')

if (require.main === module){
    basic_writer_main()
}


async function basic_writer_main(){
    try{
        const tests = [
            basic_writer_test1,
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


// 空
async function basic_writer_test1(){
    let doc = new YnfDoc();
    let bw = new BasicWriter(doc);
    const actual = bw.to_string();

    const expected = JSON.stringify({elements: []});

    assert.equal(actual, expected);
}


module.exports = basic_writer_main;
