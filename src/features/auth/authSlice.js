import { createSlice } from "@reduxjs/toolkit";

const initialState = { isSignedIn: null, userId: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (store, { payload }) => {
      store.isSignedIn = true;
      store.userId = payload;
    },
    signOut: (store) => {
      store.isSignedIn = false;
      store.userId = null;
    },
  },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
