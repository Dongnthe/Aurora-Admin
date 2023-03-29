<template>
 <div class='tool-bar-lf'>
  <!-- 折叠icon -->
  <CollapseIcon />
  <!-- 面包屑 -->
  <Breadcrumb v-if="themeConfig.breadcrumb" />
 </div>
</template>
 
<script setup lang='ts'>
import { computed } from "vue";
import { GlobalStore } from "@/stores";
import CollapseIcon from "./components/CollapseIcon.vue";
import Breadcrumb from "./components/Breadcrumb.vue";

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
 
</script>
 
<style lang="scss" scoped>
.tool-bar-lf {
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	white-space: nowrap;
}
</style>