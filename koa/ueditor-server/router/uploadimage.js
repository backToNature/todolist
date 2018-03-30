const multer = require('koa-multer');
const shell = require('shelljs');
const path = require('path');

const storage = multer.diskStorage({  
    //文件保存路径  
    destination(req, file, cb) {
        cb(null, path.join(__dirname, '../static/files'));
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

module.exports = async (ctx, next) => {
    const query = ctx.query;
    const action = query.action;
    switch (action) {
        case 'uploadimage':
            debugger;
            // await upload.single('upfile')(ctx, next);
            // // ctx.set('Content-Type', 'text/html; charset=utf-8');
            // let res = JSON.stringify({
            //     name: ctx.req.file.filename,
            //     original: ctx.req.file.filename,
            //     size: ctx.req.file.size,
            //     state: 'SUCCESS',
            //     type: path.extname(ctx.req.file.filename),
            //     url: `http://127.0.0.1:8082/${ctx.req.file.filename}`
            // });
            ctx.body = {
                status: 0
            };
            // ctx.body = res;
            // ctx.render(res);
            break;
    }
};

