// 执行脚本和加载脚本
    function evalScript(arr) {
        var globalEval = function (data) {
            data = $.trim(data);
            if (data) {
                var head = document.getElementsByTagName("head")[0] || document.documentElement,
                script = document.createElement("script");
                script.type = "text/javascript";
                script.appendChild(document.createTextNode(data));
                head.insertBefore(script, head.firstChild);
                head.removeChild(script);
            }
        }, n = 0, elem;
        var loadJs = function (src, fun) {
            var doc = window.document;
            var head = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
            var script = doc.createElement('script');
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('charset', 'UTF-8');
            script.setAttribute('src', src);
            if (typeof fun === 'function') {
                if (window.attachEvent) {
                    script.onreadystatechange = function () {
                        var r = script.readyState;
                        if (r === 'loaded' || r === 'complete') {
                            script.onreadystatechange = null;
                            fun();
                        }
                    };
                } else {
                    script.onload = fun;
                }
            }
            head.appendChild(script);
        };

        var exec = function (n) {
            if (n >= arr.length) {
                return ;
            }
            elem = arr[n];
            if (elem.src) {
                loadJs(elem.src, function () {
                    exec(++n);
                });
            } else {
                globalEval( elem.text || elem.textContent || elem.innerHTML || "" );
                exec(++n);
            }
            if (elem.parentNode) {
                elem.parentNode.removeChild( elem );
            }
        };
        exec(n);
    };