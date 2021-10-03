import request from './request'

export default {
    Login(data) {
        return request({
            url: '/login',
            method: 'post',
            data
        })
    }
}