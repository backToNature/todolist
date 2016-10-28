// 获取双指的距离
var getDistance = function (x1, y1, x2, y2) {
    return Math.sqrt(Math.pow((y2 - y1), 2) + Math.pow((x2 - x1), 2));
};
// 获取当前缩放比例
var getScale = function ($mod) {
    var value = $mod.css('transform'), ast = value.split(','), reg = /matrix|\s|\(|\)/g;
    if (ast.length > 1) {
        return [parseFloat(ast[0].replace(reg, '')), parseFloat(ast[3].replace(reg, ''))];
    } else {
        return [1, 1];
    }
};
// 获取当前平移位置
var getTranslate = function ($mod) {
    var value = $mod.css('transform'), ast = value.split(','), reg = /matrix|\s|\(|\)/g;
    if (ast.length > 1) {
        return [parseFloat(ast[4].replace(reg, '')), parseFloat(ast[5].replace(reg, ''))];
    } else {
        return [0, 0];
    }
};

var setTranslate = function ($mod, x, y) {
    var reg = /matrix|\s|\(|\)/g;
    var value = $mod.css('transform').replace(reg, ''), ast = value.split(',');
    ast[4] = x.toString();
    ast[5] = y.toString();
    $mod.css('transform', 'matrix(' + ast.join(',') + ') translateZ(0px)');
};

var setScale = function ($mod, x, y) {
    var reg = /matrix|\s|\(|\)/g;
    var value = $mod.css('transform').replace(reg, ''), ast = value.split(',');
    ast[0] = x.toString();
    ast[3] = y.toString();
    $mod.css('transform', 'matrix(' + ast.join(',') + ') translateZ(0px)');
};


var PinchZoom = function ($mod) {
    var eventData = {};

    $mod.on('touchstart', function (e) {
        var event = e.originalEvent || e, touches = event.touches;

        if (touches.length === 1) {
            eventData.originPoint = [touches[0].pageX, touches[0].pageY];
            eventData.originTranslate = getTranslate($mod);
        }

        if (touches.length === 2) {
            eventData.originA = [touches[0].pageX, touches[0].pageY];
            eventData.originB = [touches[1].pageX, touches[1].pageY];
            eventData.originDs = getDistance(eventData.originA[0], eventData.originA[1], eventData.originB[0], eventData.originB[1]);
            eventData.originScale = getScale($mod);
        } 
    });

    $mod.on('touchmove', function (e) {
        var event = e.originalEvent || e, ds, diff, x, y, scale,
            touches = event.touches,
            tx = eventData.originTranslate[0] - eventData.originPoint[0] + touches[0].pageX,
            ty = eventData.originTranslate[1] - eventData.originPoint[1] + touches[0].pageY;

        if (touches.length === 1) {
            setTranslate($mod, tx, ty);
        }

        if (touches.length === 2) {
            ds = getDistance(touches[0].pageX, touches[0].pageY, touches[1].pageX, touches[1].pageY);
            ds = ds - eventData.originDs;
            diff = ds / 200;
            scale = getScale($mod);
            x = eventData.originScale[0] + diff;
            y = eventData.originScale[1] + diff;
            if (x <= 1 || y <= 1) {
                x = 1;
                y = 1;
            }
            setScale($mod, x, y);

        }
    });

    $mod.on('touchend', function (e) {
        var event = e.originalEvent || e,
            touches = event.touches;

        if (touches.length == 1) {
            eventData.originPoint = [touches[0].pageX, touches[0].pageY];
            eventData.originTranslate = getTranslate($mod);
        }
        console.log(touches.length);
    });
};