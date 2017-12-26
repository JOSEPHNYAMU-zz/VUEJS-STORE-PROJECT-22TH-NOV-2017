<template>
    <div class="small-12 columns" id="pad">
        <div class="grid-x">

            <!-- Login -->
            <div class="reveal" id="account" data-reveal>
                <h5><i class="fi-lock"></i>&nbsp;Login</h5>
                <hr/>

                <form @submit.prevent="login" method="post">

                    <div v-if="msg.success" class="green">
                        {{msg.success}}
                    </div>
                    <div v-if="msg.error" class="red">
                        {{msg.error}}
                    </div>

                    <div class="form-group">
                        <label for="emails">Email Address</label>
                        <input type="text" class="form-control" required id="emails" v-model="form.email" aria-describedby="emails" placeholder="info@shopping.com">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" required id="password" v-model="form.password" placeholder="Password">
                    </div>
                    <button type="submit" :disabled="isProcessing" class="button float-right success"><i class="fi-unlock"></i>&nbsp;Login &nbsp;&rarr;</button>
                    <a class="float-right" data-open="register" style="margin-right: 10px;">Don't have an account?</a>
                </form>
                <button class="close-button" data-close aria-label="Close reveal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <!-- Register -->
            <div class="reveal" id="register" data-reveal>
                <h5><i class="fi-plus"></i>&nbsp;Register Now</h5>
                <hr/>
                <form @submit.prevent="register" method="post">
                    <div v-if="msg.success" class="green">
                        {{msg.success}}
                    </div>
                    <div v-if="msg.error" class="red">
                        {{msg.error}}
                    </div>
                    <div class="form-group">
                        <label for="name">Fullname</label>
                        <input type="text" class="form-control" required id="name" v-model="form.name" aria-describedby="name" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="text" class="form-control" required id="email" v-model="form.email" aria-describedby="email" placeholder="info@shopping.com">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" required id="passwords" v-model="form.password" placeholder="Password">
                    </div>
                    <button type="submit" :disabled="isProcessing" class="button float-right"><i class="fi-pencil"></i>&nbsp;Register</button>
                    <a class="float-right success" style="margin-right: 10px;" data-open="account"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;Login Here</a>
                </form>
                <button class="close-button" data-close aria-label="Close reveal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import Msg from '../../helpers/msg'
    import {post} from '../../helpers/api'
    import Auth from '../../store/auth'
    export default {
        data(){
            return {
                form:{
                    name: '',
                    email: '',
                    password: ''
                },
                msg: Msg.state,
                auth: Auth.state,
                error:{},
                isProcessing:false
            }
        },
        methods:{
            register() {
                this.isProcessing = true;
                this.error = {};
                post(`/api/register`, this.form)
                    .then ((res) => {
                        if (res.data.registered) {
                            this.form = '';
                            Msg.setSuccess('User Successfully added!')
                        }
                        this.isProcessing = false


                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.error = err.response.data;
                            Msg.setError('Email Address already Exist')
                        }
                        this.isProcessing = false
                    })
            },
            login() {
                this.isProcessing = true;
                this.error = {};
                post(`/api/login`, this.form)
                    .then ((res) => {
                        if (res.data.authenticated) {
                            this.$router.push('/shop');
                            Auth.set(res.data.api_token, res.data.name, res.data.role);
                            Msg.setSuccess('Login Successful!...Welcome to Cytonn Mall, your shopping Hub!!')
                        }
                        this.isProcessing = false


                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.error = err.response.data;
                            Msg.setError('Wrong Login Details')
                        }
                        this.isProcessing = false
                    })
            }
        }

    }
</script>