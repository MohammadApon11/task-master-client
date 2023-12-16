import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://taskmaster-server-nine.vercel.app",
  }),
  tagTypes: ["Tasks"],
  endpoints: () => ({}),
});

export default baseApi;
