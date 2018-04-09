<template>
  <div class="article-editor">
    <el-form ref="form" :rules="rules" :model="form" label-width="85px">
        <el-form-item required label="标题:" prop="title">
            <el-input v-model="form.title" size="mini"></el-input>
        </el-form-item>
        <el-form-item required label="正文:" prop="content">
            <div class="editor-wrapper" ref="editor"></div>
        </el-form-item>
        <el-form-item required label="封面:" prop="thumbUrl">
            <pic-uploader :imgUrl.sync="form.thumbUrl" @change="upload"></pic-uploader>
          <p style="text-align: center;">封面: 300x200</p>
        </el-form-item>
        <!-- <el-form-item required label="主题:">
            <el-radio-group v-model="form.resource">
                <el-radio label="今日中国"></el-radio>
                <el-radio label="未来世界"></el-radio>
            </el-radio-group>
        </el-form-item> -->
        <el-form-item>
            <el-button type="primary" @click="submit">立即投稿</el-button>
            <el-button>保存草稿</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>
<script src="./edit-article.js"></script>
<style lang="less">
</style>