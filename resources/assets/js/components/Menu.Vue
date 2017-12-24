<template>
    <div id="row">
        <div class="top-bar" id="main-menu"
             style="background-color:transparent;top:0%;position:fixed;width:100%;">
            <ul style="background-color: transparent;" type="none" class="float-left">
                <li style="background-color: transparent;" type="none" class="menu-tex"><img class="logo" style="width:90px;" src="../images/cytonn.png"/></li>
            </ul>

            <div class="top-bar-left" style="background-color:rgba(0,0,0,0.5);margin-left: 16px;">
                <ul style="background-color:rgba(0,0,0,0.5);padding:10px;" id="drop-down" class="dropdown menu" data-dropdown-menu>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                        <a href="#" style="color:#ffffff;"><i class="fi-home"></i>&nbsp;HOME</a>
                    </li>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;"><router-link to="/contact"><i class="fi-telephone"></i>&nbsp;CONTACT US
                    </router-link></li>
                    <a href="#" style="color:#ffffff;"><i class="fi-book"></i>&nbsp;ABOUT US</a>
                    </li>
                </ul>
            </div>
            <div class="top-bar-right" style="background-color:rgba(0,0,0,0.5);">
                <ul style="background-color:rgba(0,0,0,0.5);padding:20px;" class="dropdown menu" data-options="disableHover:true;clickOpen:true" data-dropdown-menu>
                    <li style="font-family: 'Proxima Nova Regular', sans-serif;">
                        <a href="#" style="color:#ffffff;" data-open="account"><i class="fi-torsos"></i>&nbsp;ACCOUNT</a>
                    </li>
                    <li><a href="#" style="color:#ffffff;">&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;</a></li>
                    <li>
                        <a href="#" style="color:#ffffff;"><i class="fi-shopping-cart"></i>&nbsp;</a>
                        <ul class="menu vertical" style="width:500px;">

                            <h5>1&nbsp;<i class="fa fa-shopping-cart" aria-hidden="true"></i></h5>
                            <hr/>
                            <p class="lead">I have another modal inside of me!</p>
                            <button class="button float-right" data-open="exampleModal3"><i class="fa fa-paypal" aria-hidden="true"></i>&nbsp;Checkout</button>

                        </ul>

                    </li>

                </ul>
            </div>
        </div>
    </div>

</template>