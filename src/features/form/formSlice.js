import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    submit: (store, { payload }) => {
      store.form = { ...payload };
    },
  },
});

export const { submit } = formSlice.actions;

export default formSlice.reducer;
