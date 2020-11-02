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

import com from "../components/company/com"
import com_home from "../components/company/com-home"
import com_focus from  "../components/company/com-focus"
import com_msg from "../components/company/com-msg"
import com_my from "../components/company/com-my"

import work_info from "../components/child/work_info";


import err404 from "../components/404"
import about from "../components/view/about";

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
    { path: '/user/home/workinfo/:workid', name: 'work_info', component: work_info },
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
  {path: '/about', name: 'about', component: about },
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
