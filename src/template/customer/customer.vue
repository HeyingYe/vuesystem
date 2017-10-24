<template>
	<div class="customer">
		<el-row class="btnGroup">
			<el-col :span="12" class="navSeat">
			</el-col>
			<el-col :span="12" class>
				<el-input
				  icon="search"
				  v-model="name"
				  :on-icon-click="handleIconClick">
				</el-input>
				<el-button type="primary">Reset</el-button>
				<el-button type="primary">Save</el-button>
				<el-button type="primary">Submit</el-button>
			</el-col>
		</el-row>
		<el-row :gutter="10" class="outsideRow">
		  <el-col :lg="6" :md="8" :sm="12" class="outsideCol">
		  	<el-row class="insideRow" :gutter="10">
		  		<el-col :span="8" class="insideCol">
		  			<span>name</span>
		  		</el-col>
		  		<el-col :span="16" class="insideCol">
		  			<el-input
					  icon="search"
					  v-model="name"
					  :on-icon-click="handleIconClick">
					</el-input>
		  		</el-col>
		  	</el-row>
		  </el-col>
		  <el-col :lg="6" :md="8" :sm="12" class="outsideCol"> 
		  	<el-row class="insideRow" :gutter="10">
		  		<el-col :span="8" class="insideCol">
		  			<span>Phone</span>
		  		</el-col>
		  		<el-col :span="16" class="insideCol">
		  			<el-input
					  icon="search"
					  v-model="Phone"
					  :on-icon-click="handleIconClick">
					</el-input>
		  		</el-col>
		  	</el-row>
		  </el-col>
		  <el-col :lg="6" :md="8" :sm="12" class="outsideCol">
		  	<el-row class="insideRow" :gutter="10">
		  		<el-col :span="8" class="insideCol">
		  			<span>Customer Type</span>
		  		</el-col>
		  		<el-col :span="16" class="insideCol">
			  		<el-select v-model="CustomerType" placeholder="请选择">
					    <el-option label="Person">
					    </el-option>
					    <el-option label="Organization"></el-option>
					</el-select>
		  		</el-col>
		  	</el-row>
		  </el-col>
		  <el-col :lg="6" :md="8" :sm="12" class="outsideCol">
		  	<el-row class="insideRow" :gutter="10">
		  		<el-col :span="8" class="insideCol">
		  			<span>Email</span>
		  		</el-col>
		  		<el-col :span="16" class="insideCol">
		  			<el-input v-model="Email" placeholder="请输入内容"></el-input>
		  		</el-col>
		  	</el-row>
		  </el-col>
		</el-row>
	</div>
</template>
<script>
	export default{
		name:"customer",
		data(){
			return {
				name:"",
				Phone:"",
				CustomerType:"",
				Email:""
			}
		},
		methods:{
			handleIconClick(){

			}
		}
	}
</script>
<style lang="scss" scoped>
	.customer{
		.btnGroup{
			.el-col{
				height: 36px;
				.el-input{
					width: 40%;
					margin-right: 10px;
				}
			}
			margin-bottom: 20px;
			padding-bottom: 10px;
			border-bottom: 1px solid #3083eb;
		}
		.outsideRow{
			.outsideCol{
				margin-bottom: 10px;
				.insideRow{
					.insideCol{
						span{
							display: block;
							height: 36px;
							line-height: 36px;
							text-align: right;
							box-sizing:border-box;
							// padding-left: 10px
						}
						.el-select{
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>