import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;

import APIUtil from "./util/APIUtil";

Vue.prototype.$API = APIUtil;

import axios from 'axios';

Vue.prototype.$axios = axios;

import * as echarts from 'echarts';

Vue.prototype.$echarts = echarts;

import {
    Button, Tabbar, TabbarItem, Search, Toast, Icon, Grid, GridItem, NoticeBar,
    Tag, Tab, Tabs, NavBar, PullRefresh, Picker, Field, Popup, Form, RadioGroup, Radio,
    Cell, CellGroup, Card, Switch, Dialog, Swipe, SwipeItem, Cascader, Circle,
    Step, Steps, Calendar, ActionSheet
} from 'vant'
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
import 'vant/lib/swipe/style';
import 'vant/lib/swipe-item/style';
import 'vant/lib/cascader/style';
import 'vant/lib/circle/style';
import 'vant/lib/step/style';
import 'vant/lib/steps/style';
import 'vant/lib/calendar/style'
import 'vant/lib/action-sheet/style';

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
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Cascader);
Vue.use(Circle);
Vue.use(Step);
Vue.use(Steps);
Vue.use(Calendar);
Vue.use(ActionSheet);
Vue.prototype.$dialog = Dialog;

import BoNavbar from "./components/child/bo_navbar";

Vue.use(BoNavbar);

import toolUtil from "./util/toolUtil";

Vue.prototype.$ID = toolUtil.getID();


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
