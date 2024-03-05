import { configureStore } from "@reduxjs/toolkit";
import { articlesApi } from "../entities/Article/api/articlesApi";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development", //disable redux dev tools in PROD
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//setupListeners(store.dispatch)
