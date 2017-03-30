var util = {
    loadCss: function (url, fn) {
        var container = document.getElementsByTagName("head")[0];
        var addStyle = document.createElement("link");
        addStyle.id = id;
        addStyle.rel = "stylesheet";
        addStyle.type = "text/css";
        addStyle.media = "screen";
        addStyle.href = url;
        if (this.isFunction(fn)) {
            addStyle.onload = fn;
        }
        container.appendChild(addStyle);
    },
    loadScript: function (url, callback) {
        var doc = document;
        var head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
        var script = doc.createElement("script");
        script.id = id;
        script.type = "text/javascript";
        script.charset = "utf-8";
        if (script.readyState) { //IE
            script.onreadystatechange = function () {
                if (/loaded|complete/i.test(script.readyState)) {
                    script.onreadystatechange = null;
                    callback && callback.call(this);
                }
            };
        } else { //Others
            script.onload = function () {
                callback && callback.call(this);
            };
        }
        script.src = url;
        head.insertBefore(script, head.firstChild);
    },
    execStyle: function (cssText) {
        var document = window.document;
        var styleTag = document.createElement('style');
        styleTag.setAttribute('type', 'text/css');
        if (document.all) {
            styleTag.styleSheet.cssText = cssText;
        } else {
            styleTag.innerHTML = cssText;
        }
        document.getElementsByTagName("head").item(0).appendChild(styleTag);
    },
    htmlFormat: function (str, context) {
        var key;
        for (key in context) {
            str = str.replace(new RegExp('{{' + key + '}}', 'g'), context[key]);
        }
        return str;
    },
    bodyLock: (function () {
        var originScrollTop, originCssText, win = window, doc = win.document;
        var forbidFunc = function (e) {
            e.preventDefault();
            return false;
        };
        var fixedBody = {
            lock: function () {
                 win.addEventListener('touchmove', forbidFunc);
                win.addEventListener('MSPointerMove', forbidFunc);
                win.addEventListener('pointermove', forbidFunc);
                originScrollTop = win.pageYOffset;
                originCssText = doc.body.style.cssText;
                doc.body.style.cssText = 'height: 100vh;background-color: #f5f5f5;position: fixed;top: -999999px;'
            },
            unlock: function () {
                win.removeEventListener('touchmove', forbidFunc);
                win.removeEventListener('MSPointerMove', forbidFunc);
                win.removeEventListener('pointermove', forbidFunc);
                doc.body.style.cssText = originCssText;
                win.scrollTo(win.pageXOffset, originScrollTop);
            }
        };
        return fixedBody;
    }()),
    isFunction: function (obj) {
        // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
        // IE 11 (#1621), and in Safari 8 (#1929).
        if (typeof /./ != 'function' && typeof Int8Array != 'object') {
            return typeof obj == 'function' || false;
        } else {
            return toString.call(obj) === '[object Function]';
        }
    },
    isString: function (obj) {
        return toString.call(obj) === '[object String]';
    },
    isBoolean: function (obj) {
        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
    },
    isObject: function (obj) {
        var type = typeof obj;
        return type === 'function' || type === 'object' && !!obj;
    },
    dateFormat: function (date, str) {
        var o = {
            "M+": date.getMonth() + 1, //月份 
            "d+": date.getDate(), //日 
            "h+": date.getHours(), //小时 
            "m+": date.getMinutes(), //分 
            "s+": date.getSeconds(), //秒 
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
            "S": date.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(str)) str = str.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(str)) str = str.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return str;
    },
    addEvent: function (element, eType, handle, bol) {
        if (element.addEventListener) {           //如果支持addEventListener
                element.addEventListener(eType, handle, bol);
        } else if (element.attachEvent){          //如果支持attachEvent
            element.attachEvent('on' + eType, handle);
        } else {                                  //否则使用兼容的onclick绑定
            element['on'+eType] = handle;
        }
    },
    removeEvent: function (element, eType, handle, bol) {
        if (element.addEventListener) {
            element.removeEventListener(eType, handle, bol);
        } else if (element.attachEvent) {
            element.detachEvent('on' + eType, handle);
        } else {
            element['on'+eType] = null;
        }
    }
};