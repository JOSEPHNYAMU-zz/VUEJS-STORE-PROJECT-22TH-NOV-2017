<template>
    <div>
        <main-menu></main-menu>
        <div class="grid-x">
            <div class="small-1 column">
            </div>
            <div class="small-10 column">
                <div class="small-12 columns"
                     style="text-align:center;color:#0A0A0A;">
                    <div class="grid-x">
                        <div class="small-4 columns">
                            <div v-if="msg.success" class="green">
                                <i class="fi-check"></i>&nbsp;&nbsp;{{msg.success}}
                            </div>
                            <div v-if="msg.error" class="red">
                                <i class="fi-info"></i>&nbsp;{{msg.error}}
                            </div>
                        </div>
                        <div class="small-8 columns">
                            <!-- Empty Div -->
                        </div>
                    </div>
                    <div class="grid-x padded paddy">
                        <div class="medium-6 large-12 cell" style="color:#ffffff;">
                            <div class="grid-container">
                                <div class="grid-x grid-padding-x small-up-2 medium-up-4">
                                    <store-items @show-item="viewItem(item)" @remove-item="removeItem(item)"
                                                 v-for="item in items" :item="item" :key="item.id"></store-items>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="small-1 column">
                <!-- Empty Div -->
            </div>
        </div>
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
                selectedItem: '',
                items: []

            }
        },
        mounted() {
            $(this.$el).foundation();
        },
        methods: {
            viewItem(item) {
                swal({
                    title: item.title + " Specifications",
                    html: true,
                    text: "FEATURES: " + item.description + "\nPRICE: " + item.price + "/=\n",
                    icon: "https://cytonnmall.ml/images/" + item.image,
                    button: {
                        text: "CLOSE",
                    },
                });
            },
            removeItem(item) {
                swal({
                    title: "Delete " + item.title + "?",
                    text: "Once deleted, you will not be able to recover this item!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {

                            this.$http.delete('api/items/' + item.id)
                                .then(response => {
                                    let index = this.items.indexOf(item);
                                    this.items.splice(index, 1);
                                    swal("Poof! " + item.title + " has been deleted!", {
                                        icon: "success",
                                    })
                                })
                                .catch((err) => {
                                    if (err.response.status === 422) {
                                        this.error = err.response.data;
                                        swal("There was a problem deleting " + item.title);
                                    }
                                })
                        }
                    });
            }
        }
    }
</script>