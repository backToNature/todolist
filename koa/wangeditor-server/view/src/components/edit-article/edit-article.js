import E from 'wangeditor';
import $$txyUploader from '../../lib/txy-uploader.js';
import $$model_addArticle from '../../model/addArticle.js';

export default {
  data() {
    return {
      form: {
        title: '',
        content: '',
        thumbUrl: ''
      },
      rules: {
        title: [
          { required: true, message: '请输入征文标题', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入正文' }
        ],
        thumbUrl: [
          { required: true, message: '请上传缩略图' }
        ]
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
            this.form.thumbUrl = imgUrl;
          } else {
            return false;
          }
        });
      }
    },
    submit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          console.log(valid);
          $$model_addArticle();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  },
  mounted() {
    const editor = new E(this.$refs.editor)
    editor.customConfig.showLinkImg = false;
    editor.customConfig.withCredentials = true;
    editor.customConfig.customUploadImg = function (files, insert) {
      var file = files[0];
      $$txyUploader.uploadFile(file, (res) => {
        let imgUrl = '';
        if (res.status === 'success') {
          imgUrl = res.data.data.access_url;
          imgUrl = imgUrl.replace('file', 'image');
          insert(imgUrl); //万象优图url
        } else {
          return false;
        }
      });
    }

    editor.customConfig.onchange = (html) => {
      this.form.content = html;
    }
    editor.create()
  }
}