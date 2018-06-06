// 设置axios,process.env值是根据用户是测试还是生产来读取config中的dev.env和pro.env中的配置
import axios from 'axios'
import { Toast } from 'mint-ui'
axios.defaults.baseURL = process.env.API_ROOT
    // axios.defaults.baseURL = "http://192.168.1.128:1030/fjs/";
axios.defaults.headers.common['Authorization'] = process.env.API_TOKEN
    // axios.defaults.headers.common['Authorization'] = 'Bearer c92dcc04-e3c1-4628-899f-f9c26a4f7746'; //process.env.API_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    // 测试
    // let baseURL = "http://192.168.1.124:1030";
axios.interceptors.request.use(function(request) {
    // 判断本地是否有token值，有则从新设置token，没有使用token默认配置
    let moveToken = sessionStorage.getItem('token')
    if (moveToken) {
        request.headers.Authorization = `bearer ${moveToken}`
    };
    return request
}, function(error) {
    // 请求错误时做些事
    return Promise.reject(error)
})
export default axios
const getAxios = (method, url, params) => {
    switch (method) {
        case 'get':
            return axios[method](url, { params: params }).catch((error) => {
                if (error.response) {
                    let message = error.response.data.error
                    Toast({
                        message: '提示',
                        position: 'middle',
                        duration: 5000
                    });
                    console.log('请求已发出，但服务器响应的状态码不在 2xx 范围内')
                    return error.response
                } else {
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
        case 'post':
            return axios[method](url, params, { emulateJson: true }).catch((error) => {
                if (error.response) {
                    let message = error.response.data.error
                    Toast({
                        message: '提示',
                        position: 'middle',
                        duration: 5000
                    });
                    console.log('请求已发出，但服务器响应的状态码不在 2xx 范围内')
                    return error.response
                } else {
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
        case 'put':
            return axios[method](url, params, { emulateJson: true }).catch((error) => {
                if (error.response) {
                    return error.response
                } else {
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
        default:
            return axios[method](url, { params: params }).catch((error) => {
                if (error.response) {
                    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
                    console.log('请求已发出，但服务器响应的状态码不在 2xx 范围内')
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message)
                }
                console.log(error.config)
            })
    }
}

// 后台接口配置
const config = {
    avatar: 'avatar-backend',
    avatar_mock: 'https://easy-mock.com/mock/5af2adfe086dd715d58ab87a/avatar-backend'
}

// 设置响应数据为文件流
var instance = axios.create({
    responseType: 'blob' // 返回数据的格式，可选值为arraybuffer,blob,document,json,text,stream，默认值为json
})

export const instance1 = axios.create({
    responseType: 'blob' // 返回数据的格式，可选值为arraybuffer,blob,document,json,text,stream，默认值为json
})

//用户登录
export const getToken = config.avatar_mock + '/loginWithUserInfo'

// export const avatarLogin = params => {
//     return getAxios('post', config.avatar_mock + '/loginSystem?access_token=' + process.env.API_TOKEN, params).then(res => res)
// }

// 商机管理系统菜单接口
export const avatarMenu = params => {
    return getAxios('get', config.avatar_mock + '/api/v1/getModuleAuthBySystemName', params).then(res => res.data)
}