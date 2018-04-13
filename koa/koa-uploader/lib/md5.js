const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

module.exports = (filePath) => {
    return new Promise((resolve, reject) => {
        const start = new Date().getTime();
        const stream = fs.createReadStream(filePath);
        const md5sum = crypto.createHash('md5');
        stream.on('data', (chunk) => {
            md5sum.update(chunk);
        });
        stream.on('end', () => {
            str = md5sum.digest('hex').toUpperCase();
            resolve(str);
            console.log('文件:'+filePath+',MD5签名为:'+str+'.耗时:'+(new Date().getTime()-start)/1000.00+"秒");
        });
        stream.on('error', (err) => {
            reject(err);
        });
    });
};