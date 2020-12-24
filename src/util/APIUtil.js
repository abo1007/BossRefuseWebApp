
const serverBase = "http://127.0.0.1:8090";

const A1 = serverBase + "/public/api/";

export default {
    // 服务器地址
    SERVER_URL: serverBase,
    // 工作标题分类数据
    API_GET_WORK_CATE: A1 + "workface/cate/",
    // 工作标题 具体分类数据
    API_GET_WORK_SUBCATE: A1 + "workface/subcate/"

}
