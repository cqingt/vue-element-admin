import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementUI from 'element-ui';
// import { Button, Select } from 'element-ui';
import element from "./element/index";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

Vue.use(element);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
