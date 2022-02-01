import { configureStore } from "@reduxjs/toolkit";

import ticketsReducer from "./ticketsSlice";
import segmentsReducer from "./segmentsSlice";
import companiesReducer from "./companiesSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    segments: segmentsReducer,
    companies: companiesReducer,
    filters: filtersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
