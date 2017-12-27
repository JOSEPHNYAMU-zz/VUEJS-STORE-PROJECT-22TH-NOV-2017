<template>
    <div>
        <main-menu></main-menu>

        <div class="grid-x">
            <div class="small-1 column">
            </div>
            <div class="small-10 column">
                <div class="small-12 columns"
                     style="text-align:center;color:#0A0A0A;">
                    <div v-if="msg.success" class="green">
                        {{msg.success}}
                    </div>
                    <div v-if="msg.error" class="red">
                        {{msg.error}}
                    </div>
                    <div class="grid-x padded paddy">
                        <div class="medium-6 large-12 cell" style="color:#ffffff;">
                            <div class="grid-container">
                                <div class="grid-x grid-padding-x small-up-2 medium-up-4">
                                    <store-items @remove-item="removeItem(item)" v-for="item in items" :item="item" :key="item.id"></store-items>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-1 column">
            </div>
        </div>
        <hr/>
        <footer-view></footer-view>
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
    import Footer from './Footer.vue'

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
            'store-items': Item,
            'footer-view': Footer
        },
        data() {
            return {
                auth: Auth.state,
                msg: Msg.state,
                error: {},
                items: []
            }
        },
        methods:{
            removeItem(item) {
                this.$http.delete('api/items/' + item.id)
                    .then(response => {
                        let index = this.items.indexOf(item);
                        this.items.splice(index, 1);
                        Msg.setSuccess('The Item Has been Removed!')
                    })
            }
        }
    }
</script>