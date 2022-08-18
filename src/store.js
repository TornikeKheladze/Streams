import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import formReducer from "./features/form/formSlice";
import streamReducer from "./features/stream/streamSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    form: formReducer,
    stream: streamReducer,
  },
});
