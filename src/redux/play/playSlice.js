import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { table1: [], table2: [] },
  { table1: [], table2: [] },
  { table1: [], table2: [] },
];

const playSlice = createSlice({
  name: "play",
  initialState,
  reducers: {},
});

export default playSlice.reducer;
