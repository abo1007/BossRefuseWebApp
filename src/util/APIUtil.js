const serverBase = "http://127.0.0.1:8090/public/"; // 请根据启动方式自行修改

const A1 = serverBase + "api/";

export default {
    // 服务器地址
    SERVER_URL: serverBase,
    // 工作标题分类数据
    API_GET_WORK_CATE: A1 + "workface/cate/",
    // 工作标题 具体分类数据
    API_GET_WORK_SUBCATE: A1 + "workface/subcate/",
    API_GET_WORK_SUBCATES: A1 + "workface/subcates/",
    // 登录验证
    API_POST_LOGIN: A1 + "user/login",
    // 免登录验证
    API_POST_LOGIN_FREE: A1 + "user/loginfree",
    // 拒绝 沟通中 待面试 录用 收藏数量信息
    API_POST_OFFER_COUNT: A1 + "offer/getcount",
    API_POST_OFFER_CATEDATA: A1 + "offer/getcate/",

    // 获得简历数据
    API_GET_RESUME: A1 + "resume/",
    // 首次上传简历数据
    API_POST_RESUME: A1 + "resume",
    // 更新简历数据
    API_PUT_RESUME: A1 + "resume/"
}
