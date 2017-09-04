(function () {
    var option = {
        container: '-body-article-section-div-td-li-dd-dt-'
    };


    window.getContent = function (wrapper) {
        var _result = {
            is_container: false // 是否为容器
        };

        var _recursive = function (_node) {
            var tag_name = (_node.nodeType === 3 ? '#text' : ((_node.nodeType === 1 && _node.tagName && _node.tagName > '') ? _node.tagName.toLowerCase() : '#invalid'));

            // 判断是否为容器
            if (option.container.indexOf('-' + tag_name + '-') > 0) {
                _result.is_container = true;
            }

        };
        _recursive(wrapper);
        return _result;
    };
}());