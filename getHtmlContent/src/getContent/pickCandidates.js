/**
 * Created by daringuo on 2017/10/16.
 */
let getContent__computeDetailsForCandidate__first = (_e, _main) => {
    var _r = {};

    //  bad candidate
    //  =============
    if (_e._is__bad) { return _r; }

    if (_e.__index === 183) {
        console.log(_e);
    }

    //  paragraphs
    //  ==========

    _r['_count__lines_of_65_characters'] = (_e._length__plain_text / 65);
    _r['_count__paragraphs_of_3_lines'] =  (_r._count__lines_of_65_characters / 3);
    _r['_count__paragraphs_of_5_lines'] =  (_r._count__lines_of_65_characters / 5);

    _r['_count__paragraphs_of_50_words'] = (_e._count__plain_words / 50);
    _r['_count__paragraphs_of_80_words'] = (_e._count__plain_words / 80);

    //  total text
    //  ==========
    // 算出容器文本数量(除链接文本)占页面总文本(除链接文本)的比例
    _r['_ratio__length__plain_text_to_total_plain_text'] =  (_e._length__plain_text / _main._length__plain_text);
    // 算出总'词数'(除链接文本)占页面总词(除链接文本)的比例
    _r['_ratio__count__plain_words_to_total_plain_words'] = (_e._count__plain_words / _main._count__plain_words);

    //  links
    //  =====
    // 算出当前容器链接文本占容器总文本(除链接文本)的比例
    _r['_ratio__length__links_text_to_plain_text'] =  (_e._length__links_text / _e._length__plain_text);
    // 算出当前容器链接'词数'占容器文本总'词数'(除链接文本)的比例
    _r['_ratio__count__links_words_to_plain_words'] = (_e._count__links_words / _e._count__plain_words);

    // 当前容器链接文本占页面总文本的比例
    _r['_ratio__length__links_text_to_all_text'] =  (_e._length__links_text / _e._length__all_text);
    // 当前容器链接'词数'占页面总'词数'的比例
    _r['_ratio__count__links_words_to_all_words'] = (_e._count__links_words / _e._count__all_words);

    // 当前文本链接文本占总链接文本的比例
    _r['_ratio__length__links_text_to_total_links_text'] =  (_e._length__links_text / (_main._length__links_text + 1));
    // 当前文本链接'词数'占总链接'词数'的比例
    _r['_ratio__count__links_words_to_total_links_words'] = (_e._count__links_words / (_main._count__links_words + 1));

    // 当前容器链接数占总链接数的比例
    _r['_ratio__count__links_to_total_links'] = (_e._count__links / (_main._count__links + 1));
    // 当前容器链接数占总词数（除链接文本）的比例
    _r['_ratio__count__links_to_plain_words'] = ((_e._count__links * 2) / _e._count__plain_words);

    //  text above
    //  ==========
    var _divide__candidates = Math.max(2, Math.ceil(_e._count__above_candidates * 0.5)), // 得出当前优秀候选的权值，最小为2
        _above_text = (((_e._length__above_plain_text * 1) + (_e._length__above_plain_text / _divide__candidates)) / 2),
        _above_words = (((_e._count__above_plain_words * 1) + (_e._count__above_plain_words / _divide__candidates)) / 2);

    _r['_ratio__length__above_plain_text_to_total_plain_text'] =  (_above_text / _main._length__plain_text);
    _r['_ratio__count__above_plain_words_to_total_plain_words'] = (_above_words / _main._count__plain_words);

    //  candidates
    //  ==========
    // 当前容器子候补容器和总候补容器的比例
    _r['_ratio__count__candidates_to_total_candidates'] = (_e._count__candidates / (_main._count__candidates + 1));
    // 当前容器数量占总容器
    _r['_ratio__count__containers_to_total_containers'] = (_e._count__containers / (_main._count__containers + 1));

    //  return
    //  ======
    return _r;
};
let $$compute = require('./compute.js');

module.exports = (_candidatesToProcess) => {
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
            if (_candidates[k]._count__candidates > 0) { continue; } // 若有子候选容器，则跳过

            if (_candidates[i].__node.contains(_candidates[k].__node)) {
            } else { continue; } // 若包含，则跳过

            _count__pieces++; // 记录当前候选容器在候选容器池中有多少片断
        }

        //  candidate details
        //  =================

        _candidates[i]['__candidate_details'] = getContent__computeDetailsForCandidate__first(_candidates[i], _main); // 得出基本参数

        /*
         _count__lines_of_65_characters (去掉链接文本)65个字一行，有多少行
         _count__paragraphs_of_3_lines 三行一段
         _count__paragraphs_of_5_lines 五行一段
         _count__paragraphs_of_50_words 50个'词'一段
         _count__paragraphs_of_80_words 80个'词'一段
         _ratio__count__above_plain_words_to_total_plain_words // 除链接文本的 '词数'比例
         _ratio__count__candidates_to_total_candidates // 候选容器比例
         _ratio__count__containers_to_total_containers // 容器比例
         _ratio__count__links_to_plain_words // 链接数占'词数'比例
         _ratio__count__links_to_total_links // 链接数占总链接数比例
         _ratio__count__links_words_to_all_words // 链接'词数'占总词数比例
         _ratio__count__links_words_to_plain_words // 链接'词数'占非链接总'词数'比例
         _ratio__count__links_words_to_total_links_words // 链接'词数'占链接总'词数'比例
         _ratio__count__pieces_to_total_pieces // 当前候选片段占最大候选(index最小)的比率
         _ratio__count__plain_words_to_total_plain_words // 非链接词数占总链接词数的比率
         _ratio__length__above_plain_text_to_total_plain_text // 非链接文本占总非链接文本比例
         _ratio__length__links_text_to_all_text // 链接文本占总文本的比例
         _ratio__length__links_text_to_plain_text // 链接文本占总非链接文本的比例
         _ratio__length__links_text_to_total_links_text // 链接文本占总链接文本的比例
         _ratio__length__plain_text_to_total_plain_text // 当前候选容器非链接文本占总非链接文本的比例

         */




        //  pieces -- do this here because _main doesn't yet have a pieces count
        //  ======

        //  set pieces
        _candidates[i]['_count__pieces'] = _count__pieces;
        _candidates[i]['_array__pieces'] = _array__pieces;

        //  pieces ratio
        _candidates[i]['__candidate_details']['_ratio__count__pieces_to_total_pieces'] = (_count__pieces / (_candidates[0]._count__pieces + 1));

        _candidates[i].__points_history = $$compute(_candidates[i], _main);
        _candidates[i].__points = _candidates[i].__points_history[0];
    }

    //  sort _candidates -- the more points, the closer to position 0
    //  ================
    _candidates.sort(function (a, b)
    {
        switch (true)
        {
            case (a.__points > b.__points): return -1;
            case (a.__points < b.__points): return 1;
            default: return 0;
        }
    });

    //  return
    //  ======
    return _candidates;
};