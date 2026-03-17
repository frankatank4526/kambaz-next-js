import { createSlice } from "@reduxjs/toolkit";

// message is state value
const initialState = {
  message: "Hello World",
};
// Slice is a big block of logic with reducer functions, initial state, etc.)
const helloSlice = createSlice({
  name: "hello",
  initialState,
  reducers: {},
});
// .reducer returns a function labeled "reducer" if any, and if multiple are defined under reducers,
// they are effectively combined into ONE function, that internally takes the form of a switch statement 
// that executes different functionality depending on what "action" is called.
export default helloSlice.reducer;