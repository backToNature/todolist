const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const devMiddleware = require("./devMiddleware");
const hotMiddleware = require('./hotMiddleware');

const compiler = webpack(webpackConfig);

app.use(devMiddleware(compiler));
app.use(hotMiddleware(compiler));

app.use(serve(__dirname + "/view/", {extensions: ['html']}));

app.listen(3000, () => {
    console.log('app listen at 3000')
});