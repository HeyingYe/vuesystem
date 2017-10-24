import Vue from 'vue'
import http from 'utils/httpClient.js'
import router from 'router/index'

const state = {
	isCollapse:false
}

const actions = {
	toggleMenu:(events,data) => {
		events.commit("toggleMenu",data);
	},
	userService:(events,command) => {
		events.commit("userService",command);
	}
}

const mutations = {
	toggleMenu:(state,isCollapse) => {
		state.isCollapse = !isCollapse;
	},
	userService:(state,command) => {
		switch(command){
			case 0:

			break;
			case 1:
				router.push({name:"Login"})
			break;
			case 2:

			break;
		}
	}
}

export default {
	state,
	actions,
	mutations
}