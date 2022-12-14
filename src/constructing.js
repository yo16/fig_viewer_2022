import { YnfElementBase } from './components/core/elements/ynf_element_base'
import { YnfDoc } from './components/core/ynf_doc'
import { BasicWriter } from './components/core/writer/basic_writer.js'

const Constucting = () => {
    const doc = new YnfDoc();

    const elm1 = new YnfElementBase();
    doc.add_element(elm1);

    const bw = new BasicWriter(doc);
    
    console.log(bw.to_string());
};

export { Constucting };
