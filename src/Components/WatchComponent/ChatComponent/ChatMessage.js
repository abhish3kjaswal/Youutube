import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="shadow-sm mx-1 my-2 p-1 flex items-center flex-wrap">
        <img
          className="h-8 cursor-pointer "
          alt="user-icon"
          src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        />
      <span className="font-bold px-2 text-sm">{name}</span>
      <span className="text-sm ml-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
