const assert = require('assert')
const YnfElementLine = require('../../src/components/core/elements/ynf_element_line')

if (require.main === module){
    ynf_element_line_main()
}

async function ynf_element_line_main(){
    try{
        const tests = [
            no_options1,
            no_options2,
            no_options3,
            no_options4,
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
async function no_options1(){
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
async function no_options2(){
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
async function no_options3(){
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
async function no_options4(){
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



// export
module.exports = ynf_element_line_main;
