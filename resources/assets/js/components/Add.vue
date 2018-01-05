<template>
    <div class="row">
        <main-menu></main-menu>
       <div class="grid-x">
           <div class="small-3 columns"></div>
           <div class="small-6 columns">

               <form @submit.prevent="add" method="post">
                   <div v-if="msg.success" class="green">
                       {{msg.success}}
                   </div>
                   <div v-if="msg.error" class="red">
                       {{msg.error}}
                   </div>

                   <div class="form-group">
                       <label for="title">Name</label>
                       <input type="text" required class="form-control" v-model="item.title" id="title" aria-describedby="title" placeholder="Product Name">
                   </div>
                   <div class="form-group">
                       <label for="price">Price</label>
                       <input type="number" required class="form-control" min="0" v-model="item.price" id="price" aria-describedby="price" placeholder="Product Price">
                   </div>
                   <div class="form-group">
                       <label for="price">Image</label>
                       <input type="file" @change="ImageChanged" required class="form-control" id="image" aria-describedby="image">
                   </div>
                   <div class="form-group">
                       <label for="body">Description</label>
                       <textarea rows="5" class="form-control" v-model="item.description" required id="body" placeholder="Product Description"></textarea>
                   </div>
                   <button type="submit" class="button primary expanded"><i class="fi-plus"></i>&nbsp;ADD ITEM</button>
               </form>
           </div>
           <div class="small-3 columns"></div>
       </div>
        <footer-view></footer-view>
    </div>
</template>
<script>
    import MainMenu from "./MenuLogged.vue"
    import Auth from '../store/auth'
    import Msg from '../helpers/msg'
    import {post} from '../helpers/api'
    import Items from './Items.vue'
    import Footer from './Footer.vue'
    export default {
        mounted() {
            $(this.$el).foundation();
        },
        data(){
            return {
                auth: Auth.state,
                msg: Msg.state,
                item:{
                    title: '',
                    price: 0,
                    description: '',
                    image: ''
                }
            }
        },
        components:{
            MainMenu,
            'main-menu': MainMenu,
            'footer-view': Footer
            },
        created() {
            Auth.initialize();
            if (this.auth.role === 'Admin') {
                //DO Nothing
            } else {
                this.$router.push('/shop')
            }
        },
        methods:{
            ImageChanged(e){
                console.log(e.target.files[0]);
                var fileReader = new FileReader();
                fileReader.readAsDataURL(e.target.files[0]);
                fileReader.onload = (e) => {
                    this.item.image = e.target.result
                }
                console.log(this.item);
            },
            add(){
                this.$http.post('api/items', this.item)
                    .then(response => {
                        if (response.data) {
                            Msg.setSuccess(this.item.title + ' Has been successfully Added to the store!');
                            this.$router.push('/shop')
                        }
                    })
                    .catch((err) => {
                        if (err.response.status === 422) {
                            this.error = err.response.data;
                            Msg.setError('There was a problem adding the item, please try again!!')
                        }
                    })
            }
        }

    }
</script>