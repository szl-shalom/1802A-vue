<template>
    <div class="banner">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
                <img src="@/assets/1.webp" alt />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/2.webp" alt />
            </swiper-slide>
            <swiper-slide>
                <img src="@/assets/3.webp" alt />
            </swiper-slide>
        </swiper>
    </div>
</template>


<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
    data() {
        return {
            swiperOptions: {
                autoplay: true,
                loop: true
            }
        };
    }
};
</script>

<style lang="scss">
    .banner{
        width:100%;
        height:200px;
        img{
            width:100%;
            height:200px;
        }
    }
</style>