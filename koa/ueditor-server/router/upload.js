const path = require('path');

module.exports = async (ctx, next) => {
    const query = ctx.query;
    const action = query.action;
    switch (action) {
        case 'uploadimage':
            ctx.set('Content-Type', 'text/html; charset=utf-8');
            let res = JSON.stringify({
                name: ctx.req.file.filename,
                original: ctx.req.file.filename,
                size: ctx.req.file.size,
                state: 'SUCCESS',
                type: path.extname(ctx.req.file.filename),
                url: `/files/${ctx.req.file.filename}`
            });
            ctx.body = res;
            break;
    }
};

