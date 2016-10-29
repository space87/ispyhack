module.exports = {
    context: __dirname + '/www',
    entry: './index.js',
    output: {
        path: __dirname + '/www',
        filename: './bundle.js',
        publicPath: __dirname + '/www'
    },

    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel', exclude: /node_modules/},
            {test: /\.html$/, loader: 'raw', exclude: /node_modules/},
            {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
            {test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/},

            // **IMPORTANT** This is needed so that each bootstrap js file required by
            // bootstrap-webpack has access to the jQuery object
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },

            // Needed for the css-loader when [bootstrap-webpack](https://github.com/bline/bootstrap-webpack)
            // loads bootstrap's css.
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },

            {test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader?limit=8192'}

        ]
    }
}
