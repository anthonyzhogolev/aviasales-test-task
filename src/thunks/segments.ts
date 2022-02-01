import { createAsyncThunk } from "@reduxjs/toolkit";

import segments from "../data/segments.json";
import { Segment } from "../interfaces";

export const fetchSegments = createAsyncThunk<Segment[], string[]>(
  "segments/fetchSegments",
  async (ids) => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return segments.filter(({ id }) => ids.includes(id));
  }
);
