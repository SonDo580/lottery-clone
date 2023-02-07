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

    selectNumber: {
      reducer: (state, action) => {
        const { ticketID, table, number } = action.payload;

        const currentTicket = state.tickets.find(
          (ticket) => ticket.id === ticketID
        );

        if (
          (action.table === "table1" && currentTicket[table].length === 5) ||
          (action.table === "table2" && currentTicket[table].length === 2)
        ) {
          return state;
        }

        currentTicket[table].push(number);
      },
      prepare: (ticketID, table, number) => {
        return {
          payload: {
            ticketID,
            table,
            number,
          },
        };
      },
    },
  },
});

export const { changeNumTickets, selectNumber } = playSlice.actions;
export default playSlice.reducer;
