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
      providesTags: (result) => ["Articles"],
    }),
  }),
});

export const { useGetArticlesQuery } = articlesApi;
