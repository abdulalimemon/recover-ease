import { baseApi } from "@/redux/api/baseApi";

const supplyApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addSupply: builder.mutation({
      query: (supplyInfo) => ({
        url: "/supply",
        method: "POST",
        body: supplyInfo,
      }),

      invalidatesTags: ["Supply"],
    }),
    getSupply: builder.query({
      query: () => ({
        url: "/supply",
        method: "GET",
      }),
      providesTags: ["Supply"],
    }),
    updateSupply: builder.mutation({
      query: (supplyInfo) => {
        return {
          url: `/supply/${supplyInfo.id}`,
          method: "PUT",
          body: supplyInfo,
        };
      },
      invalidatesTags: ["Supply"],
    }),
    deleteSupply: builder.mutation({
      query: (supplyId) => ({
        url: `/supply/${supplyId}`,
        method: "DELETE",
        body: supplyId,
      }),
      invalidatesTags: ["Supply"],
    }),
  }),
});

export const {
  useAddSupplyMutation,
  useGetSupplyQuery,
  useUpdateSupplyMutation,
  useDeleteSupplyMutation,
} = supplyApi;
