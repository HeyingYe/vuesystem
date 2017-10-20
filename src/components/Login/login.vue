<template>
	<div class="login_bg">
		<div class="loginBox">
			<form id="loginForm">
				<h3>login</h3>
				<div class="logincell">
					<i class="iconfont icon-accountfilling"></i>
					<input type="text" class="username" name="username" v-model="username" >
				</div>
				<div class="logincell">
					<i class="iconfont icon-password"></i>
					<input type="text" class="password" name="password" v-model="password" >
				</div>
				<div class="logincell loginBtn">
					<input type="button" value="login" class="login_btn" @click="login">
				</div>
			</form>
		</div>
	</div>
</template>
<script>
	import $ from "jquery";
	export default{
		name:"login",
		data(){
			return {
				username:"",
				password:""
			}
		},
		methods:{
			login:function(){
				debugger;
				if($("#loginForm").valid()){
					this.$store.dispatch("login",{
						username:this.username,
						password:this.password
					})
				}
			}
		},
		created(){
			$("#loginForm").validate({
				rules:{
					username:{
						required:true,
						maxlenth:40
					},
					password:{
						required:true,
					}
				},
				messages:{
					username:{
						required:"username is required",
					},
					password:{
						required:"password is required",
					}
				}
			})
		}
	}
</script>
<style lang="scss" scoped>
	.login_bg{
		position: relative;
		width: 100%;
		height:100%;
		background: url("../../assets/images/login-bj.jpg");
		.loginBox{
			position: absolute;
			background: #fff;
			right: 200px;
			top: 150px;
			padding: 30px 20px;
			form{
				width: 260px;
				.logincell{
					position: relative;
					margin-bottom: 20px;
					width: 100%;
					i{
						position: absolute;
						margin-top: 11px;
						margin-left: 10px;
					}
					input{
						width: 236px;
						height: 30px;
						padding: 6px 12px;
						text-indent: 20px;
					}
				}
				.loginBtn{
					margin-top: 40px;
					input{
						box-sizing:content-box;
						line-height: 30px;
						font-size: 24px;
						background: #63B2EA;
						border: none;
						color: #fff;
						text-align: center;
					}
				}
				h3{
					height: 30px;
					font-size: 20px;
					line-height: 30px;
					text-align: left;
					margin-bottom: 15px;
				}
			}
		}
	}
</style>