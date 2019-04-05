<template>
<div>
	<Menu mode="horizontal" theme="light" @on-select="changRouter">
		<Menu-item name="createIndex">
            <Icon type="ios-construct"></Icon>
            建立索引
        </Menu-item>
        <Menu-item name="query">
            <Icon type="ios-paper"></Icon>
            查询
        </Menu-item>
        <Menu-item name="statics">
             <Icon type="ios-stats"></Icon>
            统计分析
        </Menu-item>
	</Menu>
	<router-view></router-view>
</div>
</template>
<script >
	export default {
		components:{
		},
		data(){
			return{
				
			}
		},
		methods:{
			changRouter(name){ //name是各个子路由视图的路径
				console.log(this.$route.path)
				let fixUrl = '/home/'
				let newUrl = fixUrl+name 
				this.$router.push({
					path:newUrl
				})
			}
		}
	}
</script>
