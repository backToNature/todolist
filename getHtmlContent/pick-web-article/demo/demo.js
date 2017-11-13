const Koa = require('koa');
const Router = require('koa-router');
const request = require('request');
let app = new Koa();
const fs = require('fs');
const {URL} = require('url');
const url = require('url');
const path = require('path');
const iconv = require('iconv-lite');
let router = new Router();
var Buffer = require('buffer').Buffer;

let domain;

let _doRequest = (url) => {
    return new Promise((resolve, reject) => {
        request({encoding: null, url: url}, (err, res, body) => {
            if (err) {
                reject(err);
            } else {
                resolve({
                    headers: res.headers,
                    content: body
                });
            }
        });
    });
};

router.get('/qb_pick_test', async (ctx, next) => {
    let content = fs.readFileSync(path.join(__dirname, './static/demo.html'), 'utf8');
    ctx.body = content;
});

router.get('/pick-web-article.js', async (ctx, next) => {
    let content = fs.readFileSync(path.join(__dirname, '../dist/pick-web-article.js'), 'utf8');
    ctx.body = content;
    // await next();
});

router.get('/qb_pick_test/web', async (ctx, next) => {
    let _url = ctx.query.url;
    let urlObj = new URL(_url);
    domain = urlObj.protocol + '//' + urlObj.host;
    let obj = await _doRequest(_url);
    let type = obj.headers['content-type'];
    if (type) {
        if (type.toUpperCase().indexOf('GB2312') >= 0) {
            // console.log('啊啊', iconv.decode('啊啊', 'gb2312'));
            // console.log(iconv.decode(obj.content, 'gb2312').toString());
            // obj.content = iconv.decode(obj.content, 'gb2312').toString();
            // console.log(obj.content);
        } else if (type.toUpperCase().indexOf('GBK') >= 0) {
            // obj.content = iconv.decode(obj.content, 'gbk');
        }
    }
    ctx.set(obj.headers);
    ctx.body = obj.content;
});

router.get('/*', async (ctx, next) => {
    let trueUrl = url.resolve(domain, ctx.path);
    console.log(trueUrl);
    let content = await request(trueUrl);
    ctx.body = content;
    // console.log(url.resolve(domain, ctx.url));
    // console.log(domain, ctx.url);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
    console.log('server listening on 3000');
});