<template>
	<div class="mx-wrapper">	
		<mx-nav></mx-nav>
		<div :class="['mx-content',isCollapse ? 'mx-content_collapse' : '']">	
			<mx-silder></mx-silder>
			<div class="mx-router-view">
				<router-view class="mx-viewer"></router-view>
			</div>
		</div>
		<div class="mx-footer">	
				
		</div>
	</div>
</template>
<script>
	import Nav from "./nav/nav.vue";
	import Silder from "./silder/silder.vue"
	export default{
		name:"home",
		components:{
			"mx-nav":Nav,
			"mx-silder":Silder
		},
		data(){
			return {

			}
		},
		computed:{
			isCollapse:function(){
				return this.$store.state.Home.isCollapse
			}
		}
	}
</script>
<style lang="scss" scoped>
	.mx-wrapper{
		position: fixed;
		left: 0px;
		right: 0px;
		bottom: 0px;
		top: 0px;
		.mx-content{
			position: fixed;
			left: 0px;
			right: 0px;
			top: 40px;
			bottom: 0px;
			.mx-router-view{
				position: fixed;
				left: 230px;
				top: 60px;
				bottom: 0px;
				right: 20px;
				transition:all 0.4s;
			}
		}
		.mx-content_collapse{
			.mx-router-view{
				position: fixed;
				left: 74px;
				top: 60px;
				bottom: 0px;
				right: 20px;
			}
		}
	}
</style>