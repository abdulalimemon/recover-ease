import { baseApi } from "@/redux/api/baseApi";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    contactUs: builder.mutation({
      query: (contactInfo) => ({
        url: "/contact-us",
        method: "POST",
        body: contactInfo,
      }),
    }),
  }),
});

export const { useContactUsMutation } = contactUsApi;
