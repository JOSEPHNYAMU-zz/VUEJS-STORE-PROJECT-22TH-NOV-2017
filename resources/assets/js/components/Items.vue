<template>
    <div class="small-12 columns"
         style="text-align:center;color:#0A0A0A;">
        <div class="grid-x">
            <div class="small-2 columns"></div>
            <div class="small-8 columns">
                <div v-if="msg.success" class="green">
                    {{msg.success}}
                </div>
                <div v-if="msg.error" class="red">
                    {{msg.error}}
                </div>
            </div>
            <div class="small-2 columns"></div>
        </div>
        <div class="grid-x padded paddy">
            <div class="medium-6 large-12 cell" style="color:#ffffff;">
                <div class="grid-container">
                    <div class="grid-x grid-padding-x small-up-2 medium-up-4">
                        <div class="cell" v-for="item in items">
                            <div class="card">
                                <img class="imgs imgx" :src="'https://www.cytonnmall.ml/images/' + item.image">
                                <div class="card-section">
                                    <div class="grid-x">
                                        <div class="small-6 columns float-left">
                                            <strong><h6 class="blue">{{item.title}}</h6></strong>
                                        </div>
                                        <div class="small-6 columns float-right align-right right">
                                            <small><strong>{{item.price | formatMoney}}/=</strong></small>
                                        </div>

                                        <div class="small-12 columns" style="border-top: 1px solid #f2f2f2;">
                                            <small><i>{{item.description}}</i></small>
                                        </div>

                                        <div class="small-12 columns">
                                            <br/>
                                            <button style="margin-left: 5px;" class="button primary float-right tiny"
                                                    @click='addItem(item)'><i class="fi-plus"></i>&nbsp;Buy
                                            </button>
                                            <button style="margin-left: 5px;" class="button success float-right tiny"><i
                                                    class="fi-eye"></i>&nbsp;View
                                            </button>
                                            <button style="margin-right: 5px;" v-if="auth.role === 'Admin'"
                                                    class="button alert float-left tiny"
                                                    @click='removeItem(item.id)'><i class="fi-trash"></i>&nbsp;Del
                                            </button>
                                            <router-link class="button primary float-left tiny"
                                                         v-if="auth.role === 'Admin'" :to="'/item/' + item.id + '/edit'"><i
                                                    class="fi-pencil"></i>&nbsp;Edit
                                            </router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

    export default {
        data() {
            return {
                auth: Auth.state,
                msg: Msg.state,
                error: {},
                items: []
            }
        },
        created() {
            Auth.initialize();
            this.$http.get('api/items')
                .then(response => {
                    this.items = response.body
                });
        },
        methods: {
            removeItem(value) {
                let id = value;
                this.$http.delete(`api/items/${value}`, id)
                    .then(response => {
                        if (response.data.delete) {
                            Msg.setSuccess('The Item Has been Removed!')
                        }
                    })
            }
        }
    }
</script>