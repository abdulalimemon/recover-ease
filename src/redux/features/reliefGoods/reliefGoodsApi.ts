import { baseApi } from "@/redux/api/baseApi";

const reliefGoodsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allReliefGoods: builder.query({
      query: () => ({
        url: "/all-relief-goods",
        method: "GET",
      }),
    }),
    singleReliefGoods: builder.query({
      query: (id) => {
        return {
          url: `/all-relief-goods/${id}`,
        };
      },
    }),
  }),
});

export const { useAllReliefGoodsQuery, useSingleReliefGoodsQuery } =
  reliefGoodsApi;
