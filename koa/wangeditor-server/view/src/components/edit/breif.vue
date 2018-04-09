<template>
  <div class="breif">
    <el-form ref="form" :model="form" label-width="85px">
      <div class="breif-l">
            <el-col :span="16">
                <el-form-item required label="姓名:">
                    <el-input v-model="form.name" size="mini"></el-input>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="年龄:">
                    <el-input v-model="form.name" size="mini"></el-input>
                </el-form-item>
            </el-col>
            <el-form-item required label="联系电话:">
                <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
            <el-form-item required label="联系地址:">
                <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
            <el-form-item required label="学校:">
                <el-input v-model="form.name" size="mini"></el-input>
            </el-form-item>
      </div>
      <div class="breif-r">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <p style="text-align: center;">头像: 150x200</p>
      </div>
      <div class="block" style="width: 100%;">
        <el-form-item label="个人简介:">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<style lang="less">
    .breif {
        width: 100%;
        margin: 0 auto;
        @leftWidth: 66%;
        .breif-l {
            // background: red;
            float: left;
            width: @leftWidth;
        }
        .breif-r {
            // background: #000;
            margin-left: @leftWidth;
            .avatar-uploader  {
                text-align: center;
            }
            .avatar-uploader .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
            }
            .avatar-uploader .el-upload:hover {
                border-color: #409EFF;
            }
            .avatar-uploader-icon {
                font-size: 28px;
                color: #8c939d;
                width: 150px;
                height: 200px;
                line-height: 200px;
                text-align: center;
            }
            .avatar {
                width: 150px;
                height: 200px;
                display: block;
            }
        }
    }
</style>
<script>
export default {
  data() {
      return {
          imageUrl: '',
          form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
            }
      }
  },
  methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
}
</script>


