<template>
 <el-dropdown trigger="click">
		<div class="avatar">
			<img src="@/assets/images/avatar.gif" alt="avatar" />
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item @click="openDialog('infoRef')">
					<el-icon><User /></el-icon>个人信息
				</el-dropdown-item>
				<el-dropdown-item @click="openDialog('passwordRef')">
					<el-icon><Edit /></el-icon>修改密码
				</el-dropdown-item>
				<el-dropdown-item @click="logout" divided>
					<el-icon><SwitchButton /></el-icon>退出登录
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
	<!-- 个人信息 -->
	<InfoDialog ref="infoRef"></InfoDialog>
	<!-- 修改密码 -->
	<PasswordDialog ref="passwordRef"></PasswordDialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { GlobalStore } from "@/stores";
import { LOGIN_URL } from "@/config/config";
import { logoutApi } from "@/api/modules/login";
import { useRouter } from "vue-router";
import { ElMessageBox, ElMessage } from "element-plus";
import InfoDialog from "./InfoDialog.vue";
import PasswordDialog from "./PasswordDialog.vue";

const router = useRouter();
const globalStore = GlobalStore();

// 退出登录
const logout = () => {
	ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
		confirmButtonText: "确定",
		cancelButtonText: "取消",
		type: "warning"
	}).then(async () => {
		// 1.调用退出登录接口
		await logoutApi();
		// 2.清除 Token
		globalStore.setToken("");
		// 3.重定向到登陆页
		router.replace(LOGIN_URL);
		ElMessage.success("退出登录成功！");
	});
};

interface DialogExpose {
	openDialog: () => void;
}
const infoRef = ref<null | DialogExpose>(null);
const passwordRef = ref<null | DialogExpose>(null);
// 打开修改密码和个人信息弹窗
const openDialog = (refName: string) => {
	if (refName == "infoRef") infoRef.value?.openDialog();
	else passwordRef.value?.openDialog();
};
</script>

<style scoped lang="scss">
.avatar {
	width: 40px;
	height: 40px;
	overflow: hidden;
	cursor: pointer;
	border-radius: 50%;
	img {
		width: 100%;
		height: 100%;
	}
}
</style>