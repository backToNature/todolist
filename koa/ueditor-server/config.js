const path = require('path');

// 上传服务配置
module.exports = {
    cors: true, // 是否允许跨域
    // corsDomainList: ['127.0.0.1:8000'], // 跨域白名单
    destPath: path.join(__dirname, './static'),// 上传目录
    allowedExt: ['.jpg', '.gif'],// 允许的文件类型
    allowedSize: 300,// 文件上传的大小范围,单位kb
    // saveAsMd5: true, // 以md5戳存储文件
}