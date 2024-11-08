import { apiSlice } from "./apiSlice";

export const facilitiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allFacilities: builder.query({
      query: () => "/facilities",
      providesTags: ["Facilities"],
    }),
    addFacilities: builder.mutation({
      query: (data) => ({
        url: "/facilities",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Facilities"],
    }),
    deleteFacilities: builder.mutation({
      query: (id) => ({
        url: `/facilities/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Facilities"],
    }),
    editFacilities: builder.mutation({
      query: ({ id, data }) => ({
        url: `/facilities/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Facilities"],
    })
  })
})

export const { useAllFacilitiesQuery, useAddFacilitiesMutation, useDeleteFacilitiesMutation, useEditFacilitiesMutation } = facilitiesApiSlice