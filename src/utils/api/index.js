import axios from 'axios'
import { Toast } from 'mint-ui'
axios.defaults.withCredentials = true
axios.defaults.baseURL = process.env.BASE_API
axios.defaults.headers.post['Content-Type'] = 'application/json'

let user = sessionStorage.getItem('user')
if (user) {
  user = JSON.parse(user)
  const token = user.token || ''
  if (token) {
    axios.defaults.headers.common['Authorization'] = token
  }
}

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么

  return config
}, function (error) {
  // 对请求错误做些什么

  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  return response
}, function (error) {
  // 对响应错误做点什么
  Toast({
    message: error.response.data.error,
    position: 'bottom',
    duration: 1500
  })
})

export default axios

// get
export function requestGet (url, params = {}) {
  return axios.get(url, { params: params }).then()
}

// post
export function requestPost (url, params = {}) {
  return axios.post(url, params, { emulateJson: true }).then()
}
