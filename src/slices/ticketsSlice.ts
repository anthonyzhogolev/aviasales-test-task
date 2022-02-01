import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";
import { fetchTickets } from "../thunks/tickets";
import { RootState } from "./index";
import { Ticket } from "../interfaces";

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
        console.log("state1", state);
        ticketsAdapter.setAll(state, action.payload);
        console.log("state2", state);
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
