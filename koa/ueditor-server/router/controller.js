require('json-comments');

const $$config = require('../config.json');

module.exports = async (ctx, next) => {
    const query = ctx.query;
    const action = query.action;
    let result;
    switch (action) {
        case 'config':
            result = $$config;
            break;
        // 上传图片
        case 'uploadimage':
        // 上传涂鸦
        case 'uploadscrawl':
        // 上传视频
        case 'uploadvideo':
        // 上传文件
        case 'config':
        // 列出图片
        case 'uploadfile':
            await require('./uploadimage.js')(ctx, next);
            break;
        // 列出文件
        case 'config':
            break;
        case 'config':
            break;
        case 'config':
            break;
    }
    
    if (query.callback) {
        result = `${query.callback}(${JSON.stringify(result)})`;
    }

    ctx.body = result;
};