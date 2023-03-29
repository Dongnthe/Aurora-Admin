<!-- 布局抽屉 -->
<template>
  <el-drawer v-model="drawerVisible" title="布局设置" >
    <span>Hi, there!</span>
  </el-drawer>
</template>
 
<script setup lang='ts'>
import { ref, reactive } from "vue";
import mittBus from "@/utils/mittBus";

// 打开主题设置
const drawerVisible = ref(false);
// 接受打开弹框事件
mittBus.on("openThemeDrawer",() => (drawerVisible.value = true))
</script>
 
<style lang="scss" scoped>
@import "./index.scss";
</style>