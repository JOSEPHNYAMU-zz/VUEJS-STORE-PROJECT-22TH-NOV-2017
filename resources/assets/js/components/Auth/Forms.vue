<template>
    <div class="small-12 columns" id="pad">
        <div class="grid-x">

            <!-- Login -->
            <div class="reveal" id="account" data-reveal>
                <h5><i class="fi-lock"></i>&nbsp;Login</h5>
                <hr/>

                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control" v-model="username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" v-model="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button class="button float-right success"><i class="fi-unlock"></i>&nbsp;Login &nbsp;&rarr;</button>
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

                <form>
                    <div class="form-group">
                        <label for="name">Fullname</label>
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="text" class="form-control" id="email" aria-describedby="emailHelp" placeholder="info@shopping.com">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="passwords" placeholder="Password">
                    </div>
                    <button class="button float-right"><i class="fi-pencil"></i>&nbsp;Register</button>
                    <a class="float-right success" style="margin-right: 10px;" data-open="account"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;Have an account?</a>
                </form>
                <button class="close-button" data-close aria-label="Close reveal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>



        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                email: '',
                password: ''
            }
        },
        methods:{
            login () {
                this.$http.get("http://127.0.0.1:8000/api/login")
            }
        }

    }
</script>