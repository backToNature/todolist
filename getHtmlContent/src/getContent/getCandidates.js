/**
 * Created by daringuo on 2017/10/16.
 */

let {JSDOM} = require('jsdom');
const $$option = require('../option.js');
const $$getWordCount = require('./getWordCount.js');

let _getContent = (exploreNode, _justExploring) => {
    let _global__element_index = 0, // 第几个元素

        _global__inside_link = false, //
        _global__inside_link__element_index = 0,

        _global__length__above_plain_text = 0,
        _global__count__above_plain_words = 0,
        _global__length__above_links_text = 0,
        _global__count__above_links_words = 0,
        _global__count__above_candidates = 0,
        _global__count__above_containers = 0,

        _return__containers = [],
        _return__candidates = [],
        _return__links = [];

    let _recursive = (_node) => {
        _global__element_index++;
        let _tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid')),
            _result = {
                '__index': _global__element_index,
                '__node': _node,

                // 记录是否为容器
                '_is__container':         $$option.container.includes(_tag_name),
                '_is__candidate':         false, // 是否为候选容器
                '_is__text':              false, // 是否为文本
                '_is__link':              false, // 是否为超链接
                '_is__link_skip':         false, // 是否为要跳过的链接
                '_is__image_small':       false, // 是否为小图
                '_is__image_medium':      false, // 是否为中尺寸图
                '_is__image_large':       false, // 是否是大图
                '_is__image_skip':        false, // 是否为要跳过的图片
                '_is__unskippable':       false,

                '_length__above_plain_text': _global__length__above_plain_text,
                '_count__above_plain_words': _global__count__above_plain_words,

                '_length__above_links_text': _global__length__above_links_text,
                '_count__above_links_words': _global__count__above_links_words,

                '_length__above_all_text':   (_global__length__above_plain_text + _global__length__above_links_text),
                '_count__above_all_words':   (_global__count__above_plain_words + _global__count__above_links_words),

                '_count__above_candidates':  _global__count__above_candidates, // 有多少个优秀子候选
                '_count__above_containers':  _global__count__above_containers,

                '_length__plain_text': 0, // 除去空白符并去掉链接的文字个数
                '_count__plain_words': 0, // 除去空白符并去掉链接的'词数'

                '_length__links_text': 0,  // 链接文本长度
                '_count__links_words': 0,  // 链接文本'词数'

                '_length__all_text': 0, // 所有文字个数 
                '_count__all_words': 0, // 所有'词数'


                '_count__containers': 0, // 子容器数量
                '_count__candidates': 0, // 子候选容器数量

                '_count__links': 0, // 链接数量
                '_count__links_skip': 0,

                '_count__images_small': 0,
                '_count__images_medium': 0,
                '_count__images_large': 0,
                '_count__images_skip': 0
            };


        if (_tag_name === '#invalid') {
            // 如果为注释
            return false;
        }

        if ($$option.remove_elements.includes(_tag_name)) {
            // 如果在黑名单列表里
            return false;
        }

        // if (util.isHidden(_node)) {
        //     // 如果标签已经隐藏
        //     return false;
        // }

        if ($$option.self_colose.includes(_tag_name) && _tag_name === 'img') {
            return false;
        }

        if (_tag_name === '#text') {
            // 处理文本
            _result._is__text = true;

            let _text = _node.nodeValue;

            _result._length__plain_text = _text.replace(/[\s\n\r]+/gi, '').length;
            // 统计一共有多少字
            _result._count__plain_words = $$getWordCount(_text);

            if (_global__inside_link) {
                _global__length__above_links_text += _result._length__plain_text;
                _global__count__above_links_words += _result._count__plain_words;
            } else {
                _global__length__above_plain_text += _result._length__plain_text;
                _global__count__above_plain_words += _result._count__plain_words;
            }

            return _result;
        }

        if (_tag_name === 'a') {
            // 处理超链接
            let _href = _node.href;

            if (!_href){

            } else {
                _result._is__link = true;
                if (!_global__inside_link) {
                    _global__inside_link = true;
                    _global__inside_link__element_index = _result.__index;
                }
                _return__links.push(_result);
            }
        }


        if (_tag_name === 'img') {
            if (_node.src) {
                _result._is__image_medium = true;
            }
        }

        for (let i = 0, _i=_node.childNodes.length; i<_i; i++) {
            let _child = _node.childNodes[i],
                _child_result = _recursive(_child);

            if (_child_result) {}else { continue; }

            //  add to result
            _result._count__links +=                _child_result._count__links +           (_child_result._is__link ? 1 : 0);
            _result._count__links_skip +=           _child_result._count__links_skip +      (_child_result._is__link_skip ? 1 : 0);

            _result._count__images_small +=         _child_result._count__images_small +    (_child_result._is__image_small ? 1 : 0);
            _result._count__images_medium +=        _child_result._count__images_medium +   (_child_result._is__image_medium ? 1 : 0);
            _result._count__images_large +=         _child_result._count__images_large +    (_child_result._is__image_large ? 1 : 0);
            _result._count__images_skip +=          _child_result._count__images_skip +     (_child_result._is__image_skip ? 1 : 0);

            _result._count__containers +=           _child_result._count__containers +      (_child_result._is__container ? 1 : 0);
            _result._count__candidates +=           _child_result._count__candidates +      (_child_result._is__candidate ? 1 : 0);

            _result._length__all_text +=            _child_result._length__plain_text +     _child_result._length__links_text;
            _result._count__all_words +=            _child_result._count__plain_words +     _child_result._count__links_words;

            switch (true)
            {
                case (_child_result._is__link):
                    //  no text to add
                    _result._length__links_text += (_child_result._length__plain_text + _child_result._length__links_text);
                    _result._count__links_words += (_child_result._count__plain_words + _child_result._count__links_words);
                    break;

                default:
                    _result._length__plain_text += _child_result._length__plain_text;
                    _result._count__plain_words += _child_result._count__plain_words;
                    _result._length__links_text += _child_result._length__links_text;
                    _result._count__links_words += _child_result._count__links_words;
                    break;
            }
        }

        if ((_result._is__link) && (_global__inside_link__element_index == _result.__index))
        {
            _global__inside_link = false;
            _global__inside_link__element_index = 0;
        }

        if (_result._is__container || ((_result.__index == 1) && (_justExploring == true)))
        {
            //  add to containers
            _return__containers.push(_result);

            //  increase above containers
            if (_result._is__container) { _global__count__above_containers++; }

            //  add to candidates
            if (_justExploring) {

            } else {
                switch (true)
                {
                    case (((_result._count__links * 2) >= _result._count__plain_words)):  /* link ratio */

                    case ((_result._length__plain_text < (65 / 3))):  /* text length */
                    case ((_result._count__plain_words < 5)):         /* words */

                    case ((_result._length__plain_text < 10)):        /* text length */
                    case ((_result._count__plain_words < 2)):         /* words */

                        break;

                    default:
                        _result._is__candidate = true;
                        _return__candidates.push(_result);

                        _global__count__above_candidates++;

                        break;
                }

                //  special case for body -- if it was just skipped
                //  =====================
                if ((_result.__index == 1) && !(_result._is__candidate))
                {
                    _result._is__candidate = true;
                    _result._is__bad = true;
                    _return__candidates.push(_result);
                }
            }
        }

        return _result;
    };
    _recursive(exploreNode);
    return {
        '_containers':     _return__containers,
        '_candidates':     _return__candidates,
        '_links':         _return__links
    };
};

let getContent = (str) => {
    const { document } = (new JSDOM(str)).window;
    let $body = document.body;
    return _getContent($body);
};

module.exports = getContent;