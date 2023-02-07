import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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

        const indexRemove = currentTicket[table].findIndex(
          (number) => number === newNumber
        );

        if (indexRemove !== -1) {
          currentTicket[table].splice(indexRemove, 1);
          return;
        }

        if (
          currentTicket[table].length === ticketConstants.table[table].maxSelect
        ) {
          return state;
        }

        currentTicket[table].push(newNumber);
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

    resetTicket: (state, action) => {
      const currentTicket = state.tickets.find(
        (ticket) => ticket.id === action.payload
      );

      for (let key of Object.keys(ticketConstants.table)) {
        currentTicket[key] = [];
      }
    },

    resetAllTickets: (state) => {
      for (let ticket of state.tickets) {
        for (let key of Object.keys(ticketConstants.table)) {
          ticket[key] = [];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(quickSelect.fulfilled, (state, action) => {
      let currentTicket = state.tickets.find(
        (ticket) => ticket.id === action.payload.ticketID
      );

      for (let key of Object.keys(ticketConstants.table)) {
        currentTicket[key] = action.payload[key];
      }
    });
  },
});

export const quickSelect = createAsyncThunk("play/quickSelect", (ticketID) => {
  const tables = {};

  for (let key of Object.keys(ticketConstants.table)) {
    tables[key] = getRandomNumber(
      ticketConstants.table[key].maxSelect,
      1,
      ticketConstants.table[key].numsInTable
    );
  }

  return { ticketID, ...tables };
});

export const quickSelectAll = createAsyncThunk(
  "play/quickSelectAll",
  (numTickets) => {
    return [...Array(numTickets).keys()].map(() => {
      const tables = {};

      for (let key of Object.keys(ticketConstants.table)) {
        tables[key] = getRandomNumber(
          ticketConstants.table[key].maxSelect,
          1,
          ticketConstants.table[key].numsInTable
        );
      }

      return { ...tables };
    });
  }
);

function getRandomNumber(quantity, min, max) {
  const arr = [];
  while (arr.length < quantity) {
    const num = Math.floor(min + (max - min + 1) * Math.random());

    if (!arr.includes(num)) {
      arr.push(num);
    }
  }
  return arr;
}

export const { changeNumTickets, selectNumber, resetTicket, resetAllTickets } =
  playSlice.actions;
export default playSlice.reducer;
