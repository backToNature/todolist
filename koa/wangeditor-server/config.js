const path = require('path');

// module.exports = {
//     // 腾讯云认证需要参数
//     bucket: 'ght',
//     appid: '1251580007',
//     sid: '',
//     skey: '',
//     region: 'sh',
//     new_region: 'ap-shanghai'
// }

module.exports = {
    // 腾讯云认证需要参数
    bucket: 'ght',
    appid: '1251580007',
    sid: '',
    skey: '',
    region: 'sh',
    new_region: 'ap-shanghai',
    // 数据库所需参数
    dbConfig: {
        host            : 'localhost',
        port            :  3306,
        user            : 'root',
        password        : '123',
        database        : 'activity_zwds',
        charset         : 'utf8',
        multipleStatements : true
    }
}