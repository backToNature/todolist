const $$daoArticle = require('../dao/article.js');

module.exports = async (ctx, next) => {
    const query = ctx.query;
    const id = parseInt(query.id);
    let getArticleDetailRes;
    try {
        getArticleDetailRes = await $$daoArticle.getSingleArticle(id);
        if (getArticleDetailRes && getArticleDetailRes.length) {
            ctx.body = {
                status: 0,
                data: getArticleDetailRes[0],
                msg: 'success'
            };
        } else {
            ctx.body = {
                status: 410,
                data: {},
                msg: 'error'
            };
        }
    } catch(e) {
        ctx.body = {
            status: 410,
            data: {},
            msg: 'error'
        };
    }

};