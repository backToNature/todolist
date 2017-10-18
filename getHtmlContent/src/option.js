let _option = {
    // 要去掉的元素
    'remove_elements': ['button', 'input', 'select', 'textarea', 'optgroup', 'command', 'datalist', 'frame', 'frameset', 'noframes', 'style', 'link', 'script', 'noscript', 'canvas', 'applet', 'map', 'marquee', 'area', 'base', 'base'],
    // 要清洗的元素
    'wash_elements': ['a', 'b', 'i', 'em', 'strong'],
    // 容器
    'container': ['body', 'article', 'section', 'div', 'td', 'li', 'dd', 'dt'],
    // 自结束标签
    'self_colose': ['br', 'hr', 'img', 'col', 'source', 'embed', 'param'],
    'keep_attr_ele': {
        'a':        ['href', 'title', 'name'],
        'img':      ['src', 'width', 'height', 'alt', 'title'],

        'video':    ['src', 'width', 'height', 'poster', 'audio', 'preload', 'autoplay', 'loop', 'controls'],
        'audio':    ['src', 'preload', 'autoplay', 'loop', 'controls'],
        'source':   ['src', 'type'],

        'object':   ['data', 'type', 'width', 'height', 'classid', 'codebase', 'codetype'],
        'param':    ['name', 'value'],
        'embed':    ['src', 'type', 'width', 'height', 'flashvars', 'allowscriptaccess', 'allowfullscreen', 'bgcolor'],

        'iframe':   ['src', 'width', 'height', 'frameborder', 'scrolling'],

        'td':       ['colspan', 'rowspan'],
        'th':       ['colspan', 'rowspan']
    }
};

module.exports = _option;