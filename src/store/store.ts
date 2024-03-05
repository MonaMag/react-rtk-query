import {configureStore} from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
  },
  devTools: process.env.NODE_ENV === 'development', //disable redux dev tools in PROD
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//setupListeners(store.dispatch)
