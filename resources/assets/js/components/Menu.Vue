<template>
    <div id="row">
        <div class="top-bar menu-mobile" id="main-menu"
             style="background-color:transparent;top:0%;position:absolute;width:100%;">
            <ul style="background-color: transparent;" type="none" class="float-left">
                <li style="background-color: transparent;" type="none" class="menu-tex">
                    <img class="logo" style="width:96px;" src="../images/logox.png"/>
                </li>
            </ul>
            <div class="top-bar-left" style="background-color:rgba(0,0,0,0.5);margin-left: 16px;">
                <ul style="background-color:rgba(0,0,0,0.5);padding:10px;" id="drop-down" class="dropdown menu"
                    data-dropdown-menu>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                        <router-link style="color:#ffffff;" class="menus" to="/">
                            <i class="fi-home"></i>&nbsp;HOME
                        </router-link>
                    </li>
                    <li>
                        <a href="#" style="color:#ffffff;" data-open="maps"><i class="fi-telephone"></i>&nbsp;CONTACT US</a>
                    </li>
                    <li>
                        <a href="#" style="color:#ffffff;" data-open="about"><i class="fi-book"></i>&nbsp;ABOUT US</a>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right" style="background-color:rgba(0,0,0,0.5);">
                <ul style="background-color:rgba(0,0,0,0.5);padding:20px;" class="dropdown menu"
                    data-options="disableHover:true;clickOpen:true" data-dropdown-menu>
                    <li>
                        <a href="#" style="color:#ffffff;"><i class="fi-magnifying-glass"></i>&nbsp;</a>
                        <ul class="menu vertical" style="width:400px;border-radius:3px;">
                            <form action="#">
                                <div class="form-group">
                                    <input type="text" v-model="search" style="max-width:100% !important;"
                                           class="form-control" placeholder="Search..."/>
                                </div>
                            </form>
                        </ul>
                    </li>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                        <router-link style="color:#ffffff;" class="menus" to="/account"><i class="fi-torsos"></i>&nbsp;ACCOUNT
                        </router-link>
                    </li>
                    <li><a href="#" style="color:#ffffff;">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a></li>
                    <li>
                        <a href="#" style="color:#ffffff;"><i class="fi-shopping-cart"></i>&nbsp;<!-- <sup class="price" >{{counter}}</sup> --></a>
                        <ul class="menu vertical" style="width:500px;">
                            <div class="cart">
                                <item-cart></item-cart>
                            </div>

                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import Auth from '../store/auth'
    import {post} from '../helpers/api'
    import {get} from '../helpers/api'
    import Vue from 'vue'
    import Cart from './Cart.vue'
    import _ from 'lodash'
    import State from '../Cart/cart'
    import axios from 'axios'

    export default {
        props: ['item'],
        data() {
            return {
                keywords: '',
                results: []
            }
        },
        mounted() {
            $(this.$el).foundation();
        },
        components: {
            'item-cart': Cart
        },

        computed: {
            item() {
                return this.cart.filter(items => {
                    return items.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },


        methods: {
            searchAfterDebounce: _.debounce(
                function () {
                    this.search()
                }, 500
            ),
        }
    }
</script>