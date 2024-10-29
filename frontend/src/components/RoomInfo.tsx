import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "../assets/sass/roomInfo.scss";

import { EffectCoverflow, Pagination } from "swiper/modules";

import RoomCard from "./RoomCard";

const RoomInfo = () => {
  //
  return (
    <>
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
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
        <SwiperSlide>
          <RoomCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default RoomInfo;
