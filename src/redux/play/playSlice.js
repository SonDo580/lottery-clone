import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  tickets: [
    { id: uuidv4(), table1: [], table2: [] },
    { id: uuidv4(), table1: [], table2: [] },
    { id: uuidv4(), table1: [], table2: [] },
  ],
  mode: "", // not implemented
};

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {
    changeNumTickets: (state, action) => {
      state.tickets = [...Array(action.payload)].map(() => ({
        id: uuidv4(),
        table1: [],
        table2: [],
      }));
    },
  },
});

export const { changeNumTickets } = playSlice.actions;
export default playSlice.reducer;
