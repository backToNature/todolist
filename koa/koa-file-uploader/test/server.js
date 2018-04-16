const Koa = require('koa');
const fileUploader = require('../index.js');
const path = require('path');
const request = require('supertest');
const FormData = require('form-data');
const fs = require('fs');

describe('request(url)', () => {
  it('should be supported', (done) => {
    const app = new Koa();
    app.host = process.env.IP || 'localhost';
    app.port = process.env.PORT || 8123;
    app.use(fileUploader({
      cors: true,
      destPath: path.join(__dirname, './static'),
      uploadParam: 'img',
      apiPath: '/api/upload',
      allowedExt: ['.jpg'],
      saveAsMd5: true,
      allowedSize: 30
    }));

    const server = app.listen(app.port, app.host, () => {
      const form = new FormData();
      const filePath = path.join(__dirname, './file/test.jpg');
      form.append('img', fs.createReadStream(filePath));
      form.submit('http://localhost:8123/api/upload', (err, res) => {
        // console.log(res.statusMessage);
        res.on('close', () => {
          console.log(123);
        })
        res.on('finish', () => {
          console.log(321);
        })
        
        done();
      })
    });

  });
});





// app.use(router.routes());
// app.use(router.allowedMethods());

