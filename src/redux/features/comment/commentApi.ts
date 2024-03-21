import { baseApi } from "@/redux/api/baseApi";

const commentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentInfo) => ({
        url: "/comment",
        method: "POST",
        body: commentInfo,
      }),
      invalidatesTags: ["comment"],
    }),
    getComment: builder.query({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
      providesTags: ["comment"],
    }),
  }),
});

export const { usePostCommentMutation, useGetCommentQuery } = commentApi;
