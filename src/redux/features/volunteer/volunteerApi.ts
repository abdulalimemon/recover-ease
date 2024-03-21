import { baseApi } from "@/redux/api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addVolunteer: builder.mutation({
      query: (volunteerInfo) => ({
        url: "/volunteer",
        method: "POST",
        body: volunteerInfo,
      }),

      invalidatesTags: ["volunteer"],
    }),
    getVolunteer: builder.query({
      query: () => ({
        url: "/volunteer",
        method: "GET",
      }),
      providesTags: ["volunteer"],
    }),
  }),
});

export const { useAddVolunteerMutation, useGetVolunteerQuery } = volunteerApi;
