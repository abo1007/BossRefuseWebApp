const serverBase = "http://api.abo.com:8090/public/"; // 根据启动方式自行修改

// const serverBase = "http://192.168.31.62:8090/public/"; // 根据启动方式自行修改

const A1 = serverBase + "api/";

export default {
    // 服务器地址
    SERVER_URL: serverBase,
    // 服务器验证
    API_GET_SERVER: A1 + "user",
    API_GET_WORKFACE: A1 + "workface",
    // 工作标题分类数据
    API_GET_WORK_CATE: A1 + "workface/cate/",
    // 工作标题 具体分类数据
    API_GET_WORK_SUBCATE: A1 + "workface/subcate/",
    API_GET_WORK_SUBCATES: A1 + "workface/subcates/",
    // 搜索招聘信息
    API_GET_SEARCH_WORKFACE: A1 + "workface/search/",

    // 公司发布的招聘数据
    API_GET_COM_WORK: A1 + "workface/com/",
    // 登录验证
    API_POST_LOGIN: A1 + "user/login",
    // 免登录验证
    API_POST_LOGIN_FREE: A1 + "user/loginfree",
    // 注册用户
    API_POST_REG_USER: A1 + "user",
    // 获得昵称
    API_GET_NICKNAME: A1 + "user/getnickname/",
    // 获得用户数据
    API_GET_USER_DATA: A1 + "user/",
    // 修改用户数据
    API_PUT_USER_DATA: A1 + "user/",

    // 拒绝 沟通中 待面试 录用 收藏数量信息
    API_POST_OFFER_COUNT: A1 + "offer/getcount",
    API_POST_OFFER_CATEDATA: A1 + "offer/getcate/",
    // 企业分类数据
    API_GET_COM_OFFER_CATEDATA: A1 + "offer/getcomcate/",
    // 修改offer状态
    API_POST_UPDATE_OFFER_TYPE: A1 + "offer/updatetype",
    // 投递简历 添加offer数据
    API_POST_OFFER: A1 + "offer",

    // 获得简历数据
    API_GET_RESUME: A1 + "resume/",
    // 首次上传简历数据
    API_POST_RESUME: A1 + "resume",
    // 更新简历数据
    API_PUT_RESUME: A1 + "resume/",
    // 通过用户ID查找简历ID
    API_GET_RESUME_ID: A1 + "resume/getresumeid/",

    // 录入招聘信息
    API_POST_WORK_DATA: A1 + "workface",
    // 获取招聘详情页信息
    API_GET_WORK: A1 + "workface/",
    // 修改招聘信息
    API_PUT_WORK: A1 + "workface/",

    // 获取所有企业信息 单个企业信息 注册信息 修改信息
    API_GET_COM_INFOS: A1 + "cominfo",
    API_GET_COM_INFO: A1 + "cominfo/",
    API_POST_COM_INFO: A1 + "cominfo",
    API_PUT_COM_INFO: A1 + "cominfo/",

    // 获取当前用户与workid所有聊天消息
    API_POST_MSG_USERID: A1 + "msg/userid",

    // 发送消息
    API_POST_MSG: A1 + "msg"
}
