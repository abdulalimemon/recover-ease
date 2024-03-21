import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (volunteerInfo) => ({
        url: "/volunteer",
        method: "POST",
        body: volunteerInfo,
      }),

      invalidatesTags: ["Supply"],
    }),
  }),
});

export const { useAddVolunteerMutation } = volunteerApi;
