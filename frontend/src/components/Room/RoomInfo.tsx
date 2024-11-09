import { SwiperSlide } from "swiper/react";
import RoomCard from "./RoomCard";
import Testimonials from "../Testimonials";
import RoomCardHorizontal from "./RoomCardHorizontal";
import SwiperMain from "../SwiperMain";
import { useAllProductQuery } from "../../app/api/productsApiSlice";
import Loading from "../Actions/Loading";

const RoomInfo = () => {
  const { data, isLoading } = useAllProductQuery();

  if (isLoading) {
    return <Loading />;
  }

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
          return <RoomCardHorizontal item={item} key={item._id} />;
        }
      })}
    </>
  );
};

export default RoomInfo;
