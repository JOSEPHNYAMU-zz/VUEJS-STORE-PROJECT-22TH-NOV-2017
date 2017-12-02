<template>
    <div id="app">
        <div class="row">
            <div class="small-12 columns">
                <div class="row">
                    <div class="small-12 columns">
                        <div class="header-unit" style="height:300px;">
                            <div class="small-12 columns" id="pad">
                                <div class="grid-x">

                                        <img src="./img/image.jpg">

                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="small-6 columns">
                    <div class="top-bar" id="main-menu"
                         style="background-color:transparent;top:0%;position:absolute;width:100%;">
                        <div class="top-bar-left" style="background-color: transparent;">
                            <ul style="background-color: #cccccc;padding:10px;" class="dropdown menu" data-dropdown-menu>
                                <li class="menu-tex"><img class="logo" src="img/logo.png"/></li>
                                <li style="font-family: 'Proxima Nova Regular', sans-serif;">HOME
                                </li>
                            </ul>
                        </div>
                        <div class="top-bar-right" style="background-color: transparent;">
                            <ul style="background-color: #cccccc;padding:20px;" class="menu">
                                <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                                    CONTACT US
                                </li>
                                <li>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</li>
                                <li style="font-weight:bold;font-family: 'Proxima Nova Bold', sans-serif;">
                                    &nbsp;CART
                                </li>
                                <li style="font-size:20px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button
                                        id="mob"
                                        style="color:#ffffff;cursor: pointer;"
                                        data-toggle="menus">
                                    <i class="fa fa-list" aria-hidden="true"></i></button>
                                </li>
                            </ul>
                        </div>
                    </div></div>



                    <div class="small-10 columns" style="text-align:center;color:#0A0A0A;">
                        <h2 style="word-spacing: 1px;color:#ffffff;font-family: 'Proxima Nova Regular', sans-serif;">
                            Shop with us this summer!</h2>
                        <p style="color:#ffffff;font-size:18px;font-family: 'Proxima Nova Regular', sans-serif;line-height:25px;margin-top:30px;margin-bottom:45px;">
                            Get the hottest deals on shopping with greatest discounts of the year<br/>
                            this Christmas only at Cytonn Mall - We deliver you happiness.</p>
                        <a href="#"
                           style="font-weight:bold;background-color: #92D047;padding-left:50px;padding-right:50px;"
                           class="foundation-button button">REGISTER NOW TO SHOP WITH US &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                                aria-hidden="true" class="fa fa-long-arrow-right"/></i></a>
                    </div>
                </div>
                <div class="small-12 columns"
                     style="text-align:center;padding-top:30px;padding-bottom:40px;padding-right:60px;padding-left:60px;color:#0A0A0A;">
                    <div class="grid-x" style="padding-top: 25px;">
                        <div class="medium-6 large-4 cell" id="two">
                            <div style="position:relative;">
                                <img width="400px" src='img/Two.jpg'/>
                                <div class='bottomCenta'>
                                    <a href="#">
                                        <div class='botom'>
                                            <a data-open="vtwo"><img width="12%" style="cursor: pointer;" id="last"
                                                                     src="img/play.svg"/></a>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="small-12 columns"
                     style="background-color:#2B3A41;text-align:center;padding:50px;color:#0A0A0A;">
                    <div class="grid-x">
                        <div class="medium-6 large-12 cell" style="color:#ffffff;">
                            <h3 style="font-family: 'Proxima Nova Regular', sans-serif;">Ready to shop?</h3>
                            <h2 style="font-weight: bold;font-family: 'Bebas Neue', sans-serif;">LOGIN NOW</h2>
                        </div>
                    </div>
                </div>
                <div class="small-12 columns" id="foot" style="text-align:center;padding:65px;color:#0A0A0A;">
                    <div class="small-12 columns" style="text-align:center;padding:20px;color:#0A0A0A;">
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
                                &copy; 2017 Formation, Inc. All rights reserved.
                            </div>
                            <div class="medium-6 large-6 cell" style="text-align: right;font-size: 28px;">
                                <a href="http://www.facebook.com/" target="_blank" style="color:#D7D8DA;"
                                   class="footer-foundation-icons soc"><i class="fa fa-facebook-official"
                                                                          aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</a>
                                <a href="http://www.twitter.com/" target="_blank" style="color:#D7D8DA;" id="soc"
                                   class="footer-foundation-icons"><i class="fa fa-twitter-square"
                                                                      aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</a>
                                <a href="http://www.linkedin.com/" target="_blank" style="color:#D7D8DA;" id="soc"
                                   class="footer-foundation-icons"><i class="fa fa-linkedin-square"
                                                                      aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;</a>
                                <a href="http://www.yputube.com/" target="_blank" style="color:#D7D8DA;" id="soc"
                                   class="footer-foundation-icons"><i class="fa fa-youtube-square"
                                                                      aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Cytonn Store'
            }
        }
    }
</script>
