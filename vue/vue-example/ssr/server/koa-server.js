const Vue = require('vue')
const Koa = require('koa');
const app = new Koa();
const renderer = require('vue-server-renderer').createRenderer()

app.use(async (ctx, next) => {
    const component = new Vue({
        data: {
            url: ctx.host
        },
        template: `<div>访问的 URL 是： {{ url }}</div>`
    });
    renderer.renderToString(component, (err, html) => {
        if (err) {
          res.status(500).end('Internal Server Error')
          return
        }
        ctx.body = `
        <!DOCTYPE html>
          <html lang="en">
            <head><title>Hello</title></head>
            <body>${html}</body>
          </html>
        `;
      });
});

app.host = process.env.IP || 'localhost';
app.port = process.env.PORT || 8000;

var server = app.listen(app.port, app.host, () => {
  console.log('Koa server listening on %s:%d', server.address().address, server.address().port)
});