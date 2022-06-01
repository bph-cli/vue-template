import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN';

import './mock';
// css
import '@/styles/index.scss';

// import i18n from "./lang";

import '@/icons'; //icons

import '@/permission'; // permission control

import Shepherd from '@wytxer/shepherd-vue';

Vue.use(Shepherd);
Vue.use(ElementUI, { locale });
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App)
}).$mount('#app');
