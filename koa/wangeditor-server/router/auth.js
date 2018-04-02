const CryptoJS = require('../lib/crypto.js');

const $$config = require('../config.js')
const bucket = $$config.bucket;
const appid = $$config.appid;
const sid = $$config.sid;
const skey = $$config.skey;
const region = $$config.region;

module.exports = async (ctx, next) => {
    const random = parseInt(Math.random() * Math.pow(2, 32));
    const now = parseInt(Date.now() / 1000);
    const e = now + 600; //签名过期时间为当前+600s
    const path = ''; //多次签名这里填空
    const str = 'a=' + appid + '&k=' + sid + '&e=' + e + '&t=' + now + '&r=' + random + '&f=' + path + '&b=' + bucket;
    const sha1Res = CryptoJS.HmacSHA1(str, skey); // 这里使用CryptoJS计算sha1值，你也可以用其他开源库或自己实现
    const strWordArray = CryptoJS.enc.Utf8.parse(str);
    const resWordArray = sha1Res.concat(strWordArray);
    const res = resWordArray.toString(CryptoJS.enc.Base64);

    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    
    ctx.body = {
        sign: res
    };
};