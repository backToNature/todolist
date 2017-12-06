/**
 * Created by daringuo on 2017/10/25.
 */

let _option = {
    'remove_elements': ['button', 'input', 'select', 'textarea', 'optgroup', 'command', 'datalist', 'frame', 'frameset', 'noframes', 'style', 'link', 'script', 'noscript', 'canvas', 'applet', 'map', 'marquee', 'area', 'base', 'base', 'meta', '#invalid'],
    'keep_elements_attr': {
        'a': ['href', 'title', 'name'],
        'video': ['src', 'width', 'height', 'poster', 'audio', 'preload', 'autoplay', 'loop', 'controls'],
        'audio': ['src', 'preload', 'autoplay', 'loop', 'controls'],
        'source': ['src', 'type'],
        'object': ['data', 'type', 'width', 'height', 'classid', 'codebase', 'codetype'],
        'param': ['name', 'value'],
        'embed':  ['src', 'type', 'width', 'height', 'flashvars', 'allowscriptaccess', 'allowfullscreen', 'bgcolor'],
        'iframe': ['src', 'width', 'height', 'frameborder', 'scrolling'],
        'td': ['colspan', 'rowspan'],
        'th': ['colspan', 'rowspan']
    },
    'add_elements_attr': {
        a: {'target': '_blank'}
    },
    'container': ['body', 'article', 'section', 'div', 'td', 'li', 'dd', 'dt']
};

export default _option;