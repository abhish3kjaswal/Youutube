import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import {
  addMessage,
  clearAllMessages,
  removeMessageFromTop,
} from "../../../Utils/Features/chatSlice";
import {
  generateRandomMessage,
  generateRandomName,
} from "../../../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state?.chat?.messages);

  const [liveMsg, setLiveMsg] = useState("");

  useEffect(() => {
    const ti = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 1500);

    return () => {
      clearInterval(ti);
      dispatch(clearAllMessages());
    };
  }, []);

  // useEffect(() => {
  //   if (chatMessages.length > 50) {
  //     dispatch(removeMessageFromTop(10));
  //   }
  // }, [chatMessages]);

  const handleLiveMsgSubmit=(e)=>{
    e && e.preventDefault();


    dispatch(
      addMessage({
        name: "User",
        message: liveMsg,
      })

      );
      setLiveMsg("")
  }

  return (
    <div className="border bg-gray-50 rounded-lg ml-5 p-2 w-[30%]">
      <label className="font-semibold text-lg">Live Chat</label>
      <hr />
      <div className="max-h-[450px] h-[85%] overflow-y-scroll flex flex-col-reverse">
        {chatMessages?.length
          ? chatMessages.map((chatMessage, i) => (
              <ChatMessage
                key={i}
                name={chatMessage?.name}
                message={chatMessage?.message}
              />
            ))
          : ""}
      </div>
      <div className="border p-2">
        <form onSubmit={handleLiveMsgSubmit} className="flex justify-between">
          <input
            className="w-[70%] border-black bg-gray-50 outline-none "
            type="text"
            placeholder="Enter comment"
            value={liveMsg}
            onChange={(e) => setLiveMsg(e?.target?.value)}
          />
          <button className="mx-4 px-2 bg-green-200" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
