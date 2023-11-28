import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./Features/appSlice";
import searchSlice from "./Features/searchSlice";
import searchResultSlice from "./Features/searchResultSlice";
import chatSlice from "./Features/chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    searchResults: searchResultSlice,
    chat: chatSlice,
  },
});

export default store;
