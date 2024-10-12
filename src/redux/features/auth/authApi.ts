import { baseApi } from "@/redux/api/baseApi";
import { TLoginInputs, TRegisterInputs } from "@/type";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (userInfo: TRegisterInputs) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo: TLoginInputs) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
  }),
});

export const { useLoginMutation, useSigninMutation } = authApi;
