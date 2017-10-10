/**
 * Created by daringuo on 2017/10/10.
 */
module.exports = {
    isHidden(_node) {
        if (_node.style.display === 'none') {
            return true;
        } else {
            return false;
        }
    },
    getWordCount(_the_text) {
        let _text = _the_text;

        //  do stuff
        //  ========
        _text = _text.replace(/[\s\n\r]+/gi, ' ');

        _text = _text.replace(/([.,?!:;()\[\]'""-])/gi, ' $1 ');

        _text = _text.replace(/([\u3000])/gi,               '[=words(1)]');
        _text = _text.replace(/([\u3001])/gi,               '[=words(2)]');
        _text = _text.replace(/([\u3002])/gi,               '[=words(4)]');
        _text = _text.replace(/([\u301C])/gi,               '[=words(2)]');
        _text = _text.replace(/([\u2026|\u2025])/gi,        '[=words(2)]');
        _text = _text.replace(/([\u30FB\uFF65])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u300C\u300D])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u300E\u300F])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u3014\u3015])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u3008\u3009])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u300A\u300B])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u3010\u3011])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u3016\u3017])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u3018\u3019])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u301A\u301B])/gi,         '[=words(1)]');
        _text = _text.replace(/([\u301D\u301E\u301F])/gi,   '[=words(1)]');
        _text = _text.replace(/([\u30A0])/gi,               '[=words(1)]');

        //  count
        //  =====
        let _count = 0,
            _words_match = _text.match(/([^\s\d]{3,})/gi);

        //  add match
        _count += ((_words_match != null) ? _words_match.length : 0);

        //  add manual count
        _text.replace(/\[=words\((\d)\)\]/, function (_match, _plus) { _count += (5 * parseInt(_plus, 10)); });

        //  return
        //  ======
        return _count;
    }
};