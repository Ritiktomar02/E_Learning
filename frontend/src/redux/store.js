import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./slices/authslice";
import { authApi } from "../api/authapi";

export const store = configureStore({
  reducer: {
    auth: authreducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
