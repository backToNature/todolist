const fs = require('fs');
const path = require('path');
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer;

const template = fs.readFileSync(path.join(__dirname, './index.template.html'), 'utf8');

// bundle对象
let renderer = createBundleRenderer(require('./dist/vue-ssr-server-bundle.json'), {
  runInNewContext: false,
  template,
  clientManifest: require('./dist/vue-ssr-client-manifest.json'),
  // template,
  shouldPreload: (file, type) => {
    // 基于文件扩展名的类型推断。
    // https://fetch.spec.whatwg.org/#concept-request-destination
    if (type === 'script' || type === 'style') {
      return true
    }
    if (type === 'font') {
      // 只预加载 woff2 字体
      return /\.woff2$/.test(file)
    }
    if (type === 'image') {
      // 只预加载重要 images
      return file === 'hero.jpg'
    }
  }
});

renderer.renderToString({title: '豪哥'}).then(res => {
  console.log(res);
});

// console.log(renderer.renderToString());