
const ynf_element_base_main = require('./elements/ynf_element_base.js')
const ynf_element_line_main = require('./elements/ynf_element_line.js')

if (require.main === module){
    main()
}

async function main(){
    ynf_element_base_main()
    ynf_element_line_main()
}

