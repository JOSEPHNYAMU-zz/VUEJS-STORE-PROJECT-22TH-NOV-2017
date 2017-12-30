<template>
    <div>
        <h6><i class="fi-plus"></i>&nbsp;CREATE ACCOUNT</h6>
                <form method="post" @submit.prevent="register">
                    <div v-if="msg.success" class="green">
                        <i class="fi-check"></i>&nbsp;&nbsp;{{msg.success}}
                    </div>
                    <div v-if="msg.error" class="red">
                        <i class="fi-info"></i>&nbsp;&nbsp;{{msg.error}}
                    </div>
                    <div class="form-group">
                        <label for="name">Fullname</label>
                        <input type="text" class="form-control" required id="name" v-model="form.name"
                               aria-describedby="name" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="text" class="form-control" required id="email" v-model="form.email"
                               aria-describedby="email" placeholder="info@shopping.com">
                    </div>
                    <div class="form-group">
                        <label for="passwords">Password</label>
                        <input type="password" class="form-control" required id="passwords" v-model="form.password"
                               placeholder="Password">
                    </div>
                    <button @click="register" type="button" class="button float-right"><i class="fi-pencil"></i>&nbsp;Register
                    </button>
                </form>
    </div>
</template>
<script>
    import Msg from '../../helpers/msg'
    import {post} from '../../helpers/api'
    import Auth from '../../store/auth'
    import Vue from 'vue'
    import Foundation from 'foundation-sites'

    export default {
        created(){
            Auth.initialize()
        },
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: ''
                },
                msg: Msg.state,
                auth: Auth.state,
                error: {}
            }
        },
        mounted() {
            $(this.$el).foundation();
        },
        methods: {
            register() {
                this.error = {};
                post(`/api/register`, this.form)
                    .then((res) => {
                        if (res.data.registered) {
                            this.form = '';
                            Msg.setSuccess('User Successfully added!')
                        }
                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.error = err.response.data;
                            Msg.setError('Email Address already Exist')
                        }
                    })
            }
        }

    }
</script>