<!-- 异步加载 -->
<template>
  <suspense>
		<template #default>
			<component :is="LayoutComponents[themeConfig.layout]" />
		</template>
		<template #fallback>
			<Loading />
		</template>
	</suspense>
  <!-- 主题、布局配置抽屉 -->
  <ThemeDrawer />
</template>

<script setup lang="ts" name="layout">
import { computed, defineAsyncComponent, type Component } from "vue";
import { GlobalStore } from "@/stores";
import ThemeDrawer from "./components/ThemeDrawer/index.vue";
import Loading from "@/components/Loading/index.vue";

// 异步加载
const LayoutComponents: { [key: string]: Component } = {
  vertical: defineAsyncComponent(() => import("./LayoutVertical/index.vue")),
  transverse: defineAsyncComponent(() => import("./LayoutTransverse/index.vue")),
}

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
</script>

<style scoped lang="scss">
.layout {
	min-width: 760px;
}
</style>