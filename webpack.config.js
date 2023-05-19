const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.scss|\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        })
    ],
    /* dev server */
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Ruta al directorio de salida
        },
        port: 3000, // Puerto para el servidor de desarrollo
        hot: true // Habilitar la recarga en caliente
    }
};