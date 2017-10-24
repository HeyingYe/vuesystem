// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
//引入elementui组件
import "element-ui/lib/theme-default/index.css";
import ElementUI from "element-ui";

//import $ from "jquery";
import "assets/Validate/jquery.validate.js";
import "assets/Validate/localization/messages_zh.js";

import Template from "template";
Template.init();

Vue.config.productionTip = false

Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
