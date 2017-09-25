(function () {
    var option = {
        container: '-body-article-section-div-td-li-dd-dt-',
        forbiddenElement: '-button-input-select-textarea-optgroup-command-datalist-frame-frameset-noframes-style-link-script-noscript-canvas-applet-map-marquee-area-base-'
    };


    var _isNormalContainer = function (_res) {
        var $node = $(_res.node);
        if ($node.width() === 0 || $node.height()  === 0) {
            return false;
        }
        if (!_res.links.length && !_res.imgs.length && !_res.texts.length) {
            return false;
        }
        return true;
    };

    window.getContent = function (wrapper) {
        // var containers = {
        //     node: '',
        //     textNode:
        //     imgNode:
        //     linkNode:,
        //     containers: []
        // };

        var containers = [];


        // 获取所有的容器元素
        $('body,article,section,div,td,li,dd,dt').each(function () {
            

        });



        // var _recursive = function (_node) {
        //     var tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid'));



        // };



        // var _recursive = function (_node) {
        //     var _cur_result = {
        //         is_container: false, // 是否为容器
        //         is_text: false, // 是否为文本node
        //         is_link: false, // 是否为超链接
        //         is_img: false,
        //         img_link: '',
        //         texts: [],
        //         containers: [],
        //         imgs: [],
        //         links: [],
        //         node: _node
        //         // text_count: 0,
        //         // link_count: 0,
        //         // img_count: 0,
        //         // container_count: 0
        //     };


        //     var tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid'));
        //     // var $_node = $(_node);
        //     // 判断是否为容器
        //     if (option.container.indexOf('-' + tag_name + '-') > 0) {
        //         _cur_result.is_container = true;
        //     }

        //     if (tag_name === '#invalid') {
        //         return false;
        //     }

        //     if (option.forbiddenElement.indexOf('-' + tag_name +'-') > 0) {
        //         return false;
        //     }

        //     // 过滤掉隐藏的元素
        //     if (_node.style && _node.style.display === 'none') {
        //         return false;
        //     }

        //     if (tag_name === '#text') {
        //         // 过滤html结点之间的textNode
        //         if (!_node.nodeValue.replace(/[\s\n\r]+/gi, '')) {
        //         } else {
        //             _cur_result.is_text = true;
        //             _cur_result.texts.push(_node.nodeValue);
        //         }
        //     }

        //     if (tag_name == 'a') {
        //         var _link = _node.href;
        //         if (_link < '') {
        //         }
        //         _cur_result.is_link = true;
        //         _cur_result.links.push(_node);
        //     }

        //     if (tag_name == 'img') {
        //         if (!_node.src) {
        //         }
        //         _cur_result.is_img = true;
        //         _cur_result.img_link = _node.src;
        //          _cur_result.imgs.push(_node);
        //     }


        //     for (var i = 0; i < _node.childNodes.length; i++) {
        //         var _child = _node.childNodes[i],
        //         child_result = _recursive(_child);
        //         if (!child_result) {
        //             continue;
        //         }

        //     }
        //     if (_cur_result.is_container) {
        //         _result.containers.push(_cur_result);
        //     }

        //     return _cur_result;
        // };

        // _recursive(wrapper);
        return containers;
    };
}());