import { MessageBox  } from 'element-ui'
import request from '@/utils/request'

export function getDownload(row) {
  let a = document.createElement('a')
  a.href = `http://asia.52asia.asia:4040/trans/download?appid=123456&id=${row.id}&lang=zh`
  a.click()
}

export async function getDataByid(){
  const targetList=this.data.allList.map(item => {if(item.filename === this.inputSearch) return item})
  this.data.workList=[]
  let index=1;
  targetList.map(async item => {
  if(item){
  const res= await request({
    url:'/voice',
    method: 'get',
    params:{
      appid: '123456',
      page:0,
      id:item.id
    }
  })
  const obj =res.result[0]
  if( obj.status=== 9 ) obj.status= 4;
  obj.index=index; 
  index++;
  let findObj =this.data.Lang.find( objj => objj.name === obj.from)
  obj.from=findObj.label;
  findObj =this.data.Lang.find( objj => objj.name === obj.to )
  obj.to =findObj.label;
  this.data.workList = [...this.data.workList,obj ]
  } })
}

export async function getData(){
  const res = await request({
    url: '/voice',
    method:'get',
    params:{
      appid: '123456',
      page: 0
    }
  })
  console.log('我的新表',res)

  this.data.allList = res.result
  /*每次都要遍历新获得的数据表 */
  this.data.allList.forEach((obj,index) => { 
    obj.page=res.page; 
    if( obj.status=== 9 )
    obj.status= 4;
    obj.index=index+1;
    let findObj =this.data.Lang.find( objj => objj.name === obj.from)
    typeof findObj ==='undefined' ? obj.from = '未知' : obj.from = findObj.label
    findObj =this.data.Lang.find( objj => objj.name === obj.to)
    typeof findObj ==='undefined' ? obj.to = '未知' : obj.to = findObj.label
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
    url:'/voice',
    method:'delete',
    params:{
      appid: '123456',
      id: row.id
    }
  })
  console.log('删除记录',res)
  this.getData()
  }).catch(()=>{})
}