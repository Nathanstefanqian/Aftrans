<template>
      <main class="my-main-layout">
        <span class="my-main-text-title">文本翻译</span>
        <div class="my-main-text">
          <div class="my-main-text-header">
            <el-select v-model="curValue" placeholder="当前语言">
              <el-option v-for="item in data.Lang " :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          <img class="my-main-audio-header-trans" src="@/assets/myText/translate.svg">
          <el-select v-model="tarValue" placeholder="目前只支持中文">
            <el-option v-for="item in data.lang " :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <div class="my-main-audio-header-targetlang"></div>
        </div>
          <div class="my-main-text-body">
            <textarea class="my-main-text-body-input"  placeholder="请输入需要翻译的内容" v-model="inputValue" @input="handleInput" @keydown.enter="getText"></textarea>
            <div class="my-main-text-body-result">{{resultValue}}</div>
          </div>
        </div>  
      </main>
</template>
<script>
import request from '@/utils/request'
import { Base64 } from 'js-base64'
import { Message } from 'element-ui'
import  data  from '@/models/MyText/index'

export default {
  name: 'MyText',
  data(){
    return {
      ...data,
      inputValue: null,
      resultValue: null,
      curValue:null,
      tarValue:null
    }
  },
  methods: {
   async getText(){
    if(this.curValue===null){
      Message.warning({ message: '请先选择语言', duration: 4000 })
      return;
    }
    console.log(this.Lang[this.curValue].name)
    let strEncode=Base64.encode(this.inputValue)
      const res= await request({
        url: '/trans/online',
        method: 'post',
        data:{
        appid:"654321",
        data: strEncode,
        from:this.Lang[this.curValue].name
        }
      })
      console.log(res)
      console.log(res.result.zh_data)
      this.resultValue=Base64.decode(res.result.zh_data);
    },
    handleInput(){
      if(!this.inputValue)this.resultValue="这里显示翻译的内容噢"
    }
  }
}
</script>
<style lang="scss" scoped>
  .my-main{
    &-text{
      &-title{
        font-weight: 800;
      }
      margin-top: 60px;
      &-header{
        display: flex;
        margin: 30px 0;
        width:inherit;
        &>img{
          cursor: pointer;
          margin: 0 10px;
          &:hover {
            stroke: #4366f6;
          }
        }
        &-lang{
          display: flex;
          width: 160px;
          height: 38px;
          font-size: 14px;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          &:hover{
            border: 1px solid #3867FF;
            transition: all 0.5s;
          }
          &-cur{
          color: #b1bbd2;
          line-height:38px;
          padding-left:10px;
          }
          &-auto{
            line-height: 38px;
            padding-left: 5px;
            display: flex;
            img{
              margin-left:3px;
              width:16px;
            }
          }
        }
      }
      &-body{
        display: flex;
        &-input{
          box-sizing: border-box;
          width: 50%;
          height: 320px;
          padding: 15px 14px;
          border: 1px solid #d9d9d9;
          resize: none;
          font-size: 28px;
        }
        &-result{
          box-sizing: border-box;
          width: 50%;
          height: 320px;
          padding: 15px 14px;
          font-size: 28px;
          background-color: #f0f2f9;
          overflow: auto;
        }
      }
    }
  }

</style>
