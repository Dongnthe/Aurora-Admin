<template>
	<el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" size="large">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名：admin / user">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input type="password" v-model="loginForm.password" placeholder="密码：123456" show-password autocomplete="new-password">
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
	</el-form>
	<div class="login-btn">
		<el-button :icon="CircleClose" round @click="resetForm(loginFormRef)" size="large">重置</el-button>
		<el-button :icon="UserFilled" round @click="login(loginFormRef)" size="large" type="primary" :loading="loading">
			登录
		</el-button>
	</div>
</template>

<script setup lang="ts" name="LoginForm">
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { Login } from "@/api/interface";
import { CircleClose, UserFilled } from "@element-plus/icons-vue";
import type { ElForm } from "element-plus";
import { valid } from "semver";
import { getTimeState } from "@/utils/util";
import { HOME_URL } from "@/config/config";
import { loginApi } from "@/api/modules/login";
import { GlobalStore } from '@/stores';
import { ElNotification } from "element-plus";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import md5 from "js-md5";

const globalStore = GlobalStore()
const router = useRouter()

// 定义 formRef（校验规则）
type FormInstance = InstanceType<typeof ElForm>;
const loginFormRef = ref<FormInstance>()

const loginForm = reactive<Login.ReqLoginForm>({ username: "admin", password: "123" })
const loginRules = reactive({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
})

const loading = ref(false)

const login = (formEl: FormInstance | undefined) => {
  if(!formEl) return
  formEl.validate(async valid => {
    if(!valid) return
    loading.value = true
    try {
      // 登录接口
      const { data } = await loginApi({...loginForm, password: md5(loginForm.password)})
      
      globalStore.setToken(data.access_token)
      console.log(globalStore);

      // 2.动态添加路由
      await initDynamicRouter();

      // 3.清空 tabs、keepAlive 保留的数据

      // 4.跳转到首页
      router.push(HOME_URL)
      ElNotification({
				title: getTimeState(),
				message: "欢迎登录 Aurora-Admin",
				type: "success",
				duration: 3000
			});
      
    } finally {
      loading.value = false
    }
  }) 
}
// resetForm
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
