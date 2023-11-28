import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../constants";

const chatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
        state.messages.splice(LIVE_CHAT_COUNT,1)
      state.messages.unshift(action.payload);
    },
    // removeMessageFromTop: (state, action) => {
    //     //auto remove top chat messages
    //   let s = action.payload;
    //   while (s > 0) {
    //     s--;
    //     state.messages.pop();
    //   }
    // },
    clearAllMessages:(state,action)=>{
        state.messages = [];
    }
  },
});

export const { addMessage, removeMessageFromTop, clearAllMessages } =
  chatSlice.actions;
export default chatSlice.reducer;
