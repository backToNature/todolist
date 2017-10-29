const pickWA = require('../index.js');
const fs = require('fs');
const path = require('path');
let content = fs.readFileSync(path.join(__dirname, './test.html'), 'utf8');

let wa = pickWA(content); // htmlStr为网页html字符串
console.log(wa.allText); // 正文文本
console.log(wa.summary); // 正文摘要

