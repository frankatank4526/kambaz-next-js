import { createSlice } from "@reduxjs/toolkit";

type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  email: string;
  lastName: string;
  dob: Date;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
};

const initialState = {
  currentUser: null as User | null
};
const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = accountSlice.actions;
export default accountSlice.reducer;