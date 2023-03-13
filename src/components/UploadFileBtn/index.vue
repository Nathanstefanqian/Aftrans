<template>
  <el-upload
  action=""
  :class="className"
  :on-preview="handlePreview"
  :on-success="handleSuccess"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  :multiple="false"
  :limit="3"
  :on-exceed="handleExceed"
  :on-error="handleError"
  :http-request="uploadFile"
  :file-list="fileList"
  :headers="headers"
  >
  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">上传您想要翻译的文件</div>
</el-upload>
</template>


<script>
import request from '@/utils/request'
 export default {
  props: {
    className: {
      type: String,
      required: true
    },
    fromLang: {
      type: String,
      required: true
    }
  },
  data() {
      return {
        fileList: [],
        headers: { "Content-Type": "multipart/form-data" },
      };
    },
    methods: {
      async uploadFile(param) {
        const data=new FormData()
        console.log('pppp'+JSON.stringify(param))
        data.append('file',param.file)
        data.append('appid','123456')
        data.append('from',this.fromLang)
        data.append('to','zh_CN')
        data.append('ocr',1)
        data.append('priority',20)
        await request({
          url:'/trans/doc',
          method:'post',
          data
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
        this.$emit('btnClick')
      },
      beforeRemove(file) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    }
  }
</script>
