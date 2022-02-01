import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchSegments } from "../thunks/segments";
import { Segment } from "../interfaces";
import { RootState } from ".";

const segmentsAdapter = createEntityAdapter<Segment>();

export const segmentsSlice = createSlice({
  name: "segments",
  initialState: segmentsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSegments.fulfilled, (state, action) => {
      segmentsAdapter.upsertMany(state, action.payload);
    });
  },
});

export const SegmentsSelector = segmentsAdapter.getSelectors<RootState>(
  (state) => state.segments
);

export default segmentsSlice.reducer;
