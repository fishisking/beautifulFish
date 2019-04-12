<template>
<div style="margin-left: 27px;width:500px">
	<h1>{{index+1+'.'+storyData.title}}</h1>
	<p style="width: 450px;">
		{{proContent}}
		<router-link tag="a" :to="{name:'story',params:{id:storyData.id}}" target="_blank">查看全文</router-link>
	</p>
	<span class="subcontent">ID:{{storyData.id}}&nbsp;&nbsp;&nbsp;&nbsp;字数:{{storyData.wordNumber}} &nbsp;&nbsp;&nbsp;&nbsp;日期:{{storyData.time}}&nbsp;&nbsp;&nbsp;&nbsp; 种类:{{storyData.category}}</span>
</div>
</template>
<script >
	export default{
		props:{
			storyData:{
				type:Object
			},
			index:{
				type:Number
			}
		},
		data(){
			return {

			}
		},
		computed:{
			proContent(){
				if(this.storyData.content.length>65){
					return this.storyData.content.substring(0,65)+'......'	
				}else{
					return this.storyData.content
				}
			}
		}

	}

</script>
<style>
h1{
	
}
.subcontent{
	color:#808695
}
p{
	color:#515a6e
}
</style>