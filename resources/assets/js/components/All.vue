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
                                    <store-items v-for="item in items" :item="item" :key="item.id"></store-items>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <action-section></action-section>
                <foot-data></foot-data>
            </div>
        </div>
        <auth-view></auth-view>
    </div>
</template>

<script>
    import Menu from './Menu.vue'
    import BannerText from './BannerText.vue'
    import Footer from './Footer.vue'
    import Banner from './Banner.vue'
    import Item from './Item.vue'
    import Action from './Action.vue'
    import Forms from './Auth/Forms.vue'
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
        components: {
            'main-menu': Menu,
            'banner-texts': BannerText,
            'foot-data': Footer,
            'banner-image': Banner,
            'store-items': Item,
            'action-section': Action,
            'auth-view': Forms
        },
        name: 'app'
    }
</script>

