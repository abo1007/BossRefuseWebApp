import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/login"

import user from "../components/user/user"
import user_home from "../components/user/user_home"
import user_focus from "../components/user/user_focus"
import user_msg from "../components/user/user_msg"
import user_my from "../components/user/user_my"
import user_option from "../components/user/user_option";
import user_category from "../components/user/user_category";
import user_overview from "../components/user/user_overview"; // 用户数据总览
import user_searchRes from "../components/user/user_searchRes"; // 用户搜索结果页面
import user_chat from "../components/user/user_chat"; // 用户聊天界面


import com from "../components/company/com"
import com_home from "../components/company/com-home"
import com_focus from  "../components/company/com-focus"
import com_msg from "../components/company/com-msg"
import com_my from "../components/company/com-my"
import com_option from "../components/company/com_option";  // 公司设置
import com_overview from "../components/company/com_overview";

import work_info from "../components/child/work_info";

// 通用
import err404 from "../components/404"
import about from "../components/view/about";
import service from "../components/view/service";
import help from "../components/view/help";
import wages from "../components/view/wages";
import homePage from "../components/view/homePage";
import account from "../components/view/account";
import privacy from "../components/view/privacy";

// 应聘者
import intention from "../components/view/intention"; // 求职意向
import assistant from "../components/view/assistant"; // 求职助手
import resume from "../components/view/resume";       //个人简历

// 公司


Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
  },
  {
    path: '/user',
    name:'user',
    component: user,
    redirect:'/user/home',
    children:[
      { path: '/user/home', name: 'user_home', component: user_home },
      { path: '/user/focus', name: 'user_focus', component: user_focus},
      { path: '/user/msg', name: 'user_msg', component: user_msg},
      { path: '/user/my', name: 'user_my', component: user_my}
    ]
  },
    { path: '/user/home/category/:name', name: 'user_category', component: user_category },     // 分类通用
    { path: '/user/home/option', name:'user_option', component: user_option },
    { path: '/user/home/data', name:'user_overview', component: user_overview },
    { path: '/user/home/search', name:'user_searchRes', component: user_searchRes },
    { path: '/user/home/workinfo/:workid', name: 'work_info', component: work_info },
    { path: '/user/home/chat/:msgid', name: 'user_chat', component: user_chat },
  {
    path: '/com',
    name:'com',
    component: com,
    redirect:'/com/home',
    children:[
      { path: '/com/home', name: 'com_home', component: com_home},
      { path: '/com/focus', name: 'com_focus', component: com_focus},
      { path: '/com/msg', name: 'com_msg', component: com_msg},
      { path: '/com/my', name: 'com_my', component: com_my}
    ]
  },
  { path: '/com/my/option', name:'com_option', component: com_option },
  { path: '/com/my/data', name:'com_overview', component: com_overview },

  {path: '/about', name: 'about', component: about },
  {path: '/service', name: 'service', component: service },
  {path: '/help', name: 'help', component: help },
  {path: '/wages', name: 'wages', component: wages },
  {path: '/homepage', name: 'homepage', component: homePage },
  // {path: '/setting', name: 'setting', component: setting },
  {path: '/account', name: 'account', component: account },
  {path: '/privacy', name: 'privacy', component: privacy },
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

export default router
