import Vue from 'vue'
import http from 'utils/httpClient.js'
import router from 'router/index'

const state = {
	test:"asds"
}

const actions = {
	login:(events,formData) => {
		events.commit("login",formData)
	},
	valid:(events,validRule) => {
		events.commit("valid",validRule)
	}
}

const mutations = {
	login: (state,formData) => {
		/*formData.grant_type = 'password';
		http.post("login/index",formData)
		.then(res => {
			router.push({name:"Home"})
		})*/
		router.push({name:"Home"})
	},
	valid:(state,validRule) =>{
		validRule.form.validate(validRule.valid)
	}
}

export default {
	state,
	actions,
	mutations
}