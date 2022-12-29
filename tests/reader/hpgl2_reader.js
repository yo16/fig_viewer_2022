const assert = require('assert')
const fs = require('fs')
const YnfDoc = require('../../src/components/core/ynf_doc')
const Hpgl2Reader = require('../../src/components/reader/hpgl2_reader')

if (require.main === module){
    basic_reader_main()
}


async function hpgl2_reader_main(){
    try{
        const tests = [
            hpgl2_reader_test1,
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


// 単体テスト
async function hpgl2_reader_test1(){
    let text = fs.readFileSync('./tests/reader/test_files/hpgl2/A3yoko.dat');
    let rdr = new Hpgl2Reader({file_text:text});
    let doc = rdr.get_ynfdoc();
    const actual = doc.to_json();

    const expected = {elements: []};

    assert.deepEqual(actual, expected);
}

module.exports = hpgl2_reader_main
