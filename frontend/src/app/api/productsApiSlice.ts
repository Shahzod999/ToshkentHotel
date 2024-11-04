import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allProduct: builder.query({
      query: () => "/product"
    }),
    addProducts: builder.mutation({
      query: (data) => ({
        url: "/product",
        method: "POST",
        body: data
      })
    })
  })
})

export const { useAllProductQuery, useAddProductsMutation } = productsApiSlice