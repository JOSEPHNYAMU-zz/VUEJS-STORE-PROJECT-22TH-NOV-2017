<template>
    <div class="cart">
        <div v-if="total == 0">
            <h5><i class="fi-shopping-cart"></i>&nbsp;Empty Cart</h5>
            <hr/>
            <p class="no">No Items in the cart</p>
        </div>
        <div class="" v-else>
            <h5 class="greens"><i class="fi-shopping-cart"></i>&nbsp;Items in Cart</h5>
            <hr/>
            <table class="striped" style="text-align: left;">
                <tr>
                    <th>
                        <small>ITEM</small>
                    </th>
                    <th>
                        <small>NAME</small>
                    </th>
                    <th>
                        <small>ITEM PRICE</small>
                    </th>
                    <th>
                        <small>QTY</small>
                    </th>
                    <th>
                        <small>SUB TOTAL</small>
                    </th>
                </tr>
                <br/>
                <tr v-for="item in items" v-if="item.qty != 0">
                    <td>
                        <img style="width:40px;height:40px;border-radius: 3px;margin-bottom: 8px;"
                             :src="'https://cytonnmall.ml/images/' + item.image">
                    </td>
                    <td>
                        <small>{{item.title}}</small>
                    </td>
                    <td>
                        <small>Ksh. {{item.price | formatMoney}}</small>
                    </td>
                    <td>
                        <small>{{item.qty}}</small>
                    </td>
                    <td>
                        <small>Ksh. {{item.qty * item.price | formatMoney}}</small>
                    </td>
                </tr>
            </table>
            <br/>
            <div class="green" style="width:auto;">
                <span><strong>Total</strong></span>&nbsp;&nbsp;<span>Ksh. {{total | formatMoney}}</span></div>
            <br/>
        </div>
    </div>
</template>
<script>
    import State from '../Cart/cart'
    import _ from 'lodash'
    import Auth from '../store/auth'
    import {post} from '../helpers/api'
    import {get} from '../helpers/api'
    import Vue from 'vue'

    export default {
        mounted() {
            $(this.$el).foundation();
        },
        data() {
            return {
                items: State.data.cart,
                auth: Auth.state
            }
        },
        computed: {
            total() {
                return _.sumBy(this.items, function (item) {
                    return (item.price * item.qty)
                })
            }
        },
        logged() {
            if (this.auth.api_token && this.auth.role) {
                return true
            }
            return false
        }
    }
</script>