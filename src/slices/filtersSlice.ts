import {
  createSlice,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Company } from "../interfaces";
import { RootState } from ".";

const filtersAdapter = createEntityAdapter<Company>();

const initialState = {
  segmentsCount: [] as number[],
  company: "" as string,
};

export type FiltersType = typeof initialState;

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCompany: (state, action: PayloadAction<string>) => {
      state.company = action.payload;
    },

    addSegmentsCount: (state, action: PayloadAction<number>) => {
      if (action.payload) {
        state.segmentsCount.push(action.payload);
      } else {
        state.segmentsCount = [1, 2, 3];
      }
    },
    removeSegmentsCount: (state, action: PayloadAction<number>) => {
      if (!action.payload) {
        state.segmentsCount = [];
      }
      state.segmentsCount = state.segmentsCount.filter(
        (item) => item !== action.payload
      );
    },
  },
});

export default filtersSlice.reducer;
