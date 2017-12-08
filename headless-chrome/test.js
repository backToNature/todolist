const chromeLauncher = require('chrome-launcher')
// const chrome = require('chrome-remote-interface')
// const fs = require('fs')

chromeLauncher.launch({
  startingUrl: 'http://www.qq.com',
  port: 9222,
  chromeFlags: ['--headless', '--disable-gpu']
}).then(chrome => {
  console.log(`Chrome debugging port running on ${chrome.port}`);
});