const data ={
  workList: [{
    date: '2016-05-02',
    name: 'test',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: 'test',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: 'test',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: 'test',
    address: '上海市普陀区金沙江路 1516 弄'
  }],
transState: [{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '翻译成功'
  }, {
    value: '选项3',
    label: '翻译失败'
  }, {
    value: '选项4',
    label: '翻译中'
  }],
orderState: [{
    value: '选项1',
    label: '全部'
  }, {
    value: '选项2',
    label: '退回中'
  }, {
    value: '选项3',
    label: '退回成功'
  }, {
    value: '选项4',
    label: '退回失败'
  },
  {
    value: '选项5',
    label: '已支付'
  }]
}
export default {data}