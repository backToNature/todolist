/**
 * Created by daringuo on 2017/10/16.
 */

let getContent = require('../src/getContent/index.js');

const fs = require('fs');
const path = require('path');
let content = fs.readFileSync(path.join(__dirname, './qq.html'), 'utf8');

let _stuff = getContent(content);

fs.writeFileSync(path.join(__dirname, './qq-dest.html'), _stuff[0].__node.innerHTML, 'utf8');


