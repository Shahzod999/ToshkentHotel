import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "../assets/sass/roomInfo.scss";

import { EffectCoverflow } from "swiper/modules";
const SwiperMain = ({ children }: { children: any }) => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow]}
      className="mySwiper">
      {children}
    </Swiper>
  );
};

export default SwiperMain;
