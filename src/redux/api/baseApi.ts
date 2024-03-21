import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

// http://localhost:5000/api/v1
// https://recover-ease-server.vercel.app/api/v1

const baseQuery = fetchBaseQuery({
  baseUrl: "https://recover-ease-server.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

// const BaseQueryWithRefreshToken = async (args, api, extraOption) => {
//   const result = await baseQuery(args, api, extraOption);

//   if (result.error?.status === 401) {
//     // sending refresh token

//   }
// };

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["Supply", "volunteer", "donation", "comment"],
});
