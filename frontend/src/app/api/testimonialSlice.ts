import { AddTestimonialTypes, ErrorTesttimonialType, TestimonialTypes } from "../types/UserTypes";
import { apiSlice } from "./apiSlice";

export const testimonialsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allTestimonials: builder.query<TestimonialTypes[], void>({
      query: () => "/testimonials",
      providesTags: ["Testimonials"]
    }),
    addTestimonials: builder.mutation<TestimonialTypes | ErrorTesttimonialType, AddTestimonialTypes>({
      query: (data) => ({
        url: "/testimonials",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Testimonials"]
    }),
    deleteTestimonials: builder.mutation<ErrorTesttimonialType | TestimonialTypes, string>({
      query: (id) => ({
        url: `/testimonials/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Testimonials"]
    })
  })
})

export const { useAllTestimonialsQuery, useAddTestimonialsMutation, useDeleteTestimonialsMutation } = testimonialsApiSlice