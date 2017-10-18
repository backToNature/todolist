/**
 * Created by daringuo on 2017/10/16.
 */
let $$getCandidates = require('./getCandidates.js');
let $$pickCandidates = require('./pickCandidates.js');

let getContent = (str) => {
    let _stuff = $$getCandidates(str);
    return $$pickCandidates(_stuff._candidates);
};

module.exports = getContent;