import { createAsyncThunk } from "@reduxjs/toolkit";

import companies from "@app/data/companies.json";
import { Company } from "@app/interfaces";

export const fetchCompanies = createAsyncThunk<Company[], string[]>(
  "company/fetchCompanies",
  async (ids) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return companies.filter((company) => ids.includes(company.id));
  }
);
