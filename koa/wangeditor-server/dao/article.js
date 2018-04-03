const db = require('./bin.js');

module.exports = {
    /**
     * 新增文章
     * @constructor
     * @param {Number} type - 文章类型
     * @param {string} content - 文章内容
     */
    async inserArticle(type = 1, content = '', resource_url = '', title = '') {
        return await db.query(`INSERT INTO article(type, content, resource_url, title) VALUES(?,?,?,?) `, [type, content, resource_url, title]);
    },
    // 更新提取结果不正常的列
    async updateErrorPickStatus(id, title, summary) {
        let result = await db.query(tableName, `UPDATE url SET title=?,summary=?,is_pick_right=0,is_task_done=1,u_time=?,status=CASE WHEN status=1 THEN 2 ELSE status END WHERE id=${id}`, [title, summary, new Date()]);
        return result;
    },
    // 插入一条新增的提取测试
    async addNewPickUrl(url) {
        let result = await db.query(tableName, `INSERT INTO url(domain, u_time) VALUES(?,?) `, [url, new Date()]);
        return result;
    },
    // 插入多条提取测试
    async addUrlList(urls) {
        let sql = `INSERT INTO url(domain, u_time) VALUES `;
        const now = new Date();
        let params = [];
        urls.forEach((item, index) => {
            params.push(item);
            params.push(now);
            if (index === 0) {
                sql += '(?,?)';
            } else {
                sql += ',(?,?)';
            }
        });
        
        let result = await db.query(tableName, sql, params);
        return result;
    },
    // 更新特殊规则和黑白名单
    async updateStatusRule(id, status = 1, rule = '') {
        return await db.query(tableName, `UPDATE url SET status=?,rule=?,u_time=?,is_pick_right=0 WHERE id=${id}`, [status, rule, new Date()]);
    },
    // 新增特殊规则和黑白名单
    async insertStatusRule(url, status = 1, rule = '') {
        return await db.query(tableName, `INSERT INTO url(domain,status,rule,u_time,is_pick_right) VALUES(?,?,?,?,0) `, [url,status,rule,new Date()]);
    },
    // 更新是否上线
    async updateOnline(ids, is_online) {
        let sql = `UPDATE url SET is_online=? WHERE id IN (`;
        ids.forEach((item, index) => {
            if (index === 0) {
                sql += `${item}`
            } else {
                sql += `,${item}`
            }
        });
        sql += ')';
        return await db.query(tableName, sql, [is_online]);
    },
    // 更新提取测试
    async updatePickUrl(id, title, summary) {
        let result = await db.query(tableName, `UPDATE url SET title=?,summary=?,is_task_done=1 WHERE id=${id}`, [title, summary]);
        return result;
    },
    // 查询domain是否存在
    async queryItemByDomain(domain) {
        let result = await db.query(tableName, `SELECT * FROM url WHERE domain=?` ,[domain]);
        return result;
    },
    // 更新单条数据
    async updateRowById(id, status = 1, is_pick_right = 1, rule = '', desc = '', is_task_done = 2) {
        let result = await db.query(tableName, `UPDATE url SET status=?,is_pick_right=?,rule=?,url.desc=?,is_task_done=?,u_time=? WHERE id=${id}`, [status, is_pick_right, rule, desc, is_task_done, new Date()]);
        return result;
    },
    // 删除数据
    async delRowById(ids) {
        let sql = `DELETE FROM url WHERE id IN (`;
        ids.forEach((item, index) => {
            if (index === 0) {
                sql += `${item}`
            } else {
                sql += `,${item}`
            }
        });
        sql += ')';
        return  await db.query(tableName, sql);
    },
};