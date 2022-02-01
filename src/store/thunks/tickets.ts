import { createAsyncThunk, current } from "@reduxjs/toolkit";

import tickets from "@app/data/tickets.json";
import { Ticket } from "@app/interfaces";
import { FiltersType } from "@store/slices/filtersSlice";

import { fetchSegments } from "./segments";
import { fetchCompanies } from "./companies";

const DEFAULT_PAGE_SIZE = 5;

type TiketThunkArgs = { page: number; size?: number; filters: FiltersType };

export const fetchTickets = createAsyncThunk<Ticket[], TiketThunkArgs>(
  "tickets/fetchTikets",
  async ({ page = 0, size = DEFAULT_PAGE_SIZE, filters }, { dispatch }) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    //TODO: move to service layer
    const resultTickets = tickets
      .filter(
        (item) =>
          (!filters.segmentsCount.length ||
            filters.segmentsCount.includes(item.segments.length)) &&
          (filters.company === "" || item.companyId === filters.company)
      )
      .slice(size * page, size * (+page + 1));

    const segmentIds = resultTickets.reduce(
      (acc: string[], current: Ticket) => {
        return [...acc, ...current.segments];
      },
      []
    );

    const companiesIds = resultTickets.reduce(
      (acc: string[], current: Ticket) => {
        return [...acc, current.companyId];
      },
      []
    );

    dispatch(fetchSegments(segmentIds));

    dispatch(fetchCompanies(companiesIds));

    return resultTickets;
  }
);
