<template>
      <main class="my-main-layout">
        <span class="my-main-text-title">文本翻译</span>
        <div class="my-main-text">
          <div class="my-main-text-header">
            <div class="my-main-text-header-lang">
              <div class="my-main-text-header-lang-cur">当前语言 |</div>
              <div class="my-main-text-header-lang-auto"><span>自动选择</span><img src="@/assets/myText/downarr.svg" ></div>
            </div>
            <img src="@/assets/myText/translate.svg">
            <div class="my-main-text-header-lang">
              <div class="my-main-text-header-lang-cur">目标语言 |</div>
              <div class="my-main-text-header-lang-auto"><span>自动选择</span><img src="@/assets/myText/downarr.svg" ></div>
            </div>
            <div class="my-main-text-header-targetlang"></div>
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
export default {
  name: 'MyText',
  data(){
    return {
      inputValue: null,
      resultValue: null
    }
  },
  methods: {
   async getText(){
      const res= await request({
        url: '/trans/online',
        method: 'post',
        data:{
        app_id:"xxxxxxxx",
        from:"a",
        to :"b" ,
        data: this.inputValue
        }
      })
      this.resultValue=res.result.zh_data
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
          margin: 0 10px;
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
          width: 600px;
          height: 320px;
          padding: 15px 14px;
          border: 1px solid #d9d9d9;
          resize: none;
          font-size: 28px;
        }
        &-result{
          box-sizing: border-box;
          width: 600px;
          height: 320px;
          padding: 15px 14px;
          font-size: 28px;
          background-color: #f0f2f9;
        }
      }
    }
  }

</style>
