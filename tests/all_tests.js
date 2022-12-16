
const ynf_element_base_main = require('./elements/ynf_element_base')
const ynf_element_line_main = require('./elements/ynf_element_line')

const basic_reader_main = require('./reader/basic_reader')

const writer_basic_main = require('./writer/basic_writer')

if (require.main === module){
    main()
}

async function main(){
    // elements
    ynf_element_base_main()
    ynf_element_line_main()

    // reader
    basic_reader_main()

    // writer
    writer_basic_main()
}

