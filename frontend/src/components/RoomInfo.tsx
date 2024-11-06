import { SwiperSlide } from "swiper/react";

import RoomCard from "./RoomCard";
import Testimonials from "./Testimonials";
import RoomCardHorizontal from "./RoomCardHorizontal";
import SwiperMain from "./SwiperMain";
import { useAllProductQuery } from "../app/api/productsApiSlice";
const RoomInfo = () => {
  const { data } = useAllProductQuery();

  return (
    <>
      <SwiperMain>
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <RoomCard item={item} />
          </SwiperSlide>
        ))}
      </SwiperMain>

      <Testimonials />

      {data?.map((item) => {
        if (item.mainRoom) {
          return <RoomCardHorizontal item={item} />;
        }
      })}
    </>
  );
};

export default RoomInfo;
