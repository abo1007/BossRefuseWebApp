import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/login"
import register from "../components/register";

// 应聘者主页面
import user from "../components/user/user"
import user_home from "../components/user/user_home"
import user_focus from "../components/user/user_focus"
import user_msg from "../components/user/user_msg"
import user_my from "../components/user/user_my"
import user_option from "../components/user/views/user_option";
import user_category from "../components/user/views/user_category";
import user_overview from "../components/user/views/user_overview";     // 用户数据总览
import user_searchRes from "../components/user/views/user_searchRes";   // 用户搜索结果页面
import user_chat from "../components/user/views/user_chat";             // 用户聊天界面
import user_resume from "../components/user/views/user_resume";         // 个人简历

// 招聘者主页面
import com from "../components/company/com"
import com_home from "../components/company/com_home"
import com_focus from "../components/company/com_focus"
import com_msg from "../components/company/com_msg"
import com_my from "../components/company/com_my"
import com_option from "../components/company/com_option";  // 公司设置
import com_overview from "../components/company/com_overview";
import com_chat from "../components/company/views/com_chat";

// 工作详情页面
import work_info from "../components/child/work_info";  // 工作详情页面

// 通用页面
import err404 from "../components/404"
import about from "../components/view/about";
import service from "../components/view/service";
import help from "../components/view/help";
import wages from "../components/view/wages";
import homePage from "../components/view/homePage";
import account from "../components/view/account";
import privacy from "../components/view/privacy";
import myInfo from "../components/view/myInfo";
import activity1 from "../components/view/activity1";   // 活动页面1

// 应聘者页面
import intention from "../components/view/intention"; // 求职意向
import assistant from "../components/view/assistant"; // 求职助手


// 招聘者页面
import com_handler from "../components/company/views/com_handler";          // 简历处理
import com_workManager from "../components/company/views/com_workManager";  // 招聘管理
import com_hotWork from "../components/company/views/com_hotWork";          // 热门
import com_workEdit from "../components/company/views/com_workEdit";        // 招聘信息编辑

import com_vip from "../components/company/views/com_vip";                  // 急速招聘 vip
import com_info from "../components/company/views/com_info";                // 公司详情


Vue.use(VueRouter);



const routes = [
    {
        path: '/',
        name: 'login',
        component: login,
    },
    {
        path: '/reg',
        name: 'register',
        component: register,
    },
    // 应聘者用户部分
    {
        path: '/user',
        name: 'user',
        component: user,
        redirect: '/user/home',
        children: [
            {path: '/user/home', name: 'user_home', component: user_home},
            {path: '/user/focus', name: 'user_focus', component: user_focus},
            {path: '/user/msg', name: 'user_msg', component: user_msg},
            {path: '/user/my', name: 'user_my', component: user_my}
        ]
    },
    {path: '/user/home/category/', name: 'user_category', component: user_category},     // 分类通用
    {path: '/user/home/option', name: 'user_option', component: user_option},
    {path: '/user/home/offer/:cateid', name: 'user_overview', component: user_overview},
    {path: '/user/home/search', name: 'user_searchRes', component: user_searchRes},
    {path: '/user/home/workinfo/:workid', name: 'work_info', component: work_info},
    {path: '/user/home/chat', name: 'user_chat', component: user_chat},
    {path: '/user/home/resume', name: 'user_resume', component: user_resume},
    {path: '/user/home/intention', name: 'intention', component: intention},
    {path: '/user/home/assistant', name: 'assistant', component: assistant},

    // 企业部分
    {
        path: '/com',
        name: 'com',
        component: com,
        redirect: '/com/home',
        children: [
            {path: '/com/home', name: 'com_home', component: com_home},
            {path: '/com/focus', name: 'com_focus', component: com_focus},
            {path: '/com/msg', name: 'com_msg', component: com_msg},
            {path: '/com/my', name: 'com_my', component: com_my}
        ]
    },
    {path: '/com/my/option', name: 'com_option', component: com_option},
    {path: '/com/my/offer/:cateid', name: 'com_overview', component: com_overview},
    {path: '/com/handler', name: 'com_handler', component: com_handler},
    {path: '/com/workmanager', name: 'com_workmanager', component: com_workManager},
    {path: '/com/hotwork', name: 'com_hotwork', component: com_hotWork},
    {path: '/com/workedit/:workid', name: 'com_workedit', component: com_workEdit},
    {path: '/com/vip', name: 'com_vip', component: com_vip},
    {path: '/com/info', name: 'com_info', component: com_info},
    {path: '/com/home/chat', name: 'com_chat', component: com_chat},


    // 通用页面
    {path: '/about', name: 'about', component: about},
    {path: '/service', name: 'service', component: service},
    {path: '/help', name: 'help', component: help},
    {path: '/wages', name: 'wages', component: wages},
    {path: '/homepage/:from', name: 'homepage', component: homePage},
    // {path: '/setting', name: 'setting', component: setting },
    {path: '/account', name: 'account', component: account},
    {path: '/privacy', name: 'privacy', component: privacy},
    {path: '/myinfo', name: 'myinfo', component: myInfo},
    {path: '/activity1', name: 'activity1', component: activity1},

    {
        path: '*',
        name: '404',
        component: err404
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

router.beforeEach((to, from, next)=>{
    //路由中设置的needLogin字段就在to当中
    if(window.sessionStorage.login_token){
        // console.log(window.sessionStorage);
        // console.log(to.path) //每次跳转的路径
        // if(to.path === '/'){
        //     next({path: '/'});
        // }else{
        //     next();
        // }
        next();
    }else{
        // 如果没有session ,访问任何页面。都会进入到 登录页
        // 如果是登录或注册页面的话，直接next() -->解决注销后的循环执行bug
        if (to.path === '/' || to.path === '/reg') {
            next();
        } else { // 否则 跳转到登录页面
            console.log("未登录");
            next({ path: '/' });
        }
    }
});

export default router
