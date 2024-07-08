import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeName: "",
};

const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    getEmployeeName(state, action) {
      state.employeeName = action.payload;
    },
    //employee related reducers go here
  },
});

export const { getEmployeeName } = employeeSlice.actions;
export default employeeSlice.reducer;
