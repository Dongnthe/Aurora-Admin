<template>
  <div class='tool-bar-ri'>
    <div class="header-icon">
      <AssemblySize />
      <ThemeSetting />
    </div>
    <span class="username">xiaoli</span>
  </div>
</template>
 
<script setup lang='ts'>
import AssemblySize from "./components/AssemblySize.vue";
import ThemeSetting from "./components/ThemeSetting.vue";


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