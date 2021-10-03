import axios from 'axios'

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => {

        if (sessionStorage.getItem('login_token')) {
            config.headers['token'] = sessionStorage.getItem('login_token')
        }
        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)

// 响应拦截器
service.interceptors.response.use(

    response => {
        const res = response.data;

        if(res.code === 203){
            return Promise.reject(new Error('未登录'))
        }else if(res.code !== 200) {
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service
