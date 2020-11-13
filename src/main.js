import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

import './assets/js/app.js'
import './assets/scss/app.scss'

import 'bootstrap';
import 'popper.js';
import $ from 'jquery';
window.$ = $;

import 
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false

Vue.component("login-modal", require("./components/Login.vue").default);
Vue.component("alert", require("./components/Alert.vue").default);
Vue.component("navbar", require("./components/Navbar.vue").default);
Vue.component("sidebar", require("./components/admin/Sidebar.vue").default);

Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<button class="btn btn-info" v-on:click="count++">You clicked me {{ count }} times.</button>'
})

let app = ''

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


