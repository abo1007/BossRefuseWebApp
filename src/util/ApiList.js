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
  getWorkface(page=1) {
    return request({
      url: `/workface?page=${page}`,
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

  // 拒绝 沟通中 待面试 录用 收藏数量信息
  getOfferCount(data) {
    return request({
      url: `/offer/getcount`,
      method: 'post',
      data
    })
  },
  // 拒绝 沟通中 待面试 录用 收藏分类信息
  getOfferCateData(id, cateid) {
    return request({
      url: `/offer/getcate/${id}/${cateid}`,
      method: 'get'
    })
  },
  // 企业分类数据
  getComOfferCateData(id, cateid) {
    return request({
      url: `/offer/getcomcate/${id}/${cateid}`,
      method: 'get'
    })
  },
  // 修改offer状态
  updateOfferType(data) {
    return request({
      url: `/offer/updatetype`,
      method: 'post',
      data
    })
  },
  // 投递简历 添加offer数据
  postOffer(data) {
    return request({
      url: `/offer`,
      method: 'post',
      data
    })
  },
  // 获得简历数据
  getResume(id) {
    return request({
      url: `/resume/${id}`,
      method: 'get'
    })
  },
  // 首次上传简历数据
  postResume(data) {
    return request({
      url: `/resume`,
      method: 'post',
      data
    })
  },
  // 更新简历数据
  putResume(id, data) {
    return request({
      url: `/resume/${id}`,
      method: 'put',
      data
    })
  },
  // 通过用户ID查找简历ID
  getResumeForId(id) {
    return request({
      url: `/resume/getresumeid/${id}`,
      method: 'get'
    })
  },

  // 录入招聘信息
  postWorkData(data) {
    return request({
      url: `/workface`,
      method: 'post',
      data
    })
  },
  // 招聘信息
  getWork(id) {
    return request({
      url: `/resume/getresumeid/${id}`,
      method: 'get'
    })
  },
  // 录入招聘信息
  updateWorkData(id, data) {
    return request({
      url: `/workface/${id}`,
      method: 'put',
      data
    })
  },

  // 获取所有企业信息 单个企业信息 注册信息 修改信息
  getComList(){
    return request({
      url:`/cominfo`,
      method:'get'
    })
  },
  postComInfo(data) {
    return request({
      url: `/cominfo`,
      method: 'post',
      data
    })
  },
  getComInfo(id) {
    return request({
      url: `/cominfo/${id}`,
      method: 'get'
    })
  },
  updateComInfo(id, data) {
    return request({
      url: `/cominfo/${id}`,
      method: 'put',
      data
    })
  },

  // 获取当前用户与workid所有聊天消息
  postMsgForId(data){
    return request({
      url: `/msg/userid`,
      method: 'post',
      data
    })
  },
  // 发送消息(临时)
  sendMsg(data){
    return request({
      url: `/msg`,
      method: 'post',
      data
    })
  },
  // 获取最后一条消息(临时)
  getMaxMsg(id){
    return request({
      url: `/msg/userid/${id}`,
      method: 'get'
    })
  },
  // 获取轮播图
  getBanner(){
    return request({
      url: `/banner`,
      method: 'get'
    })
  }
}