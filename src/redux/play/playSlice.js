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
  reducers: {},
});

export default playSlice.reducer;
