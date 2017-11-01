/**
 * Created by daringuo on 2017/10/25.
 */

import $$getSentenceNum from './getSentenceNum.js';
import $$compute from './compute.js';
import $$option from './option.js';

// 获取标签数量
let getTagsNum = (root) => {
    let $root = root.node;
    let tagsNum = 0;
    let _recursive = (_node) => {
        if (_node.childNodes.length) {
            _node.childNodes.forEach(item => {
                let tag_name = (item.nodeType === 3 ? '#text' : ((item.nodeType === 1 && item.tagName && item.tagName > '') ? item.tagName.toLowerCase() : '#invalid'));
                if (!$$option.remove_elements.includes(tag_name)) {
                    tagsNum++;
                }
                _recursive(item);
            });
        }
    };
    _recursive($root);
    return tagsNum;
};

let global_sentences = 0, // 总句数
    global_img_num = 0; // 总图数

let getGoodContainer = (containers) => {
    let containers_details = [];
    let addParams = (obj) => {
        let _node = obj.node;

        obj.link_num = _node.querySelectorAll('a').length || 0; // 记录链接数量

        // obj.img_num = _node.querySelectorAll('img').length || 0; // 记录图片数量
        obj.img_num = 0;
        _node.querySelectorAll('img').forEach(item => {
            if (item.style.display !== 'none') {
                obj.img_num++;
            }
        });

        global_img_num += obj.img_num;



        obj.text_length = _node.innerText.length || 0; // 记录文本长度

        obj.sentences = $$getSentenceNum(_node.innerText); // 记录文本句数

        global_sentences += obj.sentences;

        obj.link_text_length = 0;

        obj.link_sentence_num = 0;

        _node.querySelectorAll('a').forEach(item => {
            obj.link_sentence_num += $$getSentenceNum(item.innerText);
            obj.link_text_length += item.innerText.length || 0;
        });

        obj.tagsNum = getTagsNum(obj);

    };


    containers.forEach(item => {
        let curObj = {
            node: item
        };
        addParams(curObj);


        // 一些过滤规则
        let pure_text_length = curObj.text_length - curObj.link_text_length;
        let pure_text_sentence = curObj.sentences - curObj.link_sentence_num;


        if (curObj.link_num * 2 >= pure_text_sentence) {
            return;
        }

        console.log(curObj)

        if (pure_text_length < (65 / 3)) {
            return;
        }

        if (pure_text_length < 10) {
            return;
        }

        if (pure_text_sentence < 2) {
            return;
        }

        containers_details.push(curObj);
    });

    containers_details.forEach(item => {
        item.child_good_containers = 1;
        containers_details.forEach(it => {
            if (item !== it && item.node.contains(it.node)) {
                item.child_good_containers++;
            }
        });
        $$compute(item, global_sentences, global_img_num, containers_details.length);
    });



    // 按文本密度升序排列
    containers_details.sort(function (a, b) {
        switch (true) {
            case (a.point < b.point): return -1;
            case (a.point > b.point): return 1;
            default: return 0;
        }
    });

    containers_details.forEach(item => {
        item._point.node = item.node;
        console.log(item._point);
    });

    return containers_details;
};

export default getGoodContainer;