<template>
 <div class='container'>
  <TestPinia />
  <el-button @click="logout">退出登录</el-button>
 </div>
</template>
 
<script setup lang='ts'>
 import {ref,reactive} from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import TestPinia from '@/components/testPinia.vue'
 
const router = useRouter();
 const logout = () => {
  ElMessage('已退出')
  router.push('/');
 }
</script>
 
<style lang="scss" scoped>
 .container {
 }
</style>