const assert = require('assert')
const YnfDoc = require('../../src/components/core/ynf_doc')
const YnfElementLine = require('../../src/components/core/elements/ynf_element_line')
const BasicWriter = require('../../src/components/writer/basic_writer')
const same_objects = require('../test_common')

if (require.main === module){
    basic_writer_main()
}


async function basic_writer_main(){
    try{
        const tests = [
            basic_writer_test1,
            basic_writer_line1,
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
async function basic_writer_test1(){
    let doc = new YnfDoc();
    let bw = new BasicWriter(doc);
    const actual = bw.to_string();

    const expected = JSON.stringify({elements: []});

    assert.equal(actual, expected);
}


// Line
async function basic_writer_line1(){
    let doc = new YnfDoc();
    let line = new YnfElementLine({
        p1: [10, 20],
        p2: [30, 40],
        'border-color': '#123456',
        'border-width': 12,
    });
    doc.add_element(line);

    let bw = new BasicWriter(doc);
    const actual = bw.to_string();

    // 内部では、"_"で保持している
    const expected = JSON.stringify({
        elements: [
            {
                p1: [10, 20],
                p2: [30, 40],
                'border_color': '#123456',
                'border_width': 12,
            }
        ]
    });

    assert.equal(actual, expected);
}


module.exports = basic_writer_main;
