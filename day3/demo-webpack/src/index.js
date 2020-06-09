import Swiper from "swiper/js/swiper";
import "swiper/css/swiper.css";

import "./scss/index.scss";

import "./fonts/iconfont.css";
new Swiper(".swiper-container", {
    autoplay: {
        delay: 2000,
    },
    loop: true,
})

const fun = () => {
    console.log(1)
}