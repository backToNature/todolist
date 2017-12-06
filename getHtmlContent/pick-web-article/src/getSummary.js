/**
 * Created by daringuo on 2017/10/28.
 * 
 */
import $$getSentenceNum from './getSentenceNum.js';

const getSummary = (root) => {
    // 优先获取description
    let $meta = root.querySelectorAll('meta[name$="cription"]'),
        metaObj = {
            text: '',
            sentence: 0
        };

    if ($meta.length) {
        metaObj.text = $meta[0].getAttribute('content');
        metaObj.sentence = $$getSentenceNum(metaObj.text);
    }
    

    // 其次获取title
    let titleObj = {
        text: root.title,
        sentence: $$getSentenceNum(root.title)
    };

    let summary = metaObj.sentence >= titleObj.sentence ? metaObj.text : titleObj.text;

    // @todo 提取正文内容做分析再和meta与title对比
    return summary;
};

export default getSummary;