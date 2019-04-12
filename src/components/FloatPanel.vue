<template>
<div>
	<Tag closable  @on-close="cancelWordNumberRange" v-if="selectedWordNumberRange">{{selectedWordNumberRange}}</Tag>
	<Tag closable  @on-close="cancelCategory" v-if="selectedCategory">{{selectedCategory}}</Tag>
	<ul v-for="range in wordNumberRange">字数
		<li><a @click="setWordNumberRange(range.range)">
			{{range.range}}
		</a></li>
	</ul>
	<br>种类
	<ul v-for="category in categorys">
		<li >
			<a @click="setCategory(category.title)">{{category.title}}</a>
		</li>
	</ul>
</div>
</template>
<script >
	export default{
		props:{
			setting:{
				type:Object


			}
		},
		methods:{
			setCategory(category){
				this.selectedCategory = category
				this.submitChange()
			},
			setWordNumberRange(range){
				this.selectedWordNumberRange = range
				this.submitChange()
			},
			cancelCategory(){
				this.selectedCategory = ''
				this.submitChange()
			},
			cancelWordNumberRange(){
				this.selectedWordNumberRange = ''
				this.submitChange()
			},
			submitChange(){
				this.$emit('settingChange',{
					category:this.selectedCategory,
					wordNumberRange:this.selectedWordNumberRange
				})
			}
		},
		data(){
			return {
				selectedCategory:'',
				selectedWordNumberRange:''
			}
		},
		computed:{
			minWordNumber(){
				return Number(this.setting.min)
			},
			maxWordNumber(){
				return Number(this.setting.max)
			},
			categorys(){
				let arr = []
				let oldArray = Array.from(this.setting.category)
				for(let index in oldArray){
					arr.push({"title":oldArray[index]})
				}
				return arr
			},
			wordNumberRange(){
				let range = this.maxWordNumber-this.minWordNumber
				let gap = range/5
				let arr = []
				for(var i=0;i<=5;i++){
					if(i!=0){
						let downNum = Math.round(this.minWordNumber+(i-1)*gap)
						let upNum = Math.round(this.minWordNumber+i*gap)
						arr.push({"range":downNum+"-"+upNum})
					}
				}
				return arr
			}
		},
	}
</script>
