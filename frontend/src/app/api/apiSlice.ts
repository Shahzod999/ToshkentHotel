import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/` });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product"],
  endpoints: () => ({}),
});
