module.exports = {
    mode: 'production',
    entry: './src/fig-viewer.js', 
    output: {
        path: __dirname + '/lib',
        filename: 'fig-viewer.js'
    }
};
