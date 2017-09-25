const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
let content = fs.readFileSync(path.join(__dirname, './test/qq.html'), 'utf8');

let $ = cheerio.load(content,{decodeEntities: false});


// console.log($.html());
let $body = $('');

console.log($('body'));



fs.writeFileSync(path.join(__dirname, './test/qq-dest.html'),$.html() , 'utf8');
console.log('success');

