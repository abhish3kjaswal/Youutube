import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Features/appSlice";
import searchSlice from "./Features/searchSlice";
import searchResultSlice from "./Features/searchResultSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchResults: searchResultSlice,
  },
});

export default store;
