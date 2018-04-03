const $$daoArticle = require('../dao/article.js');


const typeSet = new Set([1, 2, 3]); // 1: 图文 2: 视频 3: 音频

const url_reg = /(https?|ftp|file)\:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/;

module.exports = async (ctx, next) => {
    const params = ctx.request.body || {};
    let isParamsRight = true;

    let type = parseInt(params.type);
    let content = params.content;
    let resource_url = params.resource_url;
    let title = params.title;
    
    if (!typeSet.has(type)) {
        isParamsRight = false;
    }

    if (type === 1 && !content.length) {
        isParamsRight = false;
    }

    if (type !== 1 && !url_reg.test(resource_url)) {
        isParamsRight = false;
    }

    if (isParamsRight) {
        let addArticleRes;
        try {
            addArticleRes = await $$daoArticle.inserArticle(type, content, resource_url, title);
            if (addArticleRes.insertId) {
                ctx.body = {
                    status: 0,
                    data: {
                        id: addArticleRes.insertId
                    },
                    msg: '新增文章成功'
                };
            } else {
                ctx.body = {
                    status: 411,
                    data: {},
                    msg: '新增文章失败'
                };
            }
        } catch (e) {
            console.log(e);
            ctx.body = {
                status: 411,
                data: {},
                msg: '新增文章失败'
            };
        }

        console.log(addArticleRes);
    } else {
        ctx.body = {
            status: 410,
            data: {},
            msg: '参数错误'
        };
    }

    await next();
};