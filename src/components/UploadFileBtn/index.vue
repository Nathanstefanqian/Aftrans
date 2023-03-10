<template>
  <el-upload
  action=""
  :class="className"
  :on-preview="handlePreview"
  :on-success="handleSuccess"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :on-error="handleError"
  :http-request="uploadFile"
  :file-list="fileList">
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">上传您想要翻译的文件</div>
</el-upload>
</template>
<style lang="scss" scoped>

</style>

<script>
import request from '@/utils/request'
 export default {
  props: {
    className: {
      type: String,
      required: true
    }
  },
  data() {
      return {
        fileList: []
      };
    },
    methods: {
      async uploadFile(param) {
        const formData=new FormData()
        formData.append('file',param.file)
        await request({
          url:'/trans/doc',
          method:'post',
          data: {
            appid:"xxxxxxxx",
            file: formData,
            from: 'zn_CH',
            to: "en_XX",
            occr: 0,
            priority: 20
          }
        })
      },
      handleError() {
        this.$message.error('上传失败，请重新上传')
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      handleSuccess(res,file){
        this.$message.success('上传成功！')
        this.fileList.push({
          name: file.name
        })
        console.log(this.fileList)
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
