import { useAllTestimonialsQuery } from "../app/api/testimonialSlice";
import "../assets/sass/testimonials.scss";
import Loading from "./Actions/Loading";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  const { data, isLoading } = useAllTestimonialsQuery();

  return (
    <div className="testimonials">
      <div className="testimonials__card">
        <h3>Testimonials</h3>
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper">
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((item) => (
              <SwiperSlide key={item._id}>
                <p>{item.text}</p>
                <span>{item.userName}</span>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
