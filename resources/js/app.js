import './bootstrap';

import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

import appContainer from './components/appContainer.vue';
Vue.component('app-container',appContainer);

const app = new Vue({
    vuetify:new Vuetify(),
    el: '#app',
});

