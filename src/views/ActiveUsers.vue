<template>
	<div>
		<Upload ref="upload"
				action="/servlet/postPicture"
				multiple
				:before-upload="handleUpload"
				>
			<Button icon="ios-cloud-upload-outline">上传</Button>
		</Upload>
		<div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? 'Uploading' : 'Click to upload' }}</Button></div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			file:null,
			loadingStatus:false
		}
	},
	methods:{
		handleUpload(file){
			this.file = file
			return false
		},
		upload(){
			this.loadingStatus = true
			this.$refs.upload.post(this.file)
			setTimeout(()=>{
				this.file = null
				this.loadingStatus = false
				this.$Message.success('success')
			})
		}
	}
}
</script>
<style>

</style>
