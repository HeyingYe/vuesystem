import Vue from 'vue'
import http from 'utils/httpClient.js'
import router from 'router/index'

const state = {

}

const actions = {
	login:(events,formData) => {
		debugger
		events.commit("login",formData)
	}
}

const mutations = {
	login: (data,formData) => {
		
		formData.grant_type = 'password';
		http.post("login/index",formData)
		.then(res => {
			router.push({name:"Home"})
		})
	}
}

export default {
	state,
	actions,
	mutations
}