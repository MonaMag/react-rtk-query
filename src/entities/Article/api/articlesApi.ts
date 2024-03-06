import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "../model/types/types";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  tagTypes: ["Articles"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticle[], string>({
      query: (limit = "") => ({
        url: `articles`,
        params: {
          _limit: limit,
        },
      }),
      providesTags: ["Articles"],
    }),
    createArticle: builder.mutation<IArticle, IArticle>({
      query: (article) => ({
        url: `articles`,
        method: "POST",
        body: article,
      }),
      invalidatesTags: ["Articles"],
    }),
    updateArticle: builder.mutation<IArticle, IArticle>({
      query: (article) => ({
        url: `articles/${article.id}`,
        method: "PUT",
        body: article,
      }),
      invalidatesTags: ["Articles"],
    }),
    removeArticle: builder.mutation<IArticle, IArticle>({
      query: (article) => ({
        url: `articles/${article.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Articles"],
    }),
  }),
});

export const {
  useGetArticlesQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useRemoveArticleMutation,
} = articlesApi;
