module.exports = {
    publicPath:"./",
    outputDir:"build",
    devServer: {
        proxy: 'http://localhost:8080'
    }
};