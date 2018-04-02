
$(function () {
    // 初始化编辑器
    var E = window.wangEditor;
    var editor = new E('#div3');
    editor.customConfig.debug = true;
    // 图片上传逻辑
    editor.customConfig.showLinkImg = false;
    editor.customConfig.withCredentials = true;
    
    // 调用腾讯云api
    var bucket = 'ght';
    var appid = '1251580007';
    var region = 'sh';
    var myFolder = '/';//需要操作的目录
    
    var cos = new CosCloud({
        appid: appid, // APPID 必填参数
        bucket: bucket, // bucketName 必填参数
        region: region, // 地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
        getAppSign: function (callback) {//获取签名 必填参数
            // 方法一（推荐线上使用）：搭建鉴权服务器，构造请求参数获取签名，推荐实际线上业务使用，优点是安全性好，不会暴露自己的私钥
            $.get('/api/auth', function (res) {
                callback(res.sign);
            });
        }
    });

    var successCallBack = function (result) {
        console.log(result);
    };

    var errorCallBack = function (result) {
        result = result || {};
        console.log('request error:', result && result.message);
    };

    var progressCallBack = function (curr, sha1) {
        var sha1CheckProgress = ((sha1 * 100).toFixed(2) || 100) + '%';
        var uploadProgress = ((curr || 0) * 100).toFixed(2) + '%';
        var msg = 'upload progress:' + uploadProgress + '; sha1 check:' + sha1CheckProgress + '.';
        console.log(msg);
    };

    var lastTaskId;
    var taskReady = function (taskId) {
        lastTaskId = taskId;
    };

    $('#file').on('change', function (e) {
        var file = e.target.files[0];
        cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket, myFolder + file.name, file, 0, taskReady);//insertOnly==0 表示允许覆盖文件 1表示不允许
        $('#form')[0].reset();
    });

    // editor.customConfig.customUploadImg = function (files, insert) {
    //     var file = files[0];

    //     var fileName = new Date().valueOf() + file.size + '.' + file.type.split('/')[1]
    //     cos.uploadFile(function (res) {
    //         if (res.code === 0) {
    //             // insert(`//ght-1251580007.picsh.myqcloud.com/${file.name}`); // 万象优图域名
    //             insert(`//ght-1251580007.image.myqcloud.com/${fileName}`); // 万象优图+cdn
    //             // insert(res.data.access_url);
    //         }
    //     }, errorCallBack, progressCallBack, bucket, myFolder + fileName, file, 0, taskReady);
    // }
    
    // editor.create();
});