<template>
    <div id="row">
        <div class="top-bar" id="main-menu"
             style="background-color:transparent;top:0%;width:100%;">
            <ul style="background-color: transparent;" type="none" class="float-left">
                <li style="background-color: transparent;" type="none" class="menu-tex"><img class="logo" style="width:107px;" src="../images/logox.png"/>
                </li>
            </ul>
            <div class="top-bar-left" style="background-color:rgba(0,0,0,0.5);margin-left: 16px;">
                <ul style="background-color:rgba(0,0,0,0.5);padding:10px;" id="drop-down" class="dropdown menu" v-data-dropdown-menu>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                    <li v-if="auth.role === 'User'">
                        <router-link class="menus" to="/contact"><i class="fi-telephone"></i>&nbsp;CONTACT US
                        </router-link>
                    </li>
                    <li v-if="auth.role === 'User'">
                        <a href="#" style="color:#ffffff;"><i class="fi-book"></i>&nbsp;ABOUT US</a>
                    </li>
                    <li v-if="auth.role === 'Admin'">
                        <router-link class="menus" to="/"><i class="fi-home"></i>&nbsp;ITEMS HOME
                        </router-link>
                    </li>
                    <li v-if="auth.role === 'Admin'">
                        <router-link class="menus" to="/add"><i class="fi-plus"></i>&nbsp;ADD NEW ITEM
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right" style="background-color:rgba(0,0,0,0.5);">
                <ul style="background-color:rgba(0,0,0,0.5);padding:20px;" class="dropdown menu"
                    data-options="disableHover:true;clickOpen:true" v-data-dropdown-menu>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                        <a href="#" style="color:#ffffff;" data-open="account"><i
                                class="fi-torsos"></i>&nbsp;{{auth.name}}</a>
                    </li>
                    <li><a href="#" style="color:#ffffff;">|</a></li>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                        <a href="#" @click.stop="logout" style="color:#ffffff;" data-open="account"><i
                                class="fi-lock"></i>&nbsp;Logout</a>
                    </li>
                    <li v-if="auth.role === 'User'"><a href="#" style="color:#ffffff;">|</a></li>
                    <li v-if="auth.role === 'User'">
                        <a href="#" style="color:#ffffff;"><i class="fi-shopping-cart"></i>&nbsp;</a>
                        <ul class="menu vertical" style="width:500px;">

                            <h5>1&nbsp;<i class="fa fa-shopping-cart" aria-hidden="true"></i></h5>
                            <hr/>
                            <p class="lead">I have another modal inside of me!</p>
                            <button class="button float-right" data-open="exampleModal3"><i class="fa fa-paypal"
                                                                                            aria-hidden="true"></i>&nbsp;Checkout
                            </button>

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

    Vue.directive('data-dropdown-menu', {
        bind: function (el) {
            new Foundation.DropdownMenu($(el));
        }
    });

    export default {
        data() {
            return {
                auth: Auth.state
            }
        },
        computed: {
            logged() {
                if (this.auth.api_token && this.auth.role) {
                    return true
                }
                return false
            }
        },
        methods: {
            logout() {
                post(`/api/logout`)
                    .then((res) => {
                        if (res.data.signOut) {
                            Auth.remove();
                            this.$router.push('/');
                            location.reload()

                        }
                    })
            }
        }
    }
</script>