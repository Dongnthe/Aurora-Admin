import { createApp } from 'vue'
import App from './App.vue'
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
// pinia store
import pinia from "@/stores/index";

import router from "@/routers/index";

const app = createApp(App);


app.use(router).use(ElementPlus).use(pinia).mount('#app')
