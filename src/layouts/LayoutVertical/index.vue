<template>
  <el-container class="layout">
    <el-aside>
      <div class="menu" :style="{ width: isCollapse ? '65px' : '220px' }">
        <div class="logo flx-center">
          <img src="@/assets/images/logo.svg" alt="logo" />
          <span v-show="!isCollapse">Aurora Admin</span>
        </div>
        <el-scrollbar>
          <el-menu :default-active="activeMenu" :router="false" :collapse="isCollapse" :collapse-transition="false"
            :unique-opened="true" background-color="#191a20" text-color="#bdbdc0" active-text-color="#ffffff">
            <SubMenu :menuList="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
        <ToolBarRight />
      </el-header>
      我是主体内容
    </el-container>
  </el-container>
</template>
 
<script setup lang='ts'>

import { computed } from "vue";
import { useRoute } from "vue-router";
import { GlobalStore } from "@/stores";
import { AuthStore } from "@/stores/modules/auth";
import SubMenu from "@/layouts/components/Menu/SubMenu.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRight from "@/layouts/components/Header/ToolBarRight.vue";

const route = useRoute();
const authStore = AuthStore();
const globalStore = GlobalStore()
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path));
const menuList = computed(() => authStore.showMenuListGet);

const isCollapse = computed(() => globalStore.themeConfig.isCollapse);

</script>
 
<style lang="scss" scoped>
@import "./index.scss"
</style>