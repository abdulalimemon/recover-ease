import { baseApi } from "@/redux/api/baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addTestimonial: builder.mutation({
      query: (userInfo) => ({
        url: "/testimonial",
        method: "POST",
        body: userInfo,
      }),

      invalidatesTags: ["Supply"],
    }),
  }),
});

export const { useAddTestimonialMutation } = testimonialApi;
