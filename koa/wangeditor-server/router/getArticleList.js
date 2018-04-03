const $$daoArticle = require('../dao/article.js');

module.exports = async (ctx, next) => {
    const query = ctx.query;

    let getArticleListRes;
    try {
        getArticleListRes = await $$daoArticle.getArticleList();
        if (getArticleListRes && Array.isArray(getArticleListRes)) {
            ctx.body = {
                status: 0,
                data: getArticleListRes,
                msg: 'success'
            };
        } else {
            ctx.body = {
                status: 410,
                data: [],
                msg: 'error'
            };
        }
    } catch(e) {
        ctx.body = {
            status: 410,
            data: [],
            msg: 'error'
        };
    }

};