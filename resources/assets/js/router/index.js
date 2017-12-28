import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../components/All.vue'
import Shop from '../components/Shop.vue'
import Add from '../components/Add.vue'
import Update from '../components/Update.vue'
import Contact from '../components/Contact.vue'
import Account from '../components/Account.vue'

Vue.filter('formatMoney', (value) => {
    return Number(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
});
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {path: '/', component: All},
        {path: '/shop', component: Shop},
        {path: '/add', component: Add},
        {path: '/account', component: Account},
        {path: '/contact', component: Contact},
        {path: '/item/:item/edit', component: Update}
    ]
});
export default router
