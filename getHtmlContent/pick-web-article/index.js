/**
 * Created by daringuo on 2017/10/16.
 */

const {JSDOM} = require('jsdom');
const pickWA = require('./dist/pick-web-article.js');

module.exports = (htmlStr) => {
    const { document } = (new JSDOM(htmlStr)).window;
    let body = document.body;
    return pickWA(body);
};