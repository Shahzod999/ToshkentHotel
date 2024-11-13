import { useAddTestimonialsMutation, useAllTestimonialsQuery, useDeleteTestimonialsMutation } from "../app/api/testimonialSlice";
import "../assets/sass/testimonials.scss";
import Loading from "./Actions/Loading";

import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useForm } from "react-hook-form";
import { AddTestimonialTypes, ErrorTesttimonialType } from "../app/types/UserTypes";
import { errorToast, succesToast } from "../app/features/toastSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks/hooks";
import { selecteduserInfo } from "../app/features/useInfoSlice";

const Testimonials = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selecteduserInfo);
  const { register, handleSubmit, reset } = useForm<AddTestimonialTypes>();
  const { data, isLoading } = useAllTestimonialsQuery();
  const [addTestimonials, { isLoading: addLoading }] = useAddTestimonialsMutation();
  const [deleteTestimonials, { isLoading: deleteLoading }] = useDeleteTestimonialsMutation();

  const onSubmit = async (data: AddTestimonialTypes) => {
    try {
      await addTestimonials(data).unwrap();
      dispatch(succesToast("Testimonial added successfully"));
      reset();
    } catch (error) {
      const err = error as ErrorTesttimonialType;
      dispatch(errorToast(`${err?.data || "Unknown error"}`));
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTestimonials(id).unwrap();
      dispatch(succesToast("Delete Success"));
    } catch (error) {
      console.error("Failed to delete product:");
      dispatch(errorToast("Failed to delete product"));
    }
  };
  return (
    <div className="testimonials">
      <div className="testimonials__card">
        <h3>Testimonials</h3>
        <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <form onSubmit={handleSubmit(onSubmit)}>
              <textarea placeholder="Text" id="text" rows={2} {...register("text", { required: "text is required" })}></textarea>

              <input type="text" placeholder="User name" {...register("userName", { required: "userName is required" })} />
              <button disabled={addLoading} type="submit" className="testimonials__card__button cursor">
                Add new
              </button>
            </form>
          </SwiperSlide>
          {isLoading ? (
            <Loading />
          ) : (
            data?.map((item) => (
              <SwiperSlide key={item._id}>
                <p>{item.text}</p>
                <span>{item.userName}</span>
                {!userInfo && (
                  <div>
                    <button disabled={deleteLoading} onClick={() => handleDelete(item._id)} type="submit" className="cursor testimonials__card__button">
                      delete
                    </button>
                  </div>
                )}
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
