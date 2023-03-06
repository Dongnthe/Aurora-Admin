<template>
 <div class='container'>
  我是login
  <el-button @click="login">login</el-button>
 </div>
</template>
 
<script setup lang='ts'>
 import {ref,reactive} from "vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { getTimeState } from "../../utils/util";
import { useMainStore } from "@/stores/main"

const mainStore = useMainStore()


const router = useRouter();
 const login = () => {
  // 4.跳转到首页
  router.push('home');
  ElNotification({
    title: getTimeState(),
    message: "欢迎登录 V3-Admin",
    type: "success",
    duration: 3000
  });
  mainStore.$patch({
    name: '超级管理员'
  })
  
 }
</script>
 
<style lang="scss" scoped>
 .container {
 }
</style>