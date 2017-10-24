import Vue from "vue"

import Customer from "./customer/customer.vue"

function init(){
	Vue.component(Customer.name,Customer)

}

export default{
	init
}