var path = require('path');
var nodeServer = require('nodejs-server');

var root = path.dirname(__dirname) + '/flvjs';
var nserver = new nodeServer(root, 81);


nserver.config({
    allowExtension: [ '.flv' ]  // 开放文件通过
});
nserver.start();
