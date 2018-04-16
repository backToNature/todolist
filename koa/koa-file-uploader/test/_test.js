const FormData = require('form-data');
const fs = require('fs');
const path = require('path');


const form = new FormData();
const filePath = path.join(__dirname, './file/test.jpg');
form.append('img', fs.createReadStream(filePath));

form.submit('http://localhost:8000/api/upload', (err, res) => {
  console.log(err, res);
});
// form.submit('http://localhost:8000/api/upload', (err, res) => {
//   // console.log(res.statusMessage);
// res.on('close', () => {
//   console.log(123);
// })
// res.on('finish', () => {
//   console.log(321);
// })
// {}