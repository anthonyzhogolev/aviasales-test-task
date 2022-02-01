import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

import { fetchTickets } from "@store/thunks/tickets";
import { Ticket } from "@app/interfaces";

import { RootState } from "./index";

const ticketsAdapter = createEntityAdapter<Ticket>();

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: ticketsAdapter.getInitialState({
    loading: "idle",
    error: null,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTickets.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchTickets.fulfilled, (state, action) => {
        ticketsAdapter.setAll(state, action.payload);

        state.loading = "idle";
        state.error = null;
      })
      // Вызывается в случае ошибки
      .addCase(fetchTickets.rejected, (state, action) => {
        state.loading = "failed";
        // state.error = action.error;
      });
  },
});

export const TicketsSelector = ticketsAdapter.getSelectors<RootState>(
  (state) => state.tickets
);

export default ticketsSlice.reducer;
