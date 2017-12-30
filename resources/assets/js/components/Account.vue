<template>
    <div class="row">
        <main-menu></main-menu>
        <br/><br/><br/><br/><br/>
       <div class="grid-x">
           <div class="small-1 columns"></div>
           <div class="small-6 columns pady">
               <shopping-cart></shopping-cart>
           </div>
           <div class="small-4 columns">
               <component :is="currentView"></component>
               <p v-if="currentView =='login-view'" role="presentation">
                   <a href="#" @click="currentView='register-view'">Don't have an Account?</a>
               </p>

               <p v-if="currentView =='register-view'" role="presentation">
                   <a href="#" @click="currentView='login-view'">Login Now</a>
               </p>

           </div>
           <div class="small-1 columns"></div>
       </div>
        <br/><br/><br/>
        <footer-view></footer-view>
    </div>
</template>
<script>
    import MainMenu from "./Menu.vue"
    import Auth from '../store/auth'
    import Msg from '../helpers/msg'
    import {post} from '../helpers/api'
    import Footer from './Footer.vue'
    import Login from './Auth/Login.vue'
    import Register from './Auth/Register.vue'
    import Cart from './CartInLogin.vue'
    export default {
        mounted() {
            $(this.$el).foundation();
        },
        data(){
            return {
                auth: Auth.state,
                msg: Msg.state,
                currentView: 'login-view',
                items: []
            }
        },
        computed:{
            logged() {
                if (this.auth.api_token && this.auth.role) {
                    return true
                }
                return false
            }
        },
        components: {
            'main-menu': MainMenu,
            'footer-view': Footer,
            'login-view': Login,
            'register-view': Register,
            'shopping-cart': Cart
        },
        created() {
            Auth.initialize();
            if (this.logged === false) {
                //DO Nothing
            } else {
                this.$router.push('/shop')
            }
        }
    }
</script>