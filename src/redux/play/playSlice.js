import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ticketConstants } from "./constants";

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
        const { ticketID, table, newNumber } = action.payload;

        const currentTicket = state.tickets.find(
          (ticket) => ticket.id === ticketID
        );

        if (
          currentTicket[table].length === ticketConstants.table[table].maxSelect
        ) {
          return state;
        }

        const indexRemove = currentTicket[table].findIndex(
          (number) => number === newNumber
        );

        if (indexRemove === -1) {
          currentTicket[table].push(newNumber);
        } else {
          currentTicket[table].splice(indexRemove, 1);
        }
      },
      prepare: (ticketID, table, number) => {
        return {
          payload: {
            ticketID,
            table,
            newNumber: number,
          },
        };
      },
    },
  },
});

export const { changeNumTickets, selectNumber } = playSlice.actions;
export default playSlice.reducer;
