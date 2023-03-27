<template>
  <main class="my-main-layout">
    <span class="my-main-text-title">文本翻译</span>
    <div class="my-main-text">
      <div class="my-main-text-header">
        <el-select v-model="curValue" placeholder="当前语言" filterable>
          <el-option v-for="item in data.Lang " :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <img class="my-main-Voice-header-trans" src="@/assets/myText/translate.svg">
        <el-select v-model="tarValue" placeholder="目前只支持中文">
          <el-option v-for="item in data.lang " :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-button type="primary" style="background-color: #3867FF; margin-left: 10px" @click="getText">翻译</el-button>
        <el-button type="" style="margin-left: 10px" @click="handleLog">翻译记录</el-button>
      </div>
      <div class="my-main-text-body">
        <el-input type="textarea" :autosize="{minRows:6 ,maxRows:23}" class="my-main-text-body-input" placeholder="请输入需要翻译的内容" v-model="inputValue" @input="handleInput"></el-input>
        <div class="my-main-text-body-result" v-html="resultValue"></div>
      </div>
    </div>
    <dialog-log ref="dialogLog" @changeData="handleChange"></dialog-log>
  </main>
</template>
<script>
import api from '@/api'
import data from '@/models/MyTextnDoc/index'
import { mapGetters,mapMutations } from 'vuex'
export default {
  name: 'MyText',
  components: {
    DialogLog: () => import('./log.vue')
  },
  data() {
    return {
      ...data,
      inputValue: '',
      resultValue: null,
      curValue: 4,
      tarValue: null,
    }
  },
  computed:{...mapGetters(['log'])},
  methods: {
    ...api.mytext,
    ...mapMutations('m_log',['addItem']),
    handleInput() {
      if (!this.inputValue) this.resultValue = "这里显示翻译的内容噢"
    },
    handleLog() {
      this.$refs.dialogLog.dialogVisible=true
    },
    handleChange(newData){
      this.inputValue=newData[0]
      this.resultValue=newData[1]
    }
  }
}
</script>
<style lang="scss" scoped>
.my-main {
  &-text {
    &-title {
      font-weight: 800;
    }

    margin-top: 60px;

    &-header {
      display: flex;
      margin: 30px 0;
      width: inherit;

      &>img {
        cursor: pointer;
        margin: 0 10px;

        &:hover {
          stroke: #4366f6;
        }
      }

      &-lang {
        display: flex;
        width: 160px;
        height: 38px;
        font-size: 14px;
        border: 1px solid #d9d9d9;
        border-radius: 4px;

        &:hover {
          border: 1px solid #3867FF;
          transition: all 0.5s;
        }

        &-cur {
          color: #b1bbd2;
          line-height: 38px;
          padding-left: 10px;
        }

        &-auto {
          line-height: 38px;
          padding-left: 5px;
          display: flex;

          img {
            margin-left: 3px;
            width: 16px;
          }
        }
      }
    }

    &-body {
      display: flex;
      &-input {
        box-sizing: border-box;
        width: 50%;
        line-height:14px;
        //border: 1px solid #d9d9d9;
        resize: none;
        font-size: 16px;
       //overflow: auto;
      }

      &-result {
        box-sizing: border-box;
        width: 50%;
        padding: 5px 5px;
        font-size: 16px;
        background-color: #f0f2f9;
        overflow: auto;
      }
    }
  }
}
</style>
