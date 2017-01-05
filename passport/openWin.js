var childWindow;

var openWindow = function (url, width, height, fn) {
    if (childWindow !== undefined) {
        return;
    }

    var h = typeof window.screenX != "undefined" ? window.screenX : window.screenLeft,
        e = typeof window.screenY != "undefined" ? window.screenY : window.screenTop,
        m = typeof window.outerWidth != "undefined" ? window.outerWidth : document.documentElement.clientWidth,
        j = typeof window.outerHeight != "undefined" ? window.outerHeight : (document.documentElement.clientHeight - 22),
        left = parseInt(h + ((m - width) / 2), 10),
        top = parseInt(e + ((j - height) / 2.5), 10);

    childWindow = window.open(url, '', 'alwaysRaised=yes, left=' + left + ', top=' + top + ', width=' + width + ', height=' + height + ', scrollbars=no, z-look=yes');

    var timer;
    var response = function () {
        window.clearInterval(timer);
        childWindow = undefined;
        fn && fn();
    };
    timer = window.setInterval(function() {
        try {
            if (childWindow.closed === false) {
                return;
            } else {
                response();
            }
        } catch (ex) {
            response();
        }
    }, 500);
};

exports.openWindow = openWindow;