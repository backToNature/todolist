/**
 * Created by daringuo on 2017/9/29.
 */

let {JSDOM} = require('jsdom');
const fs = require('fs');
const path = require('path');
const option = require('./option.js');
let content = fs.readFileSync(path.join(__dirname, './test/qq.html'), 'utf8');

const { document } = (new JSDOM(content)).window;

let $body = document.body;

let _global__element_index = 0, // 第几个元素

    _global__inside_link = false, //
    _global__inside_link__element_index = 0,

    _global__length__above_plain_text = 0,
    _global__count__above_plain_words = 0,
    _global__length__above_links_text = 0,
    _global__count__above_links_words = 0,
    _global__count__above_candidates = 0,
    _global__count__above_containers = 0,
    _global__above__plain_text = '',
    _global__above__links_text = '',

    _return__containers = [],
    _return__candidates = [],
    _return__links = [];


let _recursive = (_node) => {
    _global__element_index++;

    var _tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid')),
        _result = {
            '__index': _global__element_index,
            '__node': _node,

            // 记录是否为容器
            '_is__container':         (option.container.includes('_tag_name')),
            '_is__candidate':         false, // 是否为候选容器
            '_is__text':              false, // 是否为文本
            '_is__link':              false, // 是否为超链接
            '_is__link_skip':         false, // 是否为要跳过的链接
            '_is__image_small':       false, // 是否为小图
            '_is__image_medium':      false, // 是否为中尺寸图
            '_is__image_large':       false, // 是否是大图
            '_is__image_skip':        false, // 是否为要跳过的图片
            '_is__unskippable':       false,

            '_debug__above__plain_text': _global__above__plain_text,
            '_debug__above__links_text': _global__above__links_text,


            '_length__above_plain_text': _global__length__above_plain_text,
            '_count__above_plain_words': _global__count__above_plain_words,

            '_length__above_links_text': _global__length__above_links_text,
            '_count__above_links_words': _global__count__above_links_words,

            '_length__above_all_text':   (_global__length__above_plain_text + _global__length__above_links_text),
            '_count__above_all_words':   (_global__count__above_plain_words + _global__count__above_links_words),

            '_count__above_candidates':  _global__count__above_candidates,
            '_count__above_containers':  _global__count__above_containers,

            '_length__plain_text': 0,
            '_count__plain_words': 0,

            '_length__links_text': 0,
            '_count__links_words': 0,

            '_length__all_text': 0,
            '_count__all_words': 0,


            '_count__containers': 0,
            '_count__candidates': 0,

            '_count__links': 0,
            '_count__links_skip': 0,

            '_count__images_small': 0,
            '_count__images_medium': 0,
            '_count__images_large': 0,
            '_count__images_skip': 0
        };

    // 如果为容器，或者是自结束标签
    // if (((_result._is__container) || option.self_colose.includes(_tag_name)))
    // {
    //
    //     var _unskip = _node.getAttribute($D.parseOptions._unskippable_attribute);
    //     if (_unskip == $D.parseOptions._unskippable_attribute_value) { _result._is__unskippable = true; }
    // }
    console.log(_tag_name);

    for (let i = 0, _i=_node.childNodes.length; i<_i; i++) {
        let _child = _node.childNodes[i],
            _child_result = _recursive(_child);

        if (_child_result) {}else { continue; }
    }

    return _result;
};

let findInPage = (window) => {

};

_recursive($body);

// console.log(document);