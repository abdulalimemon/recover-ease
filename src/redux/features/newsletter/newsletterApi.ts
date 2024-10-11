import { baseApi } from "@/redux/api/baseApi";

const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (userInfo) => ({
        url: "/newsletter",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["subscribe"],
    }),
    getSubscribe: builder.query({
      query: () => ({
        url: "/newsletter",
        method: "GET",
      }),
      providesTags: ["subscribe"],
    }),
  }),
});

export const { useSubscribeMutation, useGetSubscribeQuery } = newsletterApi;
