import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IArticle } from "../model/types/types";

export const articlesApi = createApi({
  reducerPath: "articlesApi",
  tagTypes: ["Articles"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticle[], void>({
      query: () => ({
        url: `articles`,
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
  }),
});

export const {
  useGetArticlesQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
} = articlesApi;
