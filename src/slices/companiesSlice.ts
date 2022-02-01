import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchCompanies } from "../thunks/companies";
import { Company } from "../interfaces";
import { RootState } from ".";

const companiesAdapter = createEntityAdapter<Company>();

export const companiesSlice = createSlice({
  name: "companies",
  initialState: companiesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (state, action) => {
      companiesAdapter.addMany(state, action.payload);
    });
  },
});

export default companiesSlice.reducer;

export const CompaniesSelector = companiesAdapter.getSelectors<RootState>(
  (state) => state.companies
);

