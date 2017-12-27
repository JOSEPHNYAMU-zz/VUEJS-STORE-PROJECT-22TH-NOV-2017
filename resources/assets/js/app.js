require('./foundation');
import router from './router'

window.Vue = require('vue');
Vue.component('main-index', require('./components/Home.vue'));
const app = new Vue({
    el: '#app',
    mounted() {
        $(this.$el).foundation()
    },
    router
});
