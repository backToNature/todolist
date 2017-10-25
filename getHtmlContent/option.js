let _option = {
    'remove_elements': ['button', 'input', 'select', 'textarea', 'optgroup', 'command', 'datalist', 'frame', 'frameset', 'noframes', 'style', 'link', 'script', 'noscript', 'canvas', 'applet', 'map', 'marquee', 'area', 'base', 'base', '#invalid'],
    'wash_elements': ['a', 'b', 'i', 'em', 'strong'],
    'container': ['body', 'article', 'section', 'div', 'td', 'li', 'dd', 'dt'],
    'self_colose': ['br', 'hr', 'img', 'col', 'source', 'embed', 'param'],
    '_elements_visible':                    '|article|section|--|ul|ol|li|dd|--|table|tr|td|--|div|--|p|--|h1|h2|h3|h4|h5|h6|--|span|',
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

