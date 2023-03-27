import request from '@/utils/request'
import getTime from '@/utils/getTime'
import { Base64 } from 'js-base64'
import { Message } from 'element-ui'
import fromToLabel from '@/utils/fromToLabel'


//包含获得翻译项的业务逻辑
export async function getText() {
      if (this.curValue === null) {
        Message.warning({ message: '请先选择语言', duration: 4000 })
        return;
      }
      const time =getTime()
      let strEncode = Base64.encode(this.inputValue)
      const loadingInstance = this.$loading({
        fullscreen: true,
        text: '正在翻译...',
       spinner: 'el-icon-loading',
        // background: 'rgba(0, 0, 0, 0.8)'
      });
      const res = await request({
        url: '/trans/online',
        method: 'post',
        data: {
          appid: "654321",
          data: strEncode,
          from: this.data.Lang[this.curValue-1].name,
          to:'zh_CN'
        }
      })
      loadingInstance.close();
      console.log(this.$store._mutations)
      this.resultValue = Base64.decode(res.result.zh_data);
      this.resultValue = this.resultValue.replace(/\r\n/g, '<br>').replace(/\n/g, '<br>').replace(/\r/g, '<br>')
      const index =this.log.length+1
      const logItem = {index: index,from: fromToLabel(res.result.from),to: fromToLabel(res.result.to),createTime: time,src: this.inputValue,res: this.resultValue}
      this.addItem(logItem)
}
export default {
  getText
}