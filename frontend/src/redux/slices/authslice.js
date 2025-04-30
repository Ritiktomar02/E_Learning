import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isauthenticated: false,
};

const authslice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userlogin: (state, action) => {
      state.user = action.payload.user;
      state.isauthenticated = true;
    },
    userlogout: (state) => {
      state.user = null;
      state.isauthenticated = false;
    },
  },
});

export const { userlogin, userlogout } = authslice.actions;

export default authslice.reducer;
