import { SwiperSlide } from "swiper/react";

import RoomCard from "./RoomCard";
import Testimonials from "./Testimonials";
import RoomCardHorizontal from "./RoomCardHorizontal";
import SwiperMain from "./SwiperMain";

const RoomInfo = () => {
  return (
    <>
      <SwiperMain>
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
      </SwiperMain>

      <Testimonials />

      <RoomCardHorizontal />
      <RoomCardHorizontal />
    </>
  );
};

export default RoomInfo;
