import { configureStore } from "@reduxjs/toolkit";
import authreducer from "./slices/authslice";
import { authApi } from "../api/authapi";
import { courseApi } from "../api/courseApi";

export const store = configureStore({
  reducer: {
    auth: authreducer,
    [authApi.reducerPath]: authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware,courseApi.middleware),
});

const initializeApp = async () => {
    await store.dispatch(authApi.endpoints.loadUser.initiate({},{forceRefetch:true}))
}
initializeApp();