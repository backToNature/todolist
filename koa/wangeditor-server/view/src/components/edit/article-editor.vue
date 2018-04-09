<template>
  <div class="article-editor">
    <el-form ref="form" :model="form" label-width="85px">
        <el-form-item required label="标题:">
            <el-input v-model="form.title" size="mini"></el-input>
        </el-form-item>
        <el-form-item required label="正文:">
            <div class="editor-wrapper">

            </div>
        </el-form-item>
        <el-form-item required label="封面:">
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          <p style="text-align: center;">封面: 300x200</p>
        </el-form-item>
        <el-form-item required label="主题:">
            <el-radio-group v-model="form.resource">
                <el-radio label="今日中国"></el-radio>
                <el-radio label="未来世界"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即投稿</el-button>
            <el-button>保存草稿</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<style lang="less">
    .article-editor {
        .editor-wrapper {
            // margin-left: 85px;
            height: 200px;
            background: #000;
        }
        @picWidth: 300px;
        @picHeight: 200px;
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
            width: @picWidth;
            height: @picHeight;
            line-height: @picHeight;
            text-align: center;
        }
        .avatar {
            width: @picWidth;
            height: @picHeight;
            display: block;
        }
    }
</style>

<script>
export default {
  data() {
      return {
          form: {
              title: '',
              resource: ''
          }
      }
  }
}
</script>

