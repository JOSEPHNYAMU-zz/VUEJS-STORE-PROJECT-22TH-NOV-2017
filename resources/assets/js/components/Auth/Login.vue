<template>
    <div>
        <h6><i class="fi-unlock"></i>&nbsp;LOGIN</h6>
        <form @submit.prevent="login" method="post">
            <div v-if="msg.success" class="green">
                {{msg.success}}
            </div>
            <div v-if="msg.error" class="red">
                {{msg.error}}
            </div>
            <div class="form-group">
                <label for="emails">Email Address</label>
                <input type="text" class="form-control" required id="emails" v-model="form.email"
                       aria-describedby="emails" placeholder="info@shopping.com">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" required id="password" v-model="form.password"
                       placeholder="Password">
            </div>
            <button type="submit" class="button float-right success"><i class="fi-unlock"></i>&nbsp;Login &nbsp;&rarr;
            </button>
        </form>
    </div>
</template>
<script>
    import Msg from '../../helpers/msg'
    import {post} from '../../helpers/api'
    import Auth from '../../store/auth'
    import Vue from 'vue'

    export default {
        created() {
            Auth.initialize()
        },
        data() {
            return {
                form: {
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
            login() {
                this.error = {};
                post(`/api/login`, this.form)
                    .then((res) => {
                        if (res.data.authenticated) {
                            Auth.set(res.data.api_token, res.data.name, res.data.role);
                            this.$router.push('/shop');
                            Msg.setSuccess('Login Successful!...Welcome to Cytonn Mall, your shopping Hub!!')
                        }
                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.error = err.response.data;
                            Msg.setError('Wrong Login Details')
                        }
                    })
            }
        }

    }
</script>