<template>
  <div class="login-container flx-center">
		<div class="login-box">

			<!-- 
        切换夜间模式 -- TODO
        <SwitchDark class="dark" /> 
      -->

			<div class="login-left">
				<!-- <img src="@/assets/images/login_left.png" alt="login" /> -->
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo.svg" alt="" />
					<h2 class="logo-text">V3-Admin</h2>
				</div>
				<!-- <LoginForm /> -->
			</div>
		</div>
	</div>
</template>
 
<script setup lang='ts' name="login">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
import { getTimeState } from "../../utils/util";
import { useMainStore } from "@/stores/main"

const mainStore = useMainStore()


const router = useRouter();
const login = () => {
  // 4.跳转到首页
  router.push('home');
  ElNotification({
    title: getTimeState(),
    message: "欢迎登录 V3-Admin",
    type: "success",
    duration: 3000
  });
  mainStore.$patch({
    name: '超级管理员'
  })

}
</script>
 
<style lang="scss" scoped>
@import "./index.scss"
</style>