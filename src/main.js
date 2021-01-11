/*
 * @Description:
 * @Author: huxianc
 * @Date: 2021-01-11 11:24:17
 * @LastEditors: huxianc
 * @LastEditTime: 2021-01-11 11:30:59
 */
import { createApp } from "vue";
import App from "./App.vue";
import element from "./plugins/element-plus";

const app = createApp(App);
element(app);
app.mount("#app");
