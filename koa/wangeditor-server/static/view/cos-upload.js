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
    var fileName = 'fsdff';

    var getFileExtName = function (fileName) {
        if (fileName.lastIndexOf('.') >= 0) {
            return fileName.substring(fileName.lastIndexOf('.'), fileName.length);
        }
        return '';
    };
    console.log(getFileExtName(fileName));
    
    window.cosUpload = function (cfg, file) {
        // cfg.allowType = '.jpg'; // 允许的文件类型
        // cfg.allowSize = ''; // 允许的文件大小
        
        if (cfg.allowType && cfg.allowType.indexOf(getFileExtName(file.name)) < 0) {
            console.log('上传文件类型错误');
            return;
        }

        var fnSuccess = function (res) {
            if (cfg.fnSuccess) {
                cfg.fnSuccess(res);
            }
        };

        var fnError = function (res) {
            
        };

        var fnProgress = function (curr, sha1) {

        };



        
        cos.uploadFile(fnSuccess, fnError, fnProgress, bucket, myFolder + file.name, file, 0, taskReady);
    };
}());
