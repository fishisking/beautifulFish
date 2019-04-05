<template>
	<Table border stripe :columns="columns" :data="data1"></Table>
</template>
<script>
	import axios from 'axios'
	export default{
		data(){
			return {
				columns:[
					{
						type:'selection',
						width:50
					},
					{
						title:'Avatar',
						key:'avatar',
						width:80,
						align:'center',
						render:(h,params)=>{
							return h('div',[
									h('Avatar',{
										props:{
											icon:'ios-person'
										}
									})
								])
						}
					},
					{
						title:'Name',
						key:'name',
					},
					{
						title:'Status',
						key:'status',
						align:'center',
						width:85,
						render:(h,params)=>{
							return h('div',[
									h('Tag',{
										props:{
											color:params.row.status
										}
									},this.GetStatus(params.row.status))
								]);
						}
					},
					{
						title:'Age',
						key:'age',
						maxWidth:70,
						align:'center		'
					},
					{
						title:'Address',
						key:'address',
						tooltip:true
					},
					{
						title:'RegisterTime',
						key:'registertime'
					},
					{
						title:'Available',
						width:90,
						align:'center',
						key:'value',
						render:(h,params)=>{
							return h('div',[
									h('i-switch',{
										on:{
											'on-change':(value)=>{
												this.ChangeAvi(params.index)
											}

										},
										props:{
											size:'large',
											value:this.TransferBoolean(params.row.value)
										}
									},[
											h('span',{
												slot:'open'
											},'启用'),
											h('span',{
												slot:'close'
											},'禁用')
										])
								])
						}
					},
					{
						title:'Action',
						maxWidth:150,
						align:'center',
						render:(h,params)=>{
							return h('div',[
									h('Button',{
										props:{
											size:'small',
											type:'primary'
										},
										on:{
											click:()=>{
												this.showDialog()
											}
										},
										style:{
											marginRight:'10px'
										}
									},'查看'),
									h('Button',{
										props:{
											size:'small',
											type:'error'
										}
									},'删除')
								])
						}
					},

				],
				data1:[]
			}
		},
		computed:{
			
		},
		methods:{
			GetStatus(status){
				return (status=='success')?'在线':'离线'
			},
			showInfo(index){

			},
			ChangeAvi(index){
				this.data1[index].value=!this.data1[index].value
			},
			showDialog(index){
				this.getCustomerInformation()
			},
			getCustomerInformation(){
				let _this = this
				this.$http.get('/servlet/getQuery').then(
					function(res){
						let data = res.data
						console.log(data)
						_this.data1 = data
					})
			},
			TransferBoolean(num){
				return (num=='1')?true:false
			}//将后台的bit类型根据1,0转化为布尔类型
		},
		created(){
			this.getCustomerInformation()
		},

	}
</script>
<style>

</style>
