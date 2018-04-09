import $ from 'jquery';


// 调用腾讯云api
const bucket = 'ght';
const appid = '1251580007';
const region = 'sh';
const myFolder = '/';//需要操作的目录


const cos = new CosCloud({
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

let lastTaskId;
const taskReady = function (taskId) {
    lastTaskId = taskId;
};

export default {
  uploadFile(file, fn, fnProgress) {
    const _fnSuccess = (res) => {
      fn({
        status: 'success',
        data: res
      });
    };
    const _fnError = (res) => {
      fn({
        status: 'error',
        data: res
      });
    };
    const _fnProgress = (curr, sha1) => {
      var sha1CheckProgress = ((sha1 * 100).toFixed(2) || 100) + '%';
      var uploadProgress = ((curr || 0) * 100).toFixed(2) + '%';
      var msg = 'upload progress:' + uploadProgress + '; sha1 check:' + sha1CheckProgress + '.';
      if (fnProgress) {
        fnProgress(uploadProgress);
      }
    };

    const _fileName = new Date().valueOf() + file.size + '.' + file.type.split('/')[1];

    cos.uploadFile(_fnSuccess, _fnError, _fnProgress, bucket, myFolder + _fileName, file, 0 ,taskReady);
  }
};