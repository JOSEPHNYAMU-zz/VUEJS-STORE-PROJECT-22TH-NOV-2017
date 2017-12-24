import Vue from 'vue'
import VueRouter from 'vue-router'
import All from '../components/All.vue'
// import Invoices from '../../js/components/Invoices.vue'
// import Pending from '../../js/components/Pending.vue'
// import Rejected from '../../js/components/Rejected.vue'
// import Paid from '../../js/components/Paid.vue'
// import Approved from '../../js/components/Approved.vue'

Vue.filter('formatMoney', (value) => {
    return Number(value)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
});
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [
        {path: '/', component: All},
        // {path: '/invoices', component: Invoices},
        // {path: '/invoices/pending', component: Pending},
        // {path: '/invoices/rejected', component: Rejected},
        // {path: '/invoices/paid', component: Paid},
        // {path: '/invoices/approved', component: Approved},
        // {path: '/invoices/new-user', component: require('../components/auth/Add.vue')},
        // {path: '/invoices/:id', component: require('../components/invoices/Display.vue')},
        // {path: '/invoices/:id/edit', component: require('../components/invoices/Form.vue')},
        // // {path: '/invoices/create', component: require('../components/invoices/Form.vue')}
    ]
});
export default router
