import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// http://localhost:5000/api/v1
// https://recover-ease-server.vercel.app/api/v1

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://recover-ease-server.vercel.app/api/v1",
    credentials: "include",
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Supply",
    "volunteer",
    "donation",
    "comment",
    "user",
    "subscribe",
    "contact",
    "review"
  ],
});
