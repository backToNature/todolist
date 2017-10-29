var http = require('http'), httpProxy = require('http-proxy');
var querystring = require('querystring');
var {URL} = require('url');

var proxy = httpProxy.createProxyServer({});  
  
// 捕获异常  
proxy.on('error', function (err, req, res) {  
  res.writeHead(500, {  
    'Content-Type': 'text/plain'  
  });  
  res.end('Something went wrong. And we are reporting a custom error message.');  
});  
  
// 另外新建一个 HTTP 80 端口的服务器，也就是常规 Node 创建 HTTP 服务器的方法。  
// 在每次请求中，调用 proxy.web(req, res config) 方法进行请求分发  
var server = require('http').createServer(function(req, res) {
  var host = req.headers.host, ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;  
  console.log("client ip:" + ip + ", host:" + host);
  if (req.url.indexOf('web') >= 0) {
      var _url = req.url.substring(req.url.indexOf('?') + 1, req.url.length);
      _url = querystring.parse(_url).url;
      var urlObj = new URL(_url);
      _url = urlObj.protocol + '//' + urlObj.host;
  }
  if (_url) {
      console.log(423423432);
      proxy.web(req, res, { target: 'http://127.0.0.1' });
      return;
  } else {
      proxy.web(req, res, { target: 'http://xyd.bbbbb.com:82' });
  }

  switch(host){
    case 'aaaa.com':
    case 'bbs.aaaa.com':
        proxy.web(req, res, { target: 'http://xyd.bbbbb.com:82' });
    break;
    case 'vps.cccc.com':
        proxy.web(req, res, { target: 'http://xyd.bbbbb.com:8080' });
    break;
    case 'dddd.com':
    case 'www.dddd.com':
        proxy.web(req, res, { target: 'http://localhost:81' });
    break;
    case 'eeeeee.com.cn':
    case 'www.eeee.com.cn':
        proxy.web(req, res, { target: 'http://eeeee.com.cn:8082' });
    break;
    default:
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Welcome to my server!');
  }
});  
  
console.log("listening on port 80");
server.listen(80);  