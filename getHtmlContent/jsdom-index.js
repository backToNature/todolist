/**
 * Created by daringuo on 2017/9/29.
 */

let {JSDOM} = require('jsdom');
const fs = require('fs');
const path = require('path');
const option = require('./option.js');
const util = require('./lib/util.js');
let content = fs.readFileSync(path.join(__dirname, './test/qq.html'), 'utf8');

const { document } = (new JSDOM(content)).window;

let $body = document.body;

let getContent = (exploreNode, _justExploring) => {
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
        let _tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid')),
            _result = {
                '__index': _global__element_index,
                '__node': _node,

                // 记录是否为容器
                '_is__container':         option.container.includes(_tag_name),
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

                '_length__plain_text': 0, // 除去空白符的文字
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


        if (_tag_name === '#invalid') {
            // 如果为注释
            return false;
        }

        if (option.remove_elements.includes(_tag_name)) {
            // 如果在黑名单列表里
            return false;
        }

        // if (util.isHidden(_node)) {
        //     // 如果标签已经隐藏
        //     return false;
        // }

        if (option.self_colose.includes(_tag_name) && _tag_name === 'img') {
            return false;
        }

        if (_tag_name === '#text') {
            // 处理文本
            _result._is__text = true;

            let _text = _node.nodeValue;

            _result._length__plain_text = _text.replace(/[\s\n\r]+/gi, '').length;
            // 统计一共有多少字
            _result._count__plain_words = util.getWordCount(_text);

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

let getContent__computeDetailsForCandidate__first = (_e, _main) => {
    var _r = {};

    //  bad candidate
    //  =============
    if (_e._is__bad) { return _r; }

    //  paragraphs
    //  ==========
    _r['_count__lines_of_65_characters'] = (_e._length__plain_text / 65);
    _r['_count__paragraphs_of_3_lines'] =  (_r._count__lines_of_65_characters / 3);
    _r['_count__paragraphs_of_5_lines'] =  (_r._count__lines_of_65_characters / 5);

    _r['_count__paragraphs_of_50_words'] = (_e._count__plain_words / 50);
    _r['_count__paragraphs_of_80_words'] = (_e._count__plain_words / 80);

    //  total text
    //  ==========
    _r['_ratio__length__plain_text_to_total_plain_text'] =  (_e._length__plain_text / _main._length__plain_text);
    _r['_ratio__count__plain_words_to_total_plain_words'] = (_e._count__plain_words / _main._count__plain_words);

    //  links
    //  =====
    _r['_ratio__length__links_text_to_plain_text'] =  (_e._length__links_text / _e._length__plain_text);
    _r['_ratio__count__links_words_to_plain_words'] = (_e._count__links_words / _e._count__plain_words);

    _r['_ratio__length__links_text_to_all_text'] =  (_e._length__links_text / _e._length__all_text);
    _r['_ratio__count__links_words_to_all_words'] = (_e._count__links_words / _e._count__all_words);

    _r['_ratio__length__links_text_to_total_links_text'] =  (_e._length__links_text / (_main._length__links_text + 1));
    _r['_ratio__count__links_words_to_total_links_words'] = (_e._count__links_words / (_main._count__links_words + 1));

    _r['_ratio__count__links_to_total_links'] = (_e._count__links / (_main._count__links + 1));
    _r['_ratio__count__links_to_plain_words'] = ((_e._count__links * 2) / _e._count__plain_words);

    //  text above
    //  ==========
    var _divide__candidates = Math.max(2, Math.ceil(_e._count__above_candidates * 0.5)),
        _above_text = (((_e._length__above_plain_text * 1) + (_e._length__above_plain_text / _divide__candidates)) / 2),
        _above_words = (((_e._count__above_plain_words * 1) + (_e._count__above_plain_words / _divide__candidates)) / 2);

    _r['_ratio__length__above_plain_text_to_total_plain_text'] =  (_above_text / _main._length__plain_text);
    _r['_ratio__count__above_plain_words_to_total_plain_words'] = (_above_words / _main._count__plain_words);

    //  candidates
    //  ==========
    _r['_ratio__count__candidates_to_total_candidates'] = (_e._count__candidates / (_main._count__candidates + 1));
    _r['_ratio__count__containers_to_total_containers'] = (_e._count__containers / (_main._count__containers + 1));

    //  return
    //  ======
    return _r;
};

let getContent__computePointsForCandidate__do = (_ratio_remaining, _power, _ratio, _points_history) => {
    var _points_remaining = (_points_history[0] * _ratio_remaining),
        _points_to_compute = (_points_history[0] - _points_remaining),
        _points_return;

    if (_ratio < 0) { _points_return = _points_remaining; }
    else            { _points_return = 0 + _points_remaining + (_points_to_compute * Math.pow(_ratio, _power)); }

    //  add
    _points_history.unshift(_points_return);
};

let getContent__computePointsForCandidate__first = (_e, _main) => {
    var _details = _e.__candidate_details,
        _points_history = [],
        _really_big = ((_main._length__plain_text / 65) > 250);

    //  bad candidate
    if (_e._is__bad) { return [0]; }

    //  the basics
    //  ==========
    _points_history.unshift(((0                         +
    (_details._count__paragraphs_of_3_lines)        +
    (_details._count__paragraphs_of_5_lines * 1.5)  +
    (_details._count__paragraphs_of_50_words)       +
    (_details._count__paragraphs_of_80_words * 1.5) +
    (_e._count__images_large * 3)                   -   // !!
    ((_e._count__images_skip + _e._count__images_small) * 0.5)) * 1000));

    //  negative
    if (_points_history[0] < 0) { return [0]; }

    //  candidates, containers, pieces
    //  ==============================
    var _divide__pieces =     Math.max(5,  Math.ceil(_e._count__pieces *     0.25)),
        _divide__candidates = Math.max(5,  Math.ceil(_e._count__candidates * 0.25)),
        _divide__containers = Math.max(10, Math.ceil(_e._count__containers * 0.25));

    _points_history.unshift(((0                     +
    (_points_history[0] * 3)                    +
    (_points_history[0] / _divide__pieces)      +
    (_points_history[0] / _divide__candidates)  +
    (_points_history[0] / _divide__containers)) / 6));

    //  total text
    //  ==========
    getContent__computePointsForCandidate__do(0.10, 2, (1 - (1 - _details._ratio__length__plain_text_to_total_plain_text)), _points_history);
    getContent__computePointsForCandidate__do(0.10, 2, (1 - (1 - _details._ratio__count__plain_words_to_total_plain_words)), _points_history);

    if (_really_big) {
        getContent__computePointsForCandidate__do(0.10, 4, (1 - (1 - _details._ratio__length__plain_text_to_total_plain_text)), _points_history);
        getContent__computePointsForCandidate__do(0.10, 4, (1 - (1 - _details._ratio__count__plain_words_to_total_plain_words)), _points_history);
    }

    //  text above
    //  ==========
    getContent__computePointsForCandidate__do(0.10, 5, (1 - _details._ratio__length__above_plain_text_to_total_plain_text), _points_history);
    getContent__computePointsForCandidate__do(0.10, 5, (1 - _details._ratio__count__above_plain_words_to_total_plain_words), _points_history);

    if (_really_big) {
        getContent__computePointsForCandidate__do(0.10, 10, (1 - _details._ratio__length__above_plain_text_to_total_plain_text), _points_history);
        getContent__computePointsForCandidate__do(0.10, 10, (1 - _details._ratio__count__above_plain_words_to_total_plain_words), _points_history);
    }

    //  links outer
    //  ===========
    getContent__computePointsForCandidate__do(0.75, 1, (1 - _details._ratio__length__links_text_to_total_links_text), _points_history);
    getContent__computePointsForCandidate__do(0.75, 1, (1 - _details._ratio__count__links_words_to_total_links_words), _points_history);

    getContent__computePointsForCandidate__do(0.75, 1, (1 - _details._ratio__count__links_to_total_links), _points_history);

    //  links inner
    //  ===========
    var __lr = 0.50;

    getContent__computePointsForCandidate__do(__lr, 1, (1 - _details._ratio__length__links_text_to_plain_text), _points_history);
    getContent__computePointsForCandidate__do(__lr, 1, (1 - _details._ratio__count__links_words_to_plain_words), _points_history);

    getContent__computePointsForCandidate__do(__lr, 1, (1 - _details._ratio__length__links_text_to_all_text), _points_history);
    getContent__computePointsForCandidate__do(__lr, 1, (1 - _details._ratio__count__links_words_to_all_words), _points_history);

    getContent__computePointsForCandidate__do(__lr, 1, (1 - _details._ratio__count__links_to_plain_words), _points_history);

    //  candidates, containers, pieces
    //  ==============================
    getContent__computePointsForCandidate__do(0.75, 1, (1 - _details._ratio__count__candidates_to_total_candidates), _points_history);
    getContent__computePointsForCandidate__do(0.75, 1, (1 - _details._ratio__count__containers_to_total_containers), _points_history);
    getContent__computePointsForCandidate__do(0.75, 1, (1 - _details._ratio__count__pieces_to_total_pieces), _points_history);

    //  return -- will get [0] as the actual final points
    //  ======
    return _points_history;
};

let pickCandidates = (_candidatesToProcess) => {
    var _candidates = _candidatesToProcess;
    // 递增排序
    _candidates.sort(function (a, b)
    {
        switch (true)
        {
            case (a.__index < b.__index): return -1;
            case (a.__index > b.__index): return 1;
            default: return 0;
        }
    });

    //  get first
    //  =========
    var _main = _candidates[0];

    //  pieces of text -- and points computation
    //  ==============
    for (let i=0, _i=_candidates.length; i<_i; i++)
    {
        //  pieces
        //  ======
        let _count__pieces = 0,
            _array__pieces = [];

        for (let k=i, _k=_candidates.length; k<_k; k++)
        {
            if (_candidates[k]._count__candidates > 0) { continue; }
            if (_candidates[i].__node.contains(_candidates[k].__node)) {
            } else { continue; }

            _count__pieces++;
        }

        //  candidate details
        //  =================
        _candidates[i]['__candidate_details'] = getContent__computeDetailsForCandidate__first(_candidates[i], _main);

        //  pieces -- do this here because _main doesn't yet have a pieces count
        //  ======

        //  set pieces
        _candidates[i]['_count__pieces'] = _count__pieces;
        _candidates[i]['_array__pieces'] = _array__pieces;

        //  pieces ratio
        _candidates[i]['__candidate_details']['_ratio__count__pieces_to_total_pieces'] = (_count__pieces / (_candidates[0]._count__pieces + 1));

        _candidates[i].__points_history = getContent__computePointsForCandidate__first(_candidates[i], _main);
        _candidates[i].__points = _candidates[i].__points_history[0];
    }

    //  sort _candidates -- the more points, the closer to position 0
    //  ================
    _candidates.sort(function (a, b)
    {
        console.log(a.__points);
        switch (true)
        {
            case (a.__points > b.__points): return -1;
            case (a.__points < b.__points): return 1;
            default: return 0;
        }
    });

    //  return
    //  ======
    console.log(_candidates.length);
    console.log(_candidates[0].__node.tagName);
    return _candidates;
};

let _stuff = getContent($body);

pickCandidates(_stuff._candidates);


