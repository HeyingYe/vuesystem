import Vue from "vue"
import Vuex from "vuex"

import Login from "./login/login.js";
import Home from "./home/home.js"

Vue.use(Vuex)


export default new Vuex.Store({
	modules:{
		Login
	}
})