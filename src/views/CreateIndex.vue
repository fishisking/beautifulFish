<template>
<div>
	<Form ref="form" :model="form" 
	label-position="top" style="margin:20px 0 0 20px" >
        <FormItem label="创建索引的文件夹路径" prop="inputPath">
            <Input v-model="form.inputPath" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="索引输出的文件夹路径" prop="outputPath">
            <Input v-model="form.outputPath" placeholder="请输入"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="submitForm">提交</Button>
            <Button style="margin-left: 8px" @click="resetForm('form')">重置</Button>
        </FormItem>
    </Form>

</div>
</template>
<script>
	export default {
		data(){
			return {
				form:{
					inputPath:'C:\\Users\\666\\Desktop\\wordtest\\words',
					outputPath:'C:\\Users\\666\\Desktop\\wordtest\\index'
				}
			}
		},
		methods:{
			resetForm(name){
				this.$refs[name].resetFields();
			},
			submitForm(){
				let _this = this
				this.$http.post('/servlet/creatIndex',{
					savePath:_this.form.inputPath,
					readPath:_this.form.outputPath
				}).then(
					function(res){
						console.log(res.data)
						if(res.data=='success'){
							_this.$Message.success('索引建立成功');
						}
					})
			}
		}


	}

</script>
