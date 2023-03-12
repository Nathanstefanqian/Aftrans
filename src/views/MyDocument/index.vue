<template>
  <main class="my-main-layout">
    <div class="my-main-doc-menu">
      <span class="my-main-doc-menu-title" @click="showUploadDiv" :class="{ active: currentIndex === 0 }">文档翻译</span>
      <span class="my-main-doc-menu-space">|</span>
      <span class="my-main-doc-menu-title" @click="showProjectDiv" :class="{ active: currentIndex === 1 }">任务管理</span>
    </div>
    <div class="my-main-doc-toggle">
<UploadFileBtn className="my-main-doc-toggle-upload" v-show="showUpload" />
      <div class="my-main-doc-toggle-project" v-show="showProject">
        <div class="my-main-doc-toggle-project-header">
          <div class="my-main-doc-toggle-project-header-left">
            <el-input placeholder="请输入内容" v-model="inputSearch" style="width: 200px"></el-input>
            <el-button type="primary" style="background-color: #3867FF" @click="getDataByid">查询</el-button>
          </div>
          <div class="my-main-doc-toggle-project-header-right">
            <el-select v-model="transValue" placeholder="选择翻译状态" style=" margin-right: 10px">
              <el-option v-for="item in data.transState" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-select v-model="orderValue" placeholder="选择订单状态" style=" margin-right: 10px">
              <el-option v-for="item in data.orderState" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button type="primary" style="background-color: #3867FF" @click="getData">查询</el-button>
            <el-button>重置</el-button>
          </div>
        </div>
        <div class="my-main-doc-toggle-project-table">
          <el-table :data="data.workList" border style="width: 100%" max-height="550px"> 
          <el-table-column prop="" align="center" label="选中" style="width: 10%"><el-checkbox></el-checkbox></el-table-column>
          <el-table-column prop="id" label="任务ID" style="width: 10%"></el-table-column>
          <el-table-column prop="filename" label="文件名" style="width: 10%"></el-table-column>
          <el-table-column prop="size" label="文件大小" style="width: 10%"></el-table-column>
          <el-table-column prop="" label="目标语言" style="width: 10%">中文</el-table-column>
          <el-table-column prop="status" label="翻译状态" style="width: 10%">
            <template slot-scope="{ row }">
              {{ mapStatus[row.status] }}
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="创建时间" style="width: 10%"></el-table-column>
          <el-table-column prop="transTime" label="开始翻译时间" style="width: 10%"></el-table-column>
          <el-table-column prop="name" label="操作" style="width: 10%">
            <template slot-scope="{ row }">
            <el-button type="danger" @click="deleteData(row)" size="mini">
              <i class="el-icon-delete"></i> 删除
            </el-button>
          </template>
          </el-table-column>
        </el-table>
        </div>
      </div>
    </div>  
  </main>
</template>
<script>
  import UploadFileBtn from '@/components/UploadFileBtn'
  import data from '@/models/MyDocument/index'
  import request from '@/utils/request'
export default {
  components:{
    UploadFileBtn
  },
  data() {
    return {
      ...data,
      checked: false,
      currentIndex: 0,
      showUpload: true,
      showProject: false,
      orderValue: '',
      transValue: '',
      inputSearch:'',
      mapStatus: ['未翻译','正在翻译','翻译完成','不支持类型','出错']
    }
  },
  created() {
  this.getData()
  },
  methods:{
    async getDataByid(){
      console.log('出发')
      const targetList=this.data.workList.map(item => {if(item.filename === this.inputSearch) return item})
      console.log(targetList)
      targetList.map(async item => {
      if(item){
        console.log(item)
      const res= await request({
        url:'/trans/doc',
        method: 'get',
        params:{
          appid: '123456',
          page:0,
          id:item.id
        }
      })
      this.data.workList+=res.result
      } 
      })
  },
    async getData(){
      const res = await request({
        url: '/trans/doc',
        method:'get',
        params:{
          appid: '123456',
          page: 0
        }
      })
      console.log(res)
      this.data.workList=res.result
      this.data.workList.forEach(obj=> { obj.page=res.page; if( obj.status=== 9 ) obj.status= 4 
      })
    },
    async deleteData(row) {
      const res = await request({
        url:'/trans/doc',
        method:'delete',
        params:{
          appid: '123456',
          id: row.id
        }
      })
      console.log('删除记录',res)
      this.getData()
    },
    showUploadDiv() {
      this.showUpload = true;
      this.showProject= false;
      this.handleChangeColor(0)
    },
    showProjectDiv() {
      this.showProject= true;
      this.showUpload = false;
      this.handleChangeColor(1)
    },
    handleChangeColor(index) {
      if(index !== this.currentIndex) {
        this.currentIndex = index;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-main-doc {
  &-menu {
  display: flex;
  &-title {
  cursor: pointer;
  font-weight: 600;
  &:hover {
  transition: all 0.5s;
  color: #3867FF;
    }
  }
  &-space {
    margin: 0 8px; } }
  &-toggle {
    margin-top: 40px;
    &-upload{
      display: flex;
      align-items: center;
      justify-content: center; 
      flex-direction: column;
      width:100%;
      height:350px;
      border: 1px dotted #999;
      &-btn {
        width: 220px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background-color: #4366f6;
        box-shadow: 0 6px 13px rgb(34 119 230 / 25%);
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
      }
    }
    &-project {
      display: flex;
      flex-direction: column;
      &-header {
        display: flex;
        justify-content: space-between;
      }
      &-table {
        margin-top: 20px;
      }
    }
  }
}
.active {
  color: #3867FF;
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  line-height: 36px;
  text-align: center;
}
</style>