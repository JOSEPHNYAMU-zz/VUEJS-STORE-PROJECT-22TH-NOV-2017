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
                    <main-menu></main-menu>
                    <banner-texts></banner-texts>
                    <store-items></store-items>
                    <action-section></action-section>
                    <foot-data></foot-data>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Menu from './components/Menu.vue'
    import BannerText from './components/BannerText.vue'
    import Footer from './components/Footer.vue'
    import Banner from './components/Banner.vue'
    import Items from './components/Items.vue'
    import Action from './components/Action.vue'

    export default {
        components: {
            'main-menu': Menu,
            'banner-texts': BannerText,
            'foot-data': Footer,
            'banner-image': Banner,
            'store-items': Items,
            'action-section': Action
        },
        name: 'app'
    }
</script>
