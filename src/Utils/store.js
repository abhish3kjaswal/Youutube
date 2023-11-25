import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Features/appSlice";
import searchSlice from "./Features/searchSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default store;
