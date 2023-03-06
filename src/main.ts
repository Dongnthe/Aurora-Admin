import { createApp } from 'vue'
import App from './App.vue'
// element plus
import ElementPlus from "element-plus";
// element css
import "element-plus/dist/index.css";
import { createPinia } from "pinia"

import router from "@/routers/index";

const app = createApp(App);


app.use(router).use(ElementPlus).use(createPinia()).mount('#app')
