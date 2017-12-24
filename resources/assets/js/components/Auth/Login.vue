<template>
    <div class="small-12 columns" id="pad">
        <div class="grid-x">

            <!-- Register -->
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
                    <button class="button float-right success" data-open="exampleModal3"><i class="fi-unlock"></i>&nbsp;Login &nbsp;&rarr;</button>
                    <a class="float-right" data-open="exampleModal3" style="margin-right: 10px;">Dont have an account?</a>
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