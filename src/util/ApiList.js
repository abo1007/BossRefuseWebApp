import request from './request'

export default {
  // 服务器地址
  checkServer() {
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
  login_free(data) {
    return request({
      url: '/user/loginfree',
      method: 'post',
      data
    })
  },
  // 注册用户
  regUser(data) {
    return request({
      url: '/user',
      method: 'post',
      data
    })
  },
  // 获得昵称
  getUserNickname(id) {
    return request({
      url: `/user/getnickname/${id}`,
      method: 'get'
    })
  },
  // 获得用户数据
  getUserInfo(id) {
    return request({
      url: `/user/${id}`,
      method: 'get'
    })
  },
  // 修改用户数据
  updateUserInfo(id, data) {
    return request({
      url: `/user/${id}`,
      method: 'put',
      data
    })
  },
  // 获得验证码
  getCode() {
    return request({
      url: `/user/getcode`,
      method: 'get'
    })
  },
  // 修改密码
  updatePassword(data) {
    return request({
      url: `/user/updatepass`,
      method: 'post',
      data
    })
  },
  // 职位信息数据
  getWorkface() {
    return request({
      url: '/workface',
      method: 'get'
    })
  },
  // 职位分类数据
  getWorkCate(id) {
    return request({
      url: `/workface/cate/${id}`,
      method: 'get',
      data
    })
  },
  // 职位细分类数据
  getWorkSubcate(id) {
    return request({
      url: `/workface/subcate/${id}`,
      method: 'get'
    })
  },
  // 多个职位细分类数据
  getWorkSubcates(ids) {
    return request({
      url: `/workface/subcates/${ids}`,
      method: 'get'
    })
  },
  // 职位搜索
  getWorkSearch(val) {
    return request({
      url: `/workface/search/${val}`,
      method: 'get'
    })
  },
  // 根据公司查找职位信息
  getComWork(id) {
    return request({
      url: `/workface/com/${id}`,
      method: 'get'
    })
  },


}