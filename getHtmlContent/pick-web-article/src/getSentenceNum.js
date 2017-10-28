/**
 * Created by daringuo on 2017/10/16.
 */

// 获取有多少个词
let getSentenceNum = (_the_text) => {
    let _text = _the_text;


    _text = _text.replace(/[\s\n\r]+/gi, ' '); // 将所有的换行空白符换成单个空格

    _text = _text.replace(/([.,?!:;()\[\]'""-])/gi, ' $1 '); // 在每个标点符号前后加一个空格

    _text = _text.replace(/([\u3000])/gi,               '[=words(1)]'); // 缩进符
    _text = _text.replace(/([\u3001])/gi,               '[=words(2)]'); // '、'顿号
    _text = _text.replace(/([\u3002])/gi,               '[=words(4)]'); // '。'替换句号
    _text = _text.replace(/([\u301C])/gi,               '[=words(2)]'); // '〜'~
    _text = _text.replace(/([\u2026|\u2025])/gi,        '[=words(2)]'); // '…' | ‥
    _text = _text.replace(/([\u30FB\uFF65])/gi,         '[=words(1)]'); // ・  ･
    _text = _text.replace(/([\u300C\u300D])/gi,         '[=words(1)]'); //「  」
    _text = _text.replace(/([\u300E\u300F])/gi,         '[=words(1)]'); //『  』
    _text = _text.replace(/([\u3014\u3015])/gi,         '[=words(1)]'); // 〔〕
    _text = _text.replace(/([\u3008\u3009])/gi,         '[=words(1)]'); // 〈〉
    _text = _text.replace(/([\u300A\u300B])/gi,         '[=words(1)]'); // 《》
    _text = _text.replace(/([\u3010\u3011])/gi,         '[=words(1)]'); // 【】
    _text = _text.replace(/([\u3016\u3017])/gi,         '[=words(1)]'); // 〖〗
    _text = _text.replace(/([\u3018\u3019])/gi,         '[=words(1)]'); // 〘〙
    _text = _text.replace(/([\u301A\u301B])/gi,         '[=words(1)]'); // 〚〛
    _text = _text.replace(/([\u301D\u301E\u301F])/gi,   '[=words(1)]'); // 〝〞〟
    _text = _text.replace(/([\u30A0])/gi,               '[=words(1)]'); // ゠

    //  count
    //  =====
    let _count = 0,
        _words_match = _text.match(/([^\s\d]{3,})/gi); // 不为空白符或者数字连续三次以上（将字符串以数字和空白符分割）例如'aaa bbb'或者'aaa1bbb'则结果为['aaa', 'bbb']

    //  add match
    _count += ((_words_match != null) ? _words_match.length : 0);

    //  add manual count
    _text.replace(/\[=words\((\d)\)\]/, function (_match, _plus) { _count += (5 * parseInt(_plus, 10)); });

    return _count;
};
export default getSentenceNum;