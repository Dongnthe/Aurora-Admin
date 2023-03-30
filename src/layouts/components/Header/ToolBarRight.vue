<template>
  <div class='tool-bar-ri'>
    <div class="header-icon">
      <!-- 设置element组件大小 -->
      <AssemblySize id="AssemblySize" />
      <!-- 主题、布局配置 -->
      <ThemeSetting id="ThemeSetting" />
      <!-- 消息管理 -->
      <Message id="Message" />
      <!-- 全屏 -->
      <Fullscreen id="Fullscreen" />
    </div>
    <span class="username">xiaoli</span>
    <!-- 个人中心 -->
    <Personal />
  </div>
</template>
 
<script setup lang='ts'>
import AssemblySize from "./components/AssemblySize.vue";
import ThemeSetting from "./components/ThemeSetting.vue";
import Message from "./components/Message.vue";
import Fullscreen from "./components/Fullscreen.vue";
import Personal from "./components/Personal.vue";


</script>
 
<style lang="scss" scoped>
.tool-bar-ri {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 30px 0 0;

  .header-icon {
    display: flex;
    align-items: center;

    &>* {
      margin-left: 21px;
    }
  }

  .username {
    margin: 0 20px;
    font-size: 15px;
    color: gold;
  }
}</style>