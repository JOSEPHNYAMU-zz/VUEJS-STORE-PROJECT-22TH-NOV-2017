<template>
    <div class="row">
        <main-menu></main-menu>
        <br/><br/><br/><br/><br/>
        <div class="grid-x">
            <div class="small-1 columns"></div>
            <div class="small-10 columns">
                <map-view></map-view>
            </div>
            <div class="small-1 columns"></div>
        </div>
        <footer-view></footer-view>
    </div>
</template>
<script>
    import MainMenu from "./Menu.vue"
    import Auth from '../store/auth'
    import Msg from '../helpers/msg'
    import {post} from '../helpers/api'
    import Footer from './Footer.vue'
    import Map from './Map.vue'
    export default {
        mounted() {
            $(this.$el).foundation();
        },
        data(){
            return {
                auth: Auth.state,
                msg: Msg.state
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
            'map-view': Map
        }
    }
</script>