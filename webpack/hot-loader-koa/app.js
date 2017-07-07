let webpack = require('webpack');
let koa_webpack_middleware = require('koa-webpack-middleware');
let devMiddleware = koa_webpack_middleware.devMiddleware;
let hotMiddleware = koa_webpack_middleware.hotMiddleware;
let devConfig = require('./webpack.config.js');
const compile = webpack(devConfig);
let Koa = require('koa');
let app = new Koa();
let fs = require('fs');
let path = require('path');
const send = require('koa-send');

app.use(devMiddleware(compile, {
    // display no info to console (only warnings and errors)
    noInfo: false,

    // display nothing to the console
    quiet: false,

    // switch into lazy mode
    // that means no watching, but recompilation on every request
    lazy: true,

    // watch options (only lazy: false)
    watchOptions: {
        aggregateTimeout: 300,
        poll: true
    },

    // public path to bind the middleware to
    // use the same as in webpack
    publicPath: "/assets/",

    // custom headers
    headers: { "X-Custom-Header": "yes" },

    // options for formating the statistics
    stats: {
        colors: true
    }
}));
app.use(hotMiddleware(compile, {
  // log: console.log,
  // path: '/__webpack_hmr',
  // heartbeat: 10 * 1000
}));

app.use(async function (ctx, next) {
    if (ctx.path === '/') {
        await send(ctx, './index.html');
    }
});


app.listen(1616, () => {
    console.log('listen ------')
});