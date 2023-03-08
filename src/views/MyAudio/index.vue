<template>
  <main class="my-main-layout">
    <span class="my-main-audio-title">语音翻译</span>
    <div class="my-main-audio">
      <div class="my-main-audio-header">
          <el-select v-model="curValue" placeholder="当前语言">
            <el-option v-for="item in Lang " :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        <img class="my-main-audio-header-trans" src="@/assets/myText/translate.svg">
        <el-select v-model="tarValue" placeholder="目标语言">
          <el-option v-for="item in Lang " :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <div class="my-main-audio-header-targetlang"></div>
      </div>
      <div class="my-main-audio-body">
        <div class="my-main-audio-body-input" @keydown.enter="getaudio">
          <img class="my-main-audio-body-input-btn" src="@/assets/myAudio/audio.svg" alt="">
        </div>
        <div class="my-main-audio-body-result">{{resultValue}}</div>
      </div>
    </div>  
  </main>
</template>
<script>
import request from '@/utils/request'
export default {
name: 'Myaudio',
data(){
return {
  inputValue: null,
  resultValue: null,
  curValue:'',
  tarValue:'',
  Lang:[{
    value:'选项1',
    label:'英语'
  },
  {
    value:'选项2',
    label:'韩语'
  },{
    value:'选项3',
    label:'中文'
  },{
    value:'选项4',
    label:'越南语'
  },{
    value:'选项5',
    label:'粤语'
  }
]
}
},
methods: {
async getaudio(){
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
&-audio{
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
      &:hover {
        background-color: #3867FF;
        transition: all ease 0.5s;
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
      display: flex;
      justify-content: center;
      &-btn {
        cursor: pointer;
        width: 50px;
      }
    }
    &-result{
      box-sizing: border-box;
      width: 50%;
      height: 320px;
      padding: 15px 14px;
      font-size: 28px;
      background-color: #f0f2f9;
    }
  }
}
}

</style>
