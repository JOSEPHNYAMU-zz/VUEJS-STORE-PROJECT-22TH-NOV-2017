<template>
    <div>
        <main-menu></main-menu>

        <div class="grid-x">
            <div class="small-1 column">

            </div>
            <div class="small-10 column">
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
    import Item from './Item.vue'
    import Vue from 'vue'
    import _ from 'lodash'
    import State from '../Cart/cart'

    export default {
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
        components: {
            'main-menu': Menu,
            'store-items': Item
        },
        data() {
            return {
                auth: Auth.state,
                msg: Msg.state,
                error: {},
                items: []
            }
        }
    }
</script>