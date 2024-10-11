import { baseApi } from "@/redux/api/baseApi";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (contactInfo) => ({
        url: "/contact-us",
        method: "POST",
        body: contactInfo,
      }),
      invalidatesTags: ["contact"],
    }),
    getMessage: builder.query({
      query: () => ({
        url: "/contact-us",
        method: "GET",
      }),
      providesTags: ["contact"],
    }),
  }),
});

export const { useContactUsMutation, useGetMessageQuery } = contactUsApi;
