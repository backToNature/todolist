const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')

app.get('/index', (req, res) => {
  if (req.query && req.query.debug === 'true') {
    res.send(data)
  } else {
    const html = ejs.render(indexTpl, data);
    res.send(html);
  }
});

app.listen(8080, () => console.log('Example app listening on port 8080!'))