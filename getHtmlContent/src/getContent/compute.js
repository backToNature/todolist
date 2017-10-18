/**
 * Created by daringuo on 2017/10/16.
 */

let getContent__computePointsForCandidate__do = (_ratio_remaining, _power, _ratio, _points_history) => {
    var _points_remaining = (_points_history[0] * _ratio_remaining),
        _points_to_compute = (_points_history[0] - _points_remaining),
        _points_return;

    if (_ratio < 0) { _points_return = _points_remaining; }
    else            { _points_return = 0 + _points_remaining + (_points_to_compute * Math.pow(_ratio, _power)); }

    //  add
    _points_history.unshift(_points_return);
};
module.exports = (_e, _main) => {
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