<template>
	<div class="nav">
		<div class="logo">
			<img src="../../../assets/images/logo.png"  alt="" @click="toggleMenu">
		</div>
		<div class="searchBox">
			<el-input class="searchWrapper" placeholder="请输入内容" v-model="searchText">
			    <el-select v-model="searchType" slot="prepend" class="selectWrapper" @change="selectType">
			      <el-option v-for="(item,index) in searchData" :label="item.label" :value="item.value" :key="index"></el-option>
			    </el-select>
			    <el-button slot="append" icon="search" @click="searchHandle"></el-button>
			</el-input>
		</div>
		<div class="nav_right">
			<div class="chooseLanguage">	
				<el-select v-model="language" @change="chooseLanguage">
					<el-option v-for="(item,index) in languageData" :label="item.label" :value="item.value" :key="index">
					</el-option>
				</el-select>
			</div>
			<div class="userSetting">	
				<el-dropdown trigger="click" @command="userService" >
					  <span class="el-dropdown-link">
					    {{username}}<i class="el-icon-caret-bottom el-icon--right"></i>
					  </span>
				    <el-dropdown-menu slot="dropdown">
					    <el-dropdown-item v-for="(value,key) in serviceData" :command="key" :key="key">{{value}}</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<img src="../../../assets/images/profile-avatar.jpg" height="140" width="140" alt="">
			</div>
		</div>
	</div>
</template>
<script>
import "./reset_elementui.scss";
	export default{
		name:"nav",
		props:{
			navDrapData:Object,

		},
		data(){
			return {
				searchType:1,
				language:1,
				searchText:"",
				username:"Eric",
				searchData:[
					{
						label:"customer",
						value:1
					},
					{
						label:"HOME",
						value:2
					},
					{
						label:"SR",
						value:3
					}
				],
				languageData:[
					{
						label:"English",
						value:1
					},
					{
						label:"Chinese",
						value:2
					}
				],
				serviceData:[
					"ResetPassWord",
					"LogOut",
					"ContactUs"
				]
			}
		},
		computed:{
			isCollapse:function(){
				return this.$store.state.Home.isCollapse
			}
		},
		methods:{
			chooseLanguage:function(){
				console.log(this.language)
			},
			selectType(){
				console.log(this.searchType)
			},
			searchHandle(){
				console.log("search")
			},
			userService(command){
				this.$store.dispatch("userService",command)
			},
			toggleMenu(){
				this.$store.dispatch("toggleMenu",this.isCollapse)
			}
		}
	}
</script>
<style lang="scss" scoped>
	.nav{
		position: fixed;
		top: 0px;
		width: 100%;
		height: 40px;
		background: #3083eb;
		position: relative;
		.logo{
			height: 40px;
			width: 100px;
			img{
				cursor: pointer;
				margin-left: 20px;
				margin-top: 3px;
				height: 34px;
			}
		}
		.searchBox{
			position: absolute;
			top: 0px;
			left: 300px;
			width: 350px;
			.searchWrapper{
				height: 40px;
				line-height: 40px;
				.selectWrapper{
					width: 120px;
				}
			}
		}
		.nav_right{
			position: absolute;
			right: 50px;
			top: 0px;
			overflow: hidden;
			height: 40px;
			.chooseLanguage{
				float: left;
				width: 100px;
				background: #3083eb;
				margin-right: 20px;
			}
			.userSetting{
				float: right;
				height: 40px;
				img{
					margin-left: 10px;
					height: 35px;
					width: 35px;
					border-radius: 50%;
				}
				.el-dropdown{
					height: 40px;
					.el-dropdown-link{
						line-height: 40px;
						color: #fff;
						float: left;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>