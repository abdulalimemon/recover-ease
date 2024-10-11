import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (userInfo) => ({
        url: "/testimonial",
        method: "POST",
        body: userInfo,
      }),
      invalidatesTags: ["review"],
    }),
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
  }),
});

export const { useAddTestimonialMutation, useGetTestimonialQuery } =
  testimonialApi;
