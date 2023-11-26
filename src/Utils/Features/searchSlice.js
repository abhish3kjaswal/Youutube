import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "searchSlice",
  initialState: {},
  reducers: {
    //cache Search Results
    cacheResults: (state, action) => {
      // payload --> {"ip":['iphone',"iphone11"]}

      //merge 2 arrays
      state = Object.assign(state, action.payload);
    },
   
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;

//LRU -> least recently used cache -> store [100] --> if it increases more than 100 start removing from top
