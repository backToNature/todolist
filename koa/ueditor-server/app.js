const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');
const os = require('os');
const Router = require('koa-router');
const multer = require('koa-multer');
const shell = require('shelljs');
const router = new Router();
const md5 = require('./md5.js');
const staticCache = require('koa-static-cache');
const $$config = require('./config.js');

// 跨域头指定
app.use(async (ctx, next) => {
    let isCors = false;
    if ($$config.cors) {
        if ($$config.corsDomainList && $$config.corsDomainList.length > 0) {
            if ($$config.corsDomainList.indexOf(ctx.host) >= 0) {
                isCors = true;
            }
        } else {
            isCors = true;
        }
    }
    if (isCors) {
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    }
    await next();
});

const storage = multer.diskStorage({  
    //文件保存路径  
    destination(req, file, cb) {
        cb(null, path.join(__dirname, './static'));
    },  
    //修改文件名称  
    filename(req, file, cb) {  
      const fileFormat = (file.originalname).split(".");
      cb(null, file.originalname);  
    }  
  })  

const upload = multer({
    fileFilter(req, file, cb) {
        let extName = path.extname(file.originalname);
        cb(null, true);
    },
    storage
});

const $$controller = require('./router/controller.js');

router.get('/api/controller', $$controller);
router.post('/api/controller', async (ctx, next) => {
    let query = ctx.query;
    let action = query.action;

    try {
        let res = await upload.single('upfile')(ctx, next);
    } catch (e) {
        console.log(e);
    }
    // switch (action) {
    //     // 上传图片
    //     case 'uploadimage':
    //     // 上传涂鸦
    //     case 'uploadscrawl':
    //     // 上传视频
    //     case 'uploadvideo':
    //     // 上传文件
    //     case 'uploadfile':
    //         try {
    //             let res = await upload.single('upfile')(ctx, next);
    //         } catch (e) {
    //             console.log(e);
    //         }
    //         break;
    //     // 列出文件
    //     case 'config':
    //         break;
    // }
    
}, require('./router/upload.js'));

app.use(staticCache(path.join(__dirname, './static'), {
    maxAge: 365 * 24 * 60 * 60,
    dynamic: true
}));

// 最后把路由全部加载
app.use(router.routes());
app.use(router.allowedMethods());

app.host = process.env.IP || 'localhost';
app.port = process.env.PORT || 8088;


const server = app.listen(app.port, app.host, () => {
  console.log('Koa server listening on %s:%d', server.address().address, server.address().port)
});