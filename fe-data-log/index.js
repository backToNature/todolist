(function() {
  var _util = {
    addEvent: function(element, eType, handle, bol) {
      if (element.addEventListener) { //如果支持addEventListener
        element.addEventListener(eType, handle, bol);
      } else if (element.attachEvent) { //如果支持attachEvent
        element.attachEvent('on' + eType, handle);
      } else { //否则使用兼容的onclick绑定
        element['on' + eType] = handle;
      }
    },
    getQueryString: function (params) {
      var query = '?';
      for (let key in params) {
          query += key + '=' + window.encodeURIComponent(params[key]) + '&';
      }
      query = queryl.substring(0, query.length - 1);
      return query;
    }
  };
  window.feLogger = {
    ajax: function (obj) {
      if (window.jQuery) {
        $.ajax(obj);
      } else if (window.fetch) {
        var url = obj.url;
        var _option = {
          method: obj.type || 'GET'
        };
        if (_option.method === 'GET') {
          if (obj.data) {
            url += _util.getQueryString(obj.data);
          }
        } else {
          if (obj.data) {
            _option.body = JSON.stringify(obj.data);
          }
        }

        if (obj.contentType) {
          _option.headers = {
            'Content-Type': obj.contentType
          };
        }

        if (obj.xhrFields && obj.xhrFields.withCredentials === true) {
          _option.credentials = 'include';
        }

        if (obj.crossDomain === true) {
          _option.mode = 'cors';
        }

        fetch(url, _option).then(function (res) {
          if (res.status !== 200 || !res.ok) {
            // 上报接口错误
            return;
          }
          return rsp.json()
        }).then(function (res) {
          // 判断接口状态码，上报接口错误
          if (obj.success) {
            obj.success(res);
          }
          if (obj.complete) {
            obj.complete(res);
          }
        }).catch(function (e) {
          // 上报接口错误

        });
      } else {
        // 低版本为啥还不用jquery！！！！！
      }
    }
  };
  
  var isReady = false;
  var domReady = function(fn) {
    if (window.jQuery) {
      $(fn);
    } else {
      if (document.readyState === 'complete') {
        fn();
        isReady = true;
      } else {
        _util.addEvent(document, 'DOMContentLoaded',
        function() {
          if (!isReady) {
            isReady = true;
            fn();
          }
        },
        false);
        _util.addEvent(window, 'load',
        function() {
          if (!isReady) {
            isReady = true;
            fn();
          }
        },
        false);
      }
    }
  };

  domReady(function() {
    try {
      if (performance) {
        var timing = performance.timing;
        feLogger.performance = {
          dns: timing.domainLookupEnd - timing.domainLookupStart,
          // dns查询时间
          whiteScreen: timing.responseStart - timing.navigationStart,
          // 白屏时间
          domready: timing.domContentLoadedEventEnd - timing.navigationStart,
          // domready
          onload: timing.loadEventEnd - timing.navigationStart
        };
      } else {

      }
      feLogger.client = {
        screen: {
          width: window.screen.width,
          height: window.screen.height
        },
        ua: window.navigator.userAgent
      };
      var data = JSON.stringify({
        performance: feLogger.performance,
        client: feLogger.client
      });
      console.log(data);
    } catch(e) {
    }
  })
}());