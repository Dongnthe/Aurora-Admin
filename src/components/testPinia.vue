<template>
 <div class='container'>
  <!-- pinia测试 -->
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <el-button @click="updateName">修改store中的name</el-button>
 </div>
</template>
 
<script setup lang='ts'>
 import {ref,reactive} from "vue";
import { useMainStore } from "@/stores/main"

const mainStore = useMainStore()
const updateName = ()=>{
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了'
  })
}
</script>
 
<style lang="scss" scoped>
 .container {
 }
</style>