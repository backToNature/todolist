const Koa = require('koa');
const app = new Koa();
const fileUploader = require('./lib/index.js');
const path = require('path');

app.host = process.env.IP || 'localhost';
app.port = process.env.PORT || 8000;

app.use(fileUploader({
  cors: true,
  destPath: path.join(__dirname, './static'),
  apiPath: '/api/upload'
  // saveAsMd5: true
}));

const server = app.listen(app.port, app.host, () => {
  console.log('Koa server listening on %s:%d', server.address().address, server.address().port)
});