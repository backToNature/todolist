const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');
const os = require('os');
const Router = require('koa-router');
const multer = require('koa-multer');
const shell = require('shelljs');
const router = new Router();
const staticCache = require('koa-static-cache');

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


// v4版腾讯云认证
router.get('/api/auth', require('./router/auth.js'));
// v5版腾讯云cos认证
router.get('/api/stspost', require('./router/sts-post-object.js'));       


// 新增文章
router.post('/api/addArticle', require('./router/addArticle.js'));
// 获取文章列表
router.get('/api/getArticleList', require('./router/getArticleList.js'));
// 获取文章详情
router.get('/api/getArticleDetail', require('./router/getArticleDetail.js'));

app.use(staticCache(path.join(__dirname, './static'), {
    maxAge: 365 * 24 * 60 * 60,
    dynamic: true
}));


// 最后把路由全部加载
app.use(router.routes());
app.use(router.allowedMethods());

app.host = process.env.IP || 'localhost';
app.port = process.env.PORT || 8080;

const server = app.listen(app.port, app.host, () => {
  console.log('Koa server listening on %s:%d', server.address().address, server.address().port)
});