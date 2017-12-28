<template>
    <div>
        <router-view></router-view>
        <map-view></map-view>
        <about-view></about-view>
    </div>
</template>
<script>
    import Map from './Map'
    import About from './About.vue'
    export default {
        components:{
           'map-view': Map,
            'about-view': About
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
