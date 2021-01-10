import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue'
import App from './App.vue'
import {BootstrapVue, IconsPlugin} from "bootstrap-vue";
import VueRouter from 'vue-router';
import Cart from "./components/Cart";
import Vuelidate from "vuelidate/src";
import Restaurant from "./components/Restaurant";
import Dishes from "./components/Dishes";
import LoginFormComponent from "./components/LoginFormComponent";

Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const routes = [
  {path: '/cart', component: Cart, name: 'cart'},
  {path: '/', component: Restaurant, name: 'restaurant'},
  {path: '/dishes', component: Dishes, name: 'dishes'},
  {path: '/dishes/:id', component: Dishes, name: 'dishes/:id'},
  {path: '/login', component: LoginFormComponent, name: 'login'}
];

const router = new VueRouter({mode: 'history', routes: routes})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


