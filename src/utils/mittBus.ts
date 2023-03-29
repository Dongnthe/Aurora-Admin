// Vue2.x 使用 EventBus 进行组件通信，而 Vue3.x 推荐使用 mitt.js。
// 原理就是通过 map 的方法保存函数。

import mitt from "mitt";

const mittBus = mitt();

export default mittBus;
