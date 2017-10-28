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

let global_sentences = 0;

let getGoodContainer = (containers) => {
    let containers_details = [];
    let addParams = (obj) => {
        let _node = obj.node;

        obj.link_num = _node.querySelectorAll('a').length || 0; // 记录链接数量

        obj.img_num = _node.querySelectorAll('img').length || 0; // 记录图片数量

        obj.text_length = _node.innerText.length || 0; // 记录文本长度

        obj.sentences = $$getSentenceNum(_node.innerText);

        global_sentences+= obj.sentences;

        obj.link_text_length = 0;

        _node.querySelectorAll('a').forEach(item => {
            obj.link_text_length += item.innerText.length || 0;
        });

        obj.tagsNum = getTagsNum(obj);

    };

    containers.forEach(item => {
        let curObj = {
            node: item
        };
        addParams(curObj);
        containers_details.push(curObj);
    });

    containers_details.forEach(item => {
        $$compute(item, global_sentences);
    });

    containers_details.sort(function (a, b)
    {
        switch (true)
        {
            case (a.point < b.point): return -1;
            case (a.point > b.point): return 1;
            default: return 0;
        }
    });


    return containers_details;
};

export default getGoodContainer;