/**
 * Created by daringuo on 2017/10/18.
 */
let {JSDOM} = require('jsdom');
let fs = require('fs');
let path = require('path');
let content = fs.readFileSync(path.join(__dirname, './qq.html'), 'utf8');

let getContent = (str) => {
    const { document } = (new JSDOM(str)).window;
    let $body = document.body;
    console.log($body.querySelector);
};

getContent(content);