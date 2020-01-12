const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env={}, argv={}) => {
    return {
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader'
                    ]
                }
            ],
        },
        plugins: [new HtmlWebpackPlugin()],
    }
};