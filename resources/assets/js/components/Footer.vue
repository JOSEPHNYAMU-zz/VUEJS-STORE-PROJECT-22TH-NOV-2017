<template>
    <div class="small-12 columns" id="foot" style="text-align:center;padding:65px;color:#0A0A0A;">
        <div v-if="logged == false ||  auth.role == 'User'"
             class="small-12 columns" style="text-align:center;padding:20px;color:#0A0A0A;">
            <div class="grid-x">
                <div class="medium-6 large-6 cell" style="text-align: left;">
                    <h4 style="color:#919294;font-family: 'Proxima Nova Regular', sans-serif;">
                        Sign Up to our
                        Newsletter</h4>
                    <h5 style="color:#919294;font-family: 'Proxima Nova Regular', sans-serif;">
                        info@cytonnmall.com</h5>
                </div>
                <div class="medium-6 large-4 cell" style="text-align: right;">
                    <input style="vertical-align: bottom;box-shadow:none;border-top: none;border-left: none;border-right: none;"
                           type="email" required placeholder="info@cytonn.com"
                           aria-describedby="passwordHelpText">
                </div>
                <div class="medium-6 large-2 cell" style="text-align: right;">
                    <a href="#"
                       style="font-weight:bold;font-family: 'Proxima Nova', sans-serif;background-color: #92D047;padding-right:60px;padding-left:60px;"
                       class="foundation-button button">SIGN UP</a>
                </div>
            </div>
        </div>
        <div class="grid-x"
             style="text-align: left;margin-bottom:20px;border-bottom: solid 1px #D7D8DA;"></div>
        <div class="small-12 columns" style="text-align:center;padding:20px;color:#0A0A0A;">
            <div class="grid-x">
                <div class="medium-6 large-6 cell"
                     style="color:#808080;font-family: 'Proxima Nova Regular', sans-serif;text-align: left;">
                    &copy; 2017 Cytonn Mall, Inc. All rights reserved.
                </div>
                <div class="medium-6 large-6 cell" style="text-align: right;font-size: 28px;">
                    <a href="http://www.facebook.com/" target="_blank" style="color:#D7D8DA;"
                       class="footer-foundation-icons soc"><i class="fi-social-facebook"></i>&nbsp;&nbsp;&nbsp;</a>
                    <a href="http://www.twitter.com/" target="_blank" style="color:#D7D8DA;" id="soc"
                       class="footer-foundation-icons"><i class="fi-social-twitter"></i>&nbsp;&nbsp;&nbsp;</a>
                    <a href="http://www.linkedin.com/" target="_blank" style="color:#D7D8DA;" id="soc"
                       class="footer-foundation-icons"><i class="fi-social-linkedin"></i>&nbsp;&nbsp;&nbsp;</a>
                    <a href="http://www.youtube.com/" target="_blank" style="color:#D7D8DA;" id="soc"
                       class="footer-foundation-icons"><i class="fi-social-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Auth from '../store/auth'
    import {post} from '../helpers/api'
    import {get} from '../helpers/api'
    import Vue from 'vue'


    export default {
        mounted() {
            $(this.$el).foundation();
        },
        data() {
            return {
                auth: Auth.state
            }
        },
        computed: {
            logged() {
                if (this.auth.api_token && this.auth.role) {
                    return true
                }
                return false
            }
        }
    }
</script>