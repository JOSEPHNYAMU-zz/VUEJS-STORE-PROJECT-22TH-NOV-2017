<template>
    <div class="row">
        <main-menu></main-menu>
        <div class="small-12 columns">
            <div class="row">
                <div class="small-12 columns">
                    <div class="header-unit" style="height:300px;">
                        <banner-image></banner-image>
                    </div>
                </div>
                <banner-texts></banner-texts>
                <div class="small-12 columns"
                     style="text-align:center;color:#0A0A0A;">
                    <div class="grid-x padded paddy">
                        <div class="medium-6 large-12 cell" style="color:#ffffff;">
                            <div class="grid-container">
                                <div class="grid-x grid-padding-x small-up-2 medium-up-4">
                                    <store-items @show-item="viewItem(item)" v-for="item in items" :item="item" :key="item.id"></store-items>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <action-section></action-section>
                <foot-data></foot-data>
                <div v-if="msg.success" class="green">
                    <i class="fi-check"></i>&nbsp;&nbsp;{{msg.success}}
                </div>
                <div v-if="msg.error" class="red">
                    <i class="fi-info"></i>&nbsp;&nbsp;{{msg.error}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from './Menu.vue'
    import BannerText from './BannerText.vue'
    import Footer from './Footer.vue'
    import Banner from './Banner.vue'
    import Item from './Item.vue'
    import Action from './Action.vue'
    import Register from './Auth/Register.vue'
    import Login from './Auth/Login.vue'
    import Auth from '../store/auth'
    import {post} from '../helpers/api'
    import {get, byMethod} from '../helpers/api'
    import Msg from '../helpers/msg'
    import Vue from 'vue'
    import _ from 'lodash'
    import State from '../Cart/cart'

    export default {
        mounted() {
            $(this.$el).foundation();
        },
        computed: {
            logged() {
                if (this.auth.api_token && this.auth.role) {
                    return true
                }
                return false
            }
        },
        created() {
            this.$http.get('api/items')
                .then(response => {
                    this.items = response.body
                });
            Auth.initialize();
            if (this.auth.api_token && this.auth.name) {
                this.$router.push('/shop')
            } else {
                this.$router.push('/')
            }
        },
        data() {
            return {
                component: 'login-view',
                auth: Auth.state,
                shared: State.data,
                msg: Msg.state,
                error: {},
                items: []
            }
        },
        methods:{
            viewItem(item) {

                swal({
                    title: item.title + " Specifications",
                    html: true,
                    text: "FEATURES: " + item.description + "\nPRICE: " + item.price + "/=\n",
                    icon: "https://www.cytonnmall.ml/images/"+ item.image,
                    button: {
                        text: "CLOSE",
                    },
                });
            }
        },
        components: {
            'main-menu': Menu,
            'login-modal': Login,
            'banner-texts': BannerText,
            'foot-data': Footer,
            'banner-image': Banner,
            'store-items': Item,
            'action-section': Action,
            'register-modal': Register
        },
        name: 'app'
    }
</script>

