const mysql = require('mysql');
const $$config = require('../config.js');

const pool = mysql.createPool($$config.dbConfig);

const query = async (sql, params) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(sql, params, (err, res) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            })
        } catch (e) {
            reject(e);
        }
    });
};

module.exports = {
    query
};
