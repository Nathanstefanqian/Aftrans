import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
import { getToken } from '@/utils/token'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 100000// request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (store.getters.token) {
      // let each request carry token
      config.headers['token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

const resCode = {
  // 成功
  success: 20000,

  // 失败 未知的、catch的
  fail: 50000,

  // 错误 已知的
  bad: 40000,
  unauthorized: 40100,
  accessDenied: 40103,
  notFound: 40400
}

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  response => {
    const res = response.data
    // if (!response.data.hasOwnProperty('code')) return res
    switch (res.code) {
      case resCode.success:
        if (res.message) {
          Message.success({ message: res.message, duration: 2000 })
        }
        break
      case resCode.fail:
        if (res.message) {
          Message.error({ message: res.message, duration: 4000 })
        }
        return Promise.reject()
      case resCode.bad:
      case resCode.notFound:
      case resCode.accessDenied:
        if (res.message) {
          Message.warning({ message: res.message, duration: 4000 })
        }
        return Promise.reject()
      // case resCode.unauthorized:
      //   store.dispatch('account/resetToken').then(() => {
      //     location.reload()
      //   })
        // break
    }
    return res
  },
  error => {
    console.log(error)
    Message.error({ message: '请求发生错误', duration: 4000 })
    return Promise.reject(error)
  }
)

export default service