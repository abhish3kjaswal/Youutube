import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResultSlice",
  initialState: {
    searchResultAr:[]
  },
  reducers: {
    addSearchResults: (state, action) => {
      let searchResults = action.payload;
      state.searchResultAr = searchResults?.length ? [...searchResults] : [];
    },
  },
});

export const { addSearchResults } = searchResultSlice.actions;

export default searchResultSlice.reducer;
