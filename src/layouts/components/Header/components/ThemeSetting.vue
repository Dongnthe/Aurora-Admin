<!-- 布局配置 -->
<template>
  <div class="theme-setting">
    <i :class="'iconfont icon-zhuti'" title="布局配置" class="toolBar-icon" @click="openDrawer"></i>
  </div>
</template>
 
<script setup lang='ts'>
import mittBus from "@/utils/mittBus"

const openDrawer = () => {
  mittBus.emit("openThemeDrawer")
}
</script>