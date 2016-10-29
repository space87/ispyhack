var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var webpackHotMiddleware = require('webpack-hot-middleware');
var app = express();

// var compiler = webpack(config);

// app.use(require('webpack-dev-middleware')(compiler, {
//   stats: {colors:true},
//   publicPath: config.output.publicPath
// }));

// app.use(webpackHotMiddleware(compiler, {
//     log: console.log
// }))

var logger = require('morgan');
var port = process.env.PORT || 5000;
var bodyParser = require('body-parser');
var compression = require('compression');
var path = require('path');



var stormpath = require('express-stormpath');


app.set('trust proxy',true);

app.use(logger());
app.use(bodyParser({limit: '50mb'}));
app.use(compression());
app.use(express.static(path.join(__dirname, 'www'),{ maxAge: 2592000000 }));

console.log('Initializing Stormpath');

app.use(stormpath.init(app, {
  web: {
    spa: {
      enabled: true,
      view: path.join(__dirname, 'www', 'index.html')
    }
  }
}));


app.listen(port);

app.on('stormpath.ready',function () {
  console.log('Stormpath Ready');
});

console.log('listening on port ' + port);
