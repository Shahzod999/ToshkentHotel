import { FacilitiesType, editFacilitiesType } from "../types/UserTypes";
import { apiSlice } from "./apiSlice";

export const facilitiesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    allFacilities: builder.query<FacilitiesType[], void>({
      query: () => "/facilities",
      providesTags: ["Facilities"],
    }),
    addFacilities: builder.mutation<void, FormData>({
      query: (data) => ({
        url: "/facilities",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Facilities"],
    }),
    deleteFacilities: builder.mutation<void, string>({
      query: (id) => ({
        url: `/facilities/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Facilities"],
    }),
    editFacilities: builder.mutation<void, { id: string; data: FormData }>({
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