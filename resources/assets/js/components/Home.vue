<template>
    <div>
        <main-menu></main-menu>
        <router-view></router-view>
    </div>
</template>

<script>
    import Menu from './Menu.vue'
    export default {
        components:{
            'main-menu': Menu
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
