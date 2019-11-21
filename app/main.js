import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App.vue';
import router from './router/router.js';

Vue.use(ElementUI);

new Vue({
    'el':"#app",
    render(h){
        return h(App);
    },
    router
})