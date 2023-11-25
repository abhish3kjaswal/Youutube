import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="my-4 flex border p-2">
      <img
        className="h-10 cursor-pointer "
        alt="cmntImg"
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
      />
      <div className="ml-4">
        <h3 className="font-semibold">{name || ""}</h3>
        <p>{text || ""}</p>
      </div>
    </div>
  );
};

export default Comment;
