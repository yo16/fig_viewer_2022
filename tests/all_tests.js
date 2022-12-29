
const test_ynf_element = require('./elements')

const test_reader = require('./reader')

const test_writer = require('./writer')

if (require.main === module){
    main()
}

async function main(){
    // elements
    test_ynf_element.ynf_element_base_main()
    test_ynf_element.ynf_element_line_main()

    // reader
    test_reader.basic_reader_main()
    test_reader.hpgl2_reader_main()

    // writer
    test_writer.basic_writer_main()
}

