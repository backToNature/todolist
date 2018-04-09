import $$txyUploader from '../../lib/txy-uploader.js';


export default {
  data() {
    return {
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'blur' },
        ],
        school: [
          { required: true, message: '请输入学校', trigger: 'blur' },
        ],
        desc: [
          { required: true, message: '请输入简介', trigger: 'blur' },
        ],
        avatar: [
          { required: true, message: '请上传头像' },
        ]
      },
      ruleForm: {
        name: '',
        age: '',
        school: '',
        desc: '',
        avatar: ''
      }
    }
  },
  methods: {
    upload(e) {
      let files = e.target.files;
      if (files) {
        let file = files[0];
        $$txyUploader.uploadFile(file, (res) => {
          let imgUrl = '';
          if (res.status === 'success') {
            imgUrl = res.data.data.access_url;
            imgUrl = imgUrl.replace('file', 'image');
            this.ruleForm.avatar = imgUrl;
          } else {
            return false;
          }
        });
      }
    }
  }
};