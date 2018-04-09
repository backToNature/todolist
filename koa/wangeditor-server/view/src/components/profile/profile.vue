<template>
  <div class="profile">
    <div class="profile-breif">
      <h1>个人主页</h1>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="ruleForm.name" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="ruleForm.age" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="学校" prop="school">
          <el-input v-model="ruleForm.school" size="mini"></el-input>
        </el-form-item>
        <el-form-item label="个人介绍" prop="desc">
          <el-input v-model="ruleForm.desc" size="mini" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <pic-uploader @change="upload" :imgUrl.sync="ruleForm.avatar"></pic-uploader>
        </el-form-item>
      </el-form>
    </div>
    <div class="profile-product">
      <div class="profile-product-item">
        <img src="" alt="">
        <p>作品1</p>
        <p>xx票</p>
      </div>
    </div>
  </div>
</template>
<script src="./profile.js"></script>
<style lang="less" src="./profile.less"></style>