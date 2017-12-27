<template>
    <div class="cart">
        <div v-if="total == 0">
            <h5><i class="fi-shopping-cart"></i>&nbsp;Empty Cart</h5>
            <hr/>
            <p class="no">No Items in the cart</p>
        </div>
        <div class="" v-else>
            <h5 class="greens"><i class="fi-shopping-cart"></i>&nbsp;Items Available</h5>
            <hr/>
            <table class="striped">
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
                             :src="'http://mall.net/images/' + item.image">
                    </td>
                    <td>
                        <small>{{item.title}}</small>
                    </td>
                    <td>
                        <small>Ksh. {{item.price}}</small>
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
            <div v-if="auth.role != 'User'" >
            <button class="button tiny primary float-right" data-open="account"><i class="fi-unlock"></i>&nbsp;Login to Checkout</button>
            <button style="margin-right: 7px;" data-open="register" class="button tiny alert float-right"><i class="fi-pencil"></i>&nbsp;Register to Checkout</button>
            </div>
            <button v-if="auth.role == 'User'" data-open="checks" class="button tiny success float-right"><i class="fi-paypal"></i>&nbsp;Checkout</button>
            <br/>
        </div>
        <div class="reveal" id="checks" data-reveal>
            <h5 class="greens"><i class="fi-check"></i>&nbsp;Checkout Successful</h5>
            <hr/>
            Hello {{auth.name}},<br/>
            Thank You for shopping with us!!...You have successfully purchased the goods at Cytonn Mall.
            Your Order will be processed in few minutes.<br/></br>
            <strong>Cytonn Mall<br/>
                Fedha Plaza<br/>
                0722563684</strong>
            <button class="close-button" data-close aria-label="Close reveal" type="button">
                <span aria-hidden="true">&times;</span>
            </button>
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