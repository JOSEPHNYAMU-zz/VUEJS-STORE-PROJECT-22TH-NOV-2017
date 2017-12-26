<template>
    <div>
        <main-menu></main-menu>

<div class="grid-x">
    <div class="small-1 column">

    </div>
    <div class="small-10 column">
     <shop-items></shop-items>
    </div>
    <div class="small-1 column">

    </div>
</div>
    </div>
</template>
<script>
    import Menu from './MenuLogged.vue'
    import Auth from '../store/auth'
    import Msg from '../helpers/msg'
    import {post} from '../helpers/api'
    import Items from './Items.vue'
    export default {
        created() {
            Auth.initialize();
            if (this.auth.api_token && this.auth.name) {
                this.$router.push('/shop')
            } else {
                this.$router.push('/')
            }
        },
        components:{
            'main-menu': Menu,
            'shop-items': Items
        },
        data(){
            return {
                auth: Auth.state,
                msg: Msg.state,
                error:{}
            }
        }
    }
</script>