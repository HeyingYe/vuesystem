<template>
	<div :class="['silderWrapper',isCollapse ? 'silderCollapse' : '']">
		<el-menu default-active="1-4-1" class="el-menu-vertical" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router=true>
			<template v-for="(item,index) in menuList">
				<el-submenu v-if="item.submenu != undefined" :index="item.id">
					<template slot="title">
						<i class="el-icon-message"></i>
						<span>{{item.title}}</span>
					</template>
					<template v-for="(subitem,subindex) in item.submenu">
						<el-menu-item-group v-if="subitem.name == undefined" :index="subitem.id">
							<el-menu-item v-for="(lastItem,lastIndex) in subitem.submenuItem" :key="lastIndex" :index="lastItem.id" >
								{{lastItem.name}}
							</el-menu-item>
						</el-menu-item-group>
						<el-submenu v-else :index="subitem.id">
							<span slot="title">{{subitem.name}}</span>
							<el-menu-item v-for="(lastItem,lastIndex) in subitem.submenuItem" :index="lastItem.id" :key="lastIndex"> {{lastItem.name}} </el-menu-item>
						</el-submenu>
					</template>
				</el-submenu>
				<el-menu-item :index="item.id" v-else>
					<i class="el-icon-menu"></i>
    				<span slot="title">{{item.title}}</span>
				</el-menu-item>
			</template>
		</el-menu>
	</div>
</template>
<script>
import "./reset_elementui.scss";
	export default{
		name:"silder",
		data(){
			return {
				menuList:[
					{
						title:"CUSTOMER",
						id:"34324",
						submenu:[
							{
								title:"group1",
								id:"343255",
								submenuItem:[
									{
										name:"CREATE",
										id:"/customer"
										/*group:[
											{
												subgroup:""
											}
										]*/
									},
									{
										name:"SUMMA",
										id:"4435323"
									}
								]
							},
							{
								title:"group2",
								id:"456434",
								submenuItem:[
									{
										name:"SEARCH",
										id:"67832"
									}
								]
							},
							{
								name:"CLAIM",
								id:"2345532",
								submenuItem:[
									{
										name:"CLAIM_ITEM",
										id:"345436"
									}
								]
							}
						]
					},
					{
						title:"SR",
						id:"243354",
						submenu:[
							{
								title:"group1",
								id:"234324",
								submenuItem:[
									{
										name:"REPORT",
										id:"90980"
									},
									{
										name:"SUMMA",
										id:"755888"
									}
								]
							}
						]
					},
					{
						title:"INSTALL",
						id:"564787"
					},

				]
			}
		},
		computed:{
			isCollapse:function(){
				return this.$store.state.Home.isCollapse
			}
		},
		methods:{
			handleOpen:function(){
				console.log("handleOpen")
			},
			handleClose:function(){
				console.log("handleClose")
			}
		}
	}
</script>
<style lang="scss" scoped>
	.silderWrapper{
		position: fixed;
		top: 40px;
		left: 0px;
		bottom: 0px;
		background: #eef1f6;
		transition:all 0.4s;
		z-index: 10;
		.el-menu-vertical:not(.el-menu--collapse) {
		    width: 220px;
		}
	}
	
</style>