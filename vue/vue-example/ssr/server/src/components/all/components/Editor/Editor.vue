<template>
  <div class="Editor">
      <h1>我是编辑器</h1>
      <script id="editor" type="text/plain" style="width:1024px;height:500px;"></script>
  </div>
</template>
<script>
// var ue = UE.getEditor('editor');
const loadScript = (url, callback) => {
    var doc = document;
    var head = doc.head || doc.getElementsByTagName("head")[0] || doc.documentElement;
    var script = doc.createElement("script");
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
};
const domain = 'http://127.0.0.1:8081/components/Editor/lib';
export default {
  beforeMount() {
      loadScript(`${domain}/ueditor.config.js`, () => {
          loadScript(`${domain}/ueditor.all.js`, () => {
              loadScript(`${domain}/lang/zh-cn/zh-cn.js`, () => {
                  var ue = UE.getEditor('editor');
              });
          })
      });
  }
}
</script>
