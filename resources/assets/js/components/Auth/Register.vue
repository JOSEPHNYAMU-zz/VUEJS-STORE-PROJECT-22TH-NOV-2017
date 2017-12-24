<template>
    <div class="small-12 columns" id="pad">
        <div class="grid-x">

            <!-- Register -->
            <div class="reveal" id="account" data-reveal>
                <h5><i class="fa fa-lock" aria-hidden="true">&nbsp;Login</i></h5>
                <hr/>

                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password">
                    </div>
                    <button class="button float-right" data-open="exampleModal3"><i class="fa fa-plus" aria-hidden="true"></i>&nbsp;Register</button>
                    <button class="button float-right success" style="margin-right: 10px;" data-open="exampleModal3"><i class="fa fa-lock" aria-hidden="true"></i>&nbsp;Login &nbsp;&rarr;</button>
                </form>
                <login-form></login-form>
                <button class="close-button" data-close aria-label="Close reveal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>


        </div>
    </div>
</template>

<script>
    import Login from './Login.vue'
    export default {
        data(){
            return {

            }
        },
        components:{
            'login-form': Login
        }

    }
</script>