import { test1 } from './components/test1.js'

const FigViewer = (options) => {
    const draw = (file_text) => {
        test1(file_text);
    };

    return { draw, };
};

export { FigViewer };
