<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="./../../public/imgs/logo-footer.png" alt="">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://www.mi.com/service/aftersale/front" target="_blank">预约维修服务</a><span>|</span>
            <a href="https://www.mi.com/service/exchange#back" target="_blank">七天无理由退货</a><span>|</span>
            <a href="https://www.mi.com/service/exchange#back" target="_blank">15天免费换货</a><span>|</span>
            <a href="https://www.mi.com/service/buy/Postal%20policy" target="_blank">满69包邮</a>
        </div>
        <div class="copyright">© mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2023]0169-004号</div>
    </div>
</template>
<script>
    export default{
        name:'nav-footer'
    }
</script>
<style lang="scss">
 .footer{
    height: 234px;
    border-top: 4px solid #FF6600;
    background-color: #333333;
    color: #999999;
    font-size: 16px;
    text-align: center;
    .footer-logo{
        // margin-top: 46px;
        margin-bottom: 31px;
        img{
            margin-top: 46px;
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        a{
            color: #999999;
            display: inline-block;
        }
        span{
            margin: 0 10px;
        }
        margin-bottom: 13px;
    }
 }
</style>