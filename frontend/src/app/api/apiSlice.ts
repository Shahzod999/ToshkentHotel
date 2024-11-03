import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: "/auth/" });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: () => ({}),
});
