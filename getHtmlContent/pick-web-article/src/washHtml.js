/**
 * Created by daringuo on 2017/11/14.
 */

import $$option from './option.js';

let washHtml = (dom) => {
    let _dom = dom.node.cloneNode(true);
    const KEEP_ELEMENTS_ATTRIBUTES = $$option.keep_elements_attr;
    const ADD_ELEMENTS_ATTR = $$option.add_elements_attr;

    // 去掉应该去除的元素
    _dom.querySelectorAll($$option.remove_elements.join(',')).forEach(item => {
        item.remove();
    });

    _dom.querySelectorAll('*').forEach(item => {
        let _tag_name = (item.nodeType === 3 ? '#text' : ((item.nodeType === 1 && item.tagName && item.tagName > '') ? item.tagName.toLowerCase() : '#invalid'));

        if (KEEP_ELEMENTS_ATTRIBUTES[_tag_name]) {
            for (let key in KEEP_ELEMENTS_ATTRIBUTES) {
                let value = KEEP_ELEMENTS_ATTRIBUTES[key];
                let attributes = item.attributes;
                if (key === _tag_name) {
                    let i = 0;
                    while (attributes.length > i) {
                        if (!value.includes(attributes[i].name)) {
                            attributes.removeNamedItem(attributes[i].name);
                        } else {
                            i++;
                        }
                    }
                }
            }
        } else {
            let attributes = item.attributes;

            let i = 0;
            while (attributes.length > i) {
                attributes.removeNamedItem(attributes[0].name);
            }
        }
        
        // 添加属性
        for (let key in ADD_ELEMENTS_ATTR) {
            let value = ADD_ELEMENTS_ATTR[key];
            if (key === _tag_name) {
                let attributes = item.attributes;
                for (let _key in value) {
                    item.removeAttribute(_key);
                    item.setAttribute(_key, value[_key]);
                }
            }
        }

    });

    console.log(_dom.innerHTML);
};

export default washHtml;