import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;


import { Button,Tabbar,TabbarItem,Search,Toast,Icon,Grid,GridItem,NoticeBar,
  Tag, Tab, Tabs, NavBar, PullRefresh, Picker, Field, Popup, Form, RadioGroup, Radio,
  Cell, CellGroup, Card, Switch, Dialog } from 'vant'
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
import 'vant/lib/tab/style';
import 'vant/lib/tabs/style';
import 'vant/lib/nav-bar/style';
import 'vant/lib/pull-refresh';
import 'vant/lib/picker/style';
import 'vant/lib/field/style';
import 'vant/lib/popup/style';
import 'vant/lib/form/style';
import 'vant/lib/radio/style';
import 'vant/lib/radio-group/style';
import 'vant/lib/cell-group/style';
import 'vant/lib/cell/style';
import 'vant/lib/card/style';
import 'vant/lib/switch/style';
import 'vant/lib/dialog/style';
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
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NavBar);
Vue.use(PullRefresh);
Vue.use(Picker);
Vue.use(Field);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Card);
Vue.use(Switch);
Vue.use(Dialog);
Vue.prototype.$dialog = Dialog;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
