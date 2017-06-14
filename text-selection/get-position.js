var getPostion = function (textSelection, screenHeight, pageX, pageY, outerWidth, outerHeight, gap) {
    // 获得垂直方向 取值 'top' or 'bottom'

    // var selTopLeftPoint = textSelection.getRangeAt(0)

    // var getVerticalDirection = function (textSelection, screenHeight) {
    //     // 比较屏幕上方空白区域多还是下方空白区域多
    //     var originY = (textSelection.bottom + textSelection.top) / 2;// 取选中区域中点
    //     if (originY >= screenHeight / 2) {
    //         return 'top';
    //     } else {
    //         return 'bottom';
    //     }
    // };


    // var direction = getVerticalDirection(textSelection, screenHeight),
    //     originPoint = {};

    // if (direction = 'top') {
    //     orginPoint.y = textSelection.top;
    //     originPoint.x = textSelection.left;
    // } else {
    //     orginPoint.y = textSelection.bottom;
    //     originPoint.x = textSelection.left;
    // }


};


var getTextSelection = function () {
    var sel = window.getSelection();
    if (sel && sel.focusNode && sel.focusNode.nodeType == 3 && sel.getRangeAt(0).commonAncestorContainer && sel.getRangeAt(0).commonAncestorContainer.nodeType == 3) {
        return sel;
    } else {
        return null;
    }
};

var getTextPositionRange = function (textSelection) {
    var clientRects = textSelection.getRangeAt(0).getClientRects(),
        len = clientRects.length,
        topLeftPoint = {top: clientRects[0].top, left: clientRects[0].left},
        rightBottomPoint = {top: clientRects[len - 1].top, left: clientRects[len - 1].left};

    return {
        startPoint: topLeftPoint,
        endPoint: rightBottomPoint
    };
};

var blackList = {
    richText: function (textSelection) {
        var $anchor = textSelection.anchorNode, isRichFlag = false;

        var isRich = function ($node) {
            if (isRichFlag === false && $node !== document.body) {
                var attrContenteditable = $node.getAttribute('contenteditable');
                if (attrContenteditable === '' || attrContenteditable === 'true') {
                    isRichFlag = true;
                } else {
                    isRich($node.parentElement);
                }
            }
        };

        isRich($anchor.parentElement);
        return isRichFlag;
    },
    link: function (textSelection) {
        var $anchor = textSelection.anchorNode;
        if ($anchor.parentElement && $anchor.parentElement.nodeName === 'A') {
            return true;
        } else {
            return false;
        }
    }
};

document.addEventListener('mouseup', function (e) {
    var textSelection = getTextSelection();

    if (!textSelection) {
        return;
    }

    var boundingClientRect = textSelection.getRangeAt(0).getBoundingClientRect();

    if (boundingClientRect.top === boundingClientRect.bottom || boundingClientRect.left === boundingClientRect.right) {
        return;
    }

});
