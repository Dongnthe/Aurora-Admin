<template>
  <!-- 当前页是否全屏 TODO -->
  <!-- 标签栏 TODO -->

  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" made="out-in">
        <keep-alive :include="keepAliveStore.keepAliveName">
          <component :is="Component" :key="route.path" v-if="isRouterShow" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
</template>
 
<script setup lang='ts'>
import { ref, computed, onBeforeUnmount, provide, watch } from "vue";
import { KeepAliveStore } from "@/stores/modules/keepAlive";

const keepAliveStore = KeepAliveStore()

// 刷新当前页面
const isRouterShow = ref(true)
const refreshCurrentPage = (val: boolean) => (isRouterShow.value = val)
provide('refresh',refreshCurrentPage)


</script>
 
<style lang="scss" scoped>
.container {}
</style>