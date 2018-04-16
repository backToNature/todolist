const Koa = require('koa');
const app = new Koa();
const path = require('path');
const fs = require('fs');
const os = require('os');
const Router = require('koa-router');
const multer = require('koa-multer');
const shell = require('shelljs');
const router = new Router();
const md5 = require('./lib/md5.js');
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

//配置  
const storage = multer.diskStorage({  
  //文件保存路径  
  destination(req, file, cb) {
    if ($$config.saveAsMd5 === true) {
        // 文件先保存在tmpdir
        cb(null, os.tmpdir());
    } else {
        // 不需要修改文件名则直接保存在目的
        cb(null, $$config.destPath);
    }
  },  
  //修改文件名称  
  filename(req, file, cb) {  
    const fileFormat = (file.originalname).split(".");
    if ($$config.saveAsMd5 === true) {
        cb(null, Date.now() + "." + fileFormat[fileFormat.length - 1]);  
    } else {
        cb(null, file.originalname);  
    }
  }
})  

const upload = multer({
    fileFilter(req, file, cb) {
        let extName = path.extname(file.originalname);
        if ($$config.allowedExt.indexOf(extName) >= 0) {
            cb(null, true);
        } else {
            cb({
                code: "FILE_TYPE_ERROR" // 表示文件类型错误
            }, false);
        }
    },
    limits: {
        fileSize: $$config.allowedSize * 1000
    },
    storage,
});

router.post('/api/upload', async (ctx, next) => {
    try {
        let res = await upload.single('file')(ctx, next);
    } catch (e) {
        switch (e.code) {
            case 'FILE_TYPE_ERROR': {
                ctx.body = {
                    status: 1,
                    msg: '文件类型非法'
                };
                break;
            }
            case 'LIMIT_FILE_SIZE': {
                ctx.body = {
                    status: 2,
                    msg: '文件大小超限'
                };
                break;
            }
        }
    }
}, async (ctx, next) => {
    const file = ctx.req.file;
    if ($$config.saveAsMd5 === true) {
        try {
            const md5Code = await md5(file.path);
            const extName = path.extname(file.filename);
            const newFileName = `${md5Code}${extName}`;
            const newFileNamePath = path.join(file.destination, newFileName);
            // 在tmp目录修改文件名
            shell.mv(file.path, newFileNamePath);
            // 若有配置destPath,则将文件移到配置的dest目录
            if ($$config.destPath && fs.existsSync($$config.destPath)) {
                shell.mv(newFileNamePath, path.join($$config.destPath, newFileName));
            }
        } catch (e) {
            ctx.body = {
                status: 3,
                data: {},
                msg: '校验md5值失败'
            };
        }
    }
    ctx.body = {
        status: 0,
        data: {},
        msg: '上传成功'
    };
}); 

// 最后把路由全部加载
app.use(router.routes());
app.use(router.allowedMethods());

app.host = process.env.IP || 'localhost';
app.port = process.env.PORT || 8080;


const server = app.listen(app.port, app.host, () => {
  console.log('Koa server listening on %s:%d', server.address().address, server.address().port)
});