(function () {
    var bucket = 'ght';
    var appid = '1251580007';
    var region = 'sh';
    var myFolder = '/';//需要操作的目录
    var cos = new CosCloud({
        appid: appid,
        bucket: bucket,
        region: 'sh', // 地域信息 必填参数 华南地区填gz 华东填sh 华北填tj
        getAppSign: function (callback) {
            $.get('/api/auth', function (res) {
                callback(res.sign);
            });
        }
    });
    
    var lastTaskId;
    var taskReady = function (taskId) {
        lastTaskId = taskId;
    };
    
    window.cosUpload = function (cfg) {
        cfg.allowType = ['']; // 允许的文件类型
        // cfg.allowSize = ''; // 允许的文件大小
        
        
        
        cos.uploadFile(successCallBack, errorCallBack, progressCallBack, bucket, myFolder + file.name, file, 0, taskReady);
    };
}());
