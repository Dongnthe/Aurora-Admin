import router from "@/routers/index";
import { isType } from "@/utils/util";
import { LOGIN_URL } from "@/config/config";
import { ElNotification } from "element-plus";
import { GlobalStore } from "@/stores";
import { AuthStore } from "@/stores/modules/auth";
import auth from "@/directives/modules/auth";

// 引入 views 文件下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue")

/**
 * 初始化动态路由
 */
export const initDynamicRouter = async () => {
  const authStore = AuthStore()
  const globalStore = GlobalStore()

  try {
    // 1. 获取菜单列表和按钮权限
    await authStore.getAuthMenuList()
    await authStore.getAuthButtonList()

    // 2. 判断当前用户有没有菜单权限
    if(!authStore.authButtonListGet.length) {
      
    }
  } catch (error) {
    
  }
}