import { MessageBox  } from 'element-ui'
import request from '@/utils/request'
import { Message } from 'element-ui'

export function getDownloadRes(row) {
  if(row.isError){
    Message.warning({ message: '翻译出错啦，无文件！', duration: 4000 })
    return;
  }
  let a = document.createElement('a')
  a.href = `http://asia.52asia.asia:4040/trans/down?appid=123456&id=${row.docid}&lang=zh`
  a.click()
}

export function getDownloadRaw(row) {
  if(row.isError){
    Message.warning({ message: '翻译出错啦，无文件！', duration: 4000 })
    return;
  }
  let a = document.createElement('a')
  a.href = `http://asia.52asia.asia:4040/trans/down?appid=123456&id=${row.docid}&lang=src`
  a.click()
}

export async function getDataByid(){
  const targetList=this.data.allList.map(item => {if(item.filename === this.inputSearch) return item})
  this.data.workList=[]
  let index=1;
  targetList.map(async item => {
  if(item){
  const res= await request({
    url: '/ocr',
    method: 'get',
    params:{
      appid: '123456',
      page: 0,
      id: item.id
    }
  })
  const obj =res.result[0]
  if( obj.status=== 9 ) obj.status= 4;
  obj.index=index; index++;
  let findObj =this.data.Lang.find( objj => objj.name === obj.from)
  obj.from=findObj.label;
  findObj =this.data.Lang.find( objj => objj.name === obj.to )
  obj.to =findObj.label;
  this.data.workList = [...this.data.workList,obj ]
  } })
}

export async function getData(isRefresh=false){
  const loadingInstance = isRefresh ? this.$loading({
    fullscreen: true,
    text: '正在刷新列表...',
    spinner: 'el-icon-loading',
    // background: 'rgba(0, 0, 0, 0.8)'
  }) : null;
  const res = await request({
    url: '/ocr',
    method:'get',
    params:{
      appid: '123456',
      page: 0,
    }
  })
  isRefresh ? Message.success({ message: '刷新任务列表成功！', duration: 2000 }) : null;
  loadingInstance ? loadingInstance.close() : null;
  this.data.allList = res.result
  this.data.allList.forEach( (obj,index) => { 
    obj.page=res.page; 
    if( obj.status=== 9 )
    obj.status= 4;
    obj.index=index+1;
    let findObj =this.data.Lang.find( objj => objj.name === obj.from)
    obj.from =findObj.label
    findObj =this.data.Lang.find( objj => objj.name === obj.to)
    obj.to =findObj.label
    if( obj.docid ==='') obj.isError = true
    else obj.isError = false
  })
  this.data.workList = this.data.allList
}

export function deleteData(row) {
  MessageBox.confirm('确认删除该数据吗？','提示',{
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'Warning'
  }).then(async ()=> {
    const res = await request({
    url:'/ocr',
    method:'delete',
    params:{
      appid: '123456',
      id: row.id
    }
  })
  Message.success({ message: '删除成功！', duration: 2000 })
  console.log('删除记录',res)
  this.getData()
  }).catch(()=>{})

}