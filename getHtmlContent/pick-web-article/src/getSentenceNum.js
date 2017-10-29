/**
 * Created by daringuo on 2017/10/16.
 */

// 获取有多少个词
let getSentenceNum = (_the_text) => {
    let _text = _the_text;

    _text = _text.replace(/[\s\n\r]+/gi, ' '); // 将所有的换行空白符换成单个空格

    _text = _text.replace(/([.,?!:;()\[\]'""-])/gi, ' $1 '); // 在每个标点符号前后加一个空格

    let _count = 0,
        _words_match = _text.match(/([^\s\d]{3,})/gi); // 不为空白符或者数字连续三次以上（将字符串以数字和空白符分割）例如'aaa bbb'或者'aaa1bbb'则结果为['aaa', 'bbb']

    _count += ((_words_match != null) ? _words_match.length : 0);

    return _count;
};
export default getSentenceNum;