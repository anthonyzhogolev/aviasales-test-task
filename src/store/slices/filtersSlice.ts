import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  segmentsCount: [] as number[],
  company: "" as string,
  category: "" as string,
};

export type FiltersType = typeof initialState;

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

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
