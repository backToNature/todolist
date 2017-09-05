(function () {
    var option = {
        container: '-body-article-section-div-td-li-dd-dt-',
        forbiddenElement: '-button-input-select-textarea-optgroup-command-datalist-frame-frameset-noframes-style-link-script-noscript-canvas-applet-map-marquee-area-base-'
    };

    window.getContent = function (wrapper) {
        var _result = {
            links: [],
            imgs: [],
            texts: [],
            containers: []
        };

        var _recursive = function (_node) {
            var _cur_result = {
                is_container: false, // 是否为容器
                is_text: false, // 是否为文本node
                is_link: false, // 是否为超链接
                is_img: false,
                text_content: '',
                link_text: '',
                img_link: '',
                texts: [],
                containers: [],
                node: _node
            };


            var tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid'));
            // var $_node = $(_node);
            // 判断是否为容器
            if (option.container.indexOf('-' + tag_name + '-') > 0) {
                _cur_result.is_container = true;
            }

            if (tag_name === '#invalid') {
                return;
            }

            if (option.forbiddenElement.indexOf('-' + tag_name +'-') > 0) {
                return;
            }

            // 过滤掉隐藏的元素
            if (_node.style && _node.style.display === 'none') {
                return;
            }

            if (tag_name === '#text') {
                if (!_node.nodeValue) {
                    return;
                }
                _cur_result.text_content = _node.nodeValue;

            }

            if (tag_name == 'a') {
                var _link = _node.href;
                if (_link < '') {
                    return;
                }
                _cur_result.is_link = true;
                _cur_result.link_text = _link;
            }

            if (tag_name == 'img') {
                if (!_node.src) {
                    return;
                }
                _cur_result.is_img = true;
                _cur_result.img_link = _node.src;
            }


            for (var i = 0; i < _node.childNodes.length; i++) {
                var _child = _node.childNodes[i],
                child_result = _recursive(_child);
                if (!child_result) {
                    continue;
                }

                child_result.is_container ? _result.containers.push(child_result.node) : null;
                child_result.is_text ? _result.texts.push(child_result.node) : null;
                child_result.is_link ? _result.links.push(child_result.node) : null;
                child_result.is_img ? _result.imgs.push(child_result.node) : null;
            }
            return _cur_result;

        };
        _recursive(wrapper);
        return _result;
    };
}());