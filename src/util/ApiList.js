import request from './request'

export default {
    // 服务器地址
    checkServer(){
        return request({
            url: '/user',
            method: 'get'
        })
    },
    // 登录验证
    Login(data) {
        return request({
            url: '/user/login',
            method: 'post',
            data
        })
    },
    // 免登录验证
    login_free(data){
        return request({
            url: '/user/loginfree',
            method: 'post',
            data
        })
    }

}