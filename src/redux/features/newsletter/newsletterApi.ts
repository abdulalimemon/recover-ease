import { baseApi } from "@/redux/api/baseApi";

const newsletterApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    subscribe: builder.mutation({
      query: (userInfo) => ({
        url: "/newsletter",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useSubscribeMutation } = newsletterApi;
