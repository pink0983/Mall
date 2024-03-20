<template>
    <div class="index">
        <div class="container">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children">
                                <ul v-for="(item,i) in menuList" :key="i">
                                    <li v-for="(sub,j) in item" :key="j">
                                        <a :href="sub?'/#/product'+sub.id:''">
                                            <img :src="sub?sub.img:'/imgs/item-box-1.png'" alt="">
                                            {{ sub?sub.name:'小米' }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li class="menu-item"> 
                            <a href="javascript:;">电视 盒子</a>
                        </li>
                        <li class="menu-item"> 
                            <a href="javascript:;">家电  插线板</a>
                        </li>
                        <li class="menu-item"> 
                            <a href="javascript:;">出行 穿戴</a>
                        </li>
                        <li class="menu-item"> 
                            <a href="javascript:;">智能 路由器</a>
                        </li>
                        <li class="menu-item"> 
                            <a href="javascript:;">电源 配件</a>
                        </li>
                        <li class="menu-item"> 
                            <a href="javascript:;">生活 箱包</a>
                        </li>
                    </ul>
                </div>
                <swiper
                    :autoplay='true'
                    :loop='true'
                    effect='cube'
                    :cubeEffect="{
                        slideShadows:true,
                        shadow:true,
                        shadowOffset: 100,
                        shadowScale:0.6
                     }"
                    :modules="modules"
                    :navigation="{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev'}"
                    :pagination="{ el:'.swiper-pagination',clickable: true }">
                    <swiper-slide v-for="(item,index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id"><img :src="item.img"></a>
                    </swiper-slide>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </swiper>
            </div>
            <div class="ads-box">
                <a :href="'/#/product/' + item.id" v-for="(item,index) in  adsList" :key="index">
                    <img v-lazy="item.img" alt="">
                </a>
            </div>
            <div class="banner">
                <a href="/#/product/30">
                    <img v-lazy="'/imgs/banner-1.png'" alt="">
                </a>
            </div>
        </div>
        <div class="product-box">
            <div class="container">
                <h2>手机</h2>
                <div class="wrapper">
                    <div class="banner-left">
                        <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
                    </div>
                    <div class="list-box">
                        <div class="list" v-for="(arr,i) in phoneList" :key="i">
                            <div class="item" v-for="(item,index) in arr" :key="index">
                                <span>新品</span>
                                <div class="item-img">
                                    <img src="" alt="">
                                </div>
                                <div class="item-info">
                                    <h3>小米9</h3>
                                    <p>骁龙855,索尼4800万超广角微距</p>
                                    <p class="price">2999元</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <service-bar></service-bar>
        <!-- 弹窗 -->
        <modal 
            title="提示" 
            sureText="查看购物车" 
            btnType="1" 
            modalType="middle" :showModal="showModal">
            <template v-slot:body>
                <p>商品添加成功！</p>
            </template>
        </modal>
    </div>
</template>
<script>
import ServiceBar from './../components/ServiceBar';
import Modal from './../components/Modal';
import { Navigation, Pagination, Autoplay,EffectCube} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';
    export default{
        name:'index',
        components:{
            ServiceBar,
            Modal,
            Swiper,
            SwiperSlide
        },
        data(){
            return{
                modules:[Navigation, Pagination,Autoplay,EffectCube],
                slideList:[
                        {
                            id:'42',
                            // 使用require可以来加载图片，因为代码在打包的时候就会把图片识别为一个资源给打包进去
                            // img: require('./../../public/imgs/slider/slide-1.jpg')
                            img: '/imgs/slider/slide-1.jpg'
                        },
                        {
                            id:'45',
                            // 因为代码在打包之后，会有一个img文件夹存着图片，所以可以直接从/imgs来访问图片
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
                // 定义二维数组进行循环
                menuList:[
                    [
                        {
                            id:30,
                            img:'/imgs/item-box-1.png',
                            name:'小米cc9',
                        },{
                            id:31,
                            img:'/imgs/item-box-2.png',
                            name:'小米8青春版',
                        },{
                            id:32,
                            img:'/imgs/item-box-3.jpg',
                            name:'Redmi Pro',
                        },{
                            id:33,
                            img:'/imgs/item-box-4.jpg',
                            name:'移动4G专区',
                        }
                    ],
                    [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
                ],
                adsList:[
                    {
                        id:33,
                        img:'/imgs/ads/ads-1.png'
                    },{
                        id:48,
                        img:'/imgs/ads/ads-2.jpg'
                    },{
                        id:45,
                        img:'/imgs/ads/ads-3.png'
                    },{
                        id:47,
                        img:'/imgs/ads/ads-4.jpg'
                    }
                ],
                // phoneList:[]
                phoneList:[[1,1,1,1],[1,1,1,1]],
                showModal:false,
            }

        },
        // mounted(){
        //     this.init();
        // },
        // methods:{
        //     init(){
        //         this.$axios.get('/products',{
        //             params:{
        //                 categoryId:100012,
        //                 pageSize:8
        //             }
        //         }).then((res)=>{
        //             this.phoneList=[res.list.slice(0,4),res.list.slice(4,8)]
        //         })
        //     },
        //     addCart(id){
        //         this.showModal = true;
        //         this.$axios.get('/carts',{
        //             productId:id,
        //             selected:true
        //         }).then((res)=>{

        //         }).cath(()=>{
        //             this.showModal = true;
        //         })
        //     }
        // }
    }
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.index{
    .swiper-box{
        .nav-menu{
            position: absolute;
            width: 264px;
            height: 451px;
            z-index: 9;
            padding: 26px 0;
            background-color: #55585a7a;
            box-sizing: border-box;
            .menu-wrap{
                .menu-item{
                    height: 50px;
                    line-height: 50px;
                    a{
                        position: relative;
                        display: block;
                        font-size: 16px;
                        color: #ffffff;
                        padding-left: 30px;
                        &:after{
                            content: '';
                            position: absolute; 
                            right: 30px;
                            top: 17.5px; 
                            @include bgImg(10px,15px,'./../../public/imgs/icon-arrow.png')
                        } 
                    }
                    &:hover{
                        background-color: $colorA;
                        .children{
                            display: block;
                        }
                    }
                    .children{
                        display: none;
                        width: 962px;
                        height: 451px;
                        background-color: $colorG;
                        position: absolute;
                        top:0px;
                        left: 264px;
                        border: 1px solid $colorH;
                        ul{
                            display: flex;
                            justify-content: space-between;
                            height: 75px;
                            li{
                                height: 75px;
                                line-height: 75px;
                                flex: 1;
                                padding-left: 23px;

                            }
                            a{
                                color: $colorB;
                                font-size: 14px;
                                vertical-align: middle;
                            }
                            img{
                                width: 42px;
                                height: 45px;
                                margin-right: 15px;
                            }
                        }
                    }
                }
            }
        }
        .swiper {
            height: 451px;
            .swiper-button-prev{
                left: 274px;
            }
            img{
            width: 100%;
            height: 100%;
            }
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
    .product-box{
        background-color: $colorJ;
        padding: 30px 0 50px;
        h2{
            font-size: $fontF;
            height: 21px;
            line-height: 21px;
            color: $colorB;
            margin-bottom: 20px;
        }
        .wrapper{
            display: flex;
            .banner-left{
                margin-right: 16px;
                img{
                    width: 224px;
                    height: 619px;
                }
            }
            .list-box{
                .list{
                    @include flex();
                    width: 986px;
                    margin-bottom: 14px;
                    &:last-child{
                        margin-bottom: 0;;
                    }
                    .item{
                        width: 236px;
                        height: 302px;
                        background-color: $colorG;
                        text-align: center;
                        span{
                            display: inline-block;
                            width: 67px;
                            height: 24px;
                            line-height: 24px;
                            color: #ffffff;
                            font-size: 14px;
                            &.new-pro{
                                background-color: #7ECF68;
                            }
                            &.kill-pro{
                                background-color: #e82626;
                            }
                            

                        }
                        .item-img{
                            height: 195px;
                            width: 100%;
                        }
                        .item-info{
                            font-size: $fontJ;
                            color: $colorB;
                            line-height: $fontJ;
                            font-weight: bold;
                        }
                        p{
                            color: $colorD;
                            line-height: 13px;
                            margin: 6px auto 13px;
                        }
                        .price{
                            color: #F20A0A;
                            font-size: $fontJ;
                            font-weight: bold;
                            cursor: pointer;
                            &:after{
                                content: ' ';
                                @include bgImg(22px,22px,'/public/imgs/icon-cart-hover.png');
                                margin-left: 5px;
                                vertical-align: middle;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>