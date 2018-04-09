import Breif from './breif.vue';
import ArticleEditor from '../edit-article/edit-article.vue';
import $ from 'jquery';
import $$util from '../../lib/util.js';
import $$model_getArticleDetail from '../../model/getArticleDetail.js';
import $$model_addArticle from '../../model/addArticle.js';

export default {
  components: {
    // Breif,
    ArticleEditor
  },
  beforeMount() {
    const id = $$util.getQueryString('id');
    
    if (id) {
      $$model_getArticleDetail(id, (res) => {
        console.log(res);
        
        // console.log(res.data[0].get('content'));
      });
    }
    
    // $$model_addArticle('123', '42345', '3124324', 0, 'fdffd', (res) => {
    //   console.log(res);
    // })
    // if (id) {
    //   const query = new Parse.Query(collection_activity_zwds);
    //   query.find().then(function (results) {
    //     console.log(results);
    //     // results.length && cb && cb(JSON.stringify(results));
    //   }).catch(function (error) {
    //     console.error(error);
    //   });
    // } else {

    // }

  }
}