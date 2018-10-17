const path = require('path')
const LRU = require('lru-cache')
const express = require('express')
const resolve = file => path.resolve(__dirname, file)
const { createBundleRenderer } = require('vue-server-renderer')

const serverInfo =
  `express/${require('express/package.json').version} ` +
  `vue-server-renderer/${require('vue-server-renderer/package.json').version}`

const app = express()

function createRenderer (bundle, options) {
  return createBundleRenderer(bundle, Object.assign(options, {
    // for component caching
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('./dist'),
    // recommended for performance
    runInNewContext: false
  }))
}
let renderer
let readyPromise
const templatePath = resolve('./index.template.html')

readyPromise = require('./dev-server.js')(
  app,
  templatePath,
  (bundle, options) => {
    renderer = createRenderer(bundle, options)
  }
)

function render (req, res) {
  const s = Date.now()

  res.setHeader("Content-Type", "text/html")
  res.setHeader("Server", serverInfo)

  const handleError = err => {
    if (err.url) {
      res.redirect(err.url)
    } else if(err.code === 404) {
      res.status(404).send('404 | Page Not Found')
    } else {
      // Render Error Page or Redirect
      res.status(500).send('500 | Internal Server Error')
      console.error(`error during render : ${req.url}`)
      console.error(err.stack)
    }
  }

  const context = {
    title: 'Vue HN 2.0', // default title
    url: req.url
  }
  renderer.renderToString(context, (err, html) => {
    console.log(err);
    if (err) {
      return handleError(err)
    }
    res.send(html)
  })
}

app.get('*', (req, res) => {
  readyPromise.then(() => render(req, res));
});

const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
