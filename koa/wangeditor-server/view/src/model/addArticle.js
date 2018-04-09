/**
 * @description 新增文章
 * @param {string} id - 文章的id
 */

import $$config from './config.js';

Parse.initialize($$config.objectName);
Parse.serverURL = $$config.serverURL;
const ActivityZwdsArticle = Parse.Object.extend('ActivityZwdsArticle');

export default (title = '', content = '', thumbUrl = '', support = 0, userId = 1, fn) => {
  const activityZwdsArticle = new ActivityZwdsArticle();
  activityZwdsArticle.set('title', title);
  activityZwdsArticle.set('content', content);
  activityZwdsArticle.set('thumbUrl', thumbUrl);
  activityZwdsArticle.set('support', support);
  activityZwdsArticle.set('userId', userId);
  activityZwdsArticle.save(null, {
    success: (results) => {
      fn({
        status: 0,
        data: results,
        msg: 'success'
      })
    },
    error: (results, error) => {
      fn({
        status: 500,
        data: error,
        msg: 'error'
      })
    }
  });
};