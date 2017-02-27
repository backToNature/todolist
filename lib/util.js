var util = {
    loadCss: function (url, id) {
        var container = document.getElementsByTagName("head")[0];
        var addStyle = document.createElement("link");
        addStyle.id = id;
        addStyle.rel = "stylesheet";
        addStyle.type = "text/css";
        addStyle.media = "screen";
        addStyle.href = url;
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
    }
};