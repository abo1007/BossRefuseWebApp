import Vue from 'vue'
import VueRouter from 'vue-router'
import login from "../components/login"

import user from "../components/user/user"
import user_home from "../components/user/user_home"
import user_focus from "../components/user/user_focus"
import user_msg from "../components/user/user_msg"
import user_my from "../components/user/user_my"

import com from "../components/company/com"

import err404 from "../components/404"

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
      { path: '/user/home', name: 'user_home', component: user_home},
      { path: '/user/focus', name: 'user_focus', component: user_focus},
      { path: '/user/msg', name: 'user_msg', component: user_msg},
      { path: '/user/my', name: 'user_my', component: user_my}
    ]
  },
  {
    path: '/com',
    name:'com',
    component: com
  },
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
