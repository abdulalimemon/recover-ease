import { baseApi } from "@/redux/api/baseApi";

const donationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    donation: builder.mutation({
      query: (donationInfo) => ({
        url: "/donation",
        method: "POST",
        body: donationInfo,
      }),
    }),
    getDonation: builder.query({
      query: () => ({
        url: "/donation",
        method: "GET",
      }),
    }),
  }),
});

export const { useDonationMutation, useGetDonationQuery } = donationApi;
