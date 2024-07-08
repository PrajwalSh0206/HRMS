import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice/employeeSlice";

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
});

export default store;
