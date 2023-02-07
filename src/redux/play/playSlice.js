import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [
    { table1: [], table2: [] },
    { table1: [], table2: [] },
    { table1: [], table2: [] },
  ],
  mode: "", // not implemented
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    changeNumTickets: (state, action) => {
      state.tickets = [...Array(action.payload)].map(() => ({
        table1: [],
        table2: [],
      }));
    },
  },
});

export const { changeNumTickets } = playSlice.actions;
export default playSlice.reducer;
