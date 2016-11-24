import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from "express";
import http from "http";
import webpackConfig from './webpack.config';

let app = express(),
    server = http.createServer(app),
    compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname  + '/public/index.html')
});

server.listen("3001");