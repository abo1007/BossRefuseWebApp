import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import { Button,Tabbar,TabbarItem,Search,Toast,Icon,Grid,GridItem,NoticeBar,Tag } from 'vant'
import 'vant/lib/button/style';
import 'vant/lib/tabbar/style';
import 'vant/lib/tabbar-item/style';
import 'vant/lib/search/style';
import 'vant/lib/toast/style';
import 'vant/lib/icon/style';
import 'vant/lib/grid/style';
import 'vant/lib/grid-item/style';
import 'vant/lib/notice-bar/style';
import 'vant/lib/tag/style';
Vue.use(Button);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Search);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NoticeBar);
Vue.use(Tag);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
