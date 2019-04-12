<template>
<div>
	<p>	
	{{content}}
	</p>
</div>	

</template>
<script >
	export default {
		data(){
			return {
				content:''
			}
		},
		methods:{
			search(){
				let _this = this
				let id = this.$route.params.id
				this.$http.post('/servlet/getStoryAllContent',{
					id:id
				}).then(
					function(res){
						_this.content = res.data[0].content
					})
				
			},
		},
		created(){
			this.search()
		}
	}

</script>