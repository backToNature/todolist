/*
 * @Author: daringuo 
 * @Date: 2018-07-06 12:10:16 
 * @Last Modified by: daringuo
 * @Last Modified time: 2018-07-06 12:10:44
 */

const express = require('express');
const app = express();
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

var dest = path.join(__dirname, './static'); // 下载目录

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // 路径生成和解析
      let pathParse = path.parse(file.competeName);
      let pathArr = pathParse.dir.split('/');
      let basePath = dest;
      pathArr.forEach(item => {
        basePath = path.join(basePath, item);
        if (!fs.existsSync(basePath)) {
            fs.mkdirSync(basePath);
            console.log(`${basePath}目录已生成`);
        }
      });
      cb(null, basePath);
    },
    filename: function (req, file, cb) {
        // 文件存储
        console.log(`${file.originalname}文件已下载`);
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage
});
 
app.post('/upload', upload.array('files'), function (req, res, next) {
  // req.body contains the text fields
  res.send('123123');
})

app.get('/', function(req, res){
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>多文件上传</title>
    </head>
    <body>
        <input id="fileFolder" name="fileFolder" type="file" directory mozDirectory webkitDirectory>
        <script>
            document.querySelector('#fileFolder').addEventListener('change', (e) => {
                const files = e.target.files;
                let formData = new FormData();
                for (let i = 0; i < files.length; i++) {
                    formData.append('files', files[i]);
                }
                const xhr = new XMLHttpRequest();
                xhr.open("POST", '/upload');
                xhr.send(formData);
                console.log(11111);
            });
        </script>
    </body>
    </html>
    `);
  });
console.log('success');
app.listen(3000);


