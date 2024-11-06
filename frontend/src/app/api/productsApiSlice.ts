import { RoomInfo } from "../types/UserTypes";
import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allProduct: builder.query<RoomInfo[], void>({
      query: () => "/product",
      providesTags: ["Product"],
    }),
    addProducts: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Product"],
    }),
    editProduct: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: formData
      }),
      invalidatesTags: ["Product"],
    })
  })
})

export const { useAllProductQuery, useAddProductsMutation, useDeleteProductMutation, useEditProductMutation } = productsApiSlice