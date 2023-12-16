import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://taskmaster-server-gtfphpy0a-a2n426.vercel.app",
  }),
  tagTypes: ["Tasks"],
  endpoints: () => ({}),
});

export default baseApi;
