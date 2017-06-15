var win = window, doc = win.document;

var util = {
    addEvent: function (element, eType, handle, bol) {
        if (element.addEventListener) {           //如果支持addEventListener
                element.addEventListener(eType, handle, bol);
        } else if (element.attachEvent){          //如果支持attachEvent
            element.attachEvent('on' + eType, handle);
        } else {                                  //否则使用兼容的onclick绑定
            element['on'+ eType] = handle;
        }
    },
    sort: function (array, key) {
        var i, j, flag, temp;
        for (i = 0; i < array.length - 1 ;i++) {
            flag = false;
            for (j = array.length - 1 ;j > i ;j--) {
                if (array[j][key] < array[j - 1][key]){
                    temp = array[j];
                    array[j] = array[j - 1];
                    array[j - 1] = temp;
                    flag = true;
                }
            }
            if (flag == false) {
                return;
            }
        }
    }
};
var selection = {
    getAllRectPoint: function () {
        var sel = win.getSelection(),
            pointArr = [], i, rects = sel.getRangeAt(0).getClientRects(), newRect = [],
            fontSize = win.parseFloat(win.getComputedStyle(sel.anchorNode.parentElement)['font-size']);

        var pickTop = function (item) {
            // 取矩形上面的点
            // 左上点
            pointArr.push({
                position: 'lt',
                point: {
                    x: item.left,
                    y: item.top
                }
            });
            // 右上点
            pointArr.push({
                position: 'rt',
                point: {
                    x: item.right,
                    y: item.top
                }
            });
        };

        var pickBottom = function (item) {
            // 取矩形下面的点
            // 左下点
            pointArr.push({
                position: 'lb',
                point: {
                    x: item.left,
                    y: item.bottom
                }
            });
            // 右下点
            pointArr.push({
                position: 'rb',
                point: {
                    x: item.right,
                    y: item.bottom
                }
            });
        };

        // 过滤掉换行空白符的计算
        for (i = 0; i < rects.length; i++) {
            if (rects[i].width >= fontSize) {
                newRect.push(rects[i]);
            }
        }

        if (newRect.length === 1) {
            // 单行，则取第一行矩形的四个点
            pickTop(newRect[0]);
            pickBottom(newRect[0]);
        } else {
            // 多行，则取第一行矩形左上和右上点,最后一行矩形左下和右下点
            pickTop(newRect[0]);
            pickBottom(newRect[newRect.length - 1]);
        }

        return pointArr;
    },
    getSortedPoint: function (screenX, screenY) {
        var pointArr = this.getAllRectPoint();
        pointArr.forEach(function (item) {
            var distance = Math.pow(item.point.x - screenX, 2) + Math.pow(item.point.y - screenY, 2);
            distance = Math.sqrt(distance);
            item.distance = distance;
        });
        util.sort(pointArr, 'distance');
        return pointArr;
    },
    getOriginPoint: function (screenX, screenY, outerWidth, outerHeight) {
        var sortedPointArr = this.getSortedPoint(screenX, screenY),
            scrollLeft = doc.documentElement.scrollLeft || doc.body.scrollLeft,
            scrollTop = doc.documentElement.scrollTop || doc.body.scrollTop,
            screenHeight = doc.documentElement.clientHeight,
            screenWidth = doc.documentElement.clientWidth,
            originPoint;

        sortedPointArr.forEach(function (item) {
            if (originPoint) {
                return;
            }
            var point = item.point;
            // 判断
            if (item.position.indexOf('t') >= 0) {
                // 上面的点
                if (point.y - outerHeight > 0) {
                    originPoint = {
                        x: point.x + scrollLeft,
                        y: point.y + scrollTop - outerHeight
                    };
                }
            }

            if (item.position.indexOf('b') >= 0) {
                // 下面的点
                if (point.y + outerHeight < screenHeight) {
                    originPoint = {
                        x: point.x + scrollLeft,
                        y: point.y + scrollTop
                    };
                }
            }

        });

        // 边界纠错
        if (originPoint.x < 0) {
            originPoint.x = 0;
        }

        if (originPoint.x + outerWidth > screenWidth + scrollLeft) {
            originPoint.x = screenWidth + scrollLeft - outerWidth;
        }


        // 最终得到最合适的点
        return originPoint;
    }
};

util.addEvent(doc, 'mouseup', function (e) {
    var textSelection = win.getSelection();

    if (!textSelection) {
        return;
    }

    var boundingClientRect = textSelection.getRangeAt(0).getBoundingClientRect();

    if (boundingClientRect.top === boundingClientRect.bottom || boundingClientRect.left === boundingClientRect.right) {
        return;
    }


    var point = selection.getOriginPoint(e.x, e.y, 105, 40);
    // console.log(selection.getSelectionRange());

    var el = doc.getElementById('qb-sougou-search');
    if (el) {
        el.remove();
    }
    el = doc.createElement('div');
    el.id = 'qb-sougou-search';
    // el.innerHTML = '<p>搜索</p><p class="last-btn">复制</p><iframe src=""></iframe>';
    el.style.top = point.y + 'px';
    el.style.left = point.x + 'px';
    doc.getElementsByTagName('body')[0].appendChild(el);

}, false)