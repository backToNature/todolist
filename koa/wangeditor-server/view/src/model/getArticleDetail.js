/**
 * @description 获取文章详情
 * @param {string} id - 文章的id
 */

import $$config from './config.js';

Parse.initialize($$config.objectName);
Parse.serverURL = $$config.serverURL;
const collection_activity_zwds = Parse.Object.extend($$config.className);
const query = new Parse.Query(collection_activity_zwds);

export default (id, fn) => {
  query.equalTo("objectId", id);
  query.find({
    success: (results) => {
      fn({
        status: 0,
        data: results,
        msg: 'success'
      });
    },
    error: (error) => {
      fn({
        status: 500,
        data: error,
        msg: 'error'
      })
    }
  });
};