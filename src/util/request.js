import axios from 'axios'

const service = axios.create({
    // baseURL: "http://api.abo.com:8090/public/api",
    baseURL:"/api",
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
        return res
    },
    error => {
        console.log('err' + error)
        return Promise.reject(error)
    }
)

export default service
