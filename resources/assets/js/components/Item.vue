<template>
    <div class="cell">
        <div class="card">
            <img class="imgs imgx" :src="'https://www.cytonnmall.ml/images/' + item.image">
            <div class="card-section">
                <div class="grid-x">
                    <div class="small-6 columns float-left">
                        <strong><h6 class="blue">{{item.title}}</h6></strong>
                    </div>
                    <div class="small-6 columns float-right align-right right">
                        <small><strong>{{item.price | formatMoney}}/=</strong></small>
                        <small class="price" v-if="qtyInCart > 0">x{{qtyInCart}}</small>
                    </div>
                    <div class="small-12 columns" style="border-top: 1px solid #f2f2f2;">
                        <small><i>{{item.description}}</i></small>
                    </div>

                    <div class="small-12 columns">
                        <br/>
                        <button style="margin-left: 5px;" class="button primary float-right tiny"
                                @click="addToCart"
                                v-if="(qtyInCart == 0 && logged == false) || (qtyInCart == 0 && auth.role == 'User')"><i
                                class="fi-shopping-cart"></i>&nbsp;Buy
                        </button>

                        <span v-else>
                            <span v-if="auth.role != 'Admin'">
                                <button class="button tiny alert" @click="dec"><i class="fi-minus"></i></button>
                            <button class="button tiny primary" @click="inc"><i class="fi-plus"></i></button>
                            </span>
                                            </span>
                        <button v-if="auth.role == 'User' || logged == false" style="margin-left: 5px;"
                                class="button success float-right tiny"><i
                                class="fi-eye"></i>&nbsp;View
                        </button>
                        <button v-if="auth.role === 'Admin'"
                                class="button alert float-right tiny"
                                @click="$emit('remove-item')"><i class="fi-trash"></i>&nbsp;Del
                        </button>
                        <router-link style="margin-right: 5px;" class="button primary float-right tiny"
                                     v-if="auth.role === 'Admin'" :to="'/item/' + item.id + '/edit'"><i
                                class="fi-pencil"></i>&nbsp;Edit
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Auth from '../store/auth'
    import {post} from '../helpers/api'
    import {get, byMethod} from '../helpers/api'
    import Msg from '../helpers/msg'
    import Vue from 'vue'
    import _ from 'lodash'
    import State from '../Cart/cart'

    export default {
        props: ['item'],
        data() {
            return {
                shared: State.data,
                auth: Auth.state
            }
        },
        computed: {
            logged() {
                if (this.auth.api_token && this.auth.role) {
                    return true
                }
                return false
            },
            qtyInCart() {
                var found = _.find(this.shared.cart, ['id', this.item.id]);
                if (typeof found == 'object') {
                    return found.qty
                } else {
                    return 0
                }
            }
        },
        methods: {
            addToCart() {
                State.add(this.item)
            },
            dec() {
                State.dec(this.item)
            },
            inc() {
                State.inc(this.item)
            }
        }
    }

</script>