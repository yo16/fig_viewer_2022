const assert = require('assert')
const YnfElementLine = require('../../src/components/core/elements/ynf_element_line')
const same_objects = require('../test_common')

if (require.main === module){
    ynf_element_line_main()
}

async function ynf_element_line_main(){
    try{
        const tests = [
            elm_line_no_options1,
            elm_line_no_options2,
            elm_line_no_options3,
            elm_line_no_options4,
            elm_line_test1,
            elm_line_test2,
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

// p1もp2も指定されていない
async function elm_line_no_options1(){
    let status = 0;
    try {
        let el = new YnfElementLine()
    } catch (error) {
        status = 1;
    }

    // throwされてればOK
    assert.ok(status)
}

// p1だけ指定されているパターン
async function elm_line_no_options2(){
    let status = 0;
    try {
        let opts = {'p1': [1,2]}
        let el = new YnfElementLine(opts)
    } catch (error) {
        status = 1;
    }

    // throwされてればOK
    assert.ok(status)
}

// p2だけ指定されているパターン
async function elm_line_no_options3(){
    let status = 0;
    try {
        let opts = {'p2': [1,2]}
        let el = new YnfElementLine(opts)
    } catch (error) {
        status = 1;
    }

    // throwされてればOK
    assert.ok(status)
}

// p1もp2も指定されている
async function elm_line_no_options4(){
    let status = 0;
    try {
        let opts = {'p1': [1,2], 'p2': [3,4]}
        let el = new YnfElementLine(opts)
    } catch (error) {
        console.log(error)
        status = 1;
    }

    // throwされてなければOK
    assert.ok(1-status)
}

// 普通のコンストラクタ
async function elm_line_test1(){
    let opts = {p1: [1,2], p2: [3,4]}
    let eb = new YnfElementLine(opts)
    const actual = eb.to_json()
    const expected = {
        name:'YnfElementLine',
        p1: [1,2],
        p2: [3,4],
    }

    assert.ok(same_objects(actual, expected))
}


// オプションも入れる
// 未知のオプションを入れても無視する
async function elm_line_test2(){
    let opts = {p1: [1,2], p2: [3,4], 'border-color': '#123', 'border-width': 10, 'noize': 'zzz'}
    let eb = new YnfElementLine(opts)
    const actual = eb.to_json()
    const expected = {
        name:'YnfElementLine',
        p1: [1,2],
        p2: [3,4],
        'border-color': '#123',
        'border-width': 10,
    }

    assert.ok(same_objects(actual, expected))
}


// export
module.exports = ynf_element_line_main;
