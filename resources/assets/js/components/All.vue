<template>
    <div id="app">
        <div class="row">
            <div class="small-12 columns">
                <div class="row">
                    <div class="small-12 columns">
                        <div class="header-unit" style="height:300px;">
                            <banner-image></banner-image>
                        </div>
                    </div>
                    <banner-texts></banner-texts>
                    <store-items></store-items>
                    <action-section></action-section>
                    <foot-data></foot-data>
                    <login-view></login-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Menu from './Menu.vue'
    import BannerText from './BannerText.vue'
    import Footer from './Footer.vue'
    import Banner from './Banner.vue'
    import Items from './Items.vue'
    import Action from './Action.vue'
    import Login from './Auth/Login.vue'
    export default {
        components: {
            'main-menu': Menu,
            'banner-texts': BannerText,
            'foot-data': Footer,
            'banner-image': Banner,
            'store-items': Items,
            'action-section': Action,
            'login-view': Login
        },
        name: 'app'
    }
</script>
