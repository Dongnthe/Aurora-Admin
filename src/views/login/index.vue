<template>
  <div class="login-container flx-center">
		<div class="login-box">

			<!-- 
        切换夜间模式 -- TODO
        <SwitchDark class="dark" /> 
      -->

			<div class="login-left">
				<img src="@/assets/images/login_left.png" alt="login" />
			</div>
			<div class="login-form">
				<div class="login-logo">
					<img class="login-icon" src="@/assets/images/logo.svg" alt="" />
					<h2 class="logo-text">Aurora-Admin</h2>
				</div>
				<LoginForm />
			</div>
		</div>
	</div>
</template>
 
<script setup lang='ts' name="login">
import LoginForm from './components/LoginForm.vue'
</script>
 
<style lang="scss" scoped>
@import "./index.scss"
</style>