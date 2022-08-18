import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import streams from "../../apis/streams";

export const createStream = createAsyncThunk(
  "stream/createStream",
  async (formValues, { getState }) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });
    return response.data;
  }
);

export const fetchStreams = createAsyncThunk(
  "stream/fetchStreams",
  async () => {
    const response = await streams.get("/streams");
    return response.data;
  }
);

export const fetchOneStream = createAsyncThunk(
  "streams/fetchOneStream",
  async (id) => {
    const response = await streams.get(`/streams/${id}`);
    return response.data;
  }
);

export const deleteStream = createAsyncThunk(
  "streams/deleteStream",
  async (id) => {
    const response = await streams.delete(`/streams/${id}`);
    return id;
  }
);

export const editStream = createAsyncThunk(
  "streams/editStream",
  async (formValues) => {
    const response = await streams.put(`/streams/${formValues.id}`, formValues);
    return response.data;
  }
);

const streamSlice = createSlice({
  name: "stream",
  initialState: [],
  extraReducers: {
    [createStream.fulfilled]: (store, { payload }) => {},
    // [createStream.rejected]: (store, { payload }) => {},
    // [createStream.pending]: (store, { payload }) => {},

    [fetchStreams.fulfilled]: (store, { payload }) => {
      return payload;
    },
    // [fetchStreams.rejected]: (store, meti) => {},
    // [fetchStreams.pending]: (store, meti) => {},

    [fetchOneStream.fulfilled]: (store, { payload }) => {
      // console.log("fetchOneStream", payload);
    },
    // [fetchOneStream.rejected]: (store, meti) => {},
    // [fetchOneStream.pending]: (store, meti) => {},

    [deleteStream.fulfilled]: (store, { payload }) => {
      console.log(payload);
    },
    // [deleteStream.rejected]: (store, meti) => {},
    // [deleteStream.pending]: (store, meti) => {},

    [editStream.fulfilled]: (store, { payload }) => {},
    // [editStream.rejected]: (store, meti) => {},
    // [editStream.pending]: (store, meti) => {},
  },
});

export default streamSlice.reducer;
