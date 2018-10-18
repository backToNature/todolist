const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

const data = require('./data/detail.json');

const indexTpl = fs.readFileSync(path.join(__dirname, './template/index.html'), 'utf8');

app.get('/index', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Credentials','true');
  if (req.query && req.query.debug === 'true') {
    res.send(data)
  } else {
    const html = ejs.render(indexTpl, data);
    res.send(html);
  }
});

app.listen(8080, () => console.log('Example app listening on port 8080!'))