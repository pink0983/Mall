<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/'" v-for="(item,index) in  adsList" :key="index">
                    <img :src="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img src="/imgs/banner-1.png" alt="">
                </a>
            </div>
            <div class="product-box"></div>
        </div>
        <service-bar></service-bar>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/vue';
    export default{
        name:'index',
        components:{
            ServiceBar,
            Swiper,
            SwiperSlide
        },
        data(){
            return{
                swiperOption:{
                    autoplay:true,
                    loop:true,
                    effect:'cube',
                    cubeEffect:{
                        slideShadows:true,
                        shadow:true,
                        shadowOffset: 100,
                        shadowScale:0.6
                    },
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true
                    },
                    navigation:{
                        nextEl:'swiper-button-next',
                        prevEl:'swiper-button-prev',
                    },
                    slideList:[
                        {
                            id:'42',
                            img:'/imgs/slider/slide-1.jpg'
                        },
                        {
                            id:'45',
                            img:'/imgs/slider/slide-2.jpg'
                        },
                        {
                            id:'46',
                            img:'/imgs/slider/slide-3.jpg'
                        },{
                            id:'',
                            img:'/imgs/slider/slide-4.jpg'
                        },
                        {
                            id:'',
                            img:'/imgs/slider/slide-5.jpg'
                        }
                    ],
                    adsList:[
                        {
                            id:33,
                            img:'./../../public/imgs/ads/ads-1.png'
                        },{
                            id:48,
                            img:'./../../public/imgs/ads/ads-2.jpg'
                        },{
                            id:45,
                            img:'./../../public/imgs/ads/ads-3.png'
                        },{
                            id:47,
                            img:'./../../public/imgs/ads/ads-4.jpg'
                        }
                    ]
                }
            }

        }
    }
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.index{
    .swiper-box{
        height: 451px;
        img{
            width: 100%;
        }
    }
    .ads-box{
        @include flex();
        margin-top: 14px;
        margin-bottom: 31px;
        a{
            width: 296px;
            height: 167px;
        }
    }
    .banner{
        margin-bottom: 50px;
    }
}
</style>