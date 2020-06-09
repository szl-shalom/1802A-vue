<template>
    <div class="banner">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide>
                <img src="@assets/images/1.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img src="@assets/images/2.jpg" alt />
            </swiper-slide>
            <swiper-slide>
                <img src="@assets/images/3.jpg" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            swiperOptions: {
                autoplay: {
                    delay: 2000
                },
                loop: true,
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        };
    }
};
</script>

<style lang="scss">
.swiper-container {
    width: 100%;
    height: 300px;
    img {
        width: 100%;
        height: 300px;
    }
}
</style>